const choices = ['rock' , 'paper', 'scissor'];
const playerDisplay = document.querySelector('#playerDisplay')

function playGame(playerChoice){

    computerChoice = choices[Math.floor(Math.random() * 3)]

    result = ""

    if (playerChoice == computerChoice){
       result = "its a tie"
    }
    else if(playerChoice == 'rock' && computerChoice == 'paper'){
        result = 'you loose'
    }
    else if(playerChoice == 'rock' && computerChoice == 'scissor'){
        result = 'you won'
    }
    else if(playerChoice == 'paper' && computerChoice == 'scissor'){
        result = 'you loose'
    }
    else if(playerChoice == 'paper' && computerChoice == 'rock'){
        result = 'you won'
    }
    else if(playerChoice == 'scissor' && computerChoice == 'rock'){
        result = 'you loose'
    }
    else if(playerChoice == 'scissor' && computerChoice == 'paper'){
        result = 'you won'
    }

   playerDisplay.textContent = `You : ${playerChoice}`;
   computerDisplay.textContent = `Comp : ${computerChoice}`;

   if( result == 'you won'){
    resultDisplay.textContent = 'You won';
   }
   else if ( result == 'you loose'){
    resultDisplay.textContent = 'You loose';
   }
   else if ( result == 'its a tie'){
    resultDisplay.textContent = 'Its a Tie';
   }

   if( result == 'you won'){
    resultDisplay.style.color = 'rgb(235, 255, 137)';
   }
   else if ( result == 'you loose'){
    resultDisplay.style.color = 'red';
   }
   else if ( result == 'its a tie'){
    resultDisplay.style.color = 'black';
   }
   
}
