import { Injectable } from '@nestjs/common';
import { createWriteStream } from 'fs';
import { join } from 'path';
import { FileOutput, Upload } from 'src/schema.binding';
import { generate } from 'short-uuid';
import { mkdir } from 'fs';
import { Config } from '../config/config.service';
import { MakeDirectoryOptions } from 'fs';
import { PathLike } from 'fs';
import { ErrorService } from 'src/error/error.service';
/**
 * It is an object that contains `Image`, `Video` and `Audio` and the values are arrays of file extensions.
 */
const ValidExtension = {
  Image: [
    'image/jpeg',
    'image/png',
    'image/jpg',
    'image/svg+xml',
    'image/webp'
  ],
  Video: ['video/mp4'],
  Audio: ['audio/mpeg']
};
enum FileType {
  Audio = 'Audio',
  Video = 'Video',
  Image = 'Image'
}
enum TypeFolder {
  Image = 'images',
  Video = 'videos',
  Audio = 'audio'
}
/**
 * FileService handles our file uploads
 */
@Injectable()
export class FileService {
  constructor(
    private readonly config: Config,
    private readonly errorService: ErrorService
  ) {}
  /**
   *
   * @param file user passes file in the body of the request.
   * @param type we create type in resolver it is an enum: `Image`, `Audio` and `Video`
   * @returns `Promise<FileOutput>`  returns an object which contains `path` which is an string and `error`.
   */
  async upload(file: Upload, type: FileType): Promise<FileOutput> {
    try {
      const { createReadStream, filename, mimetype } = await file.promise;
      if (!ValidExtension[type].includes(mimetype)) {
        this.errorService.throwStandardError(
          this.errorService.ResponseErrors.INVALID_FILE_EXTENSION
        );
      }
      const { subFolder, newFileName } = this.createFileNameAndSubFolder(
        filename
      );

      const folderPath = join(
        process.cwd(),
        'public',
        'files',
        TypeFolder[type],
        subFolder
      );

      await this.mkdirPromise(folderPath, { recursive: true });
      const pathName = join(folderPath, newFileName);
      await createReadStream().pipe(createWriteStream(pathName));

      return {
        path:
          this.config.serverAddress +
          join('files', TypeFolder[type], subFolder, newFileName)
      };
    } catch (error) {
      console.error(error);
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.INTERNAL_SERVER_ERROR
      );
    }
  }

  /**
   * This method promisify the `fs.mkdir`
   * @param path path of the folder we want to create(we usually create it using `path.join`)
   * @param options options we can pass to `fs.mkdir`
   */
  mkdirPromise = (
    path: PathLike,
    options: MakeDirectoryOptions
  ): Promise<any> => {
    return new Promise((resolve, reject) => {
      mkdir(path, options, (error: any, data: any) => {
        if (error) reject(error);
        else resolve(data);
      });
    });
  };

  /**
   * This method create `file name` and `subFolder` - `subFolder` after generating a random file name we use first 3 characters to create a `subFolder`. when we have numerous files dividing them in folders is a better idea
   * @param filename it is in the request and it contains `file name` and `extension`
   */
  createFileNameAndSubFolder(filename: string) {
    const extension = filename.split('.')[filename.split('.').length - 1];
    const newFileName = generate() + '.' + extension;
    const subFolder = newFileName[0] + newFileName[1] + newFileName[2];
    return { subFolder, newFileName };
  }
}
