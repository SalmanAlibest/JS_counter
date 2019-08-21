let countSec = 0;
const min = 60;
let countMin = 0;
let display = 0;
let start = () => {
    countMin = document.querySelector("input").value;
    countMin--;
    stop = setInterval(setup, 1000);
}
let setup = () => {
    countSec++;
    display = (`${countMin}:${min - countSec}`)
    document.querySelector("#set_time").innerHTML = display;
    if (countSec % min == 0) {
        countSec = 0;
        countMin--;
        if (countMin < 0) {
            timeEnd();
        }
    }
}
let timeEnd = () => {
    clearInterval(stop)
    countMin = 0;
    countSec = 0;
    display = (`${countMin}:${countSec}`)
    document.querySelector("#set_time").innerHTML = display;
}
