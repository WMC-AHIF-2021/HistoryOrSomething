import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Server} from "./server-client";
let auth = getAuth();
let server: Server;

const trysEasy = document.getElementById("trysEasy");
const trysMedium = document.getElementById("trysMedium");
const trysHard = document.getElementById("trysHard");

const easyQuiz = document.getElementById("EasyQuiz");
const mediumQuiz = document.getElementById("MediumQuiz");
const hardQuiz = document.getElementById("HardQuiz");

document.addEventListener("DOMContentLoaded", (() => {
    console.log(easyQuiz, mediumQuiz, hardQuiz);
    server = new Server();
    onAuthStateChanged(auth, (async (user) => {
        const data  = await server.getData("users", window.localStorage.getItem("userId"));
        console.log(data);

        mediumQuiz.addEventListener("click", (() => {
            if ((data as any).MediumQuiz < (data as any).MaxPlayAmount) {
                console.log("pressed medium");
                localStorage.setItem('quiz', "EasyQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));


        hardQuiz.addEventListener("click", (() => {
            if ((data as any).HardQuiz < (data as any).MaxPlayAmount) {
                console.log("pressed hard");
                localStorage.setItem('quiz', "HardQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));

        easyQuiz.addEventListener("click", (() => {
            if ((data as any).EasyQuiz <  (data as any).MaxPlayAmount) {
                console.log("pressed easy");
                localStorage.setItem('quiz', "EasyQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));


        trysEasy.innerText = (data as any).EasyQuiz + "/" + (data as any).MaxPlayAmount
        trysMedium.innerText = (data as any).MediumQuiz + "/" + (data as any).MaxPlayAmount;
        trysHard.innerText = (data as any).HardQuiz + "/" + (data as any).MaxPlayAmount;
    }))
}))