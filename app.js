//Initalize Starter Game values
let selectionArray = ["Rock", "Paper", "Scissors"];
var result = "";

//Grab random value from selectionArray and pass to humanSelection
function humanChoice() {
  let humanSelection =
    selectionArray[Math.floor(Math.random() * selectionArray.length)];
  return humanSelection;
}

//Grab random value from selectionArraay and pass to compSelection
function computerPlay() {
  let compSelection =
    selectionArray[Math.floor(Math.random() * selectionArray.length)];
  return compSelection;
}

//store player and computer selections in constants 
const playerSelection = humanChoice();
const computerSelection = computerPlay();

// Conditional Game Logic
function startGame(computerSelection, playerSelection) {
  if (computerSelection === "Scissors" && playerSelection === "Rock") {
    result = "Human Wins!";
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    result = "Robot Wins!";
  } else if (computerSelection === "Rock" && playerSelection === "Rock") {
    result = "Its a Draw!";
  } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    result = "Robot Wins!";
  } else if (computerSelection === "Rock" && playerSelection === "Paper") {
    result = "Human Wins!";
  } else if (computerSelection === "Paper" && playerSelection === "Paper") {
    result = "It's a Draw!";
  } else if (computerSelection === "Rock" && playerSelection === "Scissors") {
    result = "Robot Wins!";
  } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
    result = "Human Wins!";
  } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
    result = "It's a Draw!";
  } 
  return result; 
}

// Winner of game held in var
var winner = startGame(computerSelection, playerSelection);


//jQuery for functionality - Update Images - Reload winner text - Reload Page btn.
$("#player-img").attr("src", "img/" + playerSelection + ".png");
$("#computer-img").attr("src", "img/" + computerSelection + ".png");
$("#human-choice").text(playerSelection + " Was Chosen");
$("#robot-choice").text(computerSelection + " Was Chosen");
$(".btn").click(function(){
    location.reload(true);
})

$("#display-winner").text(result);