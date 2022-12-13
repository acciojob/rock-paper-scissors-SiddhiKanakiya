var body = document.getElementsByTagName("body")[0];
var plays = document.getElementById("play");
var turns = document.getElementById("game-number");
var updategameturn = document.getElementById("turns")
var updatePlayerScore = document.getElementById("player")
var updateComputerScore = document.getElementById("computer")

var playerselection =  "";
var computerselection =  "";
var playerscore = 0;
var computerscore = 0;


plays.onclick = play

function play()
{
playerselection =  "";
computerselection =  "";
var turnNo = Number(turns.value);

if(Number.isNaN(turnNo)){
    alert("Enter number again");
}
else{
   updategameturn.innerText = turnNo;
   updatePlayerScore.innerText = 0;
   updateComputerScore.innerText = 0;
}
}

if( updategameturn.innerText == 0){
    Finalwinner(updatePlayerScore,updateComputerScore);
}





var rockbutton = document.getElementById("rock");
var paperbutton = document.getElementById("paper");
var scissorsbutton = document.getElementById("scissors");

// when you click rock button

function  rockclicked(){

    var playerselection =  "rock";
    var computerselection = computer();
    let winner = win(playerselection,computerselection);
    let roundwin = document.getElementById("roundwinner");
    roundwin.innerText = winner;
    updateScore(winner);
}

rockbutton.onclick = rockclicked;
// When you select paper
function  paperclicked(){

    var playerselection =  "paper";
    var computerselection = computer();
    let winner = win(playerselection,computerselection);
    let roundwin = document.getElementById("roundwinner");
    roundwin.innerText = winner;
    updateScore(winner);
}

paperbutton.onclick = paperclicked;

// When scissor is clicked
function  scissorsclicked(){

    var playerselection =  "scissor";
    var computerselection = computer();
    let winner = win(playerselection,computerselection);
    let roundwin = document.getElementById("roundwinner");
    roundwin.innerText = winner;
    updateScore(winner);
}

scissorbutton.onclick = scissorclicked;
