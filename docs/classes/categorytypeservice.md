**[Content Management System](../README.md)**

> [Globals](../globals.md) / CategoryTypeService

# Class: CategoryTypeService

## Hierarchy

* **CategoryTypeService**

## Index

### Constructors

* [constructor](categorytypeservice.md#constructor)

### Properties

* [prisma](categorytypeservice.md#prisma)

### Methods

* [createCategoryType](categorytypeservice.md#createcategorytype)
* [deleteCategoryType](categorytypeservice.md#deletecategorytype)
* [getCategoryTypeById](categorytypeservice.md#getcategorytypebyid)
* [getCategoryTypes](categorytypeservice.md#getcategorytypes)
* [updateCategoryType](categorytypeservice.md#updatecategorytype)

## Constructors

### constructor

\+ **new CategoryTypeService**(`prisma`: [PrismaService](prismaservice.md)): [CategoryTypeService](categorytypeservice.md)

*Defined in [src/category-type/categoryType.service.ts:6](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`prisma` | [PrismaService](prismaservice.md) |

**Returns:** [CategoryTypeService](categorytypeservice.md)

## Properties

### prisma

• `Private` `Readonly` **prisma**: [PrismaService](prismaservice.md)

*Defined in [src/category-type/categoryType.service.ts:7](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L7)*

## Methods

### createCategoryType

▸ **createCategoryType**(`name`: string): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.service.ts:37](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L37)*

Create a new CategoryType

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | name of the categoryType we want to create. |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves the created CategoryType

___

### deleteCategoryType

▸ **deleteCategoryType**(`id`: number): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.service.ts:48](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L48)*

Delete a CategoryType by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of `categoryType` that we want to delete |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves the deleted `categoryType`

___

### getCategoryTypeById

▸ **getCategoryTypeById**(`id`: number): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.service.ts:26](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L26)*

get CategoryType by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of `categoryType` that we want to get. |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves a `categoryType`

___

### getCategoryTypes

▸ **getCategoryTypes**(`__namedParameters`: { filter: any ; page: any  }): Promise\<[CategoryType](../interfaces/categorytype.md)[]>

*Defined in [src/category-type/categoryType.service.ts:14](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L14)*

get `categoryTypes`

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { filter: any ; page: any  } |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)[]>

A promise which resolves an array of `categoryTypes`

___

### updateCategoryType

▸ **updateCategoryType**(`__namedParameters`: { id: any ; name: any  }): Promise\<[CategoryType](../interfaces/categorytype.md)>

*Defined in [src/category-type/categoryType.service.ts:76](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/category-type/categoryType.service.ts#L76)*

Update a CategoryType

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { id: any ; name: any  } |

**Returns:** Promise\<[CategoryType](../interfaces/categorytype.md)>

A promise which resolves the updated `categoryType`
