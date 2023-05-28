**[Content Management System](../README.md)**

> [Globals](../globals.md) / CategoryResolver

# Class: CategoryResolver

This class has implementation of CRUD and Fields resolvers of Category

## Hierarchy

* **CategoryResolver**

## Index

### Constructors

* [constructor](categoryresolver.md#constructor)

### Properties

* [categoryService](categoryresolver.md#categoryservice)
* [categoryTypeService](categoryresolver.md#categorytypeservice)
* [contentService](categoryresolver.md#contentservice)

### Methods

* [categories](categoryresolver.md#categories)
* [categoryType](categoryresolver.md#categorytype)
* [contents](categoryresolver.md#contents)
* [createCategory](categoryresolver.md#createcategory)
* [deleteCategory](categoryresolver.md#deletecategory)
* [getCategoryById](categoryresolver.md#getcategorybyid)
* [updateCategory](categoryresolver.md#updatecategory)

## Constructors

### constructor

\+ **new CategoryResolver**(`categoryService`: [CategoryService](categoryservice.md), `categoryTypeService`: [CategoryTypeService](categorytypeservice.md), `contentService`: [ContentService](contentservice.md)): [CategoryResolver](categoryresolver.md)

*Defined in [src/category/category.resolver.ts:29](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L29)*

CategoryResolver Constructor

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`categoryService` | [CategoryService](categoryservice.md) | We have injected the `categoryService` so we can use it to perform CRUD operations. |
`categoryTypeService` | [CategoryTypeService](categorytypeservice.md) | We want to get `categoryTypes` of a specific category and this method implemented inside `categoryTypesService` so we injected it here. |
`contentService` | [ContentService](contentservice.md) | We want to pass `contents` of a `category` in a field resolver so we injected `contentService`.  |

**Returns:** [CategoryResolver](categoryresolver.md)

## Properties

### categoryService

• `Private` `Readonly` **categoryService**: [CategoryService](categoryservice.md)

*Defined in [src/category/category.resolver.ts:37](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L37)*

We have injected the `categoryService` so we can use it to perform CRUD operations.

___

### categoryTypeService

• `Private` `Readonly` **categoryTypeService**: [CategoryTypeService](categorytypeservice.md)

*Defined in [src/category/category.resolver.ts:39](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L39)*

We want to get `categoryTypes` of a specific category and this method implemented inside `categoryTypesService` so we injected it here.

___

### contentService

• `Private` `Readonly` **contentService**: [ContentService](contentservice.md)

*Defined in [src/category/category.resolver.ts:40](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L40)*

We want to pass `contents` of a `category` in a field resolver so we injected `contentService`.

## Methods

### categories

▸ **categories**(`page`: number, `filter`: [CategoryFilter](../interfaces/categoryfilter.md), `orderBy`: [CategoryOrderFields](../interfaces/categoryorderfields.md)[]): Promise\<[Category](../interfaces/category.md)[]>

*Defined in [src/category/category.resolver.ts:51](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L51)*

Get categories by `page`, `filter` and order of `orderBy` Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`page` | number | number we use for pagination. |
`filter` | [CategoryFilter](../interfaces/categoryfilter.md) | Filter categories based on available fields in `CategoryFilter`. |
`orderBy` | [CategoryOrderFields](../interfaces/categoryorderfields.md)[] | An array of fields that the values can be `asc` or `desc` |

**Returns:** Promise\<[Category](../interfaces/category.md)[]>

A promise which resolves an array of categories.

___

### categoryType

▸ **categoryType**(`category`: [Category](../interfaces/category.md)): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category/category.resolver.ts:87](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L87)*

Get CategoryTypes of a  category - Field Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`category` | [Category](../interfaces/category.md) | This is parent object and we can get it using `@Parent` decorator. We need the `category.id` to get `CategoryTypes` of the category. |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

Returns a promise which resolves a `categoryType`.

___

### contents

▸ **contents**(`category`: [Category](../interfaces/category.md), `filter`: [ContentFilter](../interfaces/contentfilter.md), `page`: number, `orderBy`: [ContentOrderFields](../interfaces/contentorderfields.md)[]): Promise\<[Content](../interfaces/content.md)[]>

*Defined in [src/category/category.resolver.ts:67](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L67)*

Field resolver of `contents` by `page`, `filter` and order of `orderBy`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`category` | [Category](../interfaces/category.md) | With using `@Parent` property decorator we can access the parent object and we can extract the id and pass it to service |
`filter` | [ContentFilter](../interfaces/contentfilter.md) | Filter contents based on available fields in `ContentFilter`. |
`page` | number | number we use for pagination. |
`orderBy` | [ContentOrderFields](../interfaces/contentorderfields.md)[] | An array of fields that the values can be `asc` or `desc` |

**Returns:** Promise\<[Content](../interfaces/content.md)[]>

A promise which resolves an array of contents.

___

### createCategory

▸ **createCategory**(`category`: [CategoryArgs](../interfaces/categoryargs.md)): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.resolver.ts:111](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L111)*

create a new category Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`category` | [CategoryArgs](../interfaces/categoryargs.md) | an object containing the required fields of creating a category |

**Returns:** Promise\<[Category](../interfaces/category.md)>

a promise which resolves the created category

___

### deleteCategory

▸ **deleteCategory**(`id`: number): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.resolver.ts:123](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L123)*

Delete a category by Id Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | category id that we want to delete. |

**Returns:** Promise\<[Category](../interfaces/category.md)>

Returns a promise which resolves the deleted category

___

### getCategoryById

▸ **getCategoryById**(`id`: number): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.resolver.ts:99](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L99)*

Get Category by Id Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | `categoryId` is a number. |

**Returns:** Promise\<[Category](../interfaces/category.md)>

a promise which resolves a Category.

___

### updateCategory

▸ **updateCategory**(`id`: number, `category`: [CategoryUpdateArgs](../interfaces/categoryupdateargs.md)): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.resolver.ts:136](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.resolver.ts#L136)*

update a new category Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of category that we want to update. |
`category` | [CategoryUpdateArgs](../interfaces/categoryupdateargs.md) | an object containing some fields of category |

**Returns:** Promise\<[Category](../interfaces/category.md)>

a promise which resolves the updated category
