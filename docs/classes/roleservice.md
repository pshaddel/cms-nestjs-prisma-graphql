**[Content Management System](../README.md)**

> [Globals](../globals.md) / RoleService

# Class: RoleService

## Hierarchy

* **RoleService**

## Index

### Constructors

* [constructor](roleservice.md#constructor)

### Properties

* [prisma](roleservice.md#prisma)
* [userService](roleservice.md#userservice)

### Methods

* [createUserRole](roleservice.md#createuserrole)
* [deleteRole](roleservice.md#deleterole)
* [getUsersOfRole](roleservice.md#getusersofrole)
* [roles](roleservice.md#roles)
* [updateUserRole](roleservice.md#updateuserrole)

## Constructors

### constructor

\+ **new RoleService**(`prisma`: [PrismaService](prismaservice.md), `userService`: [UserService](userservice.md)): [RoleService](roleservice.md)

*Defined in [src/role/role.service.ts:7](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`prisma` | [PrismaService](prismaservice.md) |
`userService` | [UserService](userservice.md) |

**Returns:** [RoleService](roleservice.md)

## Properties

### prisma

• `Private` `Readonly` **prisma**: [PrismaService](prismaservice.md)

*Defined in [src/role/role.service.ts:9](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L9)*

___

### userService

• `Private` `Readonly` **userService**: [UserService](userservice.md)

*Defined in [src/role/role.service.ts:10](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L10)*

## Methods

### createUserRole

▸ **createUserRole**(`roleName`: string): Promise\<[Role](../interfaces/role.md)>

*Defined in [src/role/role.service.ts:51](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L51)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`roleName` | string | A string is the only property of a role. |

**Returns:** Promise\<[Role](../interfaces/role.md)>

This method returns a promise that resolves a Role or throw an exception.

___

### deleteRole

▸ **deleteRole**(`id`: number): Promise\<[Role](../interfaces/role.md) \| null>

*Defined in [src/role/role.service.ts:104](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L104)*

This method deletes a role by `id`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of the role we want to delete |

**Returns:** Promise\<[Role](../interfaces/role.md) \| null>

A promise which returns the deleted role

___

### getUsersOfRole

▸ **getUsersOfRole**(`__namedParameters`: { filter: any ; orderBy: any ; page: any ; roleId: any  }): Promise\<[User](../interfaces/user.md)[]>

*Defined in [src/role/role.service.ts:23](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L23)*

This method gets users with specific roleId

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { filter: any ; orderBy: any ; page: any ; roleId: any  } |

**Returns:** Promise\<[User](../interfaces/user.md)[]>

___

### roles

▸ **roles**(): Promise\<[Role](../interfaces/role.md)[]>

*Defined in [src/role/role.service.ts:16](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L16)*

Get Roles

**Returns:** Promise\<[Role](../interfaces/role.md)[]>

A promise which resolves an array of roles

___

### updateUserRole

▸ **updateUserRole**(`id`: number, `roleName`: string): Promise\<[Role](../interfaces/role.md)>

*Defined in [src/role/role.service.ts:79](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.service.ts#L79)*

`UpdateUserRole` is a method that will change a role name

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | - |
`roleName` | string | The new name of the role |

**Returns:** Promise\<[Role](../interfaces/role.md)>

A promise that resolves a Role or throw an exception.
