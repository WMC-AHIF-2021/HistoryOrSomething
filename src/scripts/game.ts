
function switchToDark(){
    window.localStorage.setItem("mode", "dark");
    document.body.classList.add("dark-mode");
}

function switchToLight(){
    window.localStorage.setItem("mode", "light");
    document.body.classList.remove("dark-mode");
}


// After page loaded check if user is logged in
document.addEventListener('DOMContentLoaded', async () => {
    if (window.localStorage.getItem("mode") == "light"){
        switchToLight();
    }
    else{
        switchToDark();
    }
});
