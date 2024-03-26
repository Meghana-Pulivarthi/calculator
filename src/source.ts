const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");

const firstInput = document.querySelector("#first-input") as HTMLInputElement;
const secondInput = document.querySelector("#second-input") as HTMLInputElement;
const screen = document.querySelector(".screen");

function addNumbers(a: number, b: number) {
    console.log(a + b);
    console.log(typeof screen);
    screen.innerHTML = (a + b).toString();
}
button1.addEventListener("click", () =>
    addNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);

function subtractNumbers(a: number, b: number) {
    console.log(a - b);
    console.log(typeof screen);
    screen.innerHTML = (a - b).toString();
}
button2.addEventListener("click", () =>
    subtractNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
function multiplyNumbers(a: number, b: number) {
    console.log(a * b);
    console.log(typeof screen);
    screen.innerHTML = (a * b).toString();
}
button3.addEventListener("click", () =>
    multiplyNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
function divideNumbers(a: number, b: number) {
    console.log(a / b);
    console.log(typeof screen);
    screen.innerHTML = (a / b).toString();
}
button4.addEventListener("click", () =>
    divideNumbers(parseInt(firstInput.value), parseInt(secondInput.value))
);
