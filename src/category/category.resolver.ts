import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent
} from '@nestjs/graphql';
import {
  Category,
  CategoryArgs,
  CategoryFilter,
  CategoryListResult,
  CategoryOrderFields,
  CategoryUpdateArgs,
  ContentFilter,
  ContentOrderFields
} from '../schema.binding';
import { AuthGuard } from '../user/auth.guard';
import { forwardRef, Inject, UseGuards } from '@nestjs/common';
import { Roles } from '../user/roles.decorator';
import { CategoryService } from './category.service';
import { CategoryTypeService } from 'src/category-type/categoryType.service';
import { ContentService } from 'src/content/content.service';

/**
 * This class has implementation of CRUD and Fields resolvers of Category
 */
@Resolver('Category')
export class CategoryResolver {
  /**
   * CategoryResolver Constructor
   * @param categoryService We have injected the `categoryService` so we can use it to perform CRUD operations.
   * @param categoryTypeService We want to get `categoryTypes` of a specific category and this method implemented inside `categoryTypesService` so we injected it here.
   * @param contentService We want to pass `contents` of a `category` in a field resolver so we injected `contentService`.
   */
  constructor(
    private readonly categoryService: CategoryService,
    @Inject(forwardRef(() => CategoryTypeService))
    private readonly categoryTypeService: CategoryTypeService,
    private readonly contentService: ContentService
  ) {}

  /**
   * Get categories by `page`, `filter` and order of `orderBy` Resolver
   * @param page number we use for pagination.
   * @param filter Filter categories based on available fields in `CategoryFilter`.
   * @param orderBy An array of fields that the values can be `asc` or `desc`
   * @returns A promise which resolves an array of categories.
   */
  @Query()
  categories(
    @Args('page') page: number,
    @Args('filter') filter: CategoryFilter,
    @Args('orderBy') orderBy: CategoryOrderFields[]
  ): Promise<CategoryListResult> {
    return this.categoryService.getCategories({ page, filter, orderBy });
  }
  /**
   * Resolve Contents of each category
   * @param category we need `category` to get the `categoryId` from parent
   */
  @ResolveField()
  contents(
    @Parent() category: Category,
    @Args('page') page: number,
    @Args('filter') filter: ContentFilter,
    @Args('orderBy') orderBy: ContentOrderFields[]
  ) {
    return this.contentService.getContents({
      category_id: category.id,
      page,
      filter,
      orderBy
    });
  }

  /**
   * Get CategoryTypes of a  category - Field Resolver
   * @param category This is parent object and we can get it using `@Parent` decorator. We need the `category.id` to get `CategoryTypes` of the category.
   * @returns Returns a promise which resolves a `categoryType`.
   */
  @ResolveField()
  async categoryType(@Parent() category: Category) {
    return this.categoryTypeService.getCategoryTypeById(
      category.category_type_id
    );
  }

  /**
   * Get Category by Id Resolver
   * @param id `categoryId` is a number.
   * @returns a promise which resolves a Category.
   */
  @Query()
  getCategoryById(@Args('id') id: number): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  /**
   * create a new category Mutation
   * @param category an object containing the required fields of creating a category
   * @returns a promise which resolves the created category
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  createCategory(@Args('category') category: CategoryArgs): Promise<Category> {
    return this.categoryService.createCategory(category);
  }

  /**
   * Delete a category by Id Mutation
   * @param id category id that we want to delete.
   * @returns Returns a promise which resolves the deleted category
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  deleteCategory(@Args('id') id: number): Promise<Category> {
    return this.categoryService.deleteCategory(id);
  }

  /**
   * update a new category Mutation
   * @param id the id of category that we want to update.
   * @param category an object containing some fields of category
   * @returns a promise which resolves the updated category
   */
  @Mutation()
  @Roles('admin')
  @UseGuards(AuthGuard)
  updateCategory(
    @Args('id') id: number,
    @Args('category') category: CategoryUpdateArgs
  ): Promise<Category> {
    return this.categoryService.updateCategory({ id, category });
  }
}
