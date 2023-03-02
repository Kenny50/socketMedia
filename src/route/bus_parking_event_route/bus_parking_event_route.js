const BaseRoute = require("../socket_route/base_route");

function busParkingEventRoute(){
    console.log('list');
}

const busParkingEventRouteHost = new BaseRoute('/bus-parking-event', busParkingEventRoute);

module.exports = busParkingEventRouteHost;