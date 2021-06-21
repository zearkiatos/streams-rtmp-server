FROM node:15-alpine

RUN apk update && apk add python make g++
RUN apk add --update nodejs npm
# set working directory
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 9000

CMD npm run dev