var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Server } from "./server-client";
let server;
const preload = document.querySelector(".preload");
window.addEventListener("load", () => {
    preload.classList.add("preload-finish");
});
document.addEventListener('DOMContentLoaded', () => {
    server = new Server();
});
const inputs = document.querySelectorAll(".input");
function addcl() {
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}
function remcl() {
    let parent = this.parentNode.parentNode;
    if (this.value == "") {
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
signupForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const email = signupForm.email.value;
    const password = signupForm.password.value;
    preload.classList.remove("preload-finish");
    preload.innerHTML = "\t\t<img class=\"globe\" src=\"../Resources/neededImg/globe.png\" alt=\"globe Image\"/>\n" +
        "\t\t<h1>Creating your account</h1>";
    let returnValue = yield server.signUpUser(email, password).then((data) => {
        window.localStorage.setItem("userId", data.data.id);
        return data;
    });
    if (returnValue.success) {
        preload.classList.remove("preload-finish");
        window.location.assign("../../index.html");
    }
    else {
        preload.classList.add("preload-finish");
        alert(returnValue.message);
    }
}));
loginForm.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
    preload.classList.remove("preload-finish");
    let returnValue = yield server.loginUser(email, password).then((data) => {
        window.localStorage.setItem("userId", data.data.id);
        return data;
    });
    if (returnValue.success) {
        preload.classList.remove("preload-finish");
        window.location.assign("../../index.html");
    }
    else {
        preload.classList.add("preload-finish");
        alert("Log in failed. Email or password was wrong!");
    }
}));
//# sourceMappingURL=userAuth.js.map