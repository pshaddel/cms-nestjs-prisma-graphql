**[Content Management System](../README.md)**

> [Globals](../globals.md) / PrismaService

# Class: PrismaService

We use this class to execute queries and extends `PrismaClient` and we added a few methods that might be helpful.

## Hierarchy

* PrismaClient

  ↳ **PrismaService**

## Index

### Constructors

* [constructor](prismaservice.md#constructor)

### Properties

* [$transaction](prismaservice.md#$transaction)

### Accessors

* [category](prismaservice.md#category)
* [category\_type](prismaservice.md#category_type)
* [content](prismaservice.md#content)
* [content\_category](prismaservice.md#content_category)
* [content\_category\_category\_type](prismaservice.md#content_category_category_type)
* [role](prismaservice.md#role)
* [user](prismaservice.md#user)
* [user\_role](prismaservice.md#user_role)

### Methods

* [$connect](prismaservice.md#$connect)
* [$disconnect](prismaservice.md#$disconnect)
* [$executeRaw](prismaservice.md#$executeraw)
* [$on](prismaservice.md#$on)
* [$queryRaw](prismaservice.md#$queryraw)
* [$use](prismaservice.md#$use)
* [calculateOffsetLimit](prismaservice.md#calculateoffsetlimit)
* [now](prismaservice.md#now)

## Constructors

### constructor

\+ **new PrismaService**(`optionsArg?`: PrismaClientOptions): [PrismaService](prismaservice.md)

*Inherited from [PrismaService](prismaservice.md).[constructor](prismaservice.md#constructor)*

*Defined in [prisma/client/index.d.ts:321](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L321)*

##  Prisma Client ʲˢ

Type-safe database client for TypeScript & Node.js (ORM replacement)

**`example`** 
```
const prisma = new PrismaClient()
// Fetch zero or more Categories
const categories = await prisma.category.findMany()
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).

#### Parameters:

Name | Type |
------ | ------ |
`optionsArg?` | PrismaClientOptions |

**Returns:** [PrismaService](prismaservice.md)

## Properties

### $transaction

•  **$transaction**: PromiseConstructor[\"all\"]

*Inherited from [PrismaService](prismaservice.md).[$transaction](prismaservice.md#$transaction)*

*Defined in [prisma/client/index.d.ts:395](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L395)*

Execute queries in a transaction

**`example`** 
```
const [george, bob, alice] = await prisma.transaction([
  prisma.user.create({ data: { name: 'George' } }),
  prisma.user.create({ data: { name: 'Bob' } }),
  prisma.user.create({ data: { name: 'Alice' } }),
])
```

## Accessors

### category

• get **category**(): categoryDelegate

*Inherited from [PrismaService](prismaservice.md).[category](prismaservice.md#category)*

*Defined in [prisma/client/index.d.ts:405](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L405)*

`prisma.category`: Exposes CRUD operations for the **category** model.
Example usage:
```ts
// Fetch zero or more Categories
const categories = await prisma.category.findMany()
```

**Returns:** categoryDelegate

___

### category\_type

• get **category_type**(): category\_typeDelegate

*Inherited from [PrismaService](prismaservice.md).[category_type](prismaservice.md#category_type)*

*Defined in [prisma/client/index.d.ts:415](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L415)*

`prisma.category_type`: Exposes CRUD operations for the **category_type** model.
Example usage:
```ts
// Fetch zero or more Category_types
const category_types = await prisma.category_type.findMany()
```

**Returns:** category\_typeDelegate

___

### content

• get **content**(): contentDelegate

*Inherited from [PrismaService](prismaservice.md).[content](prismaservice.md#content)*

*Defined in [prisma/client/index.d.ts:425](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L425)*

`prisma.content`: Exposes CRUD operations for the **content** model.
Example usage:
```ts
// Fetch zero or more Contents
const contents = await prisma.content.findMany()
```

**Returns:** contentDelegate

___

### content\_category

• get **content_category**(): content\_categoryDelegate

*Inherited from [PrismaService](prismaservice.md).[content_category](prismaservice.md#content_category)*

*Defined in [prisma/client/index.d.ts:435](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L435)*

`prisma.content_category`: Exposes CRUD operations for the **content_category** model.
Example usage:
```ts
// Fetch zero or more Content_categories
const content_categories = await prisma.content_category.findMany()
```

**Returns:** content\_categoryDelegate

___

### content\_category\_category\_type

• get **content_category_category_type**(): content\_category\_category\_typeDelegate

*Inherited from [PrismaService](prismaservice.md).[content_category_category_type](prismaservice.md#content_category_category_type)*

*Defined in [prisma/client/index.d.ts:475](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L475)*

`prisma.content_category_category_type`: Exposes CRUD operations for the **content_category_category_type** model.
Example usage:
```ts
// Fetch zero or more Content_category_category_types
const content_category_category_types = await prisma.content_category_category_type.findMany()
```

**Returns:** content\_category\_category\_typeDelegate

___

### role

• get **role**(): roleDelegate

*Inherited from [PrismaService](prismaservice.md).[role](prismaservice.md#role)*

*Defined in [prisma/client/index.d.ts:445](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L445)*

`prisma.role`: Exposes CRUD operations for the **role** model.
Example usage:
```ts
// Fetch zero or more Roles
const roles = await prisma.role.findMany()
```

**Returns:** roleDelegate

___

### user

• get **user**(): userDelegate

*Inherited from [PrismaService](prismaservice.md).[user](prismaservice.md#user)*

*Defined in [prisma/client/index.d.ts:455](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L455)*

`prisma.user`: Exposes CRUD operations for the **user** model.
Example usage:
```ts
// Fetch zero or more Users
const users = await prisma.user.findMany()
```

**Returns:** userDelegate

___

### user\_role

• get **user_role**(): user\_roleDelegate

*Inherited from [PrismaService](prismaservice.md).[user_role](prismaservice.md#user_role)*

*Defined in [prisma/client/index.d.ts:465](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L465)*

`prisma.user_role`: Exposes CRUD operations for the **user_role** model.
Example usage:
```ts
// Fetch zero or more User_roles
const user_roles = await prisma.user_role.findMany()
```

**Returns:** user\_roleDelegate

## Methods

### $connect

▸ **$connect**(): Promise\<void>

*Inherited from [PrismaService](prismaservice.md).[$connect](prismaservice.md#$connect)*

*Defined in [prisma/client/index.d.ts:344](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L344)*

Connect with the database

**Returns:** Promise\<void>

___

### $disconnect

▸ **$disconnect**(): Promise\<any>

*Inherited from [PrismaService](prismaservice.md).[$disconnect](prismaservice.md#$disconnect)*

*Defined in [prisma/client/index.d.ts:349](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L349)*

Disconnect from the database

**Returns:** Promise\<any>

___

### $executeRaw

▸ **$executeRaw**\<T>(`query`: string \| TemplateStringsArray \| Sql, ...`values`: any[]): Promise\<number>

*Inherited from [PrismaService](prismaservice.md).[$executeRaw](prismaservice.md#$executeraw)*

*Defined in [prisma/client/index.d.ts:368](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L368)*

Executes a raw query and returns the number of affected rows

**`example`** 
```
// With parameters use prisma.executeRaw``, values will be escaped automatically
const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
// Or
const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

#### Parameters:

Name | Type |
------ | ------ |
`query` | string \| TemplateStringsArray \| Sql |
`...values` | any[] |

**Returns:** Promise\<number>

___

### $on

▸ **$on**\<V>(`eventType`: V, `callback`: (event: V *extends* \"query\" ? Prisma.QueryEvent : Prisma.LogEvent) => void): void

*Inherited from [PrismaService](prismaservice.md).[$on](prismaservice.md#$on)*

*Defined in [prisma/client/index.d.ts:339](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L339)*

#### Type parameters:

Name | Type |
------ | ------ |
`V` | \"log\" *extends* keyof T ? T["log"] *extends* Array\<Prisma.LogLevel \| Prisma.LogDefinition> ? Prisma.GetEvents\<T["log"]> : never : never |

#### Parameters:

Name | Type |
------ | ------ |
`eventType` | V |
`callback` | (event: V *extends* \"query\" ? Prisma.QueryEvent : Prisma.LogEvent) => void |

**Returns:** void

___

### $queryRaw

▸ **$queryRaw**\<T>(`query`: string \| TemplateStringsArray \| Sql, ...`values`: any[]): Promise\<T>

*Inherited from [PrismaService](prismaservice.md).[$queryRaw](prismaservice.md#$queryraw)*

*Defined in [prisma/client/index.d.ts:382](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L382)*

Performs a raw query and returns the SELECT data

**`example`** 
```
// With parameters use prisma.queryRaw``, values will be escaped automatically
const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
// Or
const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
```

Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).

#### Type parameters:

Name | Default |
------ | ------ |
`T` | any |

#### Parameters:

Name | Type |
------ | ------ |
`query` | string \| TemplateStringsArray \| Sql |
`...values` | any[] |

**Returns:** Promise\<T>

___

### $use

▸ **$use**(`cb`: Prisma.Middleware): void

*Inherited from [PrismaService](prismaservice.md).[$use](prismaservice.md#$use)*

*Defined in [prisma/client/index.d.ts:354](https://github.com/simra-co/content-white-label-api/blob/4c549b3/prisma/client/index.d.ts#L354)*

Add a middleware

#### Parameters:

Name | Type |
------ | ------ |
`cb` | Prisma.Middleware |

**Returns:** void

___

### calculateOffsetLimit

▸ **calculateOffsetLimit**(`page`: number, `limit?`: null \| number): object

*Defined in [src/prisma/prisma.service.ts:14](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/prisma/prisma.service.ts#L14)*

This method creates `skip` and `take` by getting a `page` and `limit`

#### Parameters:

Name | Type | Default value | Description |
------ | ------ | ------ | ------ |
`page` | number | - | number that we use for pagination. it starts from `1` |
`limit` | null \| number | null | number of records we want to return  |

**Returns:** object

Name | Type |
------ | ------ |
`skip` | number |
`take` | number |

___

### now

▸ **now**(): Date

*Defined in [src/prisma/prisma.service.ts:32](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/prisma/prisma.service.ts#L32)*

Sometimes in order to fill fields like `created_at` or `updated_at` we need the time and this method do this:
```typescript
const time = this.prisma.now();
```

**Returns:** Date
