const alertContainer = document.getElementById("alertId");
document.getElementById("alertButton").addEventListener("click", (() => {
    alertContainer.classList.add("show");
    alertContainer.classList.remove("hide");
    alertContainer.classList.add("showAlert");
    setTimeout(function () {
        alertContainer.classList.remove("show");
        alertContainer.classList.add("hide");
    }, 5000);
}));
document.getElementById("closeButton").addEventListener("click", (() => {
    alertContainer.classList.remove("show");
    alertContainer.classList.add("hide");
}));
const popup = document.getElementById("popupBoxContainer");
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("clickBtn").addEventListener("click", (() => {
        popup.style.display = "block";
    }));
    document.getElementById("btn1").addEventListener("click", (() => {
        popup.style.display = "none";
    }));
    document.getElementById("btn2").addEventListener("click", (() => {
        popup.style.display = "none";
    }));
});
//# sourceMappingURL=customAlert.js.map