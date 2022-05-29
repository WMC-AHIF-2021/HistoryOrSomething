function goToQuiz(value){
    localStorage.setItem('quiz', value);
    window.location.href = "http://localhost:63342/HistoryOrSomething/src/Quiz/index.html";
}