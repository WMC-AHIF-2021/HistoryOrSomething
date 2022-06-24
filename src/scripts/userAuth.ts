import {Server} from "./server-client"
let server: Server;

const preload = document.querySelector(".preload");

window.addEventListener("load", () => {
    preload.classList.add("preload-finish");
});

document.addEventListener('DOMContentLoaded', () => {
    server = new Server();
});

const inputs = document.querySelectorAll(".input");


function addcl(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}

function remcl(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach(input => {
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
});


const loginFormContainer = document.getElementById("modal-login");
const signUpFormContainer = document.getElementById("modal-register");

document.getElementById("signUpBtn").addEventListener("click", () => {
    loginFormContainer.style.display = "none";
    signUpFormContainer.style.display = "flex";
});

document.getElementById("loginBtn").addEventListener("click", () => {
    loginFormContainer.style.display = "flex";
    signUpFormContainer.style.display = "none";
});


//Login and Registration
const loginForm = document.querySelector(".login");
const signupForm = document.querySelector(".register");

signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = (signupForm as any).email.value;
    const password = (signupForm as any).password.value;
    preload.classList.remove("preload-finish");

    preload.innerHTML = "\t\t<img class=\"globe\" src=\"../Resources/neededImg/globe.png\" alt=\"globe Image\"/>\n" +
        "\t\t<h1>Creating your account</h1>";

    let returnValue = await server.signUpUser(email, password).then((data) => {
        window.localStorage.setItem("userId", (data as any).data.id);
        return data;
    })

    if ((returnValue as any).success){
        preload.classList.remove("preload-finish");
        window.location.assign("../../index.html");
    }
    else {
        preload.classList.add("preload-finish");
        alert((returnValue as any).message);
    }
});

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = (loginForm as any).email.value;
    const password = (loginForm as any).password.value;
    preload.classList.remove("preload-finish");

    let returnValue = await server.loginUser(email, password).then((data) => {
        window.localStorage.setItem("userId", (data as any).data.id);
        return data;
    });

    if ((returnValue as any).success){
        preload.classList.remove("preload-finish");
        window.location.assign("../../index.html");
    }
    else {
        preload.classList.add("preload-finish");
        alert("Log in failed. Email or password was wrong!");
    }
})

