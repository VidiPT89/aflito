const resultDisplay = document.querySelector("#result");
const guessInput = document.querySelector("#guessInput");
const limite = 8;
let tentativa = 0;
const porta = Math.floor(Math.random() * 100) + 1;
console.log("Porta", porta); // mostra a porta que o computador escolheu

function validateNumber() {
    const guess = document.querySelector("#guessInput").value;
    console.log("Guess", guess);

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        alert("Por favor, insira um número válido entre 1 e 100.");
        return;
    }

    tentativa++; // contar as tentativas

    if (guess != porta && tentativa >= limite) {
        resultDisplay.innerHTML += `#${tentativa} : ${guess}: Fim de jogo! A porta era ${porta}<br>`;
        document.querySelector("#guessButton").disabled = true;
        document
            .querySelector("#guessButton")
            .removeEventListener("click", validateNumber);
        return;
    }

    if (guess < porta) {
        resultDisplay.innerHTML += `#${tentativa} : ${guess}: Mais pra cima.<br>`;
    } else if (guess > porta) {
        resultDisplay.innerHTML += `#${tentativa} : ${guess}: Mais para baixo.<br>`;
    } else {
        resultDisplay.innerHTML += `#${tentativa} : ${guess}: Acertaste!<br>`;
    }

    guessInput.value = ""; // clean input
    guessInput.focus();
}

document
    .querySelector("#guessButton")
    .addEventListener("click", validateNumber);
