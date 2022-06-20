const ww1Item = document.getElementById("ww1-item");

document.addEventListener('DOMContentLoaded', ()=>{
    const ua = navigator.userAgent;

    if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
        ww1Item.onclick = ()=> {location.href = 'WW1Event.html'};
    }
    else{
        ww1Item.onclick = ()=> {location.href = '../Events/WW1/src/index.html'};
    }
});