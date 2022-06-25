// const navSlide = () => {
//     const burger = document.querySelector(".burger");
//     const nav = document.querySelector(".nav-links");
//     const navLinks = document.querySelectorAll(".nav-links li");
//
//     burger.addEventListener("click", () => {
//         //Toggle Nav
//         nav.classList.toggle("nav-active");
//
//         //Animate Links
//         navLinks.forEach((link: HTMLElement, index) => {
//             if (link.style.animation) {
//                 link.style.animation = "";
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${
//                     index / 10 + 1
//                 }s`;
//             }
//         });
//
//         // Burger Animation
//         burger.classList.toggle("toggle");
//     });
// };
//
// navSlide();
//
// // Dark Mode
//
// let icon = document.getElementById("icon") as HTMLImageElement;
//
// icon.onclick = function () {
//     document.body.classList.toggle("light-mode");
//
//     if (document.body.classList.contains("light-mode")) {
//         icon.src = "Icons/moon.png";
//     } else {
//         icon.src = "Icons/sun.png";
//     }
// };