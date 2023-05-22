/*
 * DOTS: Level One
 *
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}

function scorePoints() {
  let newScore = score + 10;
  if (newScore == 100) {
    scoreEl.innerHTML = "0" + newScore;
    declareWinner();
  }
  else {
    score = newScore;
    scoreEl.innerHTML = "00" + score;
  }
}

ballEl.onclick = function() {scorePoints()};