function goBack() {
    history.back();
}
const content = document.getElementById("content");
document.addEventListener("DOMContentLoaded", (() => {
    if (window.localStorage.getItem("mode") == "light") {
        content.style.backgroundColor = "#F8F9FA";
    }
    else {
        content.style.backgroundColor = "#232323";
    }
}));
//# sourceMappingURL=comingSoon.js.map