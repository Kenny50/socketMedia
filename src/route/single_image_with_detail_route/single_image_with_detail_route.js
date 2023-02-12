const BaseRoute = require("../socket_route/base_route");

function singleImageWithDetailRoute(){
    console.log('single');
}

const singleImageWithDetailRouteHost = new BaseRoute('/single', singleImageWithDetailRoute);

module.exports = singleImageWithDetailRouteHost;