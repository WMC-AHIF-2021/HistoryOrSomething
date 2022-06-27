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
const logOut = document.getElementById("logOut");
function logout() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("logout Method");
        yield server.updateMode(window.localStorage.getItem("mode"), "users").then(() => __awaiter(this, void 0, void 0, function* () {
            let loggedOut = yield server.logoutUser();
        }));
    });
}
let data;
const countryBtn = document.querySelectorAll(".country");
// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    logOut.addEventListener("click", (() => __awaiter(void 0, void 0, void 0, function* () {
        preload.classList.remove("preload-finish");
        yield logout().then(() => {
            window.location.assign("../../../index.html");
            preload.classList.add("preload-finish");
        });
    })));
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
    data = yield getData().then((data) => {
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
        preload.classList.add("preload-finish");
        const ticketBtn = document.querySelectorAll(".ticket");
        for (let i = 0; i < ticketBtn.length; i++) {
            ticketBtn[i].addEventListener("click", (() => __awaiter(void 0, void 0, void 0, function* () {
                if (data.score >= parseInt(ticketBtn[i].getAttribute("data-points"))) {
                    preload.classList.remove("preload-finish");
                    yield server.buyTicket(data.score, parseInt(ticketBtn[i].getAttribute("data-points")), data.tickets, parseInt(ticketBtn[i].getAttribute("data-ticket")), "users").then(() => {
                        window.location.reload();
                        preload.classList.add("preload-finish");
                    });
                }
                else {
                    alert("You don't have enough points");
                }
            })));
        }
        for (let i = 0; i < countryBtn.length; i++) {
            countryBtn[i].addEventListener("click", (() => __awaiter(void 0, void 0, void 0, function* () {
                if (data.score >= parseInt(countryBtn[i].getAttribute("data-points"))) {
                    preload.classList.remove("preload-finish");
                    let points = parseInt(countryBtn[i].getAttribute("data-points"));
                    let cIndex = getIndex(countryBtn[i], data);
                    data.countryState[cIndex] = true;
                    console.log(data.score, points, data.countryState, "users", cIndex);
                    yield server.buyCountry(data.score, points, data.countryState, "users").then((value) => {
                        console.log("success");
                        countryBtn[i].innerHTML = "<a href='../index.html'>Go to Dashboard</a>";
                        window.location.reload();
                        preload.classList.add("preload-finish");
                    });
                }
                else {
                    alert("You don't have enough points");
                }
            })));
        }
        for (let i = 0; i < countryBtn.length; i++) {
            let index = getIndex(countryBtn[i], data);
            console.log(data.countryState[index]);
            if (data.countryState[index] == true) {
                countryBtn[i].innerHTML = "<a href='../index.html'>Go to Dashboard</a>";
            }
        }
        return data;
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
function getIndex(countryBtnI, currentData) {
    let cIndex;
    console.log(currentData.countryName);
    for (let y = 0; y < currentData.countryName.length; y++) {
        if (currentData.countryName[y] == countryBtnI.getAttribute("data-country")) {
            cIndex = y;
            break;
        }
    }
    console.log(cIndex);
    return cIndex;
}
//# sourceMappingURL=shop.js.map