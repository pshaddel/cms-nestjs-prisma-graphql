**[Content Management System](../README.md)**

> [Globals](../globals.md) / RoleResolver

# Class: RoleResolver

## Hierarchy

* **RoleResolver**

## Index

### Constructors

* [constructor](roleresolver.md#constructor)

### Properties

* [roleService](roleresolver.md#roleservice)

### Methods

* [createRole](roleresolver.md#createrole)
* [deleteRole](roleresolver.md#deleterole)
* [roles](roleresolver.md#roles)
* [updateRole](roleresolver.md#updaterole)
* [users](roleresolver.md#users)

## Constructors

### constructor

\+ **new RoleResolver**(`roleService`: [RoleService](roleservice.md)): [RoleResolver](roleresolver.md)

*Defined in [src/role/role.resolver.ts:15](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`roleService` | [RoleService](roleservice.md) |

**Returns:** [RoleResolver](roleresolver.md)

## Properties

### roleService

• `Private` `Readonly` **roleService**: [RoleService](roleservice.md)

*Defined in [src/role/role.resolver.ts:16](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L16)*

## Methods

### createRole

▸ **createRole**(`name`: string): Promise\<[Role](../interfaces/role.md)>

*Defined in [src/role/role.resolver.ts:39](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L39)*

Create role
This resolver is protected by AuthGuard and only `admins` can access it.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | This is the role name. |

**Returns:** Promise\<[Role](../interfaces/role.md)>

A promise which resolves the created role or throw an exception

___

### deleteRole

▸ **deleteRole**(`id`: number): Promise\<[Role](../interfaces/role.md)>

*Defined in [src/role/role.resolver.ts:52](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L52)*

Delete role
This resolver is protected by AuthGuard and only `admins` can access it.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | This is the role id. |

**Returns:** Promise\<[Role](../interfaces/role.md)>

A promise which resolves the deleted role or throw an exception

___

### roles

▸ **roles**(): Promise\<[Role](../interfaces/role.md)[]>

*Defined in [src/role/role.resolver.ts:26](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L26)*

Resolve roles
This resolver is protected by AuthGuard and only users and admins can access it.

**Returns:** Promise\<[Role](../interfaces/role.md)[]>

A promise which resolves an array of roles

___

### updateRole

▸ **updateRole**(`name`: string, `id`: number): Promise\<[Role](../interfaces/role.md)>

*Defined in [src/role/role.resolver.ts:66](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L66)*

Update role
This resolver is protected by AuthGuard and only `admins` can access it.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`name` | string | This is the role name. |
`id` | number | - |

**Returns:** Promise\<[Role](../interfaces/role.md)>

A promise which resolves the updated role or throw an exception

___

### users

▸ **users**(`role`: [Role](../interfaces/role.md), `page`: number, `filter`: [UserFilter](../interfaces/userfilter.md), `orderBy`: [UserOrderFields](../interfaces/userorderfields.md)[]): Promise\<[User](../interfaces/user.md)[]>

*Defined in [src/role/role.resolver.ts:82](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/role/role.resolver.ts#L82)*

users Field Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`role` | [Role](../interfaces/role.md) | We get `role` using `@Parent` decorator to get users of specific |
`page` | number | a number that we use for pagination |
`filter` | [UserFilter](../interfaces/userfilter.md) | filter users by available fields on `UserFilter` |
`orderBy` | [UserOrderFields](../interfaces/userorderfields.md)[] | sort users by an array of `UserOrderFields` |

**Returns:** Promise\<[User](../interfaces/user.md)[]>

A promise which resolves an array of users
