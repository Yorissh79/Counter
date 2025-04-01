const incbtn = document.getElementById("incbtn");
const decbtn = document.getElementById("decbtn");
const num = document.getElementById("num");
const resetbtn = document.getElementById("resetbtn");

let counter = 0;

incbtn.onclick = function () {
    counter++;
    num.textContent = counter
}

decbtn.onclick = function () {
    if (counter >= 1) {
        counter--;
        num.textContent = counter
    }
}

resetbtn.onclick = function () {
    counter = 0;
    num.textContent = counter
}