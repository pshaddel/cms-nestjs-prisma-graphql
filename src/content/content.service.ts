import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';

import {
  CategoryListResult,
  CategoryType,
  CategoryTypeListResult,
  Content,
  ContentCreateArgs,
  ContentListResult,
  ContentUpdateArgs
} from './../schema.binding';
import { ErrorService } from 'src/error/error.service';

type GetContentArgs = {
  page?: number;
  filter?: any;
  orderBy?: any[];
  category_id?: number;
  category_type_id?: number;
};
@Injectable()
export class ContentService {
  /**
   * ContentService Constructor
   * @param prisma We have to access db using Prisma so we inject prisma service.
   */
  constructor(
    private prisma: PrismaService,
    private readonly errorService: ErrorService
  ) {}

  /**
   *
   * @param getContentArgs We are going to find Contents which matches with `filter`, `page`, `category_id` and `category_type_id` and sort them using `orderBy` array.
   * @returns `Promise<Content[]>` a promise which resolves an array of contents
   */
  async getContents(
    getContentArgs: GetContentArgs
  ): Promise<ContentListResult> {
    const {
      page,
      filter,
      orderBy,
      category_id,
      category_type_id
    } = getContentArgs;
    let data: Content[];
    let totalCount: number;
    if (category_type_id) {
      data = await this.prisma.content_category_category_type.findMany({
        where: {
          ...filter,
          category_type_id: category_type_id
        },
        // distinct: ['id'],
        orderBy: orderBy,
        ...this.prisma.calculateOffsetLimit(page)
      });
      totalCount = await this.prisma.content_category_category_type.count({
        where: {
          ...filter,
          category_type_id: category_type_id
        }
        // distinct: ['id']
      });
      return { data, totalCount };
    } else if (category_id) {
      data = await this.prisma.content_category_category_type.findMany({
        where: {
          ...filter,
          category_id: category_id
        },
        // distinct: ['id'],
        orderBy: orderBy,
        ...this.prisma.calculateOffsetLimit(page)
      });
      totalCount = await this.prisma.content_category_category_type.count({
        where: {
          ...filter,
          category_id: category_id
        }
        // distinct: ['id']
      });
      return { data, totalCount };
    }

    data = await this.prisma.content.findMany({
      where: filter,
      orderBy: orderBy,
      ...this.prisma.calculateOffsetLimit(page)
    });
    totalCount = await this.prisma.content.count({
      where: filter
    });
    return { data, totalCount };
  }
  /**
   * We can get categories of a specific content using this function
   * @param contentId the id of the content which we are looking for its categories,
   * @returns `Promise<Category[]> A promise which resolves an array of categories
   */
  async getCategoriesOfContent({ contentId }): Promise<CategoryListResult> {
    const result = await this.prisma.content_category_category_type.findMany({
      where: {
        id: contentId,
        category_id: {
          not: null
        }
      },
      distinct: ['category_id'],
      select: {
        category_id: true,
        category_name: true,
        category_type_id: true,
        category_description: true,
        category_url_descriptor: true,
        category_logo: true,
        category_banner: true,
        category_status: true,
        category_created_at: true,
        category_updated_at: true
      }
    });

    const data = result.map(result => {
      return {
        id: result.category_id,
        name: result.category_name,
        category_type_id: result.category_type_id,
        description: result.category_description,
        url_descriptor: result.category_url_descriptor,
        logo: result.category_logo,
        banner: result.category_banner,
        status: result.category_status,
        created_at: result.category_created_at,
        updated_at: result.category_updated_at
      };
    });
    return { data, totalCount: data.length };
  }

  /**
   * We can get category types of a specific content using this function
   * @param contentId the id of the content which we are looking for its category types,
   * @returns `Promise<CategoryType[]> A promise which resolves an array of category types
   */
  async getCategoryTypesOfContent({
    contentId
  }): Promise<CategoryTypeListResult> {
    const results = await this.prisma.content_category_category_type.findMany({
      where: {
        id: contentId,
        category_type_id: {
          not: null
        }
      },
      select: {
        category_type_id: true,
        category_type_name: true
      },
      distinct: ['category_type_id']
    });
    const data = results.map(result => {
      return {
        id: result.category_type_id,
        name: result.category_type_name
      };
    });
    return { data, totalCount: results.length };
  }
  /**
   * We can get category types of a specific category
   * @param categoryId the id of the category which we are looking for its category types,
   * @returns `Promise<CategoryTypes[]> A promise which resolves an array of category types
   */
  async getCategoryTypesOfCategory({ categoryId }): Promise<CategoryType[]> {
    const results = await this.prisma.content_category_category_type.findMany({
      where: {
        category_id: categoryId,
        category_type_id: {
          not: null
        }
      },
      select: {
        category_type_id: true,
        category_type_name: true
      },
      distinct: ['category_type_id']
    });
    return results.map(result => {
      return {
        id: result.category_type_id,
        name: result.category_type_name
      };
    });
  }

  /**
   * Find a Content by its `id`
   * @param id id of the content
   */
  async getContentById(id: number): Promise<Content> {
    const content = await this.prisma.content.findUnique({
      where: {
        id: id
      }
    });
    return content;
  }

  /**
   * Create Content
   * @param content an object contains all required and optional fields of Content
   */
  async createContent(content: ContentCreateArgs): Promise<Content> {
    if (content.categoryIds) {
      const categoryIds = content.categoryIds;
      delete content.categoryIds;
      const createdContent = await this.prisma.content.create({
        data: {
          ...content,
          created_at: this.prisma.now(),
          updated_at: this.prisma.now()
        }
      });
      const transactions = [];
      for (let i = 0; i < categoryIds.length; i++) {
        transactions.push(
          this.prisma.content_category.create({
            data: {
              content: {
                connect: {
                  id: createdContent.id
                }
              },
              category: {
                connect: {
                  id: categoryIds[i]
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
        await this.prisma.content.delete({
          where: {
            id: createdContent.id
          }
        });
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.CATEGORY_IDS_DOES_NOT_EXIST
        );
      }
      return createdContent;
    } else {
      return this.prisma.content.create({
        data: {
          ...content,
          created_at: this.prisma.now(),
          updated_at: this.prisma.now()
        }
      });
    }
  }

  /**
   * Update Content
   * @param content an object contains some of required and optional fields of Content
   * @param id the id of the content that we want to update
   */
  async updateContent(
    id: number,
    content: ContentUpdateArgs
  ): Promise<Content> {
    const count = await this.prisma.content.count({ where: { id } });
    if (count === 0) {
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.CONTENT_DOES_NOT_EXIST
      );
    }
    if (content.categoryIds) {
      const transactions = [];
      const deleteOperation = this.prisma.content_category.deleteMany({
        where: {
          content_id: id
        }
      });
      transactions.push(deleteOperation);
      for (let i = 0; i < content.categoryIds.length; i++) {
        transactions.push(
          this.prisma.content_category.create({
            data: {
              content: {
                connect: {
                  id: id
                }
              },
              category: {
                connect: {
                  id: content.categoryIds[i]
                }
              }
            }
          })
        );
      }
      delete content.categoryIds;
      const updateOperation = this.prisma.content.update({
        where: {
          id: id
        },
        data: { ...content, updated_at: this.prisma.now() }
      });
      try {
        const res = await this.prisma.$transaction([
          updateOperation,
          ...transactions
        ]);
        return res[0];
      } catch (error) {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.CATEGORY_IDS_DOES_NOT_EXIST
        );
      }
    }
    delete content.categoryIds;
    return this.prisma.content.update({
      where: {
        id: id
      },
      data: { ...content, updated_at: this.prisma.now() }
    });
  }

  /**
   * Delete a Content
   * @param id the id of a content that we want to delete
   */
  async deleteContent(id: number): Promise<Content> {
    try {
      const deletedContent = await this.prisma.content.delete({
        where: {
          id: id
        }
      });
      return deletedContent;
    } catch (error) {
      if (error.code === 'P2016') {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.CONTENT_DOES_NOT_EXIST
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
