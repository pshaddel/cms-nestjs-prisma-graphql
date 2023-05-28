import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RedisService } from '../redis/redis.service';
import {
  SessionListResult,
  User,
  UserCreateArgs,
  UserFilter,
  UserListResult,
  UserOrderFields,
  UserRoleListResult,
  UserUpdateArgs
} from '../schema.binding';
import { Redis } from 'ioredis';
import { Config } from '../config/config.service';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import { isEmail } from 'validator';
import { ErrorService } from 'src/error/error.service';

type UserUpdateInput = {
  id: number;
  user: UserUpdateArgs;
};

type GetUsersArgs = {
  page: number;
  filter: UserFilter;
  orderBy: UserOrderFields[];
};
@Injectable()
export class UserService {
  private redis: Redis;
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: Config,
    private readonly errorService: ErrorService
  ) {
    this.redis = new RedisService().getRedisClient();
  }

  /**
   * This method Find Users by Args
   * @param args Args contain `page`, `filter`, `orderBy`
   * @returns A promise which resolves an array of users
   */
  async findUsers(args: GetUsersArgs): Promise<UserListResult> {
    const { page, filter, orderBy } = args;
    const data = await this.prisma.user.findMany({
      where: filter,
      orderBy,
      ...this.prisma.calculateOffsetLimit(page)
    });
    const totalCount = await this.prisma.user.count({
      where: filter
    });
    return { data, totalCount };
  }

  /**
   * This method Finds a user by Id
   * @param id the id o the user
   * @returns A promise which resolves a `User` or `null`
   */
  async findById(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: { id }
    });
  }

  /**
   * This method gets `userRoles` of a user
   * @param id the user id
   */
  async findUserRoles(id: number): Promise<UserRoleListResult> {
    const data = await this.prisma.user_role.findMany({
      where: {
        user_id: id
      },
      include: {
        role: true
      }
    });
    return { data, totalCount: data.length };
  }

  /**
   * This method creates a user
   * Hashing passwords with the Node.js built-in [crypto]{@link https://nodejs.org/api/crypto.html} module using SHA256 algorithm and a complicated secret key
   * @param user user Object that contains required fields and some optional fields
   * @returns A promise which returns the created user
   */
  async createUser(user: UserCreateArgs): Promise<User> {
    this.validateUser(user);
    try {
      const roleIds = user.role_ids;
      delete user.role_ids;
      if (user.password) {
        user.password = crypto
          .createHmac('sha256', this.config.hashSecret)
          .update(user.password)
          .digest('hex');
      }
      const createdUser = await this.prisma.user.create({
        data: {
          ...user,
          updated_at: this.prisma.now(),
          created_at: this.prisma.now()
        }
      });
      const transactions = [];
      for (let i = 0; i < roleIds.length; i++) {
        transactions.push(
          this.prisma.user_role.create({
            data: {
              user: {
                connect: {
                  id: createdUser.id
                }
              },
              role: {
                connect: {
                  id: roleIds[i]
                }
              }
            }
          })
        );
      }
      try {
        await this.prisma.$transaction(transactions);
      } catch (error) {
        console.error(error);
        await this.prisma.user.delete({
          where: {
            id: createdUser.id
          }
        });
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.ROLE_IDS_DOES_NOT_EXIST
        );
      }
      return createdUser;
    } catch (error) {
      if (error.code === 'P2002') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.PROPERTY_ALREADY_REGISTERED,
          `${error.meta.target} قبلا ثبت شده است`
        );
      } else {
        console.error(error);
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INTERNAL_SERVER_ERROR
        );
      }
    }
  }

  /**
   * Validates user email and mobile
   * @param user
   */
  validateUser(user: UserCreateArgs | UserUpdateArgs) {
    if (user?.email) {
      if (!isEmail(user.email))
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INVALID_EMAIL
        );
    }
    if (user?.mobile) {
      const mobileRegExp = new RegExp(/09(1[0-9]|3[1-9])[0-9]{7}/);
      if (!mobileRegExp.test(user.mobile)) {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INVALID_MOBILE
        );
      }
    }
  }
  /**
   * This method updates a user by `id`
   * @param user user Object that contains some fields of `UserUpdateInput`
   * @param id the id of the user we want to update
   * @returns A promise which returns the created user
   */
  async updateUser(updateArgs: UserUpdateInput): Promise<User> {
    const { id, user } = updateArgs;
    this.validateUser(user);
    try {
      if (user.role_ids) {
        const transactions = [];
        const deleteOperation = this.prisma.user_role.deleteMany({
          where: {
            user_id: id
          }
        });
        transactions.push(deleteOperation);
        for (let i = 0; i < user.role_ids.length; i++) {
          transactions.push(
            this.prisma.user_role.create({
              data: {
                user: {
                  connect: {
                    id: id
                  }
                },
                role: {
                  connect: {
                    id: user.role_ids[i]
                  }
                }
              }
            })
          );
        }
        delete user.role_ids;
        const updateOperation = this.prisma.user.update({
          where: {
            id: id
          },
          data: { ...user, updated_at: this.prisma.now() }
        });
        try {
          const res = await this.prisma.$transaction([
            updateOperation,
            ...transactions
          ]);
          return res[0];
        } catch (error) {
          this.errorService.throwStandardError(
            this.errorService.ResponseErrors.ROLE_IDS_DOES_NOT_EXIST
          );
        }
      }
      delete user.role_ids;
      if (user.password) {
        user.password = crypto
          .createHmac('sha256', this.config.hashSecret)
          .update(user.password)
          .digest('hex');
      }
      const updatedUser = await this.prisma.user.update({
        where: { id: id },
        data: { ...user, updated_at: this.prisma.now() }
      });
      return updatedUser;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.USER_DOES_NOT_EXIST
        );
      } else {
        console.error(error);
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INTERNAL_SERVER_ERROR
        );
      }
    }
  }

  /**
   * This method deletes a user by `id`
   * @param id the id of the user we want to delete
   * @returns A promise which returns the deleted user
   */
  async deleteUser(id: number): Promise<User | null> {
    try {
      const deletedUser = await this.prisma.user.delete({
        where: { id: id }
      });
      return deletedUser;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.USER_DOES_NOT_EXIST
        );
      } else {
        console.error(error);
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INTERNAL_SERVER_ERROR
        );
      }
    }
  }
  /**
   * This method returns a `jwt token` if the user mobile and password matched
   * Before returning a new token we delete previous tokens
   * @param mobile mobile of the user
   * @param password password of the user
   * @returns `jwt-token` that let user make requests
   */

  async login(mobile: string, password: string, agent: string) {
    const user: User | null = await this.prisma.user.findFirst({
      where: {
        mobile: mobile,
        password: crypto
          .createHmac('sha256', this.config.hashSecret)
          .update(password)
          .digest('hex')
      }
    });
    if (!user)
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.UNAUTHORIZED
      );
    const key = this.config.accessTokenPrefix + mobile + ':' + agent;
    const isValid = await this.redis.get(key);
    if (isValid) {
      const delResult = await this.redis.del(key);
      delResult ? true : false;
    }

    const access_token = jwt.sign(
      { mobile: user.mobile, id: user.id },
      this.config.accessTokenSecret
    );
    await this.redis.set(
      this.config.accessTokenPrefix + user.mobile + ':' + agent,
      access_token,
      'ex',
      this.config.accessTokenExpiresIn
    );
    const refresh_token = jwt.sign(
      { mobile: user.mobile, id: user.id },
      this.config.refreshTokenSecret
    );
    await this.redis.set(
      this.config.refreshTokenPrefix + user.mobile + ':' + agent,
      refresh_token,
      'ex',
      this.config.refreshTokenExpiresIn
    );
    return {
      access_token,
      refresh_token,
      token_type: 'Bearer',
      expires_in: this.config.accessTokenExpiresIn
    };
  }

  /**
   * Check if token is valid or not
   * @param token `jwt-token`
   * @returns A promise which resolves a boolean
   * TODO: We should get the token from request header, not the params of api
   */
  async isLogin(token: string, agent: string) {
    try {
      token = token.substr(7, token.length);
      const tokenInStorage: any = jwt.verify(
        token,
        this.config.accessTokenSecret
      );
      const isValid = await this.redis.get(
        this.config.accessTokenPrefix + tokenInStorage.mobile + ':' + agent
      );
      return isValid === token ? true : false;
    } catch (e) {
      return false;
    }
  }

  /**
   * Logout user by Deleting its token from `Redis`
   * @param token `jwt-token` that user got fom login
   */
  async logout(token: string, agent: string) {
    try {
      token = token.substr(7, token.length);
      const tokenInStorage: any = jwt.verify(
        token,
        this.config.accessTokenSecret
      );
      const key =
        this.config.accessTokenPrefix + tokenInStorage.mobile + ':' + agent;
      const refreshKey =
        this.config.refreshTokenPrefix + tokenInStorage.mobile + ':' + agent;
      const isValid = await this.redis.get(key);
      if (isValid) {
        const delResult = await this.redis.del(key);
        await this.redis.del(refreshKey);
        return delResult ? true : false;
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  }

  /**
   * This method refreshes the token we should replace both access_token and refresh_token inside the store
   * @param token
   */
  async refreshToken(token: string, agent: string) {
    const user: any = jwt.verify(token, this.config.refreshTokenSecret);
    const tokenInStorage = await this.redis.get(
      this.config.refreshTokenPrefix + user.mobile + ':' + agent
    );
    const isValidRefreshToken = tokenInStorage === token ? true : false;
    if (!isValidRefreshToken) return null;

    const access_token = jwt.sign(
      { mobile: user.mobile, id: user.id },
      this.config.accessTokenSecret
    );
    await this.redis.set(
      this.config.accessTokenPrefix + user.mobile + ':' + agent,
      access_token,
      'ex',
      this.config.accessTokenExpiresIn
    );
    const refresh_token = jwt.sign(
      { mobile: user.mobile, id: user.id },
      this.config.refreshTokenSecret
    );
    await this.redis.set(
      this.config.refreshTokenPrefix + user.mobile + ':' + agent,
      refresh_token,
      'ex',
      this.config.refreshTokenExpiresIn
    );
    return {
      access_token,
      refresh_token,
      token_type: 'Bearer',
      expires_in: this.config.accessTokenExpiresIn
    };
  }

  /**
   * Show a user sessions - it searches redis keys with prefix: login:mobile:*
   */
  async mySessions(user: User): Promise<SessionListResult> {
    const prefix = this.config.accessTokenPrefix + user.mobile;
    const keys = await this.redis.keys(prefix + '*');
    const data = keys.map((key: string) => {
      const array = key.split(':');
      return {
        device_type: array[2],
        os: array[3],
        name: array[4],
        version: array[5],
        visitorId: array[6]
      };
    });
    return { data, totalCount: data.length };
  }

  async getUserSessions(mobile: string): Promise<SessionListResult> {
    const prefix = this.config.accessTokenPrefix + mobile;
    const keys = await this.redis.keys(prefix + '*');
    const data = keys.map((key: string) => {
      const array = key.split(':');
      return {
        device_type: array[2],
        os: array[3],
        name: array[4],
        version: array[5],
        visitorId: array[6]
      };
    });
    return { data, totalCount: data.length };
  }

  /**
   * Terminate Session
   * @param session: It should contain device_type, os, name, version string.
   * @param mobile Mobile is string
   * It returns a promise that returns a boolean
   */
  async terminateMySession({ session, mobile }) {
    const { device_type, os, name, version, visitorId } = session;
    const userKey =
      mobile +
      ':' +
      device_type +
      ':' +
      os +
      ':' +
      name +
      ':' +
      version +
      ':' +
      visitorId;
    const userAccessTokenKey = this.config.accessTokenPrefix + userKey;
    const userRefreshTokenKey = this.config.refreshTokenPrefix + userKey;
    const resultAccessToken = await this.redis.del(userAccessTokenKey);
    const resultRefreshToken = await this.redis.del(userRefreshTokenKey);
    return Boolean(resultAccessToken && resultRefreshToken);
  }

  /**
   * Terminate User Session
   * @param session: It should contain device_type, os, name, version string.
   * @param mobile Mobile is string
   * It returns a promise that returns a boolean
   */
  async terminateUserSession({ session, mobile }) {
    const { device_type, os, name, version, visitorId } = session;
    const userKey =
      mobile +
      ':' +
      device_type +
      ':' +
      os +
      ':' +
      name +
      ':' +
      version +
      ':' +
      visitorId;
    const userAccessTokenKey = this.config.accessTokenPrefix + userKey;
    const userRefreshTokenKey = this.config.refreshTokenPrefix + userKey;
    const resultAccessToken = await this.redis.del(userAccessTokenKey);
    const resultRefreshToken = await this.redis.del(userRefreshTokenKey);
    return Boolean(resultAccessToken && resultRefreshToken);
  }

  accessTokenGenerator({ mobile, agent }) {
    this.config.accessTokenPrefix + mobile + ':' + agent;
  }
  refreshTokenGenerator({ mobile, agent }) {
    this.config.refreshTokenPrefix + mobile + ':' + agent;
  }
}
