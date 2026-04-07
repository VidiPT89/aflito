# 🎯 Jogo do Aflito

> *"It's between 1 and 100. You have 8 attempts. How hard can it be?"*

A number guessing game built with pure vanilla JavaScript and absolutely nothing else.
The computer picks a secret number, you try to find it, and the game tells you whether to aim higher or lower.
No frameworks. No libraries. No mercy.

---

## Features

- Random number generated on page load — between 1 and 100, every time
- Directional feedback after each guess — *Higher* or *Lower*
- Attempt counter so you always know how many you have left
- Input validation — no letters, no blanks, no out-of-range nonsense
- Button locks when attempts run out and reveals the answer

---

## Tech Stack

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## How to Play

1. Open `index.html` in any modern browser
2. Type a number between **1** and **100**
3. Hit the button and read the feedback
4. You have **8 attempts** — use them wisely
5. Run out of guesses and the answer is revealed. No second chances.

---

## Project Structure

```
aflito/
├── index.html      # Game interface
├── app.js          # All the logic
└── styles.css      # Minimal. Very minimal.
```

---

## Honest Notes

- All variable names are in Portuguese. The game is called *Jogo do Aflito*. This was always going to happen.
- The secret number is logged to the console on page load. Technically a cheat code. Spiritually, a debugging tool.
- CSS is three lines. One of them is a yellow background on focus. Living on the edge.
- 8 attempts was an arbitrary choice. It felt right. It still does.

---

*Next up: a score tracker, attempt history, or maybe a hard mode with fewer tries. We'll see.*
