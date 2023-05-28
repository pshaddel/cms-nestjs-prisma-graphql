import { Injectable } from '@nestjs/common';
/**
 * Returns Configs class based on environment variables.
 */
@Injectable()
export class Config {
  /**
   * `port` is the port which app is listening on
   */
  readonly port: number = Number(process.env.PORT) || 3000;
  /**
   * `redisPort` is the port which used for Redis - default value is `6379`
   */
  readonly redisPort: number = Number(process.env.REDIS_PORT) || 6379;

  readonly redisHost: string = process.env.REDIS_HOST || 'localhost';

  /**
   * `serverAddress` the address and it contains `port` too
   */
  readonly serverAddress: string =
    process.env.SERVER_ADDRESS || `http://localhost:${this.port}/`;

  /**
   * `hashSecret` is the secret key used to hash passwords using crypto
   */
  readonly hashSecret: string =
    process.env.HASH_SECRET ||
    '<m}KSaUyl29?sr})Y7Vp0hqclRZ+E1<3wP{2feD)+{#z#m+sHx),C[fKV6o~1_T';
  /**
   * We sign token using this secret
   */
  readonly accessTokenSecret =
    process.env.ACCESS_TOKEN_SECRET || 'ACCESS_TOKEN_SECRET';

  /**
   * We sign refresh token using this secret
   */
  readonly refreshTokenSecret =
    process.env.REFRESH_TOKEN_SECRET || 'REFRESH_TOKEN_SECRET';

  /**
   * We use namespaces for redis in order to prevent same keys
   */
  readonly accessTokenPrefix = process.env.LOGIN_REDIS_PREFIX || 'login:';

  /**
   * We use namespaces for redis in order to prevent same keys
   */
  readonly refreshTokenPrefix = process.env.REFRESH_REDIS_PREFIX || 'refresh:';

  /**
   * Access token should expire in 10 minutes when we want to ship the app in production
   */
  readonly accessTokenExpiresIn =
    Number(process.env.ACCESS_TOKEN_EXPIRE) || 3600 * 24;

  /**
   * I use one month expiration for refresh tokens
   */
  readonly refreshTokenExpiresIn =
    Number(process.env.REFRESH_TOKEN_EXPIRE) || 30 * 3600 * 24;
}
