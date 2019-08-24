let countSec = 0;
const min = 60;
let countMin = 0;
let display = 0;
let isSet = false;
let start = () => {
    if(isSet == false){
    countMin = document.querySelector("input").value;
    countMin--;
    stop = setInterval(setup, 1000);
    isSet = true;
    }
}
let setup = () => {
    countSec++;
    display = (`${countMin}:${min - countSec}`)
    document.querySelector("#set_time").innerHTML = display;
    if (countSec % min == 0) {
        countSec = 0;
        countMin--;
        isSet = true;
        if (countMin < 0) {
            timeEnd();
        }
    }
}
let timeEnd = () => {
    clearInterval(stop)
    isSet = true;
    countMin = 0;
    countSec = 0;
    display = (`${countMin}:${countSec}`)
    document.querySelector("#set_time").innerHTML = display;
}
