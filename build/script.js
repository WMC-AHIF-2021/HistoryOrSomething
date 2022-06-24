var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Server } from "./server-client";
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCr7_Es7xBQzlXHejZukEr1ovanvYYo_Z4",
    authDomain: "historyorsomething-9.firebaseapp.com",
    projectId: "historyorsomething-9",
    storageBucket: "historyorsomething-9.appspot.com",
    messagingSenderId: "603241360494",
    appId: "1:603241360494:web:90f27fa38c0b46fecd4a7f"
};
// init firebase app
initializeApp(firebaseConfig);
let auth = getAuth();
let server;
const navBar = document.getElementById("user");
// Log out user and change navbar
function logout() {
    console.log("logout Method");
    let loggedOut = server.logoutUser();
    if (loggedOut) {
        navBar.innerHTML = "<a  class=\"nav-link\" aria-current=\"page\" href=\"src/Authentication/index.html\">" +
            "<span class=\"navItemStyle\">Login</span>" +
            "</a>";
    }
}
// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    server = new Server();
    const preload = document.querySelector(".preload");
    preload.classList.remove("preload-finish");
    onAuthStateChanged(auth, ((user) => __awaiter(void 0, void 0, void 0, function* () {
        let data = yield getData();
        if (user) {
            navBar.innerHTML = "<div class=\"dropdown\">\n" +
                "  <button>Account</button>\n" +
                "  <div>\n" +
                "    <a href=\"src/Html/ComingSoon.html\">Dashoard</a>\n" +
                "    <a href=\"#\">Score: " +
                data.score +
                "    </a>\n" +
                "    <a id=\"logOut\">Logout</a>\n" +
                "  </div>\n" +
                "</div>";
            preload.classList.add("preload-finish");
            document.getElementById("logOut").addEventListener("click", () => {
                logout();
            });
        }
        else {
            preload.classList.add("preload-finish");
        }
    })));
}));
//Get specific user data
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        let data;
        try {
            data = yield server.getData("users", window.localStorage.getItem("userId"));
        }
        catch (error) {
            alert("Error: " + error);
        }
        return data;
    });
}
// Say something smart
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
        "He covered a distance of 41,2km and the city he started from was named Marathon.",
    "No one knows how much nuclear bombs the Ussr lost. In comparison, the US lost 6.",
    "Thomas Edison didn't invent the light bulb.",
    "Columbus wasn't the first person to discover America.",
    "A lot of History's Disasters were caused by lack of sleep.",
    "Before alarm clocks existed, there literally were people whose jobs was to knock an your window and wake you up for work.",
    "Charlie Chaplin once entered a Charlie Chaplin lookalike contest – and came in 20th place."
];
let ran = Math.floor(Math.random() * things.length);
document.getElementById("openForm").addEventListener("click", (() => {
    ran = Math.floor(Math.random() * things.length);
    document.getElementById("myForm").style.display = "block";
    document.getElementById("facts").innerHTML = things[ran];
}));
document.getElementById("highlight_close").addEventListener("click", (() => {
    document.getElementById("myForm").style.display = "none";
}));
//Preload for every page
window.addEventListener("load", () => {
    const preload = document.querySelector(".preload");
});
//# sourceMappingURL=script.js.map