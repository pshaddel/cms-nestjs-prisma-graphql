import { Module } from '@nestjs/common';
import { UserRoleResolver } from './userRole.resolver';
import { UserService } from '../user/user.service';
import { PrismaModule } from '../prisma/prisma.module';
import { UserRoleService } from './userRole.service';
import { Config } from 'src/config/config.service';
import { ErrorModule } from 'src/error/error.module';
@Module({
  providers: [Config, UserRoleResolver, UserService, UserRoleService],
  imports: [PrismaModule, ErrorModule]
})
export class UserRoleModule {}
