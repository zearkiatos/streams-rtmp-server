FROM node:15-alpine AS builder

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm
# set working directory
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8000
EXPOSE 1935

ENTRYPOINT ["sh", "./docker/entrypoint.sh"]