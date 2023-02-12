const pm2 = require('pm2')

const BaseRoute = require("../socket_route/base_route");

function startRtmpLiveStream() {
    pm2.connect(function (err) {
        if (err) {
            console.error(err)
            process.exit(2)
        }

        pm2.start({
            script: 'src/node_media_server/rtmp_script.js',
            name: 'stream',
            autorestart: false
        }, function (err, apps) {
            if (err) {
                console.error(err)
                return pm2.disconnect()
            }

        })

        
    })

}

// todo check user flow, changed trigger condition
function streamRoute(ws) {
    console.log(streamRouteHost.getClient().size)
    if (streamRouteHost.getClient().size == 3) {
        console.log("start stream")
        startRtmpLiveStream()
    }
    ws.on('message', function incoming(message) {
        console.log(message)
        streamRouteHost.boradcasting(message)
    });
}

const streamRouteHost = new BaseRoute('/stream', streamRoute);

module.exports = streamRouteHost;