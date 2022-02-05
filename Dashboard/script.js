'use-strict'

const mainImage = document.querySelector('.movie-img');
const game1 = document.querySelector('.photo1');
const game2 = document.querySelector('.photo2');
const game3 = document.querySelector('.photo3');
const gameTitle = document.getElementById('heading');
const aboutGame = document.getElementById('aboutGame');
const playNow = document.querySelector('.playnow');


console.log(mainImage.src);


game1.addEventListener('click', function () {
    mainImage.src = 'images/guess.png';
    gameTitle.textContent = "Guess my number";
    // aboutGame.textContent = "About the game: Hit check button until you guess the hidden number. You have 20 attempts. "

    changer = 1;
})


game2.addEventListener('click', function () {
    mainImage.src = 'images/dice.png';
    gameTitle.textContent = "Roll Dice";
    changer = 2;
    // aboutGame.textContent = "About the game: Hit check button until you guess the hidden number. You have 20 attempts. "
})
game3.addEventListener('click', function () {
    mainImage.src = 'images/bankapp.png';
    gameTitle.textContent = "Bank App";
    changer = 3;

})


// if(mainImage.src = 'images/guess.png')
playNow.addEventListener('click', function () {
    console.log(mainImage.src);
    if (changer === 1) {
        location.href = "guessmynumber/index.html";
    }
    if (changer === 2) {
        location.href = "rolldice/index.html";
    }
    if (changer === 3) {
        location.href = "bankapp/index.html";
    }
})
