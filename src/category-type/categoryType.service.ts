import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/error/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CategoryType, CategoryTypeListResult } from '../schema.binding';

@Injectable()
export class CategoryTypeService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly errorService: ErrorService
  ) {}
  /**
   * get `categoryTypes`
   * @param page number that we use for pagination
   * @param filter filter category types based on available fields on `CategoryTypeFilter`
   * @returns A promise which resolves `CategoryTypeListResult`
   */
  async getCategoryTypes({ page, filter }): Promise<CategoryTypeListResult> {
    const data = await this.prisma.category_type.findMany({
      where: filter,
      ...this.prisma.calculateOffsetLimit(page)
    });
    const totalCount = await this.prisma.category_type.count({
      where: filter
    });
    return { data, totalCount };
  }

  /**
   * get CategoryType by Id
   * @param id the id of `categoryType` that we want to get.
   * @returns A promise which resolves a `categoryType`
   */
  getCategoryTypeById(id: number): Promise<CategoryType> {
    return this.prisma.category_type.findUnique({
      where: { id }
    });
  }

  /**
   * Create a new CategoryType
   * @param name name of the categoryType we want to create.
   * @returns A promise which resolves the created CategoryType
   */
  createCategoryType(name: string): Promise<CategoryType> {
    return this.prisma.category_type.create({
      data: { name, created_at: this.prisma.now() }
    });
  }

  /**
   * Delete a CategoryType by Id
   * @param id the id of `categoryType` that we want to delete
   * @returns A promise which resolves the deleted `categoryType`
   */
  async deleteCategoryType(id: number): Promise<CategoryType> {
    try {
      const deletedCategoryType = await this.prisma.category_type.delete({
        where: { id }
      });
      return deletedCategoryType;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.CATEGORY_TYPE_DOES_NOT_EXIST
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
   * Update a CategoryType
   * @param id id of the `categoryType` we want to update
   * @param name new name of the `categoryType`
   * @returns A promise which resolves the updated `categoryType`
   */
  async updateCategoryType({ id, name }): Promise<CategoryType> {
    try {
      const updatedCategoryType = await this.prisma.category_type.update({
        where: { id },
        data: {
          name,
          updated_at: this.prisma.now()
        }
      });
      return updatedCategoryType;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.CATEGORY_TYPE_DOES_NOT_EXIST
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
