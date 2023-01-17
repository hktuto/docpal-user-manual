FROM node:16-alpine

RUN apk upgrade

RUN npm i -g pnpm

WORKDIR /app

COPY . .


RUN pnpm install

RUN pnpm run deploy




