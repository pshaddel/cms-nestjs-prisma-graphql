import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver
} from '@nestjs/graphql';
import { ContentService } from './content.service';
import {
  Content,
  ContentUpdateArgs,
  ContentCreateArgs,
  ContentListResult
} from './../schema.binding';

/**
 * This class resolve requests of contents
 */
@Resolver('Content')
export class ContentResolver {
  /**
   *
   * @param contentService We pass contentService using dependency injection
   */
  constructor(private contentService: ContentService) {}

  /**
   * Get Contents based on parameters
   * @param filter filters contents based on different fileds - string fields have options like `startWith`, `endsWith` and `contains`
   * @param page a number that defines the page user want to see
   * @param orderBy an array of fields that user can define each field should be sorted `desc` or `asc` (descending or asending)
   * @param category_id User can directly ask for contents of specific category by passing `category_id`
   * @param category_type_id User can directly ask for contents of specific categoryType by passing `category_type_id`
   * @returns a promise which resolves an array of contents
   */
  @Query()
  async contents(
    @Args('filter') filter: number,
    @Args('page') page: number,
    @Args('orderBy') orderBy: any,
    @Args('category_id') category_id: number,
    @Args('category_type_id') category_type_id: number
  ): Promise<ContentListResult> {
    const contents = await this.contentService.getContents({
      page,
      filter,
      orderBy,
      category_id,
      category_type_id
    });
    return contents;
  }

  /**
   * Resolve Categories of each content
   * @param content we need `content` to get the `contentId` from parent
   */
  @ResolveField()
  categories(@Parent() content: Content) {
    return this.contentService.getCategoriesOfContent({
      contentId: content.id
    });
  }

  /**
   * Resolve CategoryTypes of each Content
   * @param content We need `content` to extract `contentId` so we can pass it to the service: `getCategoryTypesOfContent`
   */
  @ResolveField()
  categoryTypes(@Parent() content: Content) {
    return this.contentService.getCategoryTypesOfContent({
      contentId: content.id
    });
  }

  /**
   * Get a Content by Id
   * @param id content id
   */
  @Query()
  contentById(@Args('id') id: number): Promise<Content> {
    return this.contentService.getContentById(id);
  }

  /**
   * Create a Content
   * @param content contains all avialble or required fields to create a new content.
   */
  @Mutation()
  async createContent(
    @Args('content') content: ContentCreateArgs
  ): Promise<Content> {
    return this.contentService.createContent(content);
  }

  /**
   * Update a Content by Id
   * @param id we need content id to update a specific id
   * @param content content contains all fields of a content
   */
  @Mutation()
  updateContent(
    @Args('id') id: number,
    @Args('content') content: ContentUpdateArgs
  ): Promise<Content> {
    return this.contentService.updateContent(id, content);
  }

  /**
   * Delete a Content by Id
   * @param id we need id to delete the content
   */
  @Mutation()
  deleteContent(@Args('id') id: number): Promise<Content> {
    return this.contentService.deleteContent(id);
  }
}
