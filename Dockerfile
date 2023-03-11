# syntax=docker/dockerfile:1
   
# FROM node:16.19.0
FROM node:16-slim

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
CMD [ "node", "server.js" ]
