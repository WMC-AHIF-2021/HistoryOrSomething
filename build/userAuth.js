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
document.addEventListener('DOMContentLoaded', (event) => __awaiter(void 0, void 0, void 0, function* () {
    server = new Server();
}));
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
});
function reg() {
    return __awaiter(this, void 0, void 0, function* () {
        const email = signupForm.signupEmail.value;
        const password = signupForm.signupPassword.value;
        let returnValue = yield server.signUpUser(email, password).then((data) => {
            window.localStorage.setItem("userId", data.data.id);
            return data;
        });
        if (returnValue.success) {
            window.location.assign("../../index.html");
        }
        else {
            alert("Registration: " + returnValue.message);
        }
    });
}
function log() {
    return __awaiter(this, void 0, void 0, function* () {
        const email = loginForm.email.value;
        const password = loginForm.password.value;
        let returnValue = yield server.loginUser(email, password).then((data) => {
            window.localStorage.setItem("userId", data.data.id);
            return data;
        });
        if (returnValue.success) {
            window.location.assign("../../index.html");
        }
        else {
            alert(returnValue.message);
        }
    });
}
//# sourceMappingURL=userAuth.js.map