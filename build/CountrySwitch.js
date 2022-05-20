const europeNames = [
    ["Germany", "../Resources/flags/germany.png", "../Nations/TimesOf_Germany/src/german-present.html"],
    ["Austria", "../Resources/flags/austria.png", ""],
    ["France", "../Resources/flags/france.png", "../Nations/TimesOf_France/FrancePresent.html"],
    ["Italy", "../Resources/flags/italy.png", ""],
    ["Spain", "../Resources/flags/spain.png", "../Nations/TimesOf_Spain/src/SpainPresent.html"],
    ["The UK", "../Resources/flags/united-kingdom.png", "../Nations/TimesOf_UK/src/UK2022.html"],
    ["Greece", "../Resources/flags/greece.png", ""]
];
const asiaNames = [
    ["Japan", "../Resources/flags/japan.png", "../Nations/TimesOf_Japan/src/Japan2022.html"],
    ["China", "../Resources/flags/china.png", ""],
    ["India", "../Resources/flags/india.png", ""],
    ["Korea", "../Resources/flags/south-korea.png", ""],
    ["Iran", "../Resources/flags/iran.png", ""],
    ["Saudi-Arabia", "../Resources/flags/saudi-arabia.png", ""]
];
/*
const africaNames: string[][] = [
    ["Ethiopia","../Resources/flags/ethiopia.png",""],
    ["South Africa","../Resources/flags/south-africa.png",""],
    ["Morocco","../Resources/flags/morocco.png",""],
    ["Egypt","../Resources/flags/egypt.png",""],
    ["Nigeria","../Resources/flags/nigeria.png",""]
]

const northAmerica: string[][] = [
    ["USA","../Resources/flags/united-states.png",""],
    ["Canada","../Resources/flags/canada.png",""],
    ["Mexico","../Resources/flags/mexico.png",""],
    ["Honduras","../Resources/flags/honduras.png",""],
    ["Cuba","../Resources/flags/cuba.png",""],
]

const southAmerica: string[][] = [
    ["Brazil","../Resources/flags/brazil.png",""],
    ["Colombia","../Resources/flags/colombia.png",""],
    ["Argentina","../Resources/flags/argentina.png",""],
    ["Venezuela","../Resources/flags/venezuela.png",""],
    ["Peru","../Resources/flags/peru.png",""],
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
            box.style.display = "flex";
            box.addEventListener('click', () => {
                location.href = arr[x][2];
            });
            box.innerHTML =
                "<img src='" + arr[x][1] + "' alt='" + arr[x][0] + " Flag' />\n" +
                    "<span>" + arr[x][0] + "</span>";
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
    switchContinent(Direction.none);
});
//# sourceMappingURL=CountrySwitch.js.map