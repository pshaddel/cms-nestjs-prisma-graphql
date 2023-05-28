**[Content Management System](../README.md)**

> [Globals](../globals.md) / UserRoleService

# Class: UserRoleService

## Hierarchy

* **UserRoleService**

## Index

### Constructors

* [constructor](userroleservice.md#constructor)

### Properties

* [prisma](userroleservice.md#prisma)

### Methods

* [createUserRole](userroleservice.md#createuserrole)
* [deleteUserRole](userroleservice.md#deleteuserrole)
* [getRole](userroleservice.md#getrole)
* [getUserRoleById](userroleservice.md#getuserrolebyid)
* [roles](userroleservice.md#roles)

## Constructors

### constructor

\+ **new UserRoleService**(`prisma`: [PrismaService](prismaservice.md)): [UserRoleService](userroleservice.md)

*Defined in [src/user-role/userRole.service.ts:6](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L6)*

#### Parameters:

Name | Type |
------ | ------ |
`prisma` | [PrismaService](prismaservice.md) |

**Returns:** [UserRoleService](userroleservice.md)

## Properties

### prisma

• `Private` `Readonly` **prisma**: [PrismaService](prismaservice.md)

*Defined in [src/user-role/userRole.service.ts:7](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L7)*

## Methods

### createUserRole

▸ **createUserRole**(`__namedParameters`: { role_id: any ; user_id: any  }): Promise\<[UserRole](../interfaces/userrole.md)>

*Defined in [src/user-role/userRole.service.ts:34](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L34)*

This method connects a user to a role

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { role_id: any ; user_id: any  } |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)>

___

### deleteUserRole

▸ **deleteUserRole**(`userRoleId`: number): Promise\<[UserRole](../interfaces/userrole.md)>

*Defined in [src/user-role/userRole.service.ts:73](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L73)*

This method deletes a record from `user_role` table

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`userRoleId` | number | this is the `userRoleId`  |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)>

___

### getRole

▸ **getRole**(`role_id`: number): Prisma\_\_roleClient\<[role](prismaservice.md#role)>

*Defined in [src/user-role/userRole.service.ts:101](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L101)*

Get Role by role_id

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`role_id` | number |   |

**Returns:** Prisma\_\_roleClient\<[role](prismaservice.md#role)>

___

### getUserRoleById

▸ **getUserRoleById**(`id`: number): Promise\<[UserRole](../interfaces/userrole.md)[]>

*Defined in [src/user-role/userRole.service.ts:24](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L24)*

This method returns userRoles of a userId

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`id` | number | this is the user id |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)[]>

A promise which resolves an arraay of userRoles

___

### roles

▸ **roles**(`__namedParameters`: { filter: any ; page: any  }): Promise\<[UserRole](../interfaces/userrole.md)[]>

*Defined in [src/user-role/userRole.service.ts:13](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/user-role/userRole.service.ts#L13)*

This method get roles by `filter` and `page`

#### Parameters:

Name | Type |
------ | ------ |
`__namedParameters` | { filter: any ; page: any  } |

**Returns:** Promise\<[UserRole](../interfaces/userrole.md)[]>

A promise which resolves an array of userRoles
