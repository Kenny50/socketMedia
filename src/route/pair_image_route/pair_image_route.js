const BaseRoute = require('../socket_route/base_route');

function pairImageRoute(ws){
    console.log('pair image route recieved message')
    
}

const pairImageRouteHost = new BaseRoute('/pair', pairImageRoute)

module.exports = pairImageRouteHost;