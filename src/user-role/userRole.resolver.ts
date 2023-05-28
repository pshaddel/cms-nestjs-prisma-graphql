import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import {
  UserRole,
  UserRoleFilter,
  UserRoleListResult
} from '../schema.binding';
import { AuthGuard } from '../user/auth.guard';
import { UserRoleService } from './userRole.service';
import { UseGuards } from '@nestjs/common';
import { Roles } from '../user/roles.decorator';
@Resolver('UserRole')
export class UserRoleResolver {
  /**
   * @param userRoleService We injected userRoleService to do CRUD operations
   */
  constructor(private readonly userRoleService: UserRoleService) {}

  /**
   * Resolve UserRoles by `filter` and `page`
   * @param page a number we use for pagination
   * @param filter filter user roles
   */
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Query()
  usersRoles(
    @Args('page') page: number,
    @Args('filter') filter: UserRoleFilter
  ): Promise<UserRoleListResult> {
    return this.userRoleService.roles({ page, filter });
  }

  /**
   * Resolve roles of specific `userId`
   * @param id the user id
   * @returns A promise which resolves a `userRole` or `null`
   */
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Query()
  userRoleById(@Args('userId') id: number): Promise<UserRole[]> {
    return this.userRoleService.getUserRoleById(id);
  }

  /**
   * Delete a role of a user Mutation
   * @param userRoleId userRoleId that we want to delete
   */
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Mutation()
  deleteUserRole(@Args('userRoleId') userRoleId: number) {
    return this.userRoleService.deleteUserRole(userRoleId);
  }

  /**
   * Create User Role Mutation
   * @param user_id the user id
   * @param role_id the role id
   */
  @UseGuards(AuthGuard)
  @Roles('admin')
  @Mutation()
  createUserRole(
    @Args('userId') user_id: number,
    @Args('roleId') role_id: number
  ) {
    return this.userRoleService.createUserRole({ user_id, role_id });
  }

  /**
   * Role Field Resolver
   * @param userRole Get `userRole` id by using `@Parent` decorator
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @ResolveField()
  async role(@Parent() userRole: UserRole) {
    return this.userRoleService.getRole(userRole.role_id);
  }
}
