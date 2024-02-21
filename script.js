'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '.🎆🎇Correct Number!';
// // console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// const x = function () {
//   console.log(23);
// };
// x();
let secretNumber = Math.trunc(Math.random() * 20 + 1);
// console.log(secretNumber);
let score = 20; //a state variable
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess); //string

  //When there is no guess number
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!⛔';
    displayMessage('No Number!⛔');

    //When there is correct guess number
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎆🎇Correct Number!';
    displayMessage('🎆🎇Correct Number!');
    document.querySelector('h1').textContent = 'Hurray! Your Number 🥳';
    document.querySelector('body').style.backgroundColor = '#b30047';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess in wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈Too high!' : '📉Too Low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too Low!');
      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😔 🎭 You Lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
  //     //When there is bigger guess number
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈Too high!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '😔 🎭 You Lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  //     //When there is smaller guess number
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉Too Low!';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent =
  //         '😔 🎭 You Lost the game!';
  //       document.querySelector('.score').textContent = 0;
  //     }
});

//again function
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('h1').textContent = 'Guess My Number!';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#14007a';
  document.querySelector('.number').style.width = '15rem';
});
