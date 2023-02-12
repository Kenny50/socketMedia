function BaseRoute(path, fun) {
    let clients = new Set()
    this.path = path,
    this.addClient = function (ws){
        clients.add(ws);
    },
    this.removeClient = function (ws){
        clients.delete(ws);
    },
    this.boradcasting = function (message){
        clients.forEach(client => {
            client.send(message);
        });
    },
    this.installRoute = function(ws){
        this.addClient(ws);
        fun(ws);
    }
}

module.exports = BaseRoute;
