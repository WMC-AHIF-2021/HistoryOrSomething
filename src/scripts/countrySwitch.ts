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

const europeNames: string[][] = [
    ["germany", "../Resources/flags/germany.png", "ComingSoon.html", "hidden"],
    ["austria", "../Resources/flags/austria.png", "ComingSoon.html", "hidden"],
    ["france", "../Resources/flags/france.png", "ComingSoon.html", "hidden"],
    ["italy", "../Resources/flags/italy.png", "ComingSoon.html", "hidden"],
    ["spain", "../Resources/flags/spain.png", "ComingSoon.html", "hidden"],
    ["united-kingdom", "../Resources/flags/united-kingdom.png", "../Nations/united-kingdom/Times/present.html", "hidden"],
    ["greece", "../Resources/flags/greece.png", "ComingSoon.html", "show"],
    ["russia", "../Resources/flags/russia.png", "ComingSoon.html", "hidden"]//missing content
]

const asiaNames: string[][] = [
    ["japan", "../Resources/flags/japan.png", "ComingSoon.html", "hidden"],
    ["china", "../Resources/flags/china.png", "ComingSoon.html", "hidden"],//missing content
    ["india", "../Resources/flags/india.png", "ComingSoon.html", "hidden"],//missing content
    ["korea", "../Resources/flags/south-korea.png", "ComingSoon.html", "hidden"],//missing content
    ["iran", "../Resources/flags/iran.png", "ComingSoon.html", "hidden"],//missing content
    ["saudi-Arabia", "../Resources/flags/saudi-arabia.png", "ComingSoon.html", "hidden"]//missing content
]
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

enum Direction {
    left = -1,
    right = 1,
    none = 0
}

const arr = [
    [europeNames, "Europe"],
    [asiaNames, "Asia"],
    /*
    [africaNames, "Africa"],
    [northAmerica, "North America"],
    [southAmerica, "South America"]
    */
]

let current: number = 0;

document.getElementById("right").addEventListener("click", (() => {
    switchContinent(Direction.left);
}));

document.getElementById("left").addEventListener("click", (() => {
    switchContinent(Direction.right);
}));

function switchContinent(direction: Direction){
    let sectionHeader = document.getElementById('sectionHeaderTS');
    let continent = sectionHeader.innerText;

    current += direction;
    if(current < 0){
        current = arr.length-1;
    }
    if(current >= arr.length){
        current = 0;
    }
    let cur: string[][] = arr[current][0] as string[][];

    document.getElementById('sectionHeaderBackground').style.backgroundImage =
        "linear-gradient(var(--background-image-curtain), var(--background-image-curtain)), url(\"../Resources/neededImg/" + arr[current][1] + "Img.jpg\")";
    document.getElementById('sectionHeaderTS').innerText = arr[current][1] as string;
    changeContent(cur);
}


function changeContent(arr: string[][]){
    let boxes: HTMLCollectionOf<Element> = document.getElementsByClassName('countryBox');
    for(let x: number = 0; x < arr.length || x < boxes.length; x++){
        let box = boxes.item(x) as HTMLElement;
        if(x >= arr.length){
            box.innerHTML = "";
        }
        else{
            onAuthStateChanged(auth, (async (user) => {
                if (user) {
                    preload.classList.remove("preload-finish");
                   await getData().then((data) => {
                       box.setAttribute("data-country", arr[x][0]);
                       box.addEventListener('click', () => {
                           location.href = arr[x][2];
                       })
                       box.innerHTML =
                           "<img src='" + arr[x][1] + "' alt='" + arr[x][0] + " Flag' />\n" +
                           "<span>" + arr[x][0] + "</span>";

                       console.log(box);
                       for (let i = 0; i < (data as any).countryName.length; i++){
                           console.log((data as any).countryName[i], arr[x][0]);
                           if ((data as any).countryName[i] == arr[x][0] && (data as any).countryState[i] == true){
                               console.log("inside")
                               box.style.display = "flex";
                               break;
                           }
                           else{
                               box.style.display = "none";
                           }
                       }

                       console.log(box);
                       preload.classList.add("preload-finish");
                   });
                } else{
                    if (arr[x][0] == "united-kingdom"){
                        box.style.display = "flex";
                    }
                    else{
                        box.style.display = "none";
                    }
                }
            }));
        }
    }
}

let data: object;
let preload = document.querySelector(".preload");
const country = document.querySelectorAll(".countryBox");


document.addEventListener('DOMContentLoaded', () => {
    server = new Server();
    switchContinent(Direction.none);
} )

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