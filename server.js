const express = require('express');
const WebSocket = require('ws');
const Redis = require("ioredis");

const installSocket = require('./src/socket/install_socket');
const installMediaServer = require('./src/node_media_server/media_server');
const installRedisPubSub = require('./src/redis/redis')
const PORT = 3000

const app = express();
app.use(express.static(__dirname + '/assest')); 

const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

const redis = new Redis({
    port: 6379, // Redis port
    host: "127.0.0.1", // Redis host
});

const wss = new WebSocket.Server({ server });

installSocket(wss);
installMediaServer();
installRedisPubSub(redis);