let guessInput = document.querySelector("input");
const num = Math.floor(Math.random() * 100);
let submit = document.querySelector(".submit");
let msg = document.querySelector(".msg");

//console.log(num);   --> For checking the generated no in the console

submit.addEventListener("click", () => {
    let guess = Number(guessInput.value); 
    if (guess === num) {
        msg.innerText = "You have guessed correctly!!!";
    }
    else if (guess < num) {
        msg.innerText = "Guess larger";
    }
    else {
        msg.innerText = "Guess smaller";
    }
});