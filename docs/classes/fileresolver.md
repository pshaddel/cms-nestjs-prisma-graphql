**[Content Management System](../README.md)**

> [Globals](../globals.md) / FileResolver

# Class: FileResolver

## Hierarchy

* **FileResolver**

## Index

### Constructors

* [constructor](fileresolver.md#constructor)

### Properties

* [fileService](fileresolver.md#fileservice)

### Methods

* [audioUpload](fileresolver.md#audioupload)
* [imageUpload](fileresolver.md#imageupload)
* [videoUpload](fileresolver.md#videoupload)

## Constructors

### constructor

\+ **new FileResolver**(`fileService`: [FileService](fileservice.md)): [FileResolver](fileresolver.md)

*Defined in [src/file/file.resolver.ts:27](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.resolver.ts#L27)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`fileService` | [FileService](fileservice.md) | We want to use `fileService` using dependency injection  |

**Returns:** [FileResolver](fileresolver.md)

## Properties

### fileService

• `Private` **fileService**: [FileService](fileservice.md)

*Defined in [src/file/file.resolver.ts:32](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.resolver.ts#L32)*

We want to use `fileService` using dependency injection

## Methods

### audioUpload

▸ **audioUpload**(`file`: [File](../interfaces/file.md)): Promise\<[FileOutput](../interfaces/fileoutput.md)>

*Defined in [src/file/file.resolver.ts:43](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.resolver.ts#L43)*

We upload audios using `audioUpload` resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | [File](../interfaces/file.md) | uploaded file from request  |

**Returns:** Promise\<[FileOutput](../interfaces/fileoutput.md)>

___

### imageUpload

▸ **imageUpload**(`file`: [File](../interfaces/file.md)): Promise\<[FileOutput](../interfaces/fileoutput.md)>

*Defined in [src/file/file.resolver.ts:56](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.resolver.ts#L56)*

We upload audios using `imageUpload` resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | [File](../interfaces/file.md) | uploaded file from request  |

**Returns:** Promise\<[FileOutput](../interfaces/fileoutput.md)>

___

### videoUpload

▸ **videoUpload**(`file`: [File](../interfaces/file.md)): Promise\<[FileOutput](../interfaces/fileoutput.md)>

*Defined in [src/file/file.resolver.ts:69](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.resolver.ts#L69)*

We upload audios using `videoUpload` resolver

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | [File](../interfaces/file.md) | uploaded file from request  |

**Returns:** Promise\<[FileOutput](../interfaces/fileoutput.md)>
