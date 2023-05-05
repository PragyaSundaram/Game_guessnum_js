'use strict';
//selecting elemnt in js..uses . ..if it was id use #
// console.log(document.querySelector('.message').textContent); //excuted from left  to right

// document.querySelector('.message').textContent = ' correct number';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 28;
// console.log(document.querySelector('.guess').value);
//event listner- happen when somthing on computer.

/* secret no defining*/

let scnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;
let score = 20; //this var can also be called as state variable ,so that application can use data as relevant data.//keeping the varible despite of being present in the dom .
//drying the code ,impementing function to display message fun1
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'no number  ';
    displayMessage('no number'); //fun1 :-> is displayed over here.
  }
  //player wins
  else if (guess === scnumber) {
    document.querySelector('.message').textContent = 'correct number';
    document.querySelector('.number').textContent = scnumber;
    //css is called by style property and in case there  is dash use camel case notation.
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when guess is wrong
  else if (guess !== scnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > scnumber ? 'too HIgh' : 'too low';

      score = score - 1;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you lost the game sweet heart.';
      document.querySelector('.score').textContent = 0;
    }
  }
  // //guess is high
  // else if (guess > scnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too HIgh';

  //     score = score - 1;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'you lost the game sweet heart.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
  // //guess is lower
  // else if (guess < scnumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'too low';

  //     score--;

  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'you lost the game sweet heart.';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//HIGHSCORE implementaion

//using the button again ...revamping the code .
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  scnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start Gusessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
  console.log(scnumber);
});
console.log(scnumber);
