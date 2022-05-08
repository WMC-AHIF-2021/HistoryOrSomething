import {Server} from "./index.js";

const server = new Server();

document.addEventListener('DOMContentLoaded', (event) => {
    server.test();
});
