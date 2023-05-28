import { SetMetadata } from '@nestjs/common';

/**
 * This decorator set a metadata `sizeLimit` and we are going to use it in sizeGaurd
 * @param sizeLimit a number that shows maximum bytes we can upload
 */
export const SizeLimit = (sizeLimit: number) =>
  SetMetadata('sizeLimit', sizeLimit);
