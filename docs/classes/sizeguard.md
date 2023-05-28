**[Content Management System](../README.md)**

> [Globals](../globals.md) / SizeGuard

# Class: SizeGuard

SizeGaurd is a guard to prevent uploading large files based on metadata of `sizeLimit`

## Hierarchy

* **SizeGuard**

## Implements

* CanActivate

## Index

### Constructors

* [constructor](sizeguard.md#constructor)

### Properties

* [reflector](sizeguard.md#reflector)

### Methods

* [canActivate](sizeguard.md#canactivate)

## Constructors

### constructor

\+ **new SizeGuard**(`reflector`: Reflector): [SizeGuard](sizeguard.md)

*Defined in [src/file/SizeGuard.ts:14](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/SizeGuard.ts#L14)*

#### Parameters:

Name | Type |
------ | ------ |
`reflector` | Reflector |

**Returns:** [SizeGuard](sizeguard.md)

## Properties

### reflector

• `Private` `Readonly` **reflector**: Reflector

*Defined in [src/file/SizeGuard.ts:15](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/SizeGuard.ts#L15)*

## Methods

### canActivate

▸ **canActivate**(`context`: ExecutionContext): Promise\<boolean>

*Defined in [src/file/SizeGuard.ts:21](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/SizeGuard.ts#L21)*

`canActivate` is a method which returns `boolean` and if it returns `true` user can access to the resolver.

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`context` | ExecutionContext | context is an object that we can use to attatch data. |

**Returns:** Promise\<boolean>

`Promise<boolean>` returns a boolean
