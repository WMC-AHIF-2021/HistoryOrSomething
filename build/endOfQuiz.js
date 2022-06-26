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
let username;
let saveScoreButton;
let finalScore;
let mostRecentScore;
let server;
let highScore;
let MAX_HIGH_SCORES = 5;
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    server = new Server();
    username = document.getElementById("username");
    saveScoreButton = document.getElementById("saveScoreButton");
    finalScore = document.getElementById("finalScore");
    mostRecentScore = localStorage.getItem("mostRecentScore");
    highScore = JSON.parse(localStorage.getItem("highScores")) || [];
    MAX_HIGH_SCORES = 5;
    finalScore.innerText = mostRecentScore;
    username.addEventListener("keyup", () => {
        saveScoreButton.disabled = !username.value;
    });
    document.getElementById("saveScoreButton").addEventListener("click", ((e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        console.log(username);
        const score = {
            score: mostRecentScore,
            name: username.value,
        };
        yield server.updateScore(parseInt(score.score), "users");
        highScore.push(score);
        highScore.sort((a, b) => b.score - a.score);
        highScore.splice(5);
        localStorage.setItem("highScores", JSON.stringify(highScore));
        window.location.assign("../start.html");
        console.log(highScore);
    })));
}));
//# sourceMappingURL=endOfQuiz.js.map