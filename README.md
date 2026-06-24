# 🎯 Aflito — Number Guessing Game

> A classic "guess the number" game where you have 8 attempts to find a random number between 1 and 100.

"Jogo do Aflito" (Game of the Anxious One) is a browser-based number guessing game built with vanilla JavaScript. The computer picks a random number between 1 and 100, and you get 8 attempts to guess it. After each guess, the game tells you whether to go higher ("Mais pra cima") or lower ("Mais para baixo"). If you run out of attempts, the secret number is revealed and the button is permanently disabled. The game log shows all your guesses with attempt numbers, building a visual history of your path to the answer — or to defeat.

## 📦 What's Inside

- 🎲 Random number generation: `Math.floor(Math.random() * 100) + 1` on page load
- 🔢 Number input with `min="1" max="100"` HTML validation
- 📊 Attempt counter with 8-guess limit (`const limite = 8`)
- ⬆️ Directional hints: "Mais pra cima" (go higher) / "Mais para baixo" (go lower)
- 🏆 Win detection with "Acertaste!" (You got it!) message
- 💀 Game over: reveals the secret number (`A porta era {porta}`) and disables the button
- 📜 Running game log using `innerHTML +=` with `<br>` separators, showing `#{attempt} : {guess} : {hint}`
- 🔒 Button disabled on game over via both `.disabled = true` and `removeEventListener`
- 🎨 Yellow highlight on input focus (`background-color: yellow`)
- 🔍 Debug feature: secret number logged to console (`console.log("Porta", porta)`)
- ⌨️ Auto-clear input value and auto-focus after each guess
- 🛡️ Input validation: rejects values outside 1-100 and non-numeric entries using `isNaN()`

## 🛠️ Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🏗️ Project Structure

```
aflito/
├── index.html      # Game page: h1 title, h2 instructions, number input, button, result <p> (20 lines)
├── styles.css      # Minimal styling — only input focus highlight (3 lines)
└── app.js          # All game logic: random number, validation, guess checking (42 lines)
```

## ⚙️ Game Mechanics

```
Game Initialization:
  const porta = Math.floor(Math.random() * 100) + 1   → secret number (1-100)
  let tentativa = 0                                     → attempt counter
  const limite = 8                                      → max attempts allowed

Each Guess (validateNumber function):
  ┌─────────────────────────────────────────────────────────┐
  │ Step 1: Read input value                                 │
  │   guess = document.querySelector("#guessInput").value    │
  └──────────────────────────┬──────────────────────────────┘
                             │
  ┌──────────────────────────▼──────────────────────────────┐
  │ Step 2: Input validation                                 │
  │   guess < 1 OR guess > 100 OR isNaN(guess)?             │
  │   YES → alert("Por favor, insira um numero valido")     │
  │   NO  → continue to step 3                               │
  └──────────────────────────┬──────────────────────────────┘
                             │
  ┌──────────────────────────▼──────────────────────────────┐
  │ Step 3: Increment attempt counter                        │
  │   tentativa++                                            │
  └──────────────────────────┬──────────────────────────────┘
                             │
  ┌──────────────────────────▼──────────────────────────────┐
  │ Step 4: Check game over                                  │
  │   guess != porta AND tentativa >= limite?                │
  │   YES → Display "Fim de jogo! A porta era {porta}"      │
  │         Disable button + remove event listener           │
  │   NO  → continue to step 5                               │
  └──────────────────────────┬──────────────────────────────┘
                             │
  ┌──────────────────────────▼──────────────────────────────┐
  │ Step 5: Compare guess to secret number                   │
  │   guess < porta  → "Mais pra cima" (aim higher)         │
  │   guess > porta  → "Mais para baixo" (aim lower)        │
  │   guess == porta → "Acertaste!" (correct!)              │
  └──────────────────────────┬──────────────────────────────┘
                             │
  ┌──────────────────────────▼──────────────────────────────┐
  │ Step 6: Clear input, refocus for next guess              │
  │   guessInput.value = ""                                  │
  │   guessInput.focus()                                     │
  └─────────────────────────────────────────────────────────┘
```

## 📱 Game Flow Example

```
Secret number: 42 (logged to console as "Porta 42")

#1 : 50 : Mais para baixo.
#2 : 25 : Mais pra cima.
#3 : 37 : Mais pra cima.
#4 : 43 : Mais para baixo.
#5 : 42 : Acertaste!
```

```
Secret number: 73 (game over scenario)

#1 : 50 : Mais pra cima.
#2 : 75 : Mais para baixo.
#3 : 60 : Mais pra cima.
#4 : 70 : Mais pra cima.
#5 : 74 : Mais para baixo.
#6 : 72 : Mais pra cima.
#7 : 71 : Mais pra cima.
#8 : 74 : Fim de jogo! A porta era 73
[Button disabled — game ends]
```

## 🚀 How to Run

```bash
# 1. Clone the repository
git clone https://github.com/VidiPT89/aflito.git

# 2. Open index.html in your browser
cd aflito
open index.html    # macOS
# or: start index.html (Windows) / xdg-open index.html (Linux)

# 3. Enter a number (1-100) and click "Adivinhar"
# Tip: Open browser console (F12) to see the secret number for testing
```

## 📝 Notes

- The secret number is called `porta` (Portuguese for "door") rather than a more typical name like `secretNumber` — this gives the game a "find the right door" metaphor matching the title "Jogo do Aflito"
- The game uses `==` (loose equality) instead of `===` (strict equality) when comparing the guess to the secret number — this works because JavaScript coerces the string input to a number for comparison, but using `parseInt()` with `===` would be more explicit
- There is a subtle bug: if you guess correctly on your last attempt (attempt 8), the game-over check runs first (`guess != porta && tentativa >= limite`) and would show "Fim de jogo" — however, the `!=` condition saves it because a correct guess makes the condition false, allowing the comparison step to run and show "Acertaste!" instead
- The CSS file is extremely minimal — just 3 lines total, containing only `#guessInput:focus { background-color: yellow; }`. All other visual styling relies entirely on browser defaults
- The title says "Advinha a porta" which contains a typo — "Advinha" should be "Adivinha" (Portuguese for "guess")
- The button is disabled on game over using both `.disabled = true` and `removeEventListener("click", validateNumber)` — either mechanism alone would prevent further guesses, but using both is a belt-and-suspenders approach that ensures the game truly stops

---

Developed by **David Arsenio Martins** — *"Vidi"*
