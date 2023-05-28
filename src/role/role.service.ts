import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/error/error.service';
import { UserService } from 'src/user/user.service';
import { PrismaService } from '../prisma/prisma.service';
import { Role, RoleListResult, UserListResult } from '../schema.binding';

@Injectable()
export class RoleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
    private readonly errorService: ErrorService
  ) {}
  /**
   * Get Roles
   * @returns A promise which resolves an array of roles
   */
  async roles(): Promise<RoleListResult> {
    const data = await this.prisma.role.findMany({});
    return { data, totalCount: data.length };
  }
  /**
   * This method gets users with specific roleId
   * @param param0 an object that contains `roleId`, `filter`, `orderBy` and `page`
   */
  async getUsersOfRole({
    roleId,
    filter,
    orderBy,
    page
  }): Promise<UserListResult> {
    const userRoles = await this.prisma.user_role.findMany({
      where: {
        role_id: roleId
      },
      distinct: ['user_id'],
      select: {
        user_id: true
      }
    });
    const userIds = userRoles.map(user => user.user_id);
    return this.userService.findUsers({
      filter: {
        ...filter,
        id: {
          in: userIds
        }
      },
      orderBy,
      page
    });
  }

  /**
   *
   * @param roleName A string is the only property of a role.
   * @returns This method returns a promise that resolves a Role or throw an exception.
   */
  async createUserRole(roleName: string): Promise<Role> {
    try {
      const createdRole = await this.prisma.role.create({
        data: { name: roleName }
      });
      return createdRole;
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
   * `UpdateUserRole` is a method that will change a role name
   * @param roleId The id of the role that we want to update
   * @param roleName The new name of the role
   * @returns A promise that resolves a Role or throw an exception.
   */
  async updateUserRole(id: number, roleName: string): Promise<Role> {
    try {
      const updatedRole = await this.prisma.role.update({
        where: { id },
        data: { name: roleName }
      });
      return updatedRole;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.ROLE_DOES_NOT_EXIST
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
   * This method deletes a role by `id`
   * @param id the id of the role we want to delete
   * @returns A promise which returns the deleted role
   */
  async deleteRole(id: number): Promise<Role | null> {
    try {
      const deletedRole = await this.prisma.role.delete({
        where: { id }
      });
      return deletedRole;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.ROLE_DOES_NOT_EXIST
        );
      } else {
        console.error(error);
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INTERNAL_SERVER_ERROR
        );
      }
    }
  }
}
