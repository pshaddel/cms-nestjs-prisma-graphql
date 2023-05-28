**[Content Management System](../README.md)**

> [Globals](../globals.md) / UserService

# Class: UserService

## Hierarchy

* **UserService**

## Index

### Constructors

* [constructor](userservice.md#constructor)

### Properties

* [config](userservice.md#config)
* [prisma](userservice.md#prisma)
* [redis](userservice.md#redis)

### Methods

* [createUser](userservice.md#createuser)
* [deleteUser](userservice.md#deleteuser)
* [findById](userservice.md#findbyid)
* [findUserRoles](userservice.md#finduserroles)
* [findUsers](userservice.md#findusers)
* [isLogin](userservice.md#islogin)
* [login](userservice.md#login)
* [logout](userservice.md#logout)
* [updateUser](userservice.md#updateuser)

## Constructors

### constructor

\+ **new UserService**(`prisma`: [PrismaService](prismaservice.md), `config`: [Config](config.md)): [UserService](userservice.md)

*Defined in [src/user/user.service.ts:29](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`prisma` | [PrismaService](prismaservice.md) |
`config` | [Config](config.md) |

**Returns:** [UserService](userservice.md)

## Properties

### config

• `Private` `Readonly` **config**: [Config](config.md)

*Defined in [src/user/user.service.ts:32](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L32)*

___

### prisma

• `Private` `Readonly` **prisma**: [PrismaService](prismaservice.md)

*Defined in [src/user/user.service.ts:31](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L31)*

___

### redis

• `Private` **redis**: Redis

*Defined in [src/user/user.service.ts:29](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L29)*

## Methods

### createUser

▸ **createUser**(`user`: [UserCreateArgs](../interfaces/usercreateargs.md)): Promise\<[User](../interfaces/user.md)>

*Defined in [src/user/user.service.ts:82](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L82)*

This method creates a user
Hashing passwords with the Node.js built-in [crypto](https://nodejs.org/api/crypto.html) module using SHA256 algorithm and a complicated secret key

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`user` | [UserCreateArgs](../interfaces/usercreateargs.md) | user Object that contains required fields and some optional fields |

**Returns:** Promise\<[User](../interfaces/user.md)>

A promise which returns the created user

___

### deleteUser

▸ **deleteUser**(`id`: number): Promise\<[User](../interfaces/user.md) \| null>

*Defined in [src/user/user.service.ts:234](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L234)*

This method deletes a user by `id`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of the user we want to delete |

**Returns:** Promise\<[User](../interfaces/user.md) \| null>

A promise which returns the deleted user

___

### findById

▸ **findById**(`id`: number): Promise\<[User](../interfaces/user.md) \| null>

*Defined in [src/user/user.service.ts:55](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L55)*

This method Finds a user by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id o the user |

**Returns:** Promise\<[User](../interfaces/user.md) \| null>

A promise which resolves a `User` or `null`

___

### findUserRoles

▸ **findUserRoles**(`id`: number): Promise\<[user\_role](prismaservice.md#user_role) & {}[]>

*Defined in [src/user/user.service.ts:65](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L65)*

This method gets `userRoles` of a user

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the user id  |

**Returns:** Promise\<[user\_role](prismaservice.md#user_role) & {}[]>

___

### findUsers

▸ **findUsers**(`args`: [GetUsersArgs](../globals.md#getusersargs)): Promise\<[User](../interfaces/user.md)[]>

*Defined in [src/user/user.service.ts:41](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L41)*

This method Find Users by Args

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`args` | [GetUsersArgs](../globals.md#getusersargs) | Args contain `page`, `filter`, `orderBy` |

**Returns:** Promise\<[User](../interfaces/user.md)[]>

A promise which resolves an array of users

___

### isLogin

▸ **isLogin**(`token`: string): Promise\<boolean>

*Defined in [src/user/user.service.ts:283](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L283)*

Check if token is valid or not

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | string | `jwt-token` |

**Returns:** Promise\<boolean>

A promise which resolves a boolean

___

### login

▸ **login**(`mobile`: string, `password`: string): Promise\<{ token: string  }>

*Defined in [src/user/user.service.ts:262](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L262)*

This method returns a `jwt token` if the user mobile and password matched

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`mobile` | string | mobile of the user |
`password` | string | password of the user |

**Returns:** Promise\<{ token: string  }>

`jwt-token` that let user make requests

___

### logout

▸ **logout**(`token`: string): Promise\<boolean>

*Defined in [src/user/user.service.ts:299](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L299)*

Logout user by Deleting its token from `Redis`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | string | `jwt-token` that user got fom login  |

**Returns:** Promise\<boolean>

___

### updateUser

▸ **updateUser**(`updateArgs`: [UserUpdateInput](../globals.md#userupdateinput)): Promise\<[User](../interfaces/user.md)>

*Defined in [src/user/user.service.ts:155](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.service.ts#L155)*

This method updates a user by `id`

#### Parameters:

Name | Type |
------ | ------ |
`updateArgs` | [UserUpdateInput](../globals.md#userupdateinput) |

**Returns:** Promise\<[User](../interfaces/user.md)>

A promise which returns the created user
