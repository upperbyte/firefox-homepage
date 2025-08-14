let time = document.querySelector("#time")

function Time() {
    const today = new Date()
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    time.textContent = addZero(h) + ":" + addZero(m) + ":"+ addZero(s);

    setTimeout(Time, 1000);
}

function addZero(i){
    if (i < 10){
        return '0'+i;
    }
    else{
        return i;
    }
}

