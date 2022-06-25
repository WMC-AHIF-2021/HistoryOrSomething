const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            }
            else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 10 + 1}s`;
            }
        });
        // Burger Animation
        burger.classList.toggle("toggle");
    });
};
navSlide();
//
// var scripts = document.getElementsByTagName("script"),
//     src = scripts[scripts.length-1].src;
//
// const scriptQ = scripts[scripts.length - 1].attributes
//
// var path = window.location.pathname;
// var page = path.split("/").pop();
// console.log( page);
//
// var almostPath = scriptQ.src.nodeValue.split("/");
//
// var fullPath = almostPath.pop();
//
// let finalPath: string;
//
// for (let i = 0; i < almostPath.length; i++){
//     finalPath += almostPath[i];
//     finalPath += "/";
// }
//
// finalPath +=  page;
//
// console.log(finalPath);
//# sourceMappingURL=countries.js.map