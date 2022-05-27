const upBtn: HTMLImageElement = document.getElementById('upIcon') as HTMLImageElement;
const box: HTMLElement = document.getElementById('downIconBox');
const contentLayer: HTMLElement = document.getElementById('content');
const curtainLayer: HTMLElement = document.getElementById('curtain');
let state: boolean = true;

upBtn.addEventListener('click', ()=>{
    if(state === false){
        state = true;
        upBtn.src = 'imgs/download.png';
        contentLayer.id = "content";
        box.id = "downIconBox";
        curtainLayer.id = "curtain";
    }
    else if(state === true){
        state = false;
        upBtn.src = 'imgs/upload.png';
        contentLayer.id = "hiddenContent";
        box.id = "upIconBox";
        curtainLayer.id = "hiddenCurtain";
    }
});