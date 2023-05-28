import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
  Context
} from '@nestjs/graphql';
import { UserService } from './user.service';
import {
  Login,
  SessionArg,
  SessionListResult,
  User,
  UserCreateArgs,
  UserFilter,
  UserListResult,
  UserOrderFields,
  UserRoleListResult,
  UserUpdateArgs
} from '../schema.binding';
import { AuthGuard } from './auth.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from './roles.decorator';
import { CurrentUser } from './currentUser';
/**
 * Reslove Users
 */
@Resolver('User')
export class UserResolver {
  /**
   * @param userService We injected userService to do operations on DB using this service
   */
  constructor(private readonly userService: UserService) {}

  /**
   * Resolve users
   * @param page a number we use for pagination
   * @param filter filter users by available fields on `UserFilter`
   * @param orderBy An array user can pass to sort users
   */
  @Query()
  @Roles('admin')
  @UseGuards(AuthGuard)
  users(
    @Args('page') page: number,
    @Args('filter') filter: UserFilter,
    @Args('orderBy') orderBy: UserOrderFields[]
  ): Promise<UserListResult> {
    return this.userService.findUsers({ page, filter, orderBy });
  }

  /**
   * Resolve a user by Id
   * @param id get user by id
   * @returns A promise which returns a `User` or `null`
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @Query()
  userById(@Args('id') id: number): Promise<User | null> {
    return this.userService.findById(id);
  }

  /**
   * Resolve a user profile by using its token
   * @returns A promise which returns a `User` or `null`
   */
  @Roles('admin', 'user')
  @UseGuards(AuthGuard)
  @Query()
  profile(@CurrentUser() user: User): Promise<User | null> {
    return this.userService.findById(user.id);
  }

  /**
   * roles Field Resolver
   * @param user we get user using `@Parent` decorator to find userRoles
   * @returns A promise which returns roles
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @ResolveField()
  async userRoles(@Parent() user: User): Promise<UserRoleListResult> {
    return this.userService.findUserRoles(user.id);
  }

  /**
   * Create User Mutation
   * @param user an object containing required fields and some of optional fields we need to create a user
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @Mutation()
  createUser(@Args('user') user: UserCreateArgs): Promise<User> {
    return this.userService.createUser(user);
  }

  /**
   * Update User Mutation
   * @param id the id of the user we want to update
   * @param user Object containing some of fields
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @Mutation()
  updateUser(
    @Args('id') id: number,
    @Args('user') user: UserUpdateArgs
  ): Promise<User> {
    return this.userService.updateUser({ id, user });
  }

  /**
   * A mutation that make user login by creating a token
   * @param password user password
   * @param mobile user mobile
   */
  @Mutation()
  async login(
    @Args('password') password: string,
    @Args('mobile') mobile: string,
    @Context('agent') agent: string
  ): Promise<Login> {
    return this.userService.login(mobile, password, agent);
  }

  /**
   * With this method you can refresh your tokens without trying to login
   * @param refreshToken the refresh token that you get when your loggin in
   */
  @Mutation()
  async refreshToken(
    @Args('refreshToken') refreshToken: string,
    @Context('agent') agent: string
  ) {
    return this.userService.refreshToken(refreshToken, agent);
  }

  /**
   * Destroys user jwt token - Mutation
   * @param token a jwt token that user got from login resolver
   */
  @Mutation()
  async logout(@Args('token') token: string, @Context('agent') agent: string) {
    return this.userService.logout(token, agent);
  }
  /**
   * Delete a User by Id Mutation
   * @param id the id of the user we want to delete
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @Mutation()
  async deleteUser(@Args('id') id: number) {
    return this.userService.deleteUser(id);
  }
  /**
   *
   * @param token check if user token is valid or not
   * @returns A promise which resolves a boolean
   */
  @Query()
  async isLogin(
    @Args('token') token: string,
    @Context('agent') agent: string
  ): Promise<boolean> {
    return this.userService.isLogin(token, agent);
  }

  /**
   * A mutation that make user login by creating a token
   * @param password user password
   * @param mobile user mobile
   */
  @Roles('admin', 'user')
  @UseGuards(AuthGuard)
  @Query()
  async mySessions(@Context('user') user: User): Promise<SessionListResult> {
    return this.userService.mySessions(user);
  }

  @Roles('admin', 'user')
  @UseGuards(AuthGuard)
  @Mutation()
  async terminateMySession(
    @Args('session') session: SessionArg,
    @Context('user') user: User
  ) {
    return this.userService.terminateMySession({
      session,
      mobile: user.mobile
    });
  }

  @Roles('admin')
  @UseGuards(AuthGuard)
  @Mutation()
  async terminateUserSession(
    @Args('session') session: SessionArg,
    @Args('mobile') mobile: string
  ) {
    return this.userService.terminateUserSession({
      session,
      mobile
    });
  }

  /**
   * A mutation that make user login by creating a token
   * @param password user password
   * @param mobile user mobile
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @Query()
  async getUserSessions(
    @Args('mobile') mobile: string
  ): Promise<SessionListResult> {
    return this.userService.getUserSessions(mobile);
  }
}
