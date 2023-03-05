const BaseRoute = require("../socket_route/base_route");

function eventRoute(ws){
    ws.on('message', function incoming(message) {
        eventRouteHost.boradcasting(message.toString())
    });
}

const eventRouteHost = new BaseRoute('/event', eventRoute);

module.exports = eventRouteHost;