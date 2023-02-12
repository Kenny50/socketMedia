const express = require('express');
const WebSocket = require('ws');
const installSocket = require('./src/socket/install_socket');
const PORT = 3000

const server = express().listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})

const wss = new WebSocket.Server({ server });

installSocket(wss);