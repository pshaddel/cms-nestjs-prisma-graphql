import { Module } from '@nestjs/common';
import { ContentResolver } from './content.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { ContentService } from './content.service';
import { ErrorService } from 'src/error/error.service';

@Module({
  providers: [ContentResolver, ContentService, ErrorService],
  imports: [PrismaModule]
})
export class ContentModule {}
