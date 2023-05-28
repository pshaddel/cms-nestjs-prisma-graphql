import { Module } from '@nestjs/common';
import { Config } from 'src/config/config.service';
import { ErrorModule } from 'src/error/error.module';
import { ErrorService } from 'src/error/error.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { FileResolver } from './file.resolver';
import { FileService } from './file.service';

@Module({
  imports: [UserModule, PrismaModule, ErrorModule],
  providers: [
    Config,
    FileService,
    FileResolver,
    UserService,
    PrismaService,
    ErrorService
  ]
})
export class FileModule {}
