'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;

// document.querySelector('.number').textContent = secretNumber;

// //reset the game (again button event)
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;

//   secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.score').textContent = score;

//   document.querySelector('.number').textContent = secretNumber;

//   document.querySelector('.message').textContent = ' Start guessing...';

//   document.querySelector('body').style.backgroundColor = '#222';

//   document.querySelector('.number').style.width = '15rem';

//   document.querySelector('.guess').disabled = false;

//   document.querySelector('.check').disabled = false;

//   document.querySelector('.guess').value = '';
// });

// //check button event
// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);

//   //When there is no input
//   if (!guess) {
//     document.querySelector('.message').textContent = '⛔ No Number!';
//   }
//   //When you win the game
//   else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = '🎉 Correct Number!';
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = ' 30rem';
//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('.guess').disabled = true;

//     document.querySelector('.check').disabled = true;
//   }
//   //When it too high
//   else if (guess > secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '😜 Too High';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//     }
//   }
//   //When it too low
//   else if (guess < secretNumber) {
//     if (score > 0) {
//       document.querySelector('.message').textContent = '😢 Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = '💥 You lost the game';
//     }
//   }
// });

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    displayMessage('No Number! ⛔');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 🥇');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.guess').disabled = true;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'Too low 📉' : 'Too high 📈');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game! 😜');
      document.querySelector('.score').textContent = 0;
    }
  }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too low 📉');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else displayMessage('You lost the game! 😜');
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     displayMessage('Too high 📈');
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else displayMessage('You lost the game! 😜');
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').disabled = false;
  document.querySelector('.guess').value = '';
});
