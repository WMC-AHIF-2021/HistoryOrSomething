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
//# sourceMappingURL=topAlert.js.map