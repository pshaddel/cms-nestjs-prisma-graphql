import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { ContentModule } from './content/content.module';
import { RedisModule } from './redis/redis.module';
import { join } from 'path';
import { CategoryModule } from './category/category.module';
import { CategoryTypeModule } from './category-type/category-type.module';
import { FileModule } from './file/file.module';
import { UserRoleModule } from './user-role/user-role.module';
import { RoleModule } from './role/role.module';
import { ConfigModule } from './config/config.module';
import { parse as userAgentParser } from 'user-agent-parse';

const agentIdentifierCreator = (
  userAgentStr: string,
  visitorId: string
): string => {
  const ag = userAgentParser(userAgentStr);
  const identifier =
    ag.device_type +
    ':' +
    ag.os +
    ':' +
    ag.name +
    ':' +
    ag.version +
    ':' +
    visitorId;
  const res = identifier.replace(/ /g, '-');
  return res;
};
@Module({
  imports: [
    PrismaModule,
    PrismaService,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false
      },
      context: ({ req, res }) => ({
        headers: req.headers,
        res,
        req,
        agent: agentIdentifierCreator(
          req.headers['user-agent'],
          req.headers['visitorid']
        )
      }),
      definitions: {
        path: join(process.cwd(), 'src/schema.binding.ts')
      }
    }),
    UserModule,
    ContentModule,
    RedisModule,
    CategoryModule,
    CategoryTypeModule,
    FileModule,
    UserRoleModule,
    RoleModule,
    ConfigModule
  ]
})
export class AppModule {}
