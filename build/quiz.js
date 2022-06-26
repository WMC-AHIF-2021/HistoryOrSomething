var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Server } from "./server-client";
let auth = getAuth();
let server;
const easyQuiz = document.getElementById("EasyQuiz");
const mediumQuiz = document.getElementById("MediumQuiz");
const hardQuiz = document.getElementById("HardQuiz");
document.addEventListener("DOMContentLoaded", (() => {
    console.log(easyQuiz, mediumQuiz, hardQuiz);
    server = new Server();
    onAuthStateChanged(auth, ((user) => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield server.getData("users", window.localStorage.getItem("userId"));
        console.log(data);
        mediumQuiz.addEventListener("click", (() => {
            if (data.tickets > 0) {
                console.log("pressed medium");
                localStorage.setItem('quiz', "EasyQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));
        hardQuiz.addEventListener("click", (() => {
            if (data.tickets > 0) {
                console.log("pressed hard");
                localStorage.setItem('quiz', "HardQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));
        easyQuiz.addEventListener("click", (() => {
            if (data.tickets > 0) {
                console.log("pressed easy");
                localStorage.setItem('quiz', "EasyQuiz");
                window.location.assign("GamePage/game.html");
            }
        }));
    })));
}));
//# sourceMappingURL=quiz.js.map