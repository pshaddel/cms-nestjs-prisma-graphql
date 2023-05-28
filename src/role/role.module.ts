import { Module } from '@nestjs/common';
import { Config } from 'src/config/config.service';
import { ErrorModule } from 'src/error/error.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { RoleResolver } from './role.resolver';
import { RoleService } from './role.service';

@Module({
  imports: [UserModule, PrismaModule, ErrorModule],
  providers: [Config, UserService, RoleService, RoleResolver]
})
export class RoleModule {}
