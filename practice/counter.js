document.addEventListener("DOMContentLoaded", function() {
    let count = main();
    document.querySelector("h1").innerHTML = count;
    document.querySelector("#increment").addEventListener("click" , Increment);
    document.querySelector("#decrement").addEventListener("click" , Decrement);
    document.querySelector("#reset").addEventListener("click" , Reset);
    document.querySelector("#start1").addEventListener("click" , autoCount1);
    document.querySelector("#start2").addEventListener("click" , autoCount2);
     document.querySelector("#start3").addEventListener("click" , autoCount3);
    document.querySelector("#stop").addEventListener("click" , autoCountStop);
});

function main () {
    let count;
    if (localStorage.getItem("count") == null) {
        count = 0;
        localStorage.setItem("count", count);
        console.log(`Count is ${count}`);
    }
    else {
        count = parseInt(localStorage.getItem("count"));
    }
    return count;
}

function Increment () {
    count = parseInt(document.querySelector("h1").innerHTML);
    count++;
    document.querySelector("h1").innerHTML = count;

    // Remind if count is divisible by 10
    if (count % 10 == 0) {
        alert(`Count is now ${count}`);
    }
    localStorage.setItem("count", count);
}

function Decrement () {
    count = parseInt(document.querySelector("h1").innerHTML);
    count--;
    // Keeps the count above -1
    if (count == -1) {
        count = 0;
    }

    document.querySelector("h1").innerHTML = count;
    localStorage.setItem("count", count);
}

function Reset () {
    document.querySelector("h1").innerHTML = 0;
    localStorage.setItem("count", 0);
}

function autoCount1() {
    console.log(localStorage.getItem("autoIncrement"));
    if (localStorage.getItem("autoIncrement") != null)  {
        alert(`counter already started`);
        return;
    }

    let autoIncrement = 0;

    if (autoIncrement == 0) {
        autoIncrement = setInterval(Increment, 1000);
        localStorage.setItem("autoIncrement", autoIncrement);
    }
}

function autoCount2() {
    console.log(localStorage.getItem("autoIncrement"));
    if (localStorage.getItem("autoIncrement") != null)  {
        alert(`counter already started`);
        return;
    }

    let autoIncrement = 0;

    if (autoIncrement == 0) {
        autoIncrement = setInterval(Increment, 2000);
        localStorage.setItem("autoIncrement", autoIncrement);
    }
}

function autoCount3() {
    console.log(localStorage.getItem("autoIncrement"));
    if (localStorage.getItem("autoIncrement") != null)  {
        alert(`counter already started`);
        return;
    }

    let autoIncrement = 0;

    if (autoIncrement == 0) {
        autoIncrement = setInterval(Increment, 3000);
        localStorage.setItem("autoIncrement", autoIncrement);
    }
}


function autoCountStop() {
    if (localStorage.getItem("autoIncrement") == null) {
        alert(`start the counter`);
        return;
    }

    let autoIncrement = localStorage.getItem("autoIncrement");
    clearInterval(autoIncrement);
    localStorage.setItem("autoIncrement", 0);
    localStorage.removeItem("autoIncrement");
}