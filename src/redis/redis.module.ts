import { Module } from '@nestjs/common';
import { Config } from 'src/config/config.service';
import { RedisService } from './redis.service';

@Module({
  providers: [RedisService, Config],
  exports: [RedisService]
})
export class RedisModule {}
