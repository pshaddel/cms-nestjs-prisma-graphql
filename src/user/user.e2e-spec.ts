import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../../src/app.module';

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

  it('Get users by Id Graphql query: user', async () => {
    const res = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `query {
            userById(id: 2){
              id
          }
      }`
      });
    expect(res.body.data.userById).toBeTruthy();
    expect(res.body.data.userById.id).toBeTruthy();
    expect(res.status).toBe(200);
  });

  it('Get users and their role:', async () => {
    const res = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `query {
          users{
              id
              userRoles {
                  id
                  role_id
              }
          }
      }`
      });
    expect(Array.isArray(res.body.data.users)).toBe(true);
    expect(res.body.data.users[0].id).toBeTruthy();
    expect(res.body.data.users[0].userRoles.id).toBeTruthy();
    expect(res.status).toBe(200);
  });

  it('create a user and update its data and delete it:', async () => {
    const res = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation {
            createUser(first_name:"testUser", last_name:"testUserLastName", email:"test1User@email.com", password:"testPASSWORD", mobile:"09044444444" ) {
            id,
            first_name
            mobile
            created_at
            updated_at
          }
        }`
      });
    expect(res.body.data.createUser.id).toBeTruthy();
    expect(res.body.data.createUser.first_name).toBe('testUser');
    expect(res.status).toBe(200);

    const tokenResult = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation {
    login(mobile:"${res.body.data.createUser.mobile}", password:"testPASSWORD") {
        token
      }
      }`
      });
    expect(tokenResult.body.data.login.token.length).toBeGreaterThan(0);
    expect(tokenResult.status).toBe(200);

    const upadteResult = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation {
        updateUser(id: ${res.body.data.createUser.id}, email:"newTestEmail@gmail.com") {
            id
            email
            first_name
          }
      }`
      });
    expect(upadteResult.body.data.updateUser.id).toBe(
      res.body.data.createUser.id
    );
    expect(upadteResult.body.data.updateUser.first_name).toBe(
      res.body.data.createUser.first_name
    );
    expect(upadteResult.body.data.updateUser.email).toBe(
      'newTestEmail@gmail.com'
    );
    expect(upadteResult.status).toBe(200);

    const deleteResult = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query: `mutation {
        deleteUser(id: ${res.body.data.createUser.id}) {
            id
            email
            first_name
          }
      }`
      });
    expect(deleteResult.body.data.deleteUser.id).toBe(
      res.body.data.createUser.id
    );
    expect(deleteResult.status).toBe(200);
  });
});
