const BaseRoute = require("../socket_route/base_route");

function licenseDetectionRoute(){
    console.log('list');
}

const lincenseDetectionRouteHost = new BaseRoute('/lincense-detection', licenseDetectionRoute);

module.exports = lincenseDetectionRouteHost;