// Selecting an element in JS
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = 'Try to change💕');
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

// Events 

// Math.random() -> gives us a number between 0 and 1 
// To have a number between 1 and 20, multiply Math.random() by 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click', function () {
    let guess = Number(document.querySelector('.guess').value);

    // When there is no number
    if (!guess) { displayMessage('No number🛑'); }

    // When the player wins
    else if (guess === secretNumber) {
        displayMessage('Correct number');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        // High score 
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }
    // When the guess is too low OR too high
    else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? 'Number too low 🛬' : 'Number too high 🛫');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            displayMessage("Game Over🔥");
            document.querySelector('.score').textContent = "0";
            document.querySelector('body').style.backgroundColor = '#cf1e1e';
            document.querySelector('.number').textContent = secretNumber;
        }
    }
})

// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)
// GOOD LUCK 😀

document.querySelector('.again').addEventListener('click', function () {
    score = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
})