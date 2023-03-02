const BaseRoute = require("../socket_route/base_route");

function gnssUpdateEventRoute(){
    console.log('single');
}

const gnssUpdateEventRouteHost = new BaseRoute('/gnss-update-event', gnssUpdateEventRoute);

module.exports = gnssUpdateEventRouteHost;