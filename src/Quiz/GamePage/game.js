const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

const loader = document.getElementById("loader");
const game = document.getElementById("game");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let country = localStorage.getItem("quiz");

let questions = [];
fetch("../Questions/" + country + ".json")
  .then((res) => {
    return res.json();
  })
  .then((loadedQuestions) => {
    questions = loadedQuestions;
    startGame();
  });

//Constants
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

const startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
  game.classList.remove("hidden");
  loader.classList.add("hidden");
};

const getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);
    // go to the end page
    return window.location.assign("../EndPage/end.html");
  }
  questionCounter++;
  progressText.innerText = "Question " + questionCounter + "/" + MAX_QUESTIONS;

  //Update Progress Bar
  progressBarFull.style.width = (questionCounter / MAX_QUESTIONS) * 100 + "%";
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);

  // Question
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectChoice = e.target;
    const selectedAnswer = selectChoice.dataset["number"];

    const classToApply =
      selectedAnswer === currentQuestion.answer ? "correct" : "incorrect";

    classToApply === "correct" && incrementScore(CORRECT_BONUS);

    selectChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

const incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
