var you;
var yourScore = 0;
var opp;
var oppScore = 0;

var choice = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i<3 ; i++){
        let choices = document.createElement("img");
        choices.id = choice[i];
        choices.src = choice[i] + ".png";
        choices.addEventListener("click", selectChoice);
        document.getElementById("choices").appendChild(choices);
    }
}

function selectChoice(){
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";
    opponent = choice[Math.floor(Math.random()*3)];
    document.getElementById("opponent-choice").src = opponent + ".png";
    
    if (you == opponent){
        yourScore++;
        oppScore++;
    }
    else if (you == "rock" && opponent == "scissors" || you == "paper" && opponent == "rock" || you == "scissors" && opponent == "paper"){
        yourScore++;
    }
    else{
        oppScore++;
    }
    document.getElementById("YOUR SCORE").innerText = yourScore;
    document.getElementById("OPPONENT SCORE").innerText = oppScore;
}