# Jogo do Aflito 🎯

> Adivinhar um número entre 1 e 100 parece fácil. São só 8 tentativas.

A simple number guessing game built with pure vanilla JavaScript. The computer picks a secret number, you try to find it with as few guesses as possible, and the game tells you whether to go higher or lower. That's it. No servers. No build steps. No excuses.

---

## How to Play

1. Open `index.html` in any modern browser
2. Type a number between 1 and 100
3. Hit **Validar** and read the feedback
4. You have **8 attempts** — use them wisely

---

## Features

- Random number generated on page load (visible in the console, no shame)
- Directional feedback after each guess — *Mais pra cima* or *Mais para baixo*
- Attempt counter so you always know where you stand
- Input validation — it won't accept letters, blanks, or philosophical concepts
- Button locks when attempts run out and reveals the answer

---

## Tech Stack

`HTML5 | CSS3 | JavaScript`

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
