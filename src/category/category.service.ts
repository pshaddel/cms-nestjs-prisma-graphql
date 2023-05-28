import { Injectable } from '@nestjs/common';
import { ErrorService } from 'src/error/error.service';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  Category,
  CategoryArgs,
  CategoryListResult,
  CategoryType
} from '../schema.binding';

@Injectable()
export class CategoryService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly errorService: ErrorService
  ) {}

  /**
   * Get categories by `page`, `filter` and sort them using `orderBy`
   * @param param0 an object that have to contain `page`, `filter` and `orderBy`
   * @returns a promise which resolves an array of categories
   */
  async getCategories({ page, filter, orderBy }): Promise<CategoryListResult> {
    const data = await this.prisma.category.findMany({
      ...this.prisma.calculateOffsetLimit(page),
      where: filter,
      orderBy
    });
    const totalCount = await this.prisma.category.count({
      where: filter
    });
    return { data, totalCount };
  }

  /**
   * Get CategoryTypes
   * @param page a number that we use for pagination.
   * @returns Returns a promise which resolves an array of `categoryType`.
   */
  getCategoryTypes(page: number): Promise<CategoryType[]> {
    return this.prisma.category_type.findMany({
      ...this.prisma.calculateOffsetLimit(page)
    });
  }

  /**
   * Get Category by  Id
   * @param id `categoryId` is a number.
   * @returns a promise which resolves a Category.
   */
  getCategoryById(id: number): Promise<Category> {
    return this.prisma.category.findUnique({ where: { id } });
  }

  /**
   * create a new category service
   * @param category an object containing the required fields of creating a category and the categoryType
   * @returns a promise which resolves the created category
   */
  async createCategory(category: CategoryArgs): Promise<Category> {
    try {
      const categoryTypeId = category.category_type_id;
      delete category.category_type_id;
      const createdCategory = await this.prisma.category.create({
        data: {
          ...category,
          updated_at: this.prisma.now(),
          created_at: this.prisma.now(),
          category_type: {
            connect: {
              id: categoryTypeId
            }
          }
        }
      });
      return createdCategory;
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
   * Delete a category by Id
   * @param id category id that we want to delete.
   * @returns Returns a promise which resolves the deleted category
   */
  async deleteCategory(id: number): Promise<Category> {
    try {
      const deletedContent = await this.prisma.category.delete({
        where: { id }
      });
      return deletedContent;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.CATEGORY_DOES_NOT_EXIST
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
   * update a new category
   * @param id the id of category that we want to update.
   * @param category an object containing some fields of category and categoryType
   * @returns a promise which resolves the updated category
   */
  async updateCategory({ id, category }): Promise<Category> {
    try {
      const categoryTypeId = category.category_type_id;
      delete category.category_type_id;
      const updatedCategory = await this.prisma.category.update({
        where: {
          id
        },
        data: {
          ...category,
          category_type: categoryTypeId
            ? {
                connect: {
                  id: categoryTypeId
                }
              }
            : undefined,
          updated_at: this.prisma.now()
        }
      });
      return updatedCategory;
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
