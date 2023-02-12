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
function streamRoute(ws) {
    if (streamRouteHost.getClient().size == 2) {
        console.log("start stream")
        startRtmpLiveStream()
    }
}

const streamRouteHost = new BaseRoute('/stream', streamRoute);

module.exports = streamRouteHost;