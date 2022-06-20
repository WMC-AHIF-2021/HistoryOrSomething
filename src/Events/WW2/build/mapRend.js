let item = document.getElementById("mydiv");
let areaBlock = document.getElementById('mapBlock');
let descriptionBlock = document.getElementById('descriptionBox');
dragElement(item);
function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;
    areaBlock.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
        e = e || window;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window;
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        let bottom = window.innerHeight - elmnt.offsetTop - elmnt.height;
        let right = window.innerWidth - elmnt.offsetLeft - elmnt.width;
        if (elmnt.offsetTop - pos2 <= -1 && bottom + pos2 <= 0) {
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        }
        if (elmnt.offsetLeft - pos1 <= -1 && right + pos1 <= 0) {
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
//# sourceMappingURL=mapRend.js.map