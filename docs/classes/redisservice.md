**[Content Management System](../README.md)**

> [Globals](../globals.md) / RedisService

# Class: RedisService

In this class we implemented a `Singleton` design pattern so user can use only one instance of `Redis`

## Hierarchy

* **RedisService**

## Index

### Constructors

* [constructor](redisservice.md#constructor)

### Properties

* [config](redisservice.md#config)
* [instance](redisservice.md#instance)

### Methods

* [getRedisClient](redisservice.md#getredisclient)

## Constructors

### constructor

\+ **new RedisService**(): [RedisService](redisservice.md)

*Defined in [src/redis/redis.service.ts:12](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/redis/redis.service.ts#L12)*

**Returns:** [RedisService](redisservice.md)

## Properties

### config

•  **config**: any = null

*Defined in [src/redis/redis.service.ts:12](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/redis/redis.service.ts#L12)*

___

### instance

▪ `Static` `Private` **instance**: any = null

*Defined in [src/redis/redis.service.ts:11](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/redis/redis.service.ts#L11)*

## Methods

### getRedisClient

▸ **getRedisClient**(): RedisInterface

*Defined in [src/redis/redis.service.ts:19](https://github.com/simra-co/content-white-label-api/blob/4c549b3/src/redis/redis.service.ts#L19)*

This is the method that we should call if we want to access `RedisClient`

**Returns:** RedisInterface
