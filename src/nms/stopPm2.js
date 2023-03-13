const pm2 = require('pm2');

function stopStream(){
    pm2.stop("all");
    pm2.delete("all");
}

module.exports = stopStream;