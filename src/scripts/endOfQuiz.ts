import { Server} from "./server-client";
let username;
let saveScoreButton;
let finalScore;
let mostRecentScore;
let server: Server;

let highScore;

let MAX_HIGH_SCORES = 5;

document.addEventListener('DOMContentLoaded', async () => {
    server = new Server();
    username = document.getElementById("username");
    saveScoreButton = document.getElementById("saveScoreButton");
    finalScore = document.getElementById("finalScore");
    mostRecentScore = localStorage.getItem("mostRecentScore");

    highScore = JSON.parse(localStorage.getItem("highScores")) || [];

    MAX_HIGH_SCORES = 5;

    finalScore.innerText = mostRecentScore;

    username.addEventListener("keyup", () => {
        (saveScoreButton as HTMLButtonElement).disabled = !(username as HTMLInputElement).value;
    });


    document.getElementById("saveScoreButton").addEventListener("click",  (async (e) => {
        e.preventDefault();

        console.log(username);
        const score = {
            score: mostRecentScore,
            name: (username as HTMLInputElement).value,
        };


        await server.updateScore(parseInt(score.score), "users", window.localStorage.getItem("quiz"));
        highScore.push(score);
        highScore.sort((a, b) => b.score - a.score);
        highScore.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScore));
        window.location.assign("../start.html");
        console.log(highScore);
    }))

});



