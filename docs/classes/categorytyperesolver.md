**[Content Management System](../README.md)**

> [Globals](../globals.md) / CategoryTypeResolver

# Class: CategoryTypeResolver

CategoryType Resolver

## Hierarchy

* **CategoryTypeResolver**

## Index

### Constructors

* [constructor](categorytyperesolver.md#constructor)

### Properties

* [categoryService](categorytyperesolver.md#categoryservice)
* [categoryTypeService](categorytyperesolver.md#categorytypeservice)
* [contentService](categorytyperesolver.md#contentservice)

### Methods

* [categories](categorytyperesolver.md#categories)
* [categoryTypes](categorytyperesolver.md#categorytypes)
* [contents](categorytyperesolver.md#contents)
* [createCategoryType](categorytyperesolver.md#createcategorytype)
* [deleteCategoryType](categorytyperesolver.md#deletecategorytype)
* [getCategoryTypeById](categorytyperesolver.md#getcategorytypebyid)
* [updateCategoryType](categorytyperesolver.md#updatecategorytype)

## Constructors

### constructor

\+ **new CategoryTypeResolver**(`categoryTypeService`: [CategoryTypeService](categorytypeservice.md), `categoryService`: [CategoryService](categoryservice.md), `contentService`: [ContentService](contentservice.md)): [CategoryTypeResolver](categorytyperesolver.md)

*Defined in [src/category-type/categoryType.resolver.ts:28](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L28)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`categoryTypeService` | [CategoryTypeService](categorytypeservice.md) | We injected this service to perform CRUD on `categoryType`. |
`categoryService` | [CategoryService](categoryservice.md) | We injected this service to get categories of specific `categoryType`. |
`contentService` | [ContentService](contentservice.md) | We injected this service to get contents of a `categoryTypes`  |

**Returns:** [CategoryTypeResolver](categorytyperesolver.md)

## Properties

### categoryService

• `Private` `Readonly` **categoryService**: [CategoryService](categoryservice.md)

*Defined in [src/category-type/categoryType.resolver.ts:38](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L38)*

We injected this service to get categories of specific `categoryType`.

___

### categoryTypeService

• `Private` `Readonly` **categoryTypeService**: [CategoryTypeService](categorytypeservice.md)

*Defined in [src/category-type/categoryType.resolver.ts:36](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L36)*

We injected this service to perform CRUD on `categoryType`.

___

### contentService

• `Private` `Readonly` **contentService**: [ContentService](contentservice.md)

*Defined in [src/category-type/categoryType.resolver.ts:39](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L39)*

We injected this service to get contents of a `categoryTypes`

## Methods

### categories

▸ **categories**(`categoryType`: [CategoryType](../interfaces/categorytype.md), `filter`: [CategoryFilter](../interfaces/categoryfilter.md), `orderBy`: [CategoryOrderFields](../interfaces/categoryorderfields.md)[], `page`: number): Promise\<[Category](../interfaces/category.md)[]>

*Defined in [src/category-type/categoryType.resolver.ts:64](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L64)*

categories Field Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`categoryType` | [CategoryType](../interfaces/categorytype.md) | Parent object and we need the id(categoryType id). |
`filter` | [CategoryFilter](../interfaces/categoryfilter.md) | We can filter categories using an object and available fields in `CategoryFilter`. |
`orderBy` | [CategoryOrderFields](../interfaces/categoryorderfields.md)[] | We can sort categories by passing an array of fields with values of `asc` and `desc`. |
`page` | number | number that we use in pagination.  |

**Returns:** Promise\<[Category](../interfaces/category.md)[]>

___

### categoryTypes

▸ **categoryTypes**(`page`: number, `filter`: [CategoryTypeFilter](../interfaces/categorytypefilter.md)): Promise\<[CategoryType](../interfaces/categorytype.md)[]>

*Defined in [src/category-type/categoryType.resolver.ts:49](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L49)*

Resolves `categoryTypes`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`page` | number | number that we use for pagination |
`filter` | [CategoryTypeFilter](../interfaces/categorytypefilter.md) | filter category types based on available fields on `CategoryTypeFilter` |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)[]>

A promise which resolves an array of `categoryTypes`

___

### contents

▸ **contents**(`categoryType`: [CategoryType](../interfaces/categorytype.md), `filter`: [ContentFilter](../interfaces/contentfilter.md), `page`: number, `orderBy`: [ContentOrderFields](../interfaces/contentorderfields.md)[]): Promise\<[Content](../interfaces/content.md)[]>

*Defined in [src/category-type/categoryType.resolver.ts:86](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L86)*

Resolve `contents` field based on parameters

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`categoryType` | [CategoryType](../interfaces/categorytype.md) | We get the id of parent by using `@Parent` decorator and we pass it to `getContents` to get the contents of specific `categoryTypes` |
`filter` | [ContentFilter](../interfaces/contentfilter.md) | filters contents based on different fileds - string fields have options like `startWith`, `endsWith` and `contains` |
`page` | number | a number that defines the page user want to see |
`orderBy` | [ContentOrderFields](../interfaces/contentorderfields.md)[] | an array of fields that user can define each field should be sorted `desc` or `asc` (descending or asending) |

**Returns:** Promise\<[Content](../interfaces/content.md)[]>

a promise which resolves an array of contents

___

### createCategoryType

▸ **createCategoryType**(`name`: string): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.resolver.ts:120](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L120)*

Create a new CategoryType Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the categoryType we want to create. |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves the created CategoryType

___

### deleteCategoryType

▸ **deleteCategoryType**(`id`: number): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.resolver.ts:132](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L132)*

Delete a CategoryType by Id Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of `categoryType` that we want to delete |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves the deleted `categoryType`

___

### getCategoryTypeById

▸ **getCategoryTypeById**(`id`: number): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.resolver.ts:108](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L108)*

Resolve CategoryType by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of `categoryType` that we want to get. |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves a `categoryType`

___

### updateCategoryType

▸ **updateCategoryType**(`id`: number, `name`: string): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.resolver.ts:145](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.resolver.ts#L145)*

Update a CategoryType Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | id of the `categoryType` we want to update |
`name` | string | new name of the `categoryType` |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves the updated `categoryType`
