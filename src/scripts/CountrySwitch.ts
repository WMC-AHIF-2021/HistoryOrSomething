const europeNames: string[][] = [
    ["Germany", "../Resources/flags/germany.png", "ComingSoon.html"],
    ["Austria", "../Resources/flags/austria.png", "ComingSoon.html"],
    ["France", "../Resources/flags/france.png", "ComingSoon.html"],
    ["Italy", "../Resources/flags/italy.png", "ComingSoon.html"],
    ["Spain", "../Resources/flags/spain.png", "ComingSoon.html"],
    ["The UK", "../Resources/flags/united-kingdom.png", "../Nations/united-kingdom/Times/present.html"],
    ["Greece", "../Resources/flags/greece.png", "ComingSoon.html"],
    ["Russia", "../Resources/flags/russia.png", "ComingSoon.html"]//missing content
]

const asiaNames: string[][] = [
    ["Japan", "../Resources/flags/japan.png", "ComingSoon.html"],
    ["China", "../Resources/flags/china.png", "ComingSoon.html"],//missing content
    ["India", "../Resources/flags/india.png", "ComingSoon.html"],//missing content
    ["Korea", "../Resources/flags/south-korea.png", "ComingSoon.html"],//missing content
    ["Iran", "../Resources/flags/iran.png", "ComingSoon.html"],//missing content
    ["Saudi-Arabia", "../Resources/flags/saudi-arabia.png", "ComingSoon.html"]//missing content
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
            box.style.display = "none";
            box.innerHTML = "";
        }
        else{
            box.style.display = "flex";
            box.addEventListener('click', () => {
                location.href = arr[x][2];
            })
            box.innerHTML =
                "<img src='" + arr[x][1] + "' alt='" + arr[x][0] + " Flag' />\n" +
                "<span>" + arr[x][0] + "</span>";
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    switchContinent(Direction.none);
} )