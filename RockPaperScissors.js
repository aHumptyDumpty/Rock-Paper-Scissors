//created "selectionArray" to hold selection of strings
let selectionArray = ["Rock", "Paper", "Scissors"];
var result = "";

//Grab random value from selectionArray and passed to humanSelection
function humanChoice() {
  let humanSelection =
    selectionArray[Math.floor(Math.random() * selectionArray.length)];
  return humanSelection;
}

//Grab random value from selectionArraay and passed to compSelection
function computerPlay() {
  let compSelection =
    selectionArray[Math.floor(Math.random() * selectionArray.length)];
  return compSelection;
}

const playerSelection = humanChoice();
const computerSelection = computerPlay();




// function startGame() that takes in two parameters
function startGame(computerSelection, playerSelection) {
  // if- if/else statements to match player and computer selections and store winner
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

let winner = startGame(computerSelection, playerSelection);



$("#player-img").attr("src", "Images/" + playerSelection + ".png");
$("#computer-img").attr("src", "Images/" + computerSelection + ".png");
$("#human-choice").text(playerSelection + " Was Chosen");
$("#robot-choice").text(computerSelection + " Was Chosen");

$("#display-winner").text(result);
