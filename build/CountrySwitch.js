let europeNames = [
    ["Germany", "../Resources/flags/germany.png", "../Nations/TimesOf_Germany/src/german-present.html"],
    ["Austria", "../Resources/flags/austria.png", ""],
    ["France", "../Resources/flags/france.png", "../Nations/TimesOf_France/src/FrancePresent.html"],
    ["Italy", "../Resources/flags/italy.png", ""],
    ["Spain", "../Resources/flags/spain.png", "../Nations/TimesOf_Spain/src/SpainPresent.html"],
    ["The UK", "../Resources/flags/united-kingdom.png", "../Nations/TimesOf_UK/src/UK2022.html"],
    ["Greece", "../Resources/flags/greece.png", ""]
];
let asiaNames = [
    ["Japan", "../Resources/flags/japan.png", "../Nations/TimesOf_Japan/src/Japan2022.html"],
    ["China", "../Resources/flags/china.png", ""]
];
function switchContinent() {
    let sectionHeader = document.getElementById('sectionHeaderTS');
    let continent = sectionHeader.innerText;
    switch (continent) {
        case "Europe":
            document.getElementById('sectionHeaderBackground').style.backgroundImage =
                "linear-gradient(var(--background-image-curtain), var(--background-image-curtain)), url(\"../Resources/neededImg/AsiaImg.jpg\")";
            document.getElementById('sectionHeaderTS').innerText = "Asia";
            changeContent(asiaNames);
            break;
        default:
            document.getElementById('sectionHeaderBackground').style.backgroundImage =
                "linear-gradient(var(--background-image-curtain), var(--background-image-curtain)), url(\"../Resources/neededImg/EuropeImg.jpg\")";
            document.getElementById('sectionHeaderTS').innerText = "Europe";
            changeContent(europeNames);
            break;
    }
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
    switchContinent();
});
//# sourceMappingURL=CountrySwitch.js.map