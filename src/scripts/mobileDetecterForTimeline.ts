const ww1Item = document.getElementById("ww1-item");
const ww2Item = document.getElementById("ww2-item");

document.addEventListener('DOMContentLoaded', ()=>{
    const ua = navigator.userAgent;

    if(/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)){
        ww1Item.onclick = ()=> {location.href = 'WW1Event.html'};
        ww2Item.onclick = ()=> {location.href = 'WW2Event.html'};
    }
    else{
        ww1Item.onclick = ()=> {location.href = '../Events/WW1/src/index.html'};
        //needs to be changed after WW2 Event is finished
        ww2Item.onclick = ()=> {location.href = 'WW2Event.html'};
    }
});