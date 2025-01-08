
//initial scores of user and computer
let humanScore=0;
let computerScore=0;

//getting random values for determining computer choice
function getrandom(){
    return Math.floor(Math.random()*3)+1;

}

//Computer chooses among Rock,Paper and Scissor!
function getComputerChoice(){
    let Computerinput= getrandom();
    if (Computerinput==1){
        return 'rock';
    }
    else if(Computerinput==2){
        return 'paper';
    }
    else {
        return 'scissors';
    }
}
// console.log(getComputerChoice());



//User Input among Rock,Paper and Scissor!
function getHumanChoice(){
    let userInput;

    while (true) {
        userInput = prompt("Enter 'rock', 'paper', or 'scissors'");
        userInput = userInput.toLowerCase();

        if (userInput == 'rock' || userInput == 'paper'|| userInput == 'scissors') {
            return userInput
        }

        console.log("Invalid input. Try again!");
    }

}
//console.log(getHumanChoice());

//determine winner
function winner(humanchoice,compchoice){
    if(humanchoice==compchoice){
        return 'tie!';
    }
    if((humanchoice=='rock'&&compchoice=='scissors')||(humanchoice=='paper'&&compchoice=='rock')||(humanchoice=='scissors'&&compchoice=='paper')){
        return 'human';
    }
    
        return 'computer';
    

}

//Round play

function roundPlay(humanchoice,compchoice){
    let roundwinner=winner(humanchoice,compchoice);
    if(roundwinner=='tie!'){
        console.log("It's a tie!!");
    }
    else if(roundwinner=='human'){
        console.log('You win, '+humanchoice+' beats '+compchoice);
        humanScore++;
    }
    else if(roundwinner=='computer'){
        console.log('You lose, '+compchoice+' beats '+humanchoice);
        computerScore++;
    }
 

}

//game play
function playgame(){
    for(let i =1;i<=5;i++){
        const humanselect=getHumanChoice();
       const compselects=getComputerChoice();
        roundPlay(humanselect,compselects);
    }

    //winner DeterminatioG
    if(humanScore>computerScore){
        console.log("Game Over! Congrats,You won!");
    }
    else if(humanScore<computerScore){
        console.log("Game Over, You lost!")
    }
    else if(computerScore==humanScore){
        console.log("Game Over, It's a tie!!");
    }
}

playgame();

