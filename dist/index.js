"use strict";
//randomNumber
const randomNumber = Math.floor(Math.random() * 90000) + 10000;
const randomButten = document.querySelector("#randomNumber");
randomButten === null || randomButten === void 0 ? void 0 : randomButten.addEventListener("click", () => {
    window.alert(randomNumber);
    console.log(randomNumber);
});
//primeNumber
const primeNumber = () => {
    for (var i = 2; i < randomNumber; i++) {
        var isprime = false;
        for (var j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                isprime = true;
            }
        }
        if (isprime === false)
            console.log(i);
    }
};
const primeNumberButton = document.querySelector("#primeNumber");
primeNumberButton === null || primeNumberButton === void 0 ? void 0 : primeNumberButton.addEventListener("click", () => {
    console.log(primeNumber);
});
//delete
const deletButton = document.querySelector("#delete");
deletButton === null || deletButton === void 0 ? void 0 : deletButton.addEventListener("click", () => {
    console.clear();
});
