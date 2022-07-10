let gridEL = document.getElementsByClassName("grid")[0];

for (let i = 1; i < 10; i++) {
  element = document.createElement("div");
  element.setAttribute("id", i);
  element.className = "square";
  gridEL.appendChild(element);
}

const squares = document.querySelectorAll(".square");
let mole = document.querySelector(".mole");
let score = document.querySelector(".timing-score #score span");
let timeLeft = document.querySelector(".timing-score #timeLeft span");
let result = 0;
let currentTime = 60;
let currentSquareId;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  currentSquareId = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == currentSquareId) {
      result += 1;
      score.textContent = result;
      currentSquareId = null;
    }
  });
});

let timerID = null;
let timeIntervalSquare = 1000;
timerID = setInterval(randomSquare, timeIntervalSquare);

function countDown() {
  currentTime -= 1;
  timeLeft.textContent = currentTime;
  if (currentTime == 0) {
    clearInterval(countDownInterval);
    alert(`game finished your score is ${result} !`);
    location.reload();
  }
  if (currentTime % 5 == 0) {
    clearInterval(timerID);
    timeIntervalSquare -= 75;
    timerID = setInterval(randomSquare, timeIntervalSquare);
  }
}

let countDownInterval = setInterval(countDown, 1000);
