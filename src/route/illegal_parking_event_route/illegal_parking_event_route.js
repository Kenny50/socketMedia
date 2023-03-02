const BaseRoute = require("../socket_route/base_route");

function illegalParkingEventRoute(){
    console.log('list');
}

const illegalParkingEventRouteHost = new BaseRoute('/illegal-parking-event', illegalParkingEventRoute);

module.exports = illegalParkingEventRouteHost;