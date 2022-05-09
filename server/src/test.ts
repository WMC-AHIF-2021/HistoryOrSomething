import {Server} from "./server-client.js";

const server = new Server();

document.addEventListener('DOMContentLoaded', (event) => {
    server.test();
});
