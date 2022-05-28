// Make the DIV element draggable:
const navbar: HTMLElement = document.getElementById('descriptionNavbar');
dragDIV(document.getElementById("descriptionBox"));

function dragDIV(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    navbar.onmousedown = dragCursorDown;

    function dragCursorDown(e) {
        e = e || window;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragDIV;
        // call a function whenever the cursor moves:
        document.onmousemove = DivDrag;
    }

    function DivDrag(e) {
        e = e || window;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragDIV() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}