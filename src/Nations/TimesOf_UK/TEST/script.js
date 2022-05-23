function onLinkClick(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function goToQuiz(value){
    localStorage.setItem('quiz', value);
    window.location.href = "http://localhost:63342/HistoryOrSomething/src/Quiz/index.html";
}

const selected = document.querySelector(".selected");

const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
    o.addEventListener("click", () => {
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");
    });
});
