const upBtn: HTMLImageElement = document.getElementById('upIcon') as HTMLImageElement;
const box: HTMLElement = document.getElementById('downIconBox');
const contentLayer: HTMLElement = document.getElementById('content');
const curtainLayer: HTMLElement = document.getElementById('curtain');
const header: HTMLElement = document.getElementById('bigTitleBox');
const timeShow: HTMLElement = document.getElementById('timeSpan');
const leftBtn: HTMLElement = document.getElementById('leftSwitchBox');
const rightBtn: HTMLElement = document.getElementById('rightSwitchBox');
let state: boolean = true;

upBtn.addEventListener('click', ()=>{
    if(state === false){
        state = true;
        upBtn.src = 'imgs/download.png';
        contentLayer.id = "content";
        box.id = "downIconBox";
        curtainLayer.id = "curtain";
        header.id = "bigTitleBox";
        timeShow.style.display = "none";
        leftBtn.id = "leftSwitchBox";
        rightBtn.id = "rightSwitchBox";

    }
    else if(state === true){
        state = false;
        upBtn.src = 'imgs/upload.png';
        contentLayer.id = "hiddenContent";
        box.id = "upIconBox";
        curtainLayer.id = "hiddenCurtain";
        header.id = "bigTitleBoxHidden";
        timeShow.style.display = "block";
        leftBtn.id = "SwitchBoxHidden";
        rightBtn.id = "SwitchBoxHidden";
    }
});