const driverAssistanceSensingRoute = require('../route/driver_assistance_sensing/driver_assistance_sensing');
const eventAssisatnceDetectionRouteHost = require('../route/event_assistance_detection_route/event_assistance_detection_route');
const illegalParkingEventRouteHost = require('../route/illegal_parking_event_route/illegal_parking_event_route');
const busParkingEventRouteHost = require('../route/bus_parking_event_route/bus_parking_event_route');
const gnssUpdateEventRouteHost = require('../route/gnss_route/gnss_update_event_route');
const parkSpaceDetectionRouteHost = require('../route/park_space_detection/park_space_detection_route');

const driver_assistance_sensing = "driver_assistance_sensing"
const illegal_parking_event = "illegal_parking_event"
const bus_parking_event = "bus_parking_event"
const event_assistance_detection = "event_assistance_detection"
const gnss_update_event = "gnss_update_event"
const parking_space_detection = "parking_space_detection"

function installRedisPubSub(redis) {

    redis.pubsub('channels', '*', (err, channels) => {
        if (err) {
            console.error(err);
            return; l
        }
        console.log('Channels:', channels);
    });

    redis.subscribe(
        driver_assistance_sensing,
        illegal_parking_event,
        bus_parking_event,
        event_assistance_detection,
        gnss_update_event,
        parking_space_detection,
        (err, count) => {
            if (err) {
                // Just like other commands, subscribe() can fail for some reasons,
                // ex network issues.
                console.error("Failed to subscribe: %s", err.message);
            } else {
                // `count` represents the number of channels this client are currently subscribed to.
                console.log(
                    `Subscribed successfully! This client is currently subscribed to ${count} channels.`
                );
            }
        });

    redis.on("message", (channel, message) => {
        switch (channel) {
            case driver_assistance_sensing:
                driverAssistanceSensingRoute.boradcasting(message);
                break;
            case illegal_parking_event:
                illegalParkingEventRouteHost.boradcasting(message);
                break;
            case bus_parking_event:
                busParkingEventRouteHost.boradcasting(message);
                break;
            case event_assistance_detection:
                eventAssisatnceDetectionRouteHost.boradcasting(message);
                break;
            case gnss_update_event:
                gnssUpdateEventRouteHost.boradcasting(message);
                break;
            case parking_space_detection:
                parkSpaceDetectionRouteHost.boradcasting(message);
                break;
        }
    });

    // There's also an event called 'messageBuffer', which is the same as 'message' except
    // it returns buffers instead of strings.
    // It's useful when the messages are binary data.
    redis.on("messageBuffer", (channel, message) => {
        // Both `channel` and `message` are buffers.
        console.log(channel, message);
    });
}

module.exports = installRedisPubSub;