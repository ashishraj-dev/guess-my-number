'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
////////////////////////////////////////////////////////////////////////

let secretNumber = Math.trunc(Math.random() * 20) + 1; // we changed const to let when implementing again button to reset game
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const changeWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const changeBgColor = function (bgColor) {
  document.querySelector('body').style.backgroundColor = bgColor;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number 🚫';
    displayMessage('No Number 🚫');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    changeBgColor('#60b347');

    // document.querySelector('.number').style.width = '30rem';
    changeWidth('30rem');
    // document.querySelector('.number').textContent = secretNumber;
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too High!' : '📈 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📈 Too low!');
      score--;
      // document.querySelector('.score').textContent = score;
      displayScore(score);
    } else {
      // document.querySelector('.message').textContent = 'You lose the game!';
      displayMessage('You lose the game!');
      // document.querySelector('.score').textContent = 0;
      displayScore(0);
    }
  }
  // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too High!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lose the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//////////////////////////////////////////////////////////////////////////////

// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how :

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  // document.querySelector('.number').textContent = '?';
  displayNumber('?');
  document.querySelector('.guess').value = '';
  // document.querySelector('body').style.backgroundColor = '#222';
  changeBgColor('#222');
  // document.querySelector('.number').style.width = '15rem';
  changeWidth('15rem');
});
