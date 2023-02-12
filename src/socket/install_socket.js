const pairImageRouteHost = require('../route/pair_image_route/pair_image_route');
const singleImageWithDetailRouteHost = require('../route/single_image_with_detail_route/single_image_with_detail_route');
const imageWithListDataRouteHost = require('../route/image_with_list_data.js/imageWithListData');
const eventRouteHost = require('../route/event_route/eventRoute');

function installSocket(wss) {
    wss.on('connection', (ws, req) => {
        console.log('Client connected')
    
        const path = req.url;
    
        switch (path) {
    
            case pairImageRouteHost.path:
                pairImageRouteHost.installRoute(ws);
                break;
            case singleImageWithDetailRouteHost.path:
                singleImageWithDetailRouteHost.installRoute(ws);
                break;
            case imageWithListDataRouteHost.path:
                imageWithListDataRouteHost.installRoute(ws);
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
            imageWithListDataRouteHost.removeClient(ws);
            pairImageRouteHost.removeClient(ws);
            singleImageWithDetailRouteHost.removeClient(ws);
        })
    
    })
}

module.exports = installSocket;