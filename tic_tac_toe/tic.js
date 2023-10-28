let buttons = document.querySelectorAll("#box");
let i = 0;
let x = [];
let o = [];
let wincase = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

buttons.forEach(button => button.addEventListener("click", () => {
  draw(button);
}));

function winlogic() {
  if (i >= 5) {
    wincase.forEach(win => {
      if (win.every(pos => x.includes(pos))) {
        document.getElementById("result").innerHTML = "❌ wins";
        resetGame();
      } else if (win.every(pos => o.includes(pos))) {
        document.getElementById("result").innerHTML = "⭕️ wins";
        resetGame();
      } else if (i === 9) {
        document.getElementById("result").innerHTML = "Draw";
        resetGame();
      }
    });
  }
}

function draw(button) {
  if (!button.innerHTML) {
    if (i % 2 === 0) {
      button.style.fontSize = '150px';
      button.innerHTML = "❌";
      x.push(parseInt(button.getAttribute('data-value')));
    } else {
      button.style.fontSize = '150px';
      button.innerHTML = "⭕️";
      o.push(parseInt(button.getAttribute('data-value')));
    }
    i++;
    winlogic();
  }
}

function resetGame() {
  i = 0;
  x = [];
  o = [];
  buttons.forEach(button => {
    button.innerHTML = '';
  });
}
