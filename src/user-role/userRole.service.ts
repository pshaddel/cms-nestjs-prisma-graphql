import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/error/error.service';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole, UserRoleListResult } from '../schema.binding';

@Injectable()
export class UserRoleService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly errorService: ErrorService
  ) {}
  /**
   * This method get roles by `filter` and `page`
   * @param param0 Get `page` and `filter` from this object
   * @returns A promise which resolves an array of userRoles
   */
  async roles({ page, filter }): Promise<UserRoleListResult> {
    const data = await this.prisma.user_role.findMany({
      where: filter,
      ...this.prisma.calculateOffsetLimit(page)
    });
    const totalCount = await this.prisma.user_role.count({
      where: filter
    });
    return { data, totalCount };
  }
  /**
   * This method returns userRoles of a userId
   * @param id this is the user id
   * @returns A promise which resolves an arraay of userRoles
   */
  getUserRoleById(id: number): Promise<UserRole[]> {
    return this.prisma.user_role.findMany({
      where: { user_id: id }
    });
  }

  /**
   * This method connects a user to a role
   * @param param0 object contains `user_id` and `role_id`
   */
  async createUserRole({ user_id, role_id }): Promise<UserRole> {
    try {
      const createdUserRole = await this.prisma.user_role.create({
        data: {
          user: {
            connect: { id: user_id }
          },
          role: {
            connect: { id: role_id }
          },
          updated_at: this.prisma.now()
        }
      });
      return createdUserRole;
    } catch (error) {
      if (error.code === 'P2002' && error.meta.target === 'unique_index') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.USERROLE_ALREADY_EXIST
        );
      } else if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.ROLE_ID_OR_USER_ID_DOES_NOT_EXIST
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
   * This method deletes a record from `user_role` table
   * @param userRoleId this is the `userRoleId`
   */
  async deleteUserRole(userRoleId: number): Promise<UserRole> {
    try {
      const deletedUserRole = await this.prisma.user_role.delete({
        where: {
          id: userRoleId
        }
      });
      return deletedUserRole;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.USERROLE_TO_DELETE_DOES_NOT_EXIST
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
   * Get Role by role_id
   * @param role_id
   */
  getRole(role_id: number) {
    return this.prisma.role.findUnique({
      where: {
        id: role_id
      }
    });
  }
}
