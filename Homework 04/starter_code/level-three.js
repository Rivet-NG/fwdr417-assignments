/*
 * DOTS: Level Three
 *
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

function declareWinner() {
  document.body.classList.add('game-over');
}
  
let ballList = arenaEl.querySelectorAll('.js-ball');

let twentyPoints = Number(ballList[0].dataset.increment);
let fivePoints = Number(ballList[1].dataset.increment);
let tenPoints = Number(ballList[2].dataset.increment);
  
ballList[0].onclick = function() {
  let counterOne = score + twentyPoints;
  if (counterOne >= 100) {
    scoreEl.innerHTML = "0" + counterOne;
    declareWinner();
  }
  else {
    score = counterOne;
    scoreEl.innerHTML = "00" + score;
  }
};
  
ballList[1].onclick = function() {
  let counterTwo = score + fivePoints;
  if (counterTwo >= 100) {
    scoreEl.innerHTML = "0" + counterTwo;
    declareWinner();
  }
  else {
    score = counterTwo;
    if (score < 10) {
      scoreEl.innerHTML = "000" + score;
    }
    else {
      scoreEl.innerHTML = "00" + score;
    }
  }
};
  
ballList[2].onclick = function() {
  let counterThree = score + tenPoints;
  if (counterThree >= 100) {
    scoreEl.innerHTML = "0" + counterThree;
    declareWinner();
  }
  else {
    score = counterThree;
    scoreEl.innerHTML = "00" + score;
  }
};