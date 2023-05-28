import { ExecutionContext, CanActivate, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { ErrorService } from 'src/error/error.service';
/**
 * SizeGaurd is a guard to prevent uploading large files based on metadata of `sizeLimit`
 */
@Injectable()
export class SizeGuard implements CanActivate {
  constructor(
    private readonly reflector: Reflector,
    private readonly errorService: ErrorService
  ) {}
  /**
   * `canActivate` is a method which returns `boolean` and if it returns `true` user can access to the resolver.
   * @param context context is an object that we can use to attatch data.
   * @returns `Promise<boolean>` returns a boolean
   */
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const getRequest = () => {
      const ctx = GqlExecutionContext.create(context);
      return ctx.getContext().req;
    };
    const limit = this.reflector.get<string[]>(
      'sizeLimit',
      context.getHandler()
    );
    if (limit > getRequest().headers['content-length']) return true;
    else
      this.errorService.throwStandardError(
        this.errorService.ResponseErrors.UPLOAD_SIZE_LIMIT,
        'Bad Request: Uploded file limit is: ' + limit + 'Bytes'
      );
  }
}
