let things = [
    "The Mayan people worshipped turkeys like Gods.",
    "Napoleon was once attacked by a horde of bunnies.",
    "Cleopatra was not Egyptian, but Greek.",
    "Pope Gregory IV declared war on cats.",
    "In the 1830s, ketchup was sold as medicine.",
    "Walt Disney didn't draw Mickey Mouse.",
    "Johnny Appleseed is real.",
    "Former U.S. President Bill Clinton lost Nuclear Launch Codes.",
    "The dutch actually ate their prime minister.",
    "Australia actually fought a war against its national bird ...and lost!",
    "In Liechtenstein's last military engagement (1886)," +
        "they sent in 80 soldiers. " +
        "81 came back, including a new italian friend.",
    "Julius Caesar was stabbed 23 times.",
    "In 1386, a pig was executed in France.",
    "Since 1945, all British tanks are equipped with tea-making facilities.",
    "During World War I, the French built a “fake Paris”.",
    "Albert Einstein turned down the presidency of Israel.",
    "In 1913 Stalin, Hitler, Trotsky, Tito all lived in Vienna for a couple of months.",
    "Abraham Lincoln is in the wrestling hall of fame",
    "In 500bc, a messenger died after he ran to athens to deliver the message, that the greeks defeated the persians." +
        "He covered a distance of 41,2km and the city he started from was named Marathon."
];
let ran = Math.floor(Math.random() * things.length);
function openForm() {
    ran = Math.floor(Math.random() * things.length);
    document.getElementById("myForm").style.display = "block";
    document.getElementById("facts").innerHTML = things[ran];
}
window.addEventListener("load", () => {
    console.log("Preload working");
    const preload = document.querySelector(".preload");
    preload.classList.add("preload-finish");
});
document.addEventListener("DOMContentLoaded", (event) => {
    console.log("working");
});
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
const loginForm = document.getElementById("modal-login");
function openLogin() {
    loginForm.style.display = "block";
}
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
        else {
            reveals[i].classList.remove("active");
        }
    }
}
reveal();
window.addEventListener("scroll", reveal);
//# sourceMappingURL=tempJs.js.map