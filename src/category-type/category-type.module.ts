import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryTypeService } from './categoryType.service';
import { CategoryTypeResolver } from './categoryType.resolver';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { CategoryService } from 'src/category/category.service';
import { ContentModule } from 'src/content/content.module';
import { ContentService } from 'src/content/content.service';
import { Config } from 'src/config/config.service';
import { ErrorService } from 'src/error/error.service';

@Module({
  providers: [
    CategoryTypeService,
    CategoryTypeResolver,
    UserService,
    CategoryService,
    ContentService,
    Config,
    ErrorService
  ],
  imports: [PrismaModule, UserModule, ContentModule]
})
export class CategoryTypeModule {}
