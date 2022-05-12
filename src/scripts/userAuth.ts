import {Server} from "./server-client"
let server: Server;

document.addEventListener('DOMContentLoaded', async (event) => {
    server = new Server();

});

//Login

const loginForm = document.querySelector(".login");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = (loginForm as any).email.value;
    const password = (loginForm as any).password.value;

    let success = server.loginUser(email, password);

    console.log(success);

    if (success) {
        window.location.assign("../../src/index.html");
    }
})