let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {
    icon.src = "Icons/moon.png";
    //document.getElementById("table").className = "table table-dark table-hover";
  } else {
    icon.src = "Icons/sun.png";
  }
};

let coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
