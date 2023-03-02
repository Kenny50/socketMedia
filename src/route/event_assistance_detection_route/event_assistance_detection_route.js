const BaseRoute = require("../socket_route/base_route");

function eventAssisatnceDetectionRoute(){
    console.log('single');
}

const eventAssisatnceDetectionRouteHost = new BaseRoute('/event-asststance-detection', eventAssisatnceDetectionRoute);

module.exports = eventAssisatnceDetectionRouteHost;