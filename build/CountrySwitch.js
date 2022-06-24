const europeNames = [
    ["Germany", "../Resources/flags/germany.png", "../Nations/TimesOf_Germany/src/german-present.html"],
    ["Austria", "../Resources/flags/austria.png", "../Nations/TimesOf_Austria/src/austria-present.html"],
    ["France", "../Resources/flags/france.png", "../Nations/TimesOf_France/FrancePresent.html"],
    ["Italy", "../Resources/flags/italy.png", "../Nations/TimesOf_Italy/src/Italy2022.html"],
    ["Spain", "../Resources/flags/spain.png", "../Nations/TimesOf_Spain/src/SpainPresent.html"],
    ["The UK", "../Resources/flags/united-kingdom.png", "../Nations/TimesOf_UK/src/UK2022.html"],
    ["Greece", "../Resources/flags/greece.png", "../Nations/TimesOf_Greece/src/Greece2022.html"],
    ["Russia", "../Resources/flags/russia.png", "ComingSoon.html"] //missing content
];
const asiaNames = [
    ["Japan", "../Resources/flags/japan.png", "../Nations/TimesOf_Japan/src/Japan2022.html"],
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