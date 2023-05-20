/*
 * DOTS: Level Two
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

let ballList = arenaEl.querySelectorAll('.js-ball');

ballList[0].onclick = function() {
  let counterOne = score + 10;
  if (counterOne == 100) {
    scoreEl.innerHTML = "0" + counterOne;
    declareWinner();
  }
  else {
    score = counterOne;
    scoreEl.innerHTML = "00" + score;
  }
};

ballList[1].onclick = function() {
  let counterTwo = score + 10;
  if (counterTwo == 100) {
    scoreEl.innerHTML = "0" + counterTwo;
    declareWinner();
  }
  else {
    score = counterTwo;
    scoreEl.innerHTML = "00" + score;
  }
};

ballList[2].onclick = function() {
  let counterThree = score + 10;
  if (counterThree == 100) {
    scoreEl.innerHTML = "0" + counterThree;
    declareWinner();
  }
  else {
    score = counterThree;
    scoreEl.innerHTML = "00" + score;
  }
};