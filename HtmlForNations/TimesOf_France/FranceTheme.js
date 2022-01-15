let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "../TimesOf_UK/Images/Icons/sun.png";
    //document.getElementById("table").className = "table table-dark table-hover";
  } else {
    icon.src = "../TimesOf_UK/Images/Icons/moon.png";
  }
};

