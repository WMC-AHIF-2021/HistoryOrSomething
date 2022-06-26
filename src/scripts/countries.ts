const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");

    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");

        //Animate Links
        navLinks.forEach((link: HTMLElement, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${
                    index / 10 + 1
                }s`;
            }
        });

        // Burger Animation
        burger.classList.toggle("toggle");
    });
};

navSlide();

function onLinkClick(id) {
    document.getElementById(id).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function goToQuiz(value){
    localStorage.setItem('quiz', value);
    window.location.href = "http://localhost:63342/HistoryOrSomething/src/Quiz/index.html";
}
