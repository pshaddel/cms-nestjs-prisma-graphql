import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('Get users by Graphql query: users', async () => {
    const res = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `query {
          users{
              id
          }
      }`
      });
    expect(Array.isArray(res.body.data.users)).toBe(true);
    expect(res.body.data.users[0].id).toBeTruthy();
    expect(res.status).toBe(200);
  });
});
