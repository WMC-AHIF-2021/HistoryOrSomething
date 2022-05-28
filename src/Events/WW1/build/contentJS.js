const upBtn = document.getElementById('upIcon');
const box = document.getElementById('downIconBox');
const contentLayer = document.getElementById('content');
const curtainLayer = document.getElementById('curtain');
const header = document.getElementById('bigTitleBox');
const timeShow = document.getElementById('timeSpan');
const leftBtn = document.getElementById('leftSwitchBox');
const rightBtn = document.getElementById('rightSwitchBox');
let state = true;
upBtn.addEventListener('click', () => {
    if (state === false) {
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
    else if (state === true) {
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
//# sourceMappingURL=contentJS.js.map