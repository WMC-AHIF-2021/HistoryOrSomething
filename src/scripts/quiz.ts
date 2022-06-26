import {getAuth, onAuthStateChanged} from "firebase/auth";
import {Server} from "./server-client";
let auth = getAuth();
let server: Server;


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
            if ((data as any).tickets > 0) {
                console.log("pressed medium");
                localStorage.setItem('quiz', "EasyQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));


        hardQuiz.addEventListener("click", (() => {
            if ((data as any).tickets > 0) {
                console.log("pressed hard");
                localStorage.setItem('quiz', "HardQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));

        easyQuiz.addEventListener("click", (() => {
            if ((data as any).tickets > 0) {
                console.log("pressed easy");
                localStorage.setItem('quiz', "EasyQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));
    }))
}))