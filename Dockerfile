# syntax=docker/dockerfile:1
   
# FROM node:16.19.0
FROM node:16-slim

WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
RUN npm install pm2 -g
RUN apt-get update && apt-get install -y ffmpeg
COPY . .
CMD [ "node", "server.js" ]
