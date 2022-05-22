function onLinkClick(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function goToQuiz(value){
    localStorage.setItem('quiz', value);
    window.location.href = "http://localhost:63342/HistoryOrSomething/src/Quiz/index.html";
}