**[Content Management System](../README.md)**

> [Globals](../globals.md) / AuthGuard

# Class: AuthGuard

## Hierarchy

* **AuthGuard**

## Implements

* CanActivate

## Index

### Constructors

* [constructor](authguard.md#constructor)

### Properties

* [reflector](authguard.md#reflector)
* [userService](authguard.md#userservice)

### Methods

* [canActivate](authguard.md#canactivate)
* [checkRoles](authguard.md#checkroles)

## Constructors

### constructor

\+ **new AuthGuard**(`userService`: [UserService](userservice.md), `reflector`: Reflector): [AuthGuard](authguard.md)

*Defined in [src/user/auth.guard.ts:13](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/auth.guard.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`userService` | [UserService](userservice.md) |
`reflector` | Reflector |

**Returns:** [AuthGuard](authguard.md)

## Properties

### reflector

• `Private` `Readonly` **reflector**: Reflector

*Defined in [src/user/auth.guard.ts:16](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/auth.guard.ts#L16)*

___

### userService

• `Private` `Readonly` **userService**: [UserService](userservice.md)

*Defined in [src/user/auth.guard.ts:15](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/auth.guard.ts#L15)*

## Methods

### canActivate

▸ **canActivate**(`context`: ExecutionContext): Promise\<boolean>

*Defined in [src/user/auth.guard.ts:24](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/auth.guard.ts#L24)*

This method is in guard's interface and we have to  override it to let user access to a resolver or prevent the user from accessing

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`context` | ExecutionContext | The first input is `context` which is an object that we can set metadata using NestJS |

**Returns:** Promise\<boolean>

- a boolean - true means user have access and false means the user does not have access

___

### checkRoles

▸ **checkRoles**(`context`: ExecutionContext, `userRoles`: [string]): boolean

*Defined in [src/user/auth.guard.ts:53](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user/auth.guard.ts#L53)*

This method checks if user has access or not based on its roles.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`context` | ExecutionContext | The first input is `context` which is an object that we can set metadata using NestJS |
`userRoles` | [string] | The second input is an array of strings which contains the roles like `admin` or `user` |

**Returns:** boolean

- a boolean - true means user have access and false means the user does not have access
