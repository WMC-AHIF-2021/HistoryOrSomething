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
const countryBtn = document.querySelectorAll(".country");

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

    data = await getData().then((data) => {
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

        preload.classList.add("preload-finish");

        const ticketBtn = document.querySelectorAll(".ticket");

        for (let i = 0; i < ticketBtn.length; i++){
            ticketBtn[i].addEventListener("click", (async () => {
                preload.classList.remove("preload-finish");
                if ((data as any).score >= parseInt(ticketBtn[i].getAttribute("data-points"))){
                    await server.buyTicket((data as any).score, parseInt(ticketBtn[i].getAttribute("data-points")),
                        (data as any).tickets, parseInt(ticketBtn[i].getAttribute("data-ticket")), "users").then(() => {
                        window.location.reload();
                        preload.classList.add("preload-finish");
                    });
                }else{
                    alert("You don't have enough points");
                }
            }))
        }

        for (let i = 0; i < countryBtn.length; i++){
            countryBtn[i].addEventListener("click", (async () => {
                preload.classList.remove("preload-finish");
                if ((data as any).score >= parseInt(countryBtn[i].getAttribute("data-points"))){

                    let points: number = parseInt(countryBtn[i].getAttribute("data-points"));
                    let cIndex: number = getIndex(countryBtn[i], data);
                    (data as any).countryState[cIndex] = true;

                    console.log((data as any).score, points, (data as any).countryState, "users", cIndex);

                     await server.buyCountry((data as any).score, points, (data as any).countryState, "users").then((value) => {
                        console.log("success");
                        countryBtn[i].innerHTML = "<a href='../index.html'>Go to Dashboard</a>";
                        window.location.reload();
                        preload.classList.add("preload-finish");
                    });
                }else{
                    alert("You don't have enough points");
                }
            }))
        }

        for (let i = 0; i < countryBtn.length; i++){
            let index = getIndex(countryBtn[i], data);
            console.log((data as any).countryState[index]);
            if ((data as any).countryState[index] == true){
                countryBtn[i].innerHTML = "<a href='../index.html'>Go to Dashboard</a>";
            }
        }

        return data;
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

function getIndex(countryBtnI, currentData): number{
    let cIndex: number;
    console.log((currentData as any).countryName);
    for (let y = 0; y < (currentData as any).countryName.length; y++){
        if ((currentData as any).countryName[y] == countryBtnI.getAttribute("data-country")){
            cIndex = y;
            break;
        }
    }

    console.log(cIndex)

    return cIndex;
}


