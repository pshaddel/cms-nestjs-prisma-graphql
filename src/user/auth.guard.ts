import { ExecutionContext, CanActivate, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { UserService } from './user.service';
import * as jwt from 'jsonwebtoken';
import { Reflector } from '@nestjs/core';
import { Config } from 'src/config/config.service';
import { ErrorService } from 'src/error/error.service';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UserService,
    private readonly reflector: Reflector,
    private readonly config: Config,
    private readonly errorService: ErrorService
  ) {}

  /**
   * This method is in guard's interface and we have to  override it to let user access to a resolver or prevent the user from accessing
   * @param context - The first input is `context` which is an object that we can set metadata using NestJS
   * @returns - a boolean - true means user have access and false means the user does not have access
   */
  async canActivate(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context).getContext();
    // console.log(ctx.req.res.req.body.operationName); // OperationName
    if (!ctx.headers.authorization)
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.UNAUTHORIZED
      );
    const isLogin: boolean = await this.userService.isLogin(
      ctx.headers.authorization,
      ctx.agent
    );
    if (!isLogin)
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.UNAUTHORIZED
      );
    const token = ctx.headers.authorization.substr(
      7,
      ctx.headers.authorization.length
    );
    const tokenInStorage: any = jwt.verify(
      token,
      this.config.accessTokenSecret
    );
    ctx.user = await this.userService.findById(tokenInStorage.id);
    const userRoles = await this.userService.findUserRoles(tokenInStorage.id);
    if (!userRoles?.totalCount) {
      ctx.userRoles = null;
    } else {
      ctx.userRoles = userRoles.data.map(role => {
        return role.role.name;
      });
    }

    const rolesCheck = this.checkRoles(context, ctx.userRoles); // If there is not role it returns true
    return rolesCheck;
  }

  /**
   * This method checks if user has access or not based on its roles.
   * @param context - The first input is `context` which is an object that we can set metadata using NestJS
   * @param userRoles - The second input is an array of strings which contains the roles like `admin` or `user`
   * @returns - a boolean - true means user have access and false means the user does not have access
   */
  checkRoles(context: ExecutionContext, userRoles: [string]): boolean {
    const authorizedRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler()
    );
    if (!authorizedRoles) return true;
    if (!userRoles)
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.FORBIDDEN
      );
    let doesUserHaveTheRole = false;
    authorizedRoles.forEach(authorizedRole => {
      if (userRoles.includes(authorizedRole)) doesUserHaveTheRole = true;
    });
    if (!doesUserHaveTheRole)
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.FORBIDDEN
      );
    return doesUserHaveTheRole;
  }
}
