import {Server} from "./server-client";
import { initializeApp } from 'firebase/app'
import { getAuth, onAuthStateChanged} from "firebase/auth"

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
let server: Server;
const navBar = document.getElementById("user");


const darkModeIcon = document.getElementById("darkMode");
const lightModeIcon = document.getElementById("lightMode");

darkModeIcon.addEventListener("click", (() => {
    switchToDark();
}))

lightModeIcon.addEventListener("click", (() => {
    switchToLight()
}))

function switchToDark(){
    window.localStorage.setItem("mode", "dark");
    document.body.classList.add("dark-mode");
    darkModeIcon.style.display = "none";
    lightModeIcon.style.display = "block";
}

function switchToLight(){
    window.localStorage.setItem("mode", "light");
    document.body.classList.remove("dark-mode");
    darkModeIcon.style.display = "block";
    lightModeIcon.style.display = "none";
}

// Log out user and change navbar
async function logout(){
    console.log("logout Method");
    await server.updateMode(window.localStorage.getItem("mode"), "users").then(async () => {
        let loggedOut = await server.logoutUser();
        if (loggedOut){
            location.reload();
        }
    });

}

let data: object;

// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', async () => {
    const preload = document.querySelector(".preload");
    if (window.localStorage.getItem("mode") == "light"){
        if (preload.classList.contains("dark-mode")){
            preload.classList.remove("dark-mode");
        }
    }
    else{
        preload.classList.add("dark-mode");
    }

    server = new Server();
    preload.classList.remove("preload-finish");
    console.log(preload.classList);

    onAuthStateChanged(auth, (async (user) => {
        data  = await getData();
        if (user){
            let checkAuthCount = parseInt(window.localStorage.getItem("checkAuth"));
            checkAuthCount = checkAuthCount + 1;
            let coinPath  = navBar.getAttribute("data-coin");
            let ticketPath  = navBar.getAttribute("data-ticket");

            let pathToDashboard = navBar.getAttribute("data-dashboard");

            window.localStorage.setItem("checkAuth", checkAuthCount.toString());

            navBar.innerHTML = "<div class=\"dropdown\">\n" +
                "  <button>Account</button>\n" +
                "  <div>\n" +
                "    <span id=\"dashboard\">Dashoard</span>\n" +
                "    <span>Points: " +
                (data as any).score +
                "<img alt=\"coin\" class=\"icon\" src=\"" +
                coinPath +
                "\">" +
                "    </span>\n" +
                "    <span>Tickets: " +
                (data as any).tickets +
                "<img alt=\"ticket\" class=\"icon\" src=\"" +
                ticketPath +
                "\">" +
                "</span>\n" +
                "    <span id=\"logOut\">Logout</span>\n" +
                "  </div>\n" +
                "</div>";

            preload.classList.add("preload-finish");
            document.getElementById("logOut").addEventListener("click", () => {
                logout();
            })

            document.getElementById("dashboard").addEventListener("click", () => {
                window.location.assign(pathToDashboard);
            })

            // if ((data as any).mode == window.localStorage.getItem("mode")){
            //     switchToLight();
            // }
            // else if ((data as any).mode ==){
            //     switchToDark();
            // }

            if (parseInt(window.localStorage.getItem("checkAuth")) == 1){
                if ((data as any).mode == "light"){
                    switchToLight();
                }
                else {
                    switchToDark();
                }
            }
            else{
                if (window.localStorage.getItem("mode") == "light"){
                    switchToLight();
                }
                else{
                    switchToDark();
                }
            }

            return data;
        }else {
            preload.classList.add("preload-finish");
            if (window.localStorage.getItem("mode") == "light"){
                switchToLight();
            }
            else{
                switchToDark();
            }
        }
    }))
});

//Get specific user data
async function getData(): Promise<object> {
    let data;
    try {
        data = await server.getData("users", window.localStorage.getItem("userId"));
    }catch(error){
        alert("Error: " + error);
    }

    return data;
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
    "Charlie Chaplin once entered a Charlie Chaplin lookalike contest – and came in 20th place.",
    "\"Underidoderidoderiododeridoo\" - <br>Winston Churchill"

];

let ran = Math.floor(Math.random() * things.length);

document.getElementById("openForm").addEventListener("click", (() => {
    ran = Math.floor(Math.random() * things.length);
    document.getElementById("myForm").style.display = "block";
    document.getElementById("facts").innerHTML = things[ran];
}));

document.getElementById("highlight_close").addEventListener("click", (() => {
    document.getElementById("myForm").style.display = "none";
}))

//Preload for every page
// window.addEventListener("load", () => {
//     if (window.localStorage.getItem("mode") == "light"){
//         if (preload.classList.contains("dark-mode")){
//             preload.classList.remove("dark-mode");
//         }
//     }
//     else{
//         preload.classList.add("dark-mode");
//     }
//
// });




// icon.onclick = function () {
//     document.body.classList.toggle("light-mode");
//
//
//     if (document.body.classList.contains("light-mode")) {
//         icon.src = "Icons/moon.png";
//     } else {
//         icon.src = "Icons/sun.png";
//     }
//custom alert
//const alertContainer = document.getElementById("alertId");

// document.getElementById("alertButton").addEventListener("click", (() => {
//     alertContainer.classList.add("show");
//     alertContainer.classList.remove("hide");
//     alertContainer.classList.add("showAlert");
//     setTimeout(function () {
//         alertContainer.classList.remove("show");
//         alertContainer.classList.add("hide");
//     }, 5000);
// }));
// document.getElementById("closeButton").addEventListener("click", (() => {
//     alertContainer.classList.remove("show");
//     alertContainer.classList.add("hide");
// }));



//quiz related

// const trysEasy = document.getElementById("trysEasy");
// const trysMedium = document.getElementById("trysMedium");
// const trysHard = document.getElementById("trysHard");
//
// document.addEventListener("DOMContentLoaded", (() => {
//     onAuthStateChanged(auth, (async (user) => {
//         data  = await getData();
//
//         trysEasy.innerText = (data as any).EasyQuiz + "/" + (data as any).MaxPlayAmount
//         trysMedium.innerText = (data as any).MediumQuiz + "/" + (data as any).MaxPlayAmount;
//         trysHard.innerText = (data as any).HardQuiz + "/" + (data as any).MaxPlayAmount;
//     }))
// }))