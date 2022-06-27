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
const europeNames = [
    ["Germany", "../Resources/flags/germany.png", "ComingSoon.html"],
    ["Austria", "../Resources/flags/austria.png", "ComingSoon.html"],
    ["France", "../Resources/flags/france.png", "ComingSoon.html"],
    ["Italy", "../Resources/flags/italy.png", "ComingSoon.html"],
    ["Spain", "../Resources/flags/spain.png", "ComingSoon.html"],
    ["The UK", "../Resources/flags/united-kingdom.png", "../Nations/united-kingdom/Times/present.html"],
    ["Greece", "../Resources/flags/greece.png", "ComingSoon.html"],
    ["Russia", "../Resources/flags/russia.png", "ComingSoon.html"] //missing content
];
const asiaNames = [
    ["Japan", "../Resources/flags/japan.png", "ComingSoon.html"],
    ["China", "../Resources/flags/china.png", "ComingSoon.html"],
    ["India", "../Resources/flags/india.png", "ComingSoon.html"],
    ["Korea", "../Resources/flags/south-korea.png", "ComingSoon.html"],
    ["Iran", "../Resources/flags/iran.png", "ComingSoon.html"],
    ["Saudi-Arabia", "../Resources/flags/saudi-arabia.png", "ComingSoon.html"] //missing content
];
/*
const africaNames: string[][] = [
    ["Ethiopia","../Resources/flags/ethiopia.png","ComingSoon.html"],//missing content
    ["South Africa","../Resources/flags/south-africa.png","ComingSoon.html"],//missing content
    ["Morocco","../Resources/flags/morocco.png","ComingSoon.html"],//missing content
    ["Egypt","../Resources/flags/egypt.png","ComingSoon.html"],//missing content
    ["Nigeria","../Resources/flags/nigeria.png","ComingSoon.html"]//missing content
]

const northAmerica: string[][] = [
    ["USA","../Resources/flags/united-states.png","ComingSoon.html"],//missing content
    ["Canada","../Resources/flags/canada.png","ComingSoon.html"],//missing content
    ["Mexico","../Resources/flags/mexico.png","ComingSoon.html"],//missing content
    ["Honduras","../Resources/flags/honduras.png","ComingSoon.html"],//missing content
    ["Cuba","../Resources/flags/cuba.png","ComingSoon.html"],//missing content
]

const southAmerica: string[][] = [
    ["Brazil","../Resources/flags/brazil.png","ComingSoon.html"],//missing content
    ["Colombia","../Resources/flags/colombia.png","ComingSoon.html"],//missing content
    ["Argentina","../Resources/flags/argentina.png","ComingSoon.html"],//missing content
    ["Venezuela","../Resources/flags/venezuela.png","ComingSoon.html"],//missing content
    ["Peru","../Resources/flags/peru.png","ComingSoon.html"],//missing content
]
*/
var Direction;
(function (Direction) {
    Direction[Direction["left"] = -1] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["none"] = 0] = "none";
})(Direction || (Direction = {}));
const arr = [
    [europeNames, "Europe"],
    [asiaNames, "Asia"],
    /*
    [africaNames, "Africa"],
    [northAmerica, "North America"],
    [southAmerica, "South America"]
    */
];
let current = 0;
let preload = document.querySelector(".preload");
function switchContinent(direction) {
    let sectionHeader = document.getElementById('sectionHeaderTS');
    let continent = sectionHeader.innerText;
    current += direction;
    if (current < 0) {
        current = arr.length - 1;
    }
    if (current >= arr.length) {
        current = 0;
    }
    let cur = arr[current][0];
    document.getElementById('sectionHeaderBackground').style.backgroundImage =
        "linear-gradient(var(--background-image-curtain), var(--background-image-curtain)), url(\"../Resources/neededImg/" + arr[current][1] + "Img.jpg\")";
    document.getElementById('sectionHeaderTS').innerText = arr[current][1];
    changeContent(cur);
}
function changeContent(arr) {
    let boxes = document.getElementsByClassName('countryBox');
    for (let x = 0; x < arr.length || x < boxes.length; x++) {
        let box = boxes.item(x);
        if (x >= arr.length) {
            box.style.display = "none";
            box.innerHTML = "";
        }
        else {
            onAuthStateChanged(auth, ((user) => __awaiter(this, void 0, void 0, function* () {
                yield getData().then(() => {
                    box.style.display = "flex";
                    box.addEventListener('click', () => {
                        location.href = arr[x][2];
                    });
                    box.innerHTML =
                        "<img src='" + arr[x][1] + "' alt='" + arr[x][0] + " Flag' />\n" +
                            "<span>" + arr[x][0] + "</span>";
                });
            })));
        }
    }
}
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
document.addEventListener('DOMContentLoaded', (() => {
    switchContinent(Direction.none);
    server = new Server();
}));
//# sourceMappingURL=countrySwitch.js.map