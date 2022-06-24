import {Server} from "./server-client"
let server: Server;

document.addEventListener('DOMContentLoaded', async (event) => {
    server = new Server();
});

//Login and Registration
const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".register");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    reg();
});

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    log();
})

async function reg(){
    const email = (signupForm as any).signupEmail.value;
    const password = (signupForm as any).signupPassword.value;

    let returnValue = await server.signUpUser(email, password).then((data) => {
        window.localStorage.setItem("userId", (data as any).data.id);
        return data;
    })

    if ((returnValue as any).success){
        window.location.assign("../../index.html");
    }
    else {
        alert("Registration: " + (returnValue as any).message);
    }
}

async function log(){
    const email = (loginForm as any).email.value;
    const password = (loginForm as any).password.value;

    let returnValue = await server.loginUser(email, password).then((data) => {
        window.localStorage.setItem("userId", (data as any).data.id);
        return data;
    });

    if ((returnValue as any).success){
        window.location.assign("../../index.html");
    }
    else {
       alert((returnValue as any).message);
    }
}

