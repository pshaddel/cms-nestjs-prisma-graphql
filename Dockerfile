FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
COPY prisma ./prisma
COPY tsconfig.json ./
COPY tsconfig.build ./

# RUN npm ci --only=production
RUN npm install
# RUN npx prisma generate --schema=./prisma/schema.prisma
# If you are building your code for production
RUN npm run build
# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "node", "./dist/main.js" ]