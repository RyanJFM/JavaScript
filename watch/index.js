//global variables
let count = 0;
let seconds;
let minutes;
let hours;
let interval_id;

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#start").addEventListener("click", startTimer);
    document.querySelector("#stop").addEventListener("click", stopTimer);
    document.querySelector("#reset").addEventListener("click", resetTimer);
});

function startTimer() {
    if (interval_id !== null) {
        // already running, do nothing
        return;
    }
    console.log("Timer started");
    interval_id = setInterval(increment, 1000);

} 

function resetTimer() {
    stopTimer();
    seconds, minutes, hours = 0, 0, 0;
    document.querySelector("h1").innerHTML = "00:00:00";
}

function stopTimer() {
    clearInterval(interval_id);
}

function increment() {
    if ( interval_id )
    time = document.querySelector("h1").innerHTML;
    
    // set times
    seconds = parseInt(time.split(":")[2]);
    minutes = parseInt(time.split(":")[1]);
    hours = parseInt(time.split(":")[0]);

    seconds++;

    if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    
    seconds = seconds.toString();
    minutes = minutes.toString();
    hours = hours.toString();

    if (seconds < 10) {
        seconds = 0 + seconds;
    }

    if (minutes < 10) {
        minutes = 0 + minutes;
    }

    if (hours < 10) {
        hours = 0 + hours;
    }

    document.querySelector("h1").innerHTML = hours + ":" + minutes + ":" + seconds;
}


