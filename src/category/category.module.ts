import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoryService } from './category.service';
import { CategoryResolver } from './category.resolver';
import { UserModule } from 'src/user/user.module';
import { UserService } from 'src/user/user.service';
import { CategoryTypeModule } from 'src/category-type/category-type.module';
import { CategoryTypeService } from 'src/category-type/categoryType.service';
import { ContentModule } from 'src/content/content.module';
import { ContentService } from 'src/content/content.service';
import { Config } from 'src/config/config.service';
import { ErrorService } from 'src/error/error.service';

@Module({
  providers: [
    CategoryService,
    CategoryResolver,
    UserService,
    CategoryTypeService,
    ContentService,
    Config,
    ErrorService
  ],
  imports: [PrismaModule, UserModule, CategoryTypeModule, ContentModule]
  // exports: [CategoryModule],
})
export class CategoryModule {}
