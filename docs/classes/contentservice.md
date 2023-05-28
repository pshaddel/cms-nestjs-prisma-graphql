**[Content Management System](../README.md)**

> [Globals](../globals.md) / ContentService

# Class: ContentService

## Hierarchy

* **ContentService**

## Index

### Constructors

* [constructor](contentservice.md#constructor)

### Properties

* [prisma](contentservice.md#prisma)

### Methods

* [createContent](contentservice.md#createcontent)
* [deleteContent](contentservice.md#deletecontent)
* [getCategoriesOfContent](contentservice.md#getcategoriesofcontent)
* [getCategoryTypesOfCategory](contentservice.md#getcategorytypesofcategory)
* [getCategoryTypesOfContent](contentservice.md#getcategorytypesofcontent)
* [getContentById](contentservice.md#getcontentbyid)
* [getContents](contentservice.md#getcontents)
* [updateContent](contentservice.md#updatecontent)

## Constructors

### constructor

\+ **new ContentService**(`prisma`: [PrismaService](prismaservice.md)): [ContentService](contentservice.md)

*Defined in [src/content/content.service.ts:20](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L20)*

ContentService Constructor

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`prisma` | [PrismaService](prismaservice.md) | We have to access db using Prisma so we inject prisma service.  |

**Returns:** [ContentService](contentservice.md)

## Properties

### prisma

• `Private` **prisma**: [PrismaService](prismaservice.md)

*Defined in [src/content/content.service.ts:25](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L25)*

We have to access db using Prisma so we inject prisma service.

## Methods

### createContent

▸ **createContent**(`content`: [ContentCreateArgs](../interfaces/contentcreateargs.md)): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.service.ts:185](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L185)*

Create Content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`content` | [ContentCreateArgs](../interfaces/contentcreateargs.md) | an object contains all required and optional fields of Content  |

**Returns:** Promise\<[Content](../interfaces/content.md)>

___

### deleteContent

▸ **deleteContent**(`id`: number): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.service.ts:316](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L316)*

Delete a Content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of a content that we want to delete  |

**Returns:** Promise\<[Content](../interfaces/content.md)>

___

### getCategoriesOfContent

▸ **getCategoriesOfContent**(`__namedParameters`: { contentId: any ; page: any  }): Promise\<[Category](../interfaces/category.md)[]>

*Defined in [src/content/content.service.ts:75](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L75)*

We can get categories of a specific content using this function

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { contentId: any ; page: any  } |

**Returns:** Promise\<[Category](../interfaces/category.md)[]>

`Promise<Category[]> A promise which resolves an array of categories

___

### getCategoryTypesOfCategory

▸ **getCategoryTypesOfCategory**(`__namedParameters`: { categoryId: any  }): Promise\<[CategoryType](../interfaces/categorytype.md)[]>

*Defined in [src/content/content.service.ts:146](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L146)*

We can get category types of a specific category

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { categoryId: any  } |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)[]>

`Promise<CategoryTypes[]> A promise which resolves an array of category types

___

### getCategoryTypesOfContent

▸ **getCategoryTypesOfContent**(`__namedParameters`: { contentId: any  }): Promise\<{ id: number = result.category\_type\_id; name: string = result.category\_type\_name }[]>

*Defined in [src/content/content.service.ts:120](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L120)*

We can get category types of a specific content using this function

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { contentId: any  } |

**Returns:** Promise\<{ id: number = result.category\_type\_id; name: string = result.category\_type\_name }[]>

`Promise<CategoryType[]> A promise which resolves an array of category types

___

### getContentById

▸ **getContentById**(`id`: number): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.service.ts:172](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L172)*

Find a Content by its `id`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | id of the content  |

**Returns:** Promise\<[Content](../interfaces/content.md)>

___

### getContents

▸ **getContents**(`getContentArgs`: [GetContentArgs](../globals.md#getcontentargs)): Promise\<[Content](../interfaces/content.md)[]>

*Defined in [src/content/content.service.ts:32](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L32)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`getContentArgs` | [GetContentArgs](../globals.md#getcontentargs) | We are going to find Contents which matches with `filter`, `page`, `category_id` and `category_type_id` and sort them using `orderBy` array. |

**Returns:** Promise\<[Content](../interfaces/content.md)[]>

`Promise<Content[]>` a promise which resolves an array of contents

___

### updateContent

▸ **updateContent**(`id`: number, `content`: [ContentUpdateArgs](../interfaces/contentupdateargs.md)): Promise\<[Content](../interfaces/content.md)>

*Defined in [src/content/content.service.ts:246](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/content/content.service.ts#L246)*

Update Content

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of the content that we want to update  |
`content` | [ContentUpdateArgs](../interfaces/contentupdateargs.md) | an object contains some of required and optional fields of Content |

**Returns:** Promise\<[Content](../interfaces/content.md)>
