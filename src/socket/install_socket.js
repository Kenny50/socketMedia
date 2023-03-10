const driverAssistanceSensingRoute = require('../route/driver_assistance_sensing/driver_assistance_sensing');
const eventAssisatnceDetectionRouteHost = require('../route/event_assistance_detection_route/event_assistance_detection_route');
const illegalParkingEventRouteHost = require('../route/illegal_parking_event_route/illegal_parking_event_route');
const busParkingEventRouteHost = require('../route/license_detection_route/license_detection_route');
const gnssUpdateEventRouteHost = require('../route/gnss_route/gnss_update_event_route');
const parkSpaceDetectionRouteHost = require('../route/park_space_detection/park_space_detection_route');
const eventRouteHost = require('../route/event_route/event_route');

function installSocket(wss) {
    wss.on('connection', (ws, req) => {
        console.log('Client connected')

        const path = req.url;

        switch (path) {

            case driverAssistanceSensingRoute.path:
                driverAssistanceSensingRoute.installRoute(ws);
                break;
            case eventAssisatnceDetectionRouteHost.path:
                eventAssisatnceDetectionRouteHost.installRoute(ws);
                break;
            case illegalParkingEventRouteHost.path:
                illegalParkingEventRouteHost.installRoute(ws);
                break;
            case busParkingEventRouteHost.path:
                busParkingEventRouteHost.installRoute(ws);
                break;
            case gnssUpdateEventRouteHost.path:
                gnssUpdateEventRouteHost.installRoute(ws);
                break;
            case parkSpaceDetectionRouteHost.path:
                parkSpaceDetectionRouteHost.installRoute(ws);
                break;
            case eventRouteHost.path:
                eventRouteHost.installRoute(ws);
                break;
            default:
                ws.close();
                break;
        }

        ws.on('close', () => {
            console.log('Close connected')
            eventRouteHost.removeClient(ws);
            illegalParkingEventRouteHost.removeClient(ws);
            eventAssisatnceDetectionRouteHost.removeClient(ws);
            busParkingEventRouteHost.removeClient(ws);
            driverAssistanceSensingRoute.removeClient(ws);
            parkSpaceDetectionRouteHost.removeClient(ws);
            gnssUpdateEventRouteHost.removeClient(ws);
        })

    })
}

module.exports = installSocket;