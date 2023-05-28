**[Content Management System](../README.md)**

> [Globals](../globals.md) / UserResolver

# Class: UserResolver

Reslove Users

## Hierarchy

* **UserResolver**

## Index

### Constructors

* [constructor](userresolver.md#constructor)

### Properties

* [userService](userresolver.md#userservice)

### Methods

* [createUser](userresolver.md#createuser)
* [deleteUser](userresolver.md#deleteuser)
* [isLogin](userresolver.md#islogin)
* [login](userresolver.md#login)
* [logout](userresolver.md#logout)
* [profile](userresolver.md#profile)
* [updateUser](userresolver.md#updateuser)
* [userById](userresolver.md#userbyid)
* [userRoles](userresolver.md#userroles)
* [users](userresolver.md#users)

## Constructors

### constructor

\+ **new UserResolver**(`userService`: [UserService](userservice.md)): [UserResolver](userresolver.md)

*Defined in [src/user/user.resolver.ts:25](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L25)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userService` | [UserService](userservice.md) | We injected userService to do operations on DB using this service  |

**Returns:** [UserResolver](userresolver.md)

## Properties

### userService

• `Private` `Readonly` **userService**: [UserService](userservice.md)

*Defined in [src/user/user.resolver.ts:29](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L29)*

We injected userService to do operations on DB using this service

## Methods

### createUser

▸ **createUser**(`user`: [UserCreateArgs](../interfaces/usercreateargs.md)): Promise\<[User](../interfaces/user.md)>

*Defined in [src/user/user.resolver.ts:90](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L90)*

Create User Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`user` | [UserCreateArgs](../interfaces/usercreateargs.md) | an object containing required fields and some of optional fields we need to create a user  |

**Returns:** Promise\<[User](../interfaces/user.md)>

___

### deleteUser

▸ **deleteUser**(`id`: number): Promise\<[User](../interfaces/user.md)>

*Defined in [src/user/user.resolver.ts:137](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L137)*

Delete a User by Id Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of the user we want to delete  |

**Returns:** Promise\<[User](../interfaces/user.md)>

___

### isLogin

▸ **isLogin**(`token`: string): Promise\<boolean>

*Defined in [src/user/user.resolver.ts:146](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L146)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | string | check if user token is valid or not |

**Returns:** Promise\<boolean>

A promise which resolves a boolean

___

### login

▸ **login**(`password`: string, `mobile`: string): Promise\<{ token: string  }>

*Defined in [src/user/user.resolver.ts:115](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L115)*

A mutation that make user login by creating a token

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`password` | string | user password |
`mobile` | string | user mobile  |

**Returns:** Promise\<{ token: string  }>

___

### logout

▸ **logout**(`token`: string): Promise\<boolean>

*Defined in [src/user/user.resolver.ts:127](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L127)*

Destroys user jwt token - Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`token` | string | a jwt token that user got from login resolver  |

**Returns:** Promise\<boolean>

___

### profile

▸ **profile**(`user`: [User](../interfaces/user.md)): Promise\<[User](../interfaces/user.md) \| null>

*Defined in [src/user/user.resolver.ts:67](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L67)*

Resolve a user profile by using its token

#### Parameters:

Name | Type |
------ | ------ |
`user` | [User](../interfaces/user.md) |

**Returns:** Promise\<[User](../interfaces/user.md) \| null>

A promise which returns a `User` or `null`

___

### updateUser

▸ **updateUser**(`id`: number, `user`: [UserUpdateArgs](../interfaces/userupdateargs.md)): Promise\<[User](../interfaces/user.md)>

*Defined in [src/user/user.resolver.ts:102](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L102)*

Update User Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the id of the user we want to update |
`user` | [UserUpdateArgs](../interfaces/userupdateargs.md) | Object containing some of fields  |

**Returns:** Promise\<[User](../interfaces/user.md)>

___

### userById

▸ **userById**(`id`: number): Promise\<[User](../interfaces/user.md) \| null>

*Defined in [src/user/user.resolver.ts:56](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L56)*

Resolve a user by Id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | get user by id |

**Returns:** Promise\<[User](../interfaces/user.md) \| null>

A promise which returns a `User` or `null`

___

### userRoles

▸ **userRoles**(`user`: [User](../interfaces/user.md)): Promise\<[user\_role](prismaservice.md#user_role) & {}[]>

*Defined in [src/user/user.resolver.ts:79](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L79)*

roles Field Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`user` | [User](../interfaces/user.md) | we get user using `@Parent` decorator to find userRoles |

**Returns:** Promise\<[user\_role](prismaservice.md#user_role) & {}[]>

A promise which returns roles

___

### users

▸ **users**(`page`: number, `filter`: [UserFilter](../interfaces/userfilter.md), `orderBy`: [UserOrderFields](../interfaces/userorderfields.md)[]): Promise\<[User](../interfaces/user.md)[]>

*Defined in [src/user/user.resolver.ts:40](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/user.resolver.ts#L40)*

Resolve users

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`page` | number | a number we use for pagination |
`filter` | [UserFilter](../interfaces/userfilter.md) | filter users by available fields on `UserFilter` |
`orderBy` | [UserOrderFields](../interfaces/userorderfields.md)[] | An array user can pass to sort users  |

**Returns:** Promise\<[User](../interfaces/user.md)[]>
