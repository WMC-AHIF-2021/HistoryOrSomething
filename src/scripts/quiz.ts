function goToQuiz(value: string){
    localStorage.setItem('quiz', value);
    window.location.assign("GamePage/game.html");
}