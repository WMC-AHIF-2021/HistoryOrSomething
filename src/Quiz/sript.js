function goToQuiz(value){
    localStorage.setItem('quiz', value);
    window.location.assign("Temp/index.html");
}