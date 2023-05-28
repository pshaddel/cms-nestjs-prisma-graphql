import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { RedisService } from '../redis/redis.service';
import { Reflector } from '@nestjs/core';
import { Config } from 'src/config/config.service';
import { ErrorService } from 'src/error/error.service';
import { ErrorModule } from 'src/error/error.module';
@Module({
  providers: [
    Config,
    UserResolver,
    UserService,
    RedisService,
    Reflector,
    ErrorService
  ],
  imports: [PrismaModule, ErrorModule]
})
export class UserModule {}
