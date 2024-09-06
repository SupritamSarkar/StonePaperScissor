let yourscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const yourscoreNumber = document.querySelector("#player-score");
const compscoreNumber = document.querySelector("#comp-score");
const newgame = document.querySelector("#new-game");

//my choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let yourchoice = choice.getAttribute("id");
    game(yourchoice);
  });
});

// computer's choice
const generateCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomIndex = Math.floor(Math.random() * 3);
  return option[randomIndex];
};

// showing the winner in the massage
const showWinner = (yourchoice, compchoice, yourWin) => {
  if (yourWin) {
    msg.innerText = `You win! Your ${yourchoice} beats Computer ${compchoice}`;
    yourscore++;
    yourscoreNumber.innerText = yourscore;
    msg.style.color = "green";
  } else {
    msg.innerText = `You lose! Computer ${compchoice} beats Your ${yourchoice}`;
    compscore++;
    compscoreNumber.innerText = compscore;
    msg.style.color = "black";
  }
};

//If the game is Draw
const draw = () => {
  msg.innerText = "Game is Draw, Play again!";
  msg.style.color = "yellow";
};

//  game logic
const game = (yourchoice) => {
  let compchoice = generateCompChoice();

  if (yourchoice === compchoice) {
    draw(); // function to show Draw
  } else {
    let yourWin = true;   // assuming that user wins
    if (yourchoice === "rock") {
      if (compchoice === "paper") {
        yourWin = false;
      } else if (compchoice === "scissor") {
        yourWin = true;
      }
    } else if (yourchoice === "paper") {
      if (compchoice === "rock") {
        yourWin = true;
      } else if (compchoice === "scissor") {
        yourWin = false;
      }
    } else {
      if (compchoice === "paper") {
        yourWin = true;
      } else if (compchoice === "rock") {
        yourWin = false;
      }
    }
    showWinner(yourchoice, compchoice, yourWin);
  }
};

//for New game
const New_Game = () => {
  yourscore = 0;
  compscore = 0;
  yourscoreNumber.innerText = yourscore;
  compscoreNumber.innerText = compscore;
  msg.innerText = "Choose One!";
  msg.style.color = "rgb(170, 202, 191)";
};

newgame.addEventListener("click", New_Game);
