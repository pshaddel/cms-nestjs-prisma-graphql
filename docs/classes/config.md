**[Content Management System](../README.md)**

> [Globals](../globals.md) / Config

# Class: Config

Returns Configs class based on environment variables.

## Hierarchy

* **Config**

## Index

### Properties

* [hashSecret](config.md#hashsecret)
* [port](config.md#port)
* [redisHost](config.md#redishost)
* [redisPort](config.md#redisport)
* [serverAddress](config.md#serveraddress)

## Properties

### hashSecret

• `Readonly` **hashSecret**: string = process.env.HASH\_SECRET \|\| '\<m}KSaUyl29?sr})Y7Vp0hqclRZ+E1\<3wP{2feD)+{#z#m+sHx),C[fKV6o~1\_T'

*Defined in [src/config/config.service.ts:27](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/config/config.service.ts#L27)*

`hashSecret` is the secret key used to hash passwords using crypto

___

### port

• `Readonly` **port**: number = Number(process.env.PORT) \|\| 3000

*Defined in [src/config/config.service.ts:10](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/config/config.service.ts#L10)*

`port` is the port which app is listening on

___

### redisHost

• `Readonly` **redisHost**: string = process.env.REDIS\_HOST \|\| 'localhost'

*Defined in [src/config/config.service.ts:16](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/config/config.service.ts#L16)*

___

### redisPort

• `Readonly` **redisPort**: number = Number(process.env.REDIS\_PORT) \|\| 6379

*Defined in [src/config/config.service.ts:14](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/config/config.service.ts#L14)*

`redisPort` is the port which used for Redis - default value is `6379`

___

### serverAddress

• `Readonly` **serverAddress**: string = process.env.SERVER\_ADDRESS \|\| \`http://localhost:${this.port}/\`

*Defined in [src/config/config.service.ts:21](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/config/config.service.ts#L21)*

`serverAddress` the address and it contains `port` too
