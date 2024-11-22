let userScore = 0;
let userScoreTotal = document.querySelector("#user-score");
let compScore = 0;
let compScoreTotal = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


const playGame = (userChoice) => {
    
    const compChoice = genCompChoice();
    
    if (userChoice === compChoice){
        drawGame(compChoice);
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;// paper, scissors
        }else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false; // rock , scissors
        }
        else{
            userWin = compChoice === "rock" ? false : true; // rock , paper
        }
        displayWinner(userWin , userChoice , compChoice);
    }
    
}

const genCompChoice = () => {
    let options = [ "rock" , "paper" , "scissors" ];
    const randomIdx = Math.floor(Math.random()*3);
    return  options[randomIdx];
}

const drawGame = (compChoice) => {
    msg.innerText = `Game Draw! Computer also choosed ${compChoice}. Play Again!`;
    msg.style.backgroundColor = "grey";
}

const displayWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        msg.innerText = `Congratulations! You Won! Your ${userChoice} beats the ${compChoice}. Keep Playing!`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScoreTotal.innerText = userScore;
    } else {
        msg.innerText = `Oops! You Lose!  ${compChoice} defeated your ${userChoice}. Try Again!`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScoreTotal.innerText = compScore;
    }
}
