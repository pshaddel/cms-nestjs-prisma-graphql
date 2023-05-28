import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { FileOutput, File } from 'src/schema.binding';
import { AuthGuard } from 'src/user/auth.guard';
import { Roles } from 'src/user/roles.decorator';
import { FileService } from './file.service';
import { SizeLimit } from './SizeDecorator';
import { SizeGuard } from './SizeGuard';
/**
 * `FileType` is an enum to limit file types we are passing to `FileService.upload`
 */
enum FileType {
  Audio = 'Audio',
  Video = 'Video',
  Image = 'Image'
}

/**
 * :TODO Use these variables in config service
 * `FileSizeLimit` is an enum that we set the limits for different file types
 */
enum FileSizeLimit {
  Audio = 1024 * 1024 * 50, // 50MB
  Video = 1024 * 1024 * 100, // 100MB
  Image = 1024 * 1024 * 10 // 10MB
}
@Resolver()
export class FileResolver {
  /**
   *
   * @param fileService We want to use `fileService` using dependency injection
   */
  constructor(private fileService: FileService) {}

  /**
   * We upload audios using `audioUpload` resolver
   * @param file uploaded file from request
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @SizeLimit(FileSizeLimit.Audio)
  @UseGuards(SizeGuard)
  @Mutation()
  audioUpload(@Args('file') file: File): Promise<FileOutput> {
    return this.fileService.upload(file, FileType.Audio);
  }

  /**
   * We upload audios using `imageUpload` resolver
   * @param file uploaded file from request
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @SizeLimit(FileSizeLimit.Image)
  @UseGuards(SizeGuard)
  @Mutation()
  imageUpload(@Args('file') file: File): Promise<FileOutput> {
    return this.fileService.upload(file, FileType.Image);
  }

  /**
   * We upload audios using `videoUpload` resolver
   * @param file uploaded file from request
   */
  @Roles('admin')
  @UseGuards(AuthGuard)
  @SizeLimit(FileSizeLimit.Video)
  @UseGuards(SizeGuard)
  @Mutation()
  videoUpload(@Args('file') file: File): Promise<FileOutput> {
    return this.fileService.upload(file, FileType.Video);
  }
}
