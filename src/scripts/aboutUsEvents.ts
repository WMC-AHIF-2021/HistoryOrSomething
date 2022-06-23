const dev2Box: HTMLElement = document.getElementById('developer-2');
const crabImg: HTMLImageElement = document.getElementById('crabPos') as HTMLImageElement;

dev2Box.addEventListener('click', ()=>{
    crabImg.id = "crabPosAfter";
    setTimeout(()=>{
        crabImg.id = "crabPos";
    }, 3500);
});