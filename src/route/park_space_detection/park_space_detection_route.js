const BaseRoute = require("../socket_route/base_route");

function parkSpaceDetectionRoute(){
    console.log('single');
}

const parkSpaceDetectionRouteHost = new BaseRoute('/park-space-detection', parkSpaceDetectionRoute);

module.exports = parkSpaceDetectionRouteHost;