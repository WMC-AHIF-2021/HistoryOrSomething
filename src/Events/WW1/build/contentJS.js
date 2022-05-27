const upBtn = document.getElementById('upIcon');
const box = document.getElementById('downIconBox');
const contentLayer = document.getElementById('content');
const curtainLayer = document.getElementById('curtain');
let state = true;
upBtn.addEventListener('click', () => {
    if (state === false) {
        state = true;
        upBtn.src = 'imgs/download.png';
        contentLayer.id = "content";
        box.id = "downIconBox";
        curtainLayer.id = "curtain";
    }
    else if (state === true) {
        state = false;
        upBtn.src = 'imgs/upload.png';
        contentLayer.id = "hiddenContent";
        box.id = "upIconBox";
        curtainLayer.id = "hiddenCurtain";
    }
});
//# sourceMappingURL=contentJS.js.map