const express = require('express');
const WebSocket = require('ws');
const Redis = require("ioredis");

const installSocket = require('./src/socket/install_socket');
const installRedisPubSub = require('./src/redis/redis');
const installNodeMediaServer = require('./src/nms/nodeMediaServer');
const PORT = 3000

const app = express();
app.use(express.static(__dirname + '/assest')); 
app.use(express.static('/video')); 


const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

const redis = new Redis({
    port: 6379, // Redis port
    host: "host.docker.internal", // Redis host
});

const wss = new WebSocket.Server({ server });

installSocket(wss);
installRedisPubSub(redis);
installNodeMediaServer();