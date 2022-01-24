'use strict';

//  console.log(document.querySelector('.message')
//  .textContent); 
  
//  document.querySelector('.message').textContent = 'Correct';

//  console.log(document.querySelector('.message')
//  .textContent); 

//  document.querySelector('.number').textContent =13;
// document.querySelector('.score').textContent = 10;


//  document.querySelector('.guess').value = 23; 
//  console.log(document.querySelector('.guess').value);


var number = Math.trunc(Math.random()*20)+1;
console.log(number);
var score = Number(document.querySelector('.score').textContent);

document.querySelector('.check').addEventListener('click', function() {
   const guess =  Number(document.querySelector('.guess').value);
   console.log(guess);
   
    if(!guess) {
        document.querySelector('.message').textContent = 'No number';
    }
    if(guess != number)
    {
        if (guess > number)
        document.querySelector('.message').textContent = 'Too high!';
        if (guess < number)
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
    if(guess === number)
    {
        document.querySelector('.message').textContent = `Congrats, the number is ${number}`;
        document.body.style.backgroundColor='green';


        if(score > Number(document.querySelector('.highscore').textContent))
        {
        document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('.number').textContent = number;
    }
    if(score === 0 )
    {
        document.querySelector('.message').textContent = `You failed!`;
        
    }



})

document.querySelector('.again').addEventListener('click',function() {
    document.querySelector('.message').textContent = `Start guessing...`;
    document.querySelector('.guess').value = "";
    document.querySelector('.score').textContent = 20;
    document.body.style.backgroundColor='#222';
    document.querySelector('.number').textContent ='?';
    score=20;
    number = Math.trunc(Math.random()*20)+1;

})

