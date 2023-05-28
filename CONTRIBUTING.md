## Installation

#### Clone the project

use this command:

```bash
git clone http://gitlab.televebion.net/frontend/content-white-label-apigit
```

#### Install the dependencies

In order to start the project use this command:

```bash
npm install
```

#### Database

Make sure that you have a database which is compatible with the the prisma schema file: `schema.prisma`
Prisma creates API client API based on this schema so for the first time we need to run this command :

```bash
npx prisma generate
```

This project uses `MySQL` and `Redis`. You can install these as a service or if you have `Docker` you can use the `docker-compose.yml` file by runinng this command:

```bash
docker-compose up
```

After runing this command a `MySQL` server is listening on `3307` port and `Redis` is listening on `6379`.

#### Test

Before runing e2e tests add a few users userRole abd
