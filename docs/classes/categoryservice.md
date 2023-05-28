**[Content Management System](../README.md)**

> [Globals](../globals.md) / CategoryService

# Class: CategoryService

## Hierarchy

* **CategoryService**

## Index

### Constructors

* [constructor](categoryservice.md#constructor)

### Properties

* [prisma](categoryservice.md#prisma)

### Methods

* [createCategory](categoryservice.md#createcategory)
* [deleteCategory](categoryservice.md#deletecategory)
* [getCategories](categoryservice.md#getcategories)
* [getCategoryById](categoryservice.md#getcategorybyid)
* [getCategoryTypes](categoryservice.md#getcategorytypes)
* [updateCategory](categoryservice.md#updatecategory)

## Constructors

### constructor

\+ **new CategoryService**(`prisma`: [PrismaService](prismaservice.md)): [CategoryService](categoryservice.md)

*Defined in [src/category/category.service.ts:6](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`prisma` | [PrismaService](prismaservice.md) |

**Returns:** [CategoryService](categoryservice.md)

## Properties

### prisma

• `Private` `Readonly` **prisma**: [PrismaService](prismaservice.md)

*Defined in [src/category/category.service.ts:7](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L7)*

## Methods

### createCategory

▸ **createCategory**(`category`: [CategoryArgs](../interfaces/categoryargs.md)): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.service.ts:47](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L47)*

create a new category service

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`category` | [CategoryArgs](../interfaces/categoryargs.md) | an object containing the required fields of creating a category and the categoryType |

**Returns:** Promise\<[Category](../interfaces/category.md)>

a promise which resolves the created category

___

### deleteCategory

▸ **deleteCategory**(`id`: number): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.service.ts:85](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L85)*

Delete a category by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | category id that we want to delete. |

**Returns:** Promise\<[Category](../interfaces/category.md)>

Returns a promise which resolves the deleted category

___

### getCategories

▸ **getCategories**(`__namedParameters`: { filter: any ; orderBy: any ; page: any  }): Promise\<[Category](../interfaces/category.md)[]>

*Defined in [src/category/category.service.ts:14](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L14)*

Get categories by `page`, `filter` and sort them using `orderBy`

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { filter: any ; orderBy: any ; page: any  } |

**Returns:** Promise\<[Category](../interfaces/category.md)[]>

a promise which resolves an array of categories

___

### getCategoryById

▸ **getCategoryById**(`id`: number): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.service.ts:38](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L38)*

Get Category by  Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | `categoryId` is a number. |

**Returns:** Promise\<[Category](../interfaces/category.md)>

a promise which resolves a Category.

___

### getCategoryTypes

▸ **getCategoryTypes**(`page`: number): Promise\<[CategoryType](../interfaces/categorytype.md)[]>

*Defined in [src/category/category.service.ts:27](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L27)*

Get CategoryTypes

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`page` | number | a number that we use for pagination. |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)[]>

Returns a promise which resolves an array of `categoryType`.

___

### updateCategory

▸ **updateCategory**(`__namedParameters`: { category: any ; id: any  }): Promise\<[Category](../interfaces/category.md)>

*Defined in [src/category/category.service.ts:113](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category/category.service.ts#L113)*

update a new category

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { category: any ; id: any  } |

**Returns:** Promise\<[Category](../interfaces/category.md)>

a promise which resolves the updated category
