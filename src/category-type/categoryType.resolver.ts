import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import {
  CategoryFilter,
  CategoryListResult,
  CategoryOrderFields,
  CategoryType,
  CategoryTypeFilter,
  CategoryTypeListResult,
  ContentFilter,
  ContentOrderFields
} from '../schema.binding';
import { AuthGuard } from '../user/auth.guard';
import { forwardRef, Inject, UseGuards } from '@nestjs/common';
import { Roles } from '../user/roles.decorator';
import { CategoryTypeService } from './categoryType.service';
import { CategoryService } from 'src/category/category.service';
import { ContentService } from 'src/content/content.service';

/**
 * CategoryType Resolver
 */
@Resolver('CategoryType')
export class CategoryTypeResolver {
  /**
   *
   * @param categoryTypeService We injected this service to perform CRUD on `categoryType`.
   * @param categoryService We injected this service to get categories of specific `categoryType`.
   * @param contentService We injected this service to get contents of a `categoryTypes`
   */
  constructor(
    private readonly categoryTypeService: CategoryTypeService,
    @Inject(forwardRef(() => CategoryService))
    private readonly categoryService: CategoryService,
    private readonly contentService: ContentService
  ) {}

  /**
   * Resolves `categoryTypes`
   * @param page number that we use for pagination
   * @param filter filter category types based on available fields on `CategoryTypeFilter`
   * @returns A promise which resolves an array of `categoryTypes`
   */
  @Query()
  categoryTypes(
    @Args('page') page: number,
    @Args('filter') filter: CategoryTypeFilter
  ): Promise<CategoryTypeListResult> {
    return this.categoryTypeService.getCategoryTypes({ page, filter });
  }

  /**
   * categories Field Resolver
   * @param categoryType Parent object and we need the id(categoryType id).
   * @param filter We can filter categories using an object and available fields in `CategoryFilter`.
   * @param orderBy We can sort categories by passing an array of fields with values of `asc` and `desc`.
   */
  @ResolveField()
  async categories(
    @Parent() categoryType: CategoryType,
    @Args('filter') filter: CategoryFilter,
    @Args('orderBy') orderBy: CategoryOrderFields[],
    @Args('page') page: number
  ): Promise<CategoryListResult> {
    return this.categoryService.getCategories({
      page,
      filter: { category_type_id: categoryType.id, ...filter },
      orderBy
    });
  }

  /**
   * Resolve `contents` field based on parameters
   * @param filter filters contents based on different fileds - string fields have options like `startWith`, `endsWith` and `contains`
   * @param page a number that defines the page user want to see
   * @param orderBy an array of fields that user can define each field should be sorted `desc` or `asc` (descending or asending)
   * @param categoryType We get the id of parent by using `@Parent` decorator and we pass it to `getContents` to get the contents of specific `categoryTypes`
   * @returns a promise which resolves an array of contents
   */
  @ResolveField()
  async contents(
    @Parent() categoryType: CategoryType,
    @Args('filter') filter: ContentFilter,
    @Args('orderBy') orderBy: ContentOrderFields[],
    @Args('page') page: number
  ) {
    return this.contentService.getContents({
      filter,
      orderBy,
      category_type_id: categoryType.id,
      page
    });
  }

  /**
   * Resolve CategoryType by Id
   * @param id the id of `categoryType` that we want to get.
   * @returns A promise which resolves a `categoryType`
   */
  @Query()
  @Roles('admin')
  @UseGuards(AuthGuard)
  getCategoryTypeById(@Args('id') id: number): Promise<CategoryType> {
    return this.categoryTypeService.getCategoryTypeById(id);
  }

  /**
   * Create a new CategoryType Mutation
   * @param name name of the categoryType we want to create.
   * @returns A promise which resolves the created CategoryType
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  createCategoryType(@Args('name') name: string): Promise<CategoryType> {
    return this.categoryTypeService.createCategoryType(name);
  }

  /**
   * Delete a CategoryType by Id Mutation
   * @param id the id of `categoryType` that we want to delete
   * @returns A promise which resolves the deleted `categoryType`
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  deleteCategoryType(@Args('id') id: number): Promise<CategoryType> {
    return this.categoryTypeService.deleteCategoryType(id);
  }

  /**
   * Update a CategoryType Mutation
   * @param id id of the `categoryType` we want to update
   * @param name new name of the `categoryType`
   * @returns A promise which resolves the updated `categoryType`
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  updateCategoryType(
    @Args('id') id: number,
    @Args('name') name: string
  ): Promise<CategoryType> {
    return this.categoryTypeService.updateCategoryType({ id, name });
  }
}
