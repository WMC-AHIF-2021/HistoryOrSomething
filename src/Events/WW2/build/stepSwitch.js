var Direction;
(function (Direction) {
    Direction[Direction["left"] = -1] = "left";
    Direction[Direction["right"] = 1] = "right";
    Direction[Direction["none"] = 0] = "none";
})(Direction || (Direction = {}));
const right_Btn = document.getElementById('rightSwitch');
const left_Btn = document.getElementById('leftSwitch');
const event_coords = [
    "",
];
const codeContent = [
    ""
];
const timeText = [
    "January, 1936"
];
const newspaperSrc = [
    "imgs/",
];
const imgContentList = [
    "imgs/map1936January.png"
];
right_Btn.addEventListener('click', () => {
    switchStep(Direction.right);
});
left_Btn.addEventListener('click', () => {
    switchStep(Direction.left);
});
let current = 0;
const stepCircles = document.getElementsByClassName('dot');
const timeDateBox = document.getElementById('timeDate');
const myDIV = document.getElementById('mydiv');
let fullImgBox = document.getElementById('fullImgBox');
let fullImg = document.getElementById('fullImg');
/*Events*/
let seaBlockade = document.getElementById('UkBlockade');
let event1 = document.getElementById('event1');
let event2 = document.getElementById('event2');
let event3 = document.getElementById('event3');
let event4 = document.getElementById('event4');
let event5 = document.getElementById('event5');
let event6 = document.getElementById('event6');
let event7 = document.getElementById('event7');
let battle1 = document.getElementById('battle1');
let battle2 = document.getElementById('battle2');
let battle3 = document.getElementById('battle3');
let battle4 = document.getElementById('battle4');
let battle5 = document.getElementById('battle5');
let temp;
function jumpToStep(index) {
    current = index;
    switchStep(Direction.none);
}
function switchStep(direction) {
    /*Default settings*/
    event1.coords = "";
    event2.coords = "";
    event3.coords = "";
    event4.coords = "";
    event5.coords = "";
    event6.coords = "";
    battle1.coords = "";
    battle2.coords = "";
    battle3.coords = "";
    battle4.coords = "";
    battle5.coords = "";
    giveAreas();
    current += direction;
    if (current < 0) {
        current = codeContent.length - 1;
    }
    else if (current >= codeContent.length) {
        current = 0;
    }
    switch (current) {
        case 1:
            break;
    }
    const contentBox = document.getElementById('stepContentID');
    const step = stepCircles[current];
    timeDateBox.innerText = timeText[current];
    myDIV.src = imgContentList[current];
    contentBox.innerHTML = codeContent[current];
    changeStepCircle(step);
}
let container = document.createElement('p');
container.id = "DateOverStep";
function changeStepCircle(step) {
    if (temp != undefined) {
        container.innerText = "";
        temp.style.height = "20px";
        temp.style.width = "20px";
    }
    step.style.height = "30px";
    step.style.width = "30px";
    container.innerText = timeText[current];
    step.before(container);
    temp = step;
}
function removeFullImgBox() {
    fullImgBox.style.display = "none";
}
function showFullImgBox() {
    fullImgBox.style.display = "flex";
}
document.addEventListener('DOMContentLoaded', () => {
    switchStep(Direction.none);
});
//# sourceMappingURL=stepSwitch.js.map