import { NestFactory } from '@nestjs/core';
import { join } from 'path';
import { AppModule } from './app.module';
import * as express from 'express';
import { config } from 'dotenv';
import { Config } from './config/config.service';

/**
 * bootstrap function initialize the project and instantiate the express.
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const address = join(process.cwd(), 'public');
  config(); // Reading env variables from the .env file
  const configs = new Config();
  /**
   * We have to serve a folder so users can see uploaded images, videos and website assets.
   */
  app.use(express.static(address));
  await app.listen(configs.port);
}
bootstrap();
