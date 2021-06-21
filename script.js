'use strict';

let num = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


const changeMsg = function (msg, score) {
    document.querySelector('.message').textContent = msg;
    document.querySelector('.score').textContent = score;
}

// Functionality of the "check" button
const checkHandler = function () {
    const guess = Number(document.querySelector('.guess').value);
    // When guess is wrong
    if (guess !== num) {
         score--;
         if (score >= 1) {
             guess > num ? changeMsg('📈 Too high!', score) : changeMsg('📉 Too low!', score);
         } else {
            changeMsg('💥 You lost the game!', 0);
            document.querySelector('.number').textContent = num;
         }
    }  
    //  When guess is correct
    else { 
        changeMsg('🎉 Correct Number!', score);
        document.querySelector('.number').textContent = guess;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem";
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        };
    }
}

//Functionality of the "again" button
const againHandler = function () {
    score = 20;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    changeMsg('Start guessing...', score);
    num = Math.floor(Math.random() * 20);
    document.querySelector('body').style.backgroundColor = "#222";
}

document.querySelector('.check').addEventListener('click', checkHandler);

document.querySelector('.again').addEventListener('click', againHandler);