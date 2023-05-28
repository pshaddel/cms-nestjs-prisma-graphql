import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation
} from '@nestjs/graphql';
import {
  Role,
  UserFilter,
  UserListResult,
  UserOrderFields,
  RoleListResult
} from '../schema.binding';
import { AuthGuard } from '../user/auth.guard';
import { UseGuards } from '@nestjs/common';
import { Roles } from '../user/roles.decorator';
import { RoleService } from './role.service';
@Resolver('Role')
export class RoleResolver {
  constructor(private readonly roleService: RoleService) {}

  /**
   * Resolve roles
   * This resolver is protected by AuthGuard and only users and admins can access it.
   * @returns A promise which resolves an array of roles
   */
  @Query()
  @Roles('admin', 'user')
  @UseGuards(AuthGuard)
  roles(): Promise<RoleListResult> {
    return this.roleService.roles();
  }

  /**
   * Create role
   * This resolver is protected by AuthGuard and only `admins` can access it.
   * @param name This is the role name.
   * @returns A promise which resolves the created role or throw an exception
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  createRole(@Args('name') name: string): Promise<Role> {
    return this.roleService.createUserRole(name);
  }

  /**
   * Delete role
   * This resolver is protected by AuthGuard and only `admins` can access it.
   * @param id This is the role id.
   * @returns A promise which resolves the deleted role or throw an exception
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  deleteRole(@Args('id') id: number): Promise<Role> {
    return this.roleService.deleteRole(id);
  }

  /**
   * Update role
   * This resolver is protected by AuthGuard and only `admins` can access it.
   * @param name This is the role name.
   * @param roleId This is the id of the role that we want to update
   * @returns A promise which resolves the updated role or throw an exception
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  updateRole(
    @Args('name') name: string,
    @Args('id') id: number
  ): Promise<Role> {
    return this.roleService.updateUserRole(id, name);
  }

  /**
   * users Field Resolver
   * @param role We get `role` using `@Parent` decorator to get users of specific
   * @param page a number that we use for pagination
   * @param filter filter users by available fields on `UserFilter`
   * @param orderBy sort users by an array of `UserOrderFields`
   * @returns A promise which resolves an array of users
   */
  @ResolveField()
  users(
    @Parent() role: Role,
    @Args('page') page: number,
    @Args('filter') filter: UserFilter,
    @Args('orderBy') orderBy: UserOrderFields[]
  ): Promise<UserListResult> {
    return this.roleService.getUsersOfRole({
      roleId: role.id,
      filter,
      orderBy,
      page
    });
  }
}
