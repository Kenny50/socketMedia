const pm2 = require('pm2');


function startRtmpLiveStream(args, shouldAutoReStart) {

    pm2.connect(function (err) {
        if (err) {
            console.error(err)
            process.exit(2)
        }

        pm2.start({
            script: 'src/nms/rtmpScript.js',
            name: 'stream',
            args: args,
            autorestart: shouldAutoReStart
        }, function (err, apps) {
            if (err) {
                console.error(err)
                return pm2.disconnect()
            }

        })


    })

}

module.exports = startRtmpLiveStream;