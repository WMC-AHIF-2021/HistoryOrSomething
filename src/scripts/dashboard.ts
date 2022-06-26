import {Server} from "./server-client";
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

let server: Server;
let preload = document.querySelector(".preload");
const topInfo = document.getElementById("topInfo");
const dashContent = document.getElementById("dash-content");

// Log out user and change navbar
async function logout(){
    console.log("logout Method");
    await server.updateMode(window.localStorage.getItem("mode"), "users").then(async () => {
        let loggedOut = await server.logoutUser();
        if (loggedOut){
            location.reload();
        }
    });
}

let data: object;

// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', async () => {
    preload.classList.add("preload-finish");
    if (window.localStorage.getItem("mode") == "light"){
        if (preload.classList.contains("dark-mode")){
            preload.classList.remove("dark-mode");
        }
    }
    else{
        preload.classList.add("dark-mode");
    }

    server = new Server();
    console.log(preload.classList);
    preload.classList.remove("preload-finish");

    await getData().then((data) => {
        let coinPath  = topInfo.getAttribute("data-coin");
        let ticketPath  = topInfo.getAttribute("data-ticket");

        topInfo.innerHTML = "<div id=\"topInfo\">\n" +
            "    <h1>Points: " +
            (data as any).score +
            "    </h1>\n" +
            "<img alt=\"coin\" class=\"icon\" src=\"" +
            coinPath +
            "\">" +
            "    <h1>Tickets: " +
            (data as any).tickets +
            "</h1>\n" +
            "<img alt=\"ticket\" class=\"icon\" src=\"" +
            ticketPath +
            "\">" +
            "</div>";

        for (let i = 0; i < (data as any).countryName.length; i++){
            if ((data as any).countryState[i] == true){
                dashContent.innerHTML += "<div class=\"countryWrapper\">\n" +
                    "<div class=\"countryItem\">\n" +
                    "<img alt=\"flag\" class=\"countryFlag\" src=\"../Resources/flags/" +
                    (data as any).countryName[i] +
                    ".png\">" +
                    "    <h1 class='countryTitle'> " +
                    (data as any).countryName[i] +
                    "    </h1>\n" +
                    "</div>" +
                    "<div class=\"countryBtn\">" +
                    "<a class=\"countryLink\" href=\"../Nations/" +
                    (data as any).countryName[i] +
                    "/Times/present.html\">Visit</a>" +
                    "</div>" +
                    "</div>"
            }
        }
        preload.classList.add("preload-finish");
    });
});

//Get specific user data
async function getData(): Promise<object> {
    let data;
    try {
        data = await server.getData("users", window.localStorage.getItem("userId"));
    }catch(error){
        alert("Error: " + error);
    }

    return data;
}

