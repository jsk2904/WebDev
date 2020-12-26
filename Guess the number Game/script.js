'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = "I will change my condition no matter what";
console.log(document.querySelector('.message').textContent);
document.querySelector('.score').textContent = 45;
document.querySelector('.number').textContent = 78;
document.querySelector('.guess').value = 43;
console.log(document.querySelector('.guess').value);


document.querySelector('.check').addEventListener('click', function () { 
    console.log(document.querySelector('.guess').value);
});*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

//For deducting score
const deductScore = function (newScore) { 
    if (newScore >= 1) {
        newScore--;
        document.querySelector('.score').textContent = newScore;
    }
    else if (newScore == 0) {
        displayMessage('YOU LOST❌');
         document.querySelector('.score').textContent = newScore;
    }
}
//For updating highscore
let updateHighScore = function(newScore){ 
    highScore = newScore;
}

//console.log(document.querySelector('.number').textContent = secretNumber); //------------------>>>this is for displaying secretNumber

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    if (!guess) { displayMessage('please enter a number'); }
    else if(guess < 0 || guess>20) { displayMessage("Enter the number from 1 to 20 ❗❗")}
    else if (guess > secretNumber) {
        displayMessage('The Number is too large.');
        deductScore(score);
        score--;
        console.log(document.querySelector('.score').textContent = score);
    }
    else if (guess < secretNumber) {
        displayMessage('The Number is too low');
        deductScore(score);
        score--;
        console.log(document.querySelector('.score').textContent = score);
    }
    else {
        score++;
        console.log(document.querySelector('.score').textContent = score);
        document.querySelector('.score').textContent = score;
        displayMessage("Hurray You Got it Right 🥳🥳🥳");
        if (score > highScore) updateHighScore(score);
        document.querySelector('.highscore').textContent = highScore;
        document.querySelector('body').style.backgroundColor = 'rgb(12, 245, 51)';
        document.querySelector('.number').style.width = '30rem';
    }
});
//console.log(`the score valuw is ${document.querySelector('.score').textContent = score}`);



document.querySelector('.again').addEventListener('click', function () { 
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = 20;
   // document.querySelector('.number').textContent = secretNumber;
    displayMessage("Start guessing...")
    score = 20;
});