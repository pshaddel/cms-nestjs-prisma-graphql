**[Content Management System](../README.md)**

> [Globals](../globals.md) / ContentResolver

# Class: ContentResolver

This class resolve requests of contents

## Hierarchy

* **ContentResolver**

## Index

### Constructors

* [constructor](contentresolver.md#constructor)

### Properties

* [contentService](contentresolver.md#contentservice)

### Methods

* [categories](contentresolver.md#categories)
* [categoryTypes](contentresolver.md#categorytypes)
* [contentById](contentresolver.md#contentbyid)
* [contents](contentresolver.md#contents)
* [createContent](contentresolver.md#createcontent)
* [deleteContent](contentresolver.md#deletecontent)
* [updateContent](contentresolver.md#updatecontent)

## Constructors

### constructor

\+ **new ContentResolver**(`contentService`: [ContentService](contentservice.md)): [ContentResolver](contentresolver.md)

*Defined in [src/content/content.resolver.ts:21](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L21)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`contentService` | [ContentService](contentservice.md) | We pass contentService using dependency injection  |

**Returns:** [ContentResolver](contentresolver.md)

## Properties

### contentService

• `Private` **contentService**: [ContentService](contentservice.md)

*Defined in [src/content/content.resolver.ts:26](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L26)*

We pass contentService using dependency injection

## Methods

### categories

▸ **categories**(`content`: [Content](../interfaces/content.md), `page`: number): Promise\<[Category](../interfaces/category.md)[]>

*Defined in [src/content/content.resolver.ts:61](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L61)*

Resolve Categories of each content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | [Content](../interfaces/content.md) | we need `content` to get the `contentId` from parent |
`page` | number | a number that shows which page of categories should be shown  |

**Returns:** Promise\<[Category](../interfaces/category.md)[]>

___

### categoryTypes

▸ **categoryTypes**(`content`: [Content](../interfaces/content.md) \| [Category](../interfaces/category.md)): Promise\<{ id: number = result.category\_type\_id; name: string = result.category\_type\_name }[]>

*Defined in [src/content/content.resolver.ts:73](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L73)*

Resolve CategoryTypes of each Content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | [Content](../interfaces/content.md) \| [Category](../interfaces/category.md) | We need `content` to extract `contentId` so we can pass it to the service: `getCategoryTypesOfContent`  |

**Returns:** Promise\<{ id: number = result.category\_type\_id; name: string = result.category\_type\_name }[]>

___

### contentById

▸ **contentById**(`id`: number): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.resolver.ts:84](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L84)*

Get a Content by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | content id  |

**Returns:** Promise\<[Content](../interfaces/content.md)>

___

### contents

▸ **contents**(`filter`: number, `page`: number, `orderBy`: any, `category_id`: number, `category_type_id`: number): Promise\<[Content](../interfaces/content.md)[]>

*Defined in [src/content/content.resolver.ts:38](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L38)*

Get Contents based on parameters

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`filter` | number | filters contents based on different fileds - string fields have options like `startWith`, `endsWith` and `contains` |
`page` | number | a number that defines the page user want to see |
`orderBy` | any | an array of fields that user can define each field should be sorted `desc` or `asc` (descending or asending) |
`category_id` | number | User can directly ask for contents of specific category by passing `category_id` |
`category_type_id` | number | User can directly ask for contents of specific categoryType by passing `category_type_id` |

**Returns:** Promise\<[Content](../interfaces/content.md)[]>

a promise which resolves an array of contents

___

### createContent

▸ **createContent**(`content`: [ContentCreateArgs](../interfaces/contentcreateargs.md)): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.resolver.ts:93](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L93)*

Create a Content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | [ContentCreateArgs](../interfaces/contentcreateargs.md) | contains all avialble or required fields to create a new content.  |

**Returns:** Promise\<[Content](../interfaces/content.md)>

___

### deleteContent

▸ **deleteContent**(`id`: number): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.resolver.ts:117](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L117)*

Delete a Content by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | we need id to delete the content  |

**Returns:** Promise\<[Content](../interfaces/content.md)>

___

### updateContent

▸ **updateContent**(`id`: number, `content`: [ContentUpdateArgs](../interfaces/contentupdateargs.md)): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.resolver.ts:105](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.resolver.ts#L105)*

Update a Content by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | we need content id to update a specific id |
`content` | [ContentUpdateArgs](../interfaces/contentupdateargs.md) | content contains all fields of a content  |

**Returns:** Promise\<[Content](../interfaces/content.md)>
