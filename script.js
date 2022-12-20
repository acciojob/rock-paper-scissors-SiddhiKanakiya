let body = document.getElementsByTagName("body")[0];
let plays = document.getElementById("play");
let turns = document.getElementById("game-number");
let updategameturn = document.getElementById("turns");
let updatePlayerScore = document.getElementById("player");
let updateComputerScore = document.getElementById("computer");
let continuePlaying = false;

let playerselection =  "";
let computerselection =  "";
let playerscore = 0;
let computerscore = 0;
let turnNo = 0;
// Updating the number of turns
plays.onclick = play;

function play(){
playerselection =  "";
computerselection =  "";
turnNo = Number(turns.value);

if(Number.isNaN(turnNo)){
    alert("Enter number again");
}
else{
   continuePlaying = true;
   updategameturn.innerText = turnNo;
   playerscore = 0;
   computerscore = 0;
   updatePlayerScore.innerText = 0;
   updateComputerScore.innerText = 0;
}
}

// While the turns is more than zero
var rockbutton = document.getElementById("rock");
var paperbutton = document.getElementById("paper");
var scissorsbutton = document.getElementById("scissors");



rockbutton.onclick = function(){
   if(turnNo>0) { 
     
      playerselection="rock";
      roundwinner();
      turnNo--;
      updategameturn.innerText = turnNo;  }
   else if(continuePlaying==true){
      gamewinner();
      continuePlaying=false;
   }
   else return
}

paperbutton.onclick = function(){
   if(turnNo>0) {

      playerselection="paper";
      roundwinner();
      turnNo--;
      updategameturn.innerText = turnNo;  }
   else if(continuePlaying==true){
         gamewinner();
         continuePlaying=false;
   }

   else return;
}

scissorsbutton.onclick = function(){
   if(turnNo>0) {
      
      playerselection="scissors";
      roundwinner();
      turnNo--;
      updategameturn.innerText = turnNo;  }

   else if(continuePlaying==true){
         gamewinner();
         continuePlaying=false;
   }
   else return;
}


function computer(){
    
let computerOptions = ["rock", "paper" , "scissors"]
let choiceNumber = Math.floor(Math.random()*3);
 computerselection = computerOptions[choiceNumber]
}

function roundwinner(){
   computer();
   let round = document.getElementById("roundwinner");
   let computerchoose= document.getElementById("computerchoose");
   computerchoose.innerText = "Computer Selected: " + computerselection;

   
   if((playerselection=="rock" && computerselection=="rock") || (playerselection=="paper" && computerselection=="paper") || (playerselection=="scissors" && computerselection=="scissors")){
      round.innerText = "Tie"
   }
   else if((playerselection=="rock" && computerselection=="scissors") || (playerselection=="paper" && computerselection=="rock") || (playerselection=="scissors" && computerselection=="paper")){
      playerscore ++;
      updatePlayerScore.innerText = playerscore
      round.innerText = "Player Won"
  }
  else{
   round.innerText ="Computer Won"
   computerscore++;
   updateComputerScore.innerText =  computerscore;
  }

}


function gamewinner(){
   let game= document.getElementById("roundwinner");
   if(playerscore>computerscore){
      game.innerText = "Player won the game!";
   }
   else if(computerscore>playerscore){
      game.innerText = "Computer won the game!";
   }
   else{
      game.innerText = "It was tie";
   }


}






//  