const dev2Box = document.getElementById('developer-2');
const crabImg = document.getElementById('crabPos');
dev2Box.addEventListener('click', () => {
    crabImg.id = "crabPosAfter";
    setTimeout(() => {
        crabImg.id = "crabPos";
    }, 3500);
});
//# sourceMappingURL=aboutUsEvents.js.map