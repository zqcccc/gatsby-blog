FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn && yarn build

