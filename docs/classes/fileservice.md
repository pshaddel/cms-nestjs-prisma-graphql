**[Content Management System](../README.md)**

> [Globals](../globals.md) / FileService

# Class: FileService

FileService handles our file uploads

## Hierarchy

* **FileService**

## Index

### Constructors

* [constructor](fileservice.md#constructor)

### Properties

* [config](fileservice.md#config)

### Methods

* [createFileNameAndSubFolder](fileservice.md#createfilenameandsubfolder)
* [mkdirPromise](fileservice.md#mkdirpromise)
* [upload](fileservice.md#upload)

## Constructors

### constructor

\+ **new FileService**(`config`: [Config](config.md)): [FileService](fileservice.md)

*Defined in [src/file/file.service.ts:38](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.service.ts#L38)*

#### Parameters:

Name | Type |
------ | ------ |
`config` | [Config](config.md) |

**Returns:** [FileService](fileservice.md)

## Properties

### config

• `Private` `Readonly` **config**: [Config](config.md)

*Defined in [src/file/file.service.ts:39](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.service.ts#L39)*

## Methods

### createFileNameAndSubFolder

▸ **createFileNameAndSubFolder**(`filename`: string): object

*Defined in [src/file/file.service.ts:103](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.service.ts#L103)*

This method create `file name` and `subFolder` - `subFolder` after generating a random file name we use first 3 characters to create a `subFolder`. when we have numerous files dividing them in folders is a better idea

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`filename` | string | it is in the request and it contains `file name` and `extension`  |

**Returns:** object

Name | Type |
------ | ------ |
`newFileName` | string |
`subFolder` | string |

___

### mkdirPromise

▸ **mkdirPromise**(`path`: PathLike, `options`: MakeDirectoryOptions): Promise\<any>

*Defined in [src/file/file.service.ts:87](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.service.ts#L87)*

This method promisify the `fs.mkdir`

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`path` | PathLike | path of the folder we want to create(we usually create it using `path.join`) |
`options` | MakeDirectoryOptions | options we can pass to `fs.mkdir`  |

**Returns:** Promise\<any>

___

### upload

▸ **upload**(`file`: [Upload](../globals.md#upload), `type`: [FileType](../enums/filetype.md)): Promise\<[FileOutput](../interfaces/fileoutput.md)>

*Defined in [src/file/file.service.ts:46](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/file/file.service.ts#L46)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`file` | [Upload](../globals.md#upload) | user passes file in the body of the request. |
`type` | [FileType](../enums/filetype.md) | we create type in resolver it is an enum: `Image`, `Audio` and `Video` |

**Returns:** Promise\<[FileOutput](../interfaces/fileoutput.md)>

`Promise<FileOutput>`  returns an object which contains `path` which is an string and `error`.
