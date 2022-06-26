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
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyCr7_Es7xBQzlXHejZukEr1ovanvYYo_Z4",
    authDomain: "historyorsomething-9.firebaseapp.com",
    projectId: "historyorsomething-9",
    storageBucket: "historyorsomething-9.appspot.com",
    messagingSenderId: "603241360494",
    appId: "1:603241360494:web:90f27fa38c0b46fecd4a7f"
};
// init firebase app
initializeApp(firebaseConfig);
let server;
let preload = document.querySelector(".preload");
const topInfo = document.getElementById("topInfo");
const dashContent = document.getElementById("dash-content");
// Log out user and change navbar
function logout() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("logout Method");
        yield server.updateMode(window.localStorage.getItem("mode"), "users").then(() => __awaiter(this, void 0, void 0, function* () {
            let loggedOut = yield server.logoutUser();
            if (loggedOut) {
                location.reload();
            }
        }));
    });
}
let data;
// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    preload.classList.add("preload-finish");
    if (window.localStorage.getItem("mode") == "light") {
        if (preload.classList.contains("dark-mode")) {
            preload.classList.remove("dark-mode");
        }
    }
    else {
        preload.classList.add("dark-mode");
    }
    server = new Server();
    console.log(preload.classList);
    preload.classList.remove("preload-finish");
    yield getData().then((data) => {
        let coinPath = topInfo.getAttribute("data-coin");
        let ticketPath = topInfo.getAttribute("data-ticket");
        topInfo.innerHTML = "<div id=\"topInfo\">\n" +
            "    <h1>Points: " +
            data.score +
            "    </h1>\n" +
            "<img alt=\"coin\" class=\"icon\" src=\"" +
            coinPath +
            "\">" +
            "    <h1>Tickets: " +
            data.tickets +
            "</h1>\n" +
            "<img alt=\"ticket\" class=\"icon\" src=\"" +
            ticketPath +
            "\">" +
            "</div>";
        for (let i = 0; i < data.countryName.length; i++) {
            if (data.countryState[i] == true) {
                dashContent.innerHTML += "<div class=\"countryWrapper\">\n" +
                    "<div class=\"countryItem\">\n" +
                    "<img alt=\"flag\" class=\"countryFlag\" src=\"../Resources/flags/" +
                    data.countryName[i] +
                    ".png\">" +
                    "    <h1 class='countryTitle'> " +
                    data.countryName[i] +
                    "    </h1>\n" +
                    "</div>" +
                    "<div class=\"countryBtn\">" +
                    "<a class=\"countryLink\" href=\"../Nations/" +
                    data.countryName[i] +
                    "/Times/present.html\">Visit</a>" +
                    "</div>" +
                    "</div>";
            }
        }
        preload.classList.add("preload-finish");
    });
}));
//Get specific user data
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        try {
            data = yield server.getData("users", window.localStorage.getItem("userId"));
        }
        catch (error) {
            alert("Error: " + error);
        }
        return data;
    });
}
//# sourceMappingURL=store.js.map