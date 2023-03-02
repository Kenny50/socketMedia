const BaseRoute = require('../socket_route/base_route');

function driverAssistanceSensing(ws){
    console.log('pair image route recieved message')
    
}

const driverAssistanceSensingRoute = new BaseRoute('/driver-assistance-sensing', driverAssistanceSensing)

module.exports = driverAssistanceSensingRoute;