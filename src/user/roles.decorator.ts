import { SetMetadata } from '@nestjs/common';
/**
 * This decorator sets metadata of roles
 * @param roles an array of strings
 */
export const Roles = (...roles) => SetMetadata('roles', roles);
