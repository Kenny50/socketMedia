const BaseRoute = require("../socket_route/base_route");
const stopPm2 = require("../../nms/stopPm2");
const startRtmpLiveStream = require("../../nms/startRtmp");

function eventRoute(ws){
    ws.on('message', function incoming(message) {
        eventRouteHost.boradcasting(message.toString())
        const data = JSON.parse(message.toString());

        stopPm2();
        if(data.stage == 1 || data.stage == 2 || data.stage == 3 || data.stage == 6){
            const args = ['--name', `${Object.keys(data) + Object.values(data)}.mp4`, '--path', '/video/', '--channel', `${Object.values(data)}`];
            // const args = ['--name', 'green.mp4', '--path', '/Users/chang/nodejs/dockertest/test/'];
            startRtmpLiveStream(args);
        }
    });
}

const eventRouteHost = new BaseRoute('/event', eventRoute);

module.exports = eventRouteHost;