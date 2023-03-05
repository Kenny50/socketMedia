class BaseRoute {
    #clients = new Set();
    constructor(path, fun) {
        this.path = path;
        this.fun = fun;
    }
    addClient(ws) {
        this.#clients.add(ws);
    }
    removeClient(ws) {
        this.#clients.delete(ws);
    }
    boradcasting(message) {
        this.#clients.forEach(client => {
            client.send(message);
        });
    }
    installRoute(ws) {
        this.addClient(ws);
        this.fun(ws);
    }
    getClient() {
        return new Set(this.#clients);
    }
}

module.exports = BaseRoute;
