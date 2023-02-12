const express = require('express');
const WebSocket = require('ws');
const installSocket = require('./src/socket/install_socket');
const installFolderWatcher = require('./src/folder_watcher/folder_watcher');
const PORT = 3000

const app = express();
app.use(express.static(__dirname + '/assest')); 

const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
})

const wss = new WebSocket.Server({ server });

installFolderWatcher(__dirname);
installSocket(wss);