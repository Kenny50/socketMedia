const BaseRoute = require("../socket_route/base_route");

function imageWithListDataRoute(){
    console.log('list');
}

const imageWithListDataRouteHost = new BaseRoute('/list', imageWithListDataRoute);

module.exports = imageWithListDataRouteHost;