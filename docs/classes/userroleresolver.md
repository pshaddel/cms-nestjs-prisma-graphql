**[Content Management System](../README.md)**

> [Globals](../globals.md) / UserRoleResolver

# Class: UserRoleResolver

## Hierarchy

* **UserRoleResolver**

## Index

### Constructors

* [constructor](userroleresolver.md#constructor)

### Properties

* [userRoleService](userroleresolver.md#userroleservice)

### Methods

* [createUserRole](userroleresolver.md#createuserrole)
* [deleteUserRole](userroleresolver.md#deleteuserrole)
* [role](userroleresolver.md#role)
* [userRoleById](userroleresolver.md#userrolebyid)
* [usersRoles](userroleresolver.md#usersroles)

## Constructors

### constructor

\+ **new UserRoleResolver**(`userRoleService`: [UserRoleService](userroleservice.md)): [UserRoleResolver](userroleresolver.md)

*Defined in [src/user-role/userRole.resolver.ts:15](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L15)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userRoleService` | [UserRoleService](userroleservice.md) | We injected userRoleService to do CRUD operations  |

**Returns:** [UserRoleResolver](userroleresolver.md)

## Properties

### userRoleService

• `Private` `Readonly` **userRoleService**: [UserRoleService](userroleservice.md)

*Defined in [src/user-role/userRole.resolver.ts:19](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L19)*

We injected userRoleService to do CRUD operations

## Methods

### createUserRole

▸ **createUserRole**(`user_id`: number, `role_id`: number): Promise\<[UserRole](../interfaces/userrole.md)>

*Defined in [src/user-role/userRole.resolver.ts:67](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L67)*

Create User Role Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`user_id` | number | the user id |
`role_id` | number | the role id  |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)>

___

### deleteUserRole

▸ **deleteUserRole**(`userRoleId`: number): Promise\<[UserRole](../interfaces/userrole.md)>

*Defined in [src/user-role/userRole.resolver.ts:55](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L55)*

Delete a role of a user Mutation

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userRoleId` | number | userRoleId that we want to delete  |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)>

___

### role

▸ **role**(`userRole`: [UserRole](../interfaces/userrole.md)): Promise\<role>

*Defined in [src/user-role/userRole.resolver.ts:81](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L81)*

Role Field Resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userRole` | [UserRole](../interfaces/userrole.md) | Get `userRole` id by using `@Parent` decorator  |

**Returns:** Promise\<role>

___

### userRoleById

▸ **userRoleById**(`id`: number): Promise\<[UserRole](../interfaces/userrole.md)[]>

*Defined in [src/user-role/userRole.resolver.ts:44](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L44)*

Resolve roles of specific `userId`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | the user id |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)[]>

A promise which resolves a `userRole` or `null`

___

### usersRoles

▸ **usersRoles**(`page`: number, `filter`: [UserRoleFilter](../interfaces/userrolefilter.md)): Promise\<[UserRole](../interfaces/userrole.md)[]>

*Defined in [src/user-role/userRole.resolver.ts:29](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.resolver.ts#L29)*

Resolve UserRoles by `filter` and `page`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`page` | number | a number we use for pagination |
`filter` | [UserRoleFilter](../interfaces/userrolefilter.md) | filter user roles  |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)[]>
