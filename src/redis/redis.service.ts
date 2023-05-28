import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';
import { Redis as RedisInterface } from 'ioredis';
import { Config } from 'src/config/config.service';

/**
 * In this class we implemented a `Singleton` design pattern so user can use only one instance of `Redis`
 */
@Injectable()
export class RedisService {
  private static instance = null;
  config = null;
  constructor() {
    this.config = new Config();
  }
  /**
   * This is the method that we should call if we want to access `RedisClient`
   */
  getRedisClient(): RedisInterface {
    if (!RedisService.instance) {
      const client = new Redis({
        host: this.config.redisHost,
        port: this.config.redisPort
      });
      RedisService.instance = client;
      return client;
    } else {
      return RedisService.instance;
    }
  }
}
