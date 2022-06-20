enum Direction {
    left = -1,
    right = 1,
    none = 0
}

const right_Btn: HTMLElement = document.getElementById('rightSwitch');
const left_Btn: HTMLElement = document.getElementById('leftSwitch');

const event_coords: string[] = [
    "",
]

const codeContent: string[] = [
    ""
]

const timeText: string[] = [
    "January, 1936"
]

const newspaperSrc: string[] = [
    "imgs/",
]

const imgContentList: string[] = [
    "imgs/backgroundEnd.png"
]

right_Btn.addEventListener('click', ()=>{
    switchStep(Direction.right);
});

left_Btn.addEventListener('click', ()=>{
    switchStep(Direction.left);
});

let current: number = 0;
const stepCircles = document.getElementsByClassName('dot');
const timeDateBox: HTMLElement = document.getElementById('timeDate');
const myDIV: HTMLImageElement = document.getElementById('mydiv') as HTMLImageElement;
let fullImgBox: HTMLElement = document.getElementById('fullImgBox');
let fullImg: HTMLImageElement = document.getElementById('fullImg') as HTMLImageElement;
/*Events*/
let seaBlockade: HTMLAreaElement = document.getElementById('UkBlockade') as HTMLAreaElement;
let event1: HTMLAreaElement = document.getElementById('event1') as HTMLAreaElement;
let event2: HTMLAreaElement = document.getElementById('event2') as HTMLAreaElement;
let event3: HTMLAreaElement = document.getElementById('event3') as HTMLAreaElement;
let event4: HTMLAreaElement = document.getElementById('event4') as HTMLAreaElement;
let event5: HTMLAreaElement = document.getElementById('event5') as HTMLAreaElement;
let event6: HTMLAreaElement = document.getElementById('event6') as HTMLAreaElement;
let event7: HTMLAreaElement = document.getElementById('event7') as HTMLAreaElement;
let battle1: HTMLAreaElement = document.getElementById('battle1') as HTMLAreaElement;
let battle2: HTMLAreaElement = document.getElementById('battle2') as HTMLAreaElement;
let battle3: HTMLAreaElement = document.getElementById('battle3') as HTMLAreaElement;
let battle4: HTMLAreaElement = document.getElementById('battle4') as HTMLAreaElement;
let battle5: HTMLAreaElement = document.getElementById('battle5') as HTMLAreaElement;
let temp;

function jumpToStep(index: number){
    current = index;
    switchStep(Direction.none);
}

function switchStep(direction: Direction){
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
    if(current < 0){
        current = codeContent.length-1;
    }
    else if(current >= codeContent.length){
        current = 0;
    }

    switch(current) {
        case 1:
            break;
    }

    const contentBox: HTMLElement = document.getElementById('stepContentID')
    const step: HTMLElement = stepCircles[current] as HTMLElement;
    timeDateBox.innerText = timeText[current];
    myDIV.src = imgContentList[current];
    contentBox.innerHTML = codeContent[current];
    changeStepCircle(step);
}

let container: HTMLElement = document.createElement('p') as HTMLElement;
container.id = "DateOverStep";

function changeStepCircle(step: HTMLElement){
    if(temp != undefined){
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
function removeFullImgBox(){
    fullImgBox.style.display = "none";
}

function showFullImgBox(){
    fullImgBox.style.display = "flex";
}

document.addEventListener('DOMContentLoaded', ()=>{
    switchStep(Direction.none)
})