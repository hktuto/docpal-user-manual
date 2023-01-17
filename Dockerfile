FROM node:16-alpine
RUN apk add g++ make py3-pip

RUN npm i -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install

RUN pnpm run docs:build

RUN pnpm run deploy




