'use strict';

//Selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice')
const btnroll = document.querySelector('.btn--roll');
const bntNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
var mydices = new Array("dice-1.png","dice-2.png","dice-3.png","dice-4.png","dice-5.png","dice-6.png")




//STARTING ATRIBUTES
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

var currentScore =0;

 

btnroll.addEventListener('click', function()
{
    if(score1El.textContent >= 10)
    {
    document.querySelector('.player--1').classList.add('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    }
    if(score0El.textContent >= 10)
            {
       document.querySelector('.player--0').classList.add('player--winner');
    document.querySelector('.player--0').classList.remove('player--active');
            
            }
    diceEl.classList.remove('hidden');
    //GENERATE RANDOM DICE FUNCTION
    var randomDice = Math.floor(Math.random() * mydices.length);
    diceEl.src  = mydices[randomDice];
    var myDiceNumber = Number(mydices[randomDice].substring(5,6));
    //if dice is 1
     if(mydices[randomDice] === "dice-1.png")
    {  
        //switch to next player
        currentScore=0;
        if((player1.classList.contains("player--active") != true) && ((player0.classList.contains("player--active") != false)))
        {
            player0.classList.remove('player--active');
            player1.classList.add('player--active');
            currentScore0.textContent =0;
           
        }
        else{
            player1.classList.remove('player--active');
            player0.classList.add('player--active');
            currentScore1.textContent=0;
            
        }
       
      

        

    } else {
//add dice to current score
        currentScore = myDiceNumber + currentScore;
        
if((player1.classList.contains("player--active") != true) && ((player0.classList.contains("player--active") != false)))
{
    currentScore0.textContent = currentScore;
    

}
else{
    currentScore1.textContent = currentScore;
   
            
}

    }


});

btnHold.addEventListener('click', function() 
{
    if((player1.classList.contains("player--active") != true) && ((player0.classList.contains("player--active") != false)))
    {
      
        score0El.textContent = Number(currentScore0.textContent) + Number(score0El.textContent) ;
        player0.classList.remove('player--active');
            player1.classList.add('player--active');
            currentScore0.textContent =0;
            currentScore =0;

        
    
    }
    else{

        score1El.textContent = Number(currentScore1.textContent) + Number(score1El.textContent) ;


        player1.classList.remove('player--active');
            player0.classList.add('player--active');
            currentScore1.textContent=0;
            currentScore=0;
            
      
    }
    

    
        

})

