import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

/**
 * We use this class to execute queries and extends `PrismaClient` and we added a few methods that might be helpful.
 */
@Injectable()
export class PrismaService extends PrismaClient {
  /**
   * This method creates `skip` and `take` by getting a `page` and `limit`
   * @param page number that we use for pagination. it starts from `1`
   * @param limit number of records we want to return
   */
  calculateOffsetLimit(page: number, limit: null | number = null) {
    let finalLimit = 30;
    if (limit) {
      finalLimit = limit;
    }
    const offset = (page - 1) * finalLimit;
    return {
      skip: offset,
      take: finalLimit
    };
  }

  /**
   * Sometimes in order to fill fields like `created_at` or `updated_at` we need the time and this method do this:
   * ```typescript
   * const time = this.prisma.now();
   * ```
   */
  now() {
    return new Date();
  }
}
