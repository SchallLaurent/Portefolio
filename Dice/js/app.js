// fonction qui génère un nombre aléatoire
function generateRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

// creation d'un header
const header = document.createElement("div");
header.id = "header";
document.body.appendChild(header);

// creation d'un input
let generateUserData = document.createElement("input");
generateUserData.placeholder = "Nombre de dès a lancer";
generateUserData.type = "number";
generateUserData.id = "input";
document.querySelector("#header").appendChild(generateUserData);

// creation d'un bouton dans le header
const buttonPlay = document.createElement("button");
buttonPlay.className = "button";
buttonPlay.id = "buttonPlay";
document.querySelector("#header").appendChild(buttonPlay);
buttonPlay.innerText = "Clique ici pour jouer";

// creation d'un bouton dans le header
/*const buttonRefresh = document.createElement("button")
      buttonRefresh.className = "button"
      buttonRefresh.id="buttonRefresh"
      document.querySelector("#header").appendChild(buttonRefresh)
      buttonRefresh.innerText="refresh le jeu"*/

// creation de la div app
const app = document.createElement("div");
app.id = "app";
document.body.appendChild(app);

// creation de la div player dans la div app
const divPlayer = document.createElement("div");
divPlayer.className = "board";
divPlayer.id = "player";
document.querySelector("#app").appendChild(divPlayer);

// creation de la div dealer dans la div app
const divdealer = document.createElement("div");
divdealer.className = "board";
divdealer.id = "dealer";
document.querySelector("#app").appendChild(divdealer);

// fonction play
function play() {
  let userData = document.querySelector("#input").value;
  // creation des div dès dans les div player et dealer
  for (let i = 0; i < userData; i++) {
    let dicePlayer = document.createElement("div");
    dicePlayer.className = "dice";
    document.querySelector("#player").appendChild(dicePlayer);
    creationDicePlayer(dicePlayer);
    ///////////////////////////////////////////////////////////
    let diceDealer = document.createElement("div");
    diceDealer.className = "dice";
    document.querySelector("#dealer").appendChild(diceDealer);
    creationDiceDealer(diceDealer);
  }
  // fonction qui crée les dès
  function creationDicePlayer(diceElement) {
    let game = {
      numberRandom: generateRandomNumber(1, 6),
    };
    if (game.numberRandom == 1) {
      diceElement.style.backgroundPosition = "0px";
    } else if (game.numberRandom == 2) {
      diceElement.style.backgroundPosition = "500px";
    } else if (game.numberRandom == 3) {
      diceElement.style.backgroundPosition = "400px";
    } else if (game.numberRandom == 4) {
      diceElement.style.backgroundPosition = "300px";
    } else if (game.numberRandom == 5) {
      diceElement.style.backgroundPosition = "200px";
    } else if (game.numberRandom == 6) {
      diceElement.style.backgroundPosition = "100px";
    }
    arrayScorePlayer.push(game.numberRandom);
  }
  function creationDiceDealer(diceElement) {
    let game = {
      numberRandom: generateRandomNumber(1, 6),
    };
    if (game.numberRandom == 1) {
      diceElement.style.backgroundPosition = "0px";
    } else if (game.numberRandom == 2) {
      diceElement.style.backgroundPosition = "500px";
    } else if (game.numberRandom == 3) {
      diceElement.style.backgroundPosition = "400px";
    } else if (game.numberRandom == 4) {
      diceElement.style.backgroundPosition = "300px";
    } else if (game.numberRandom == 5) {
      diceElement.style.backgroundPosition = "200px";
    } else if (game.numberRandom == 6) {
      diceElement.style.backgroundPosition = "100px";
    }
    arrayScoreDealer.push(game.numberRandom);
  }
  scorePlayer();
  scoreDealer();
  WinnerLooser();
}
/// tableau de score
let arrayScorePlayer = [];
let arrayScoreDealer = [];

/// fonction calcul du score player
function scorePlayer() {
  const initValueScorePlayer = 0;
  let scorePlayer = arrayScorePlayer.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initValueScorePlayer
  );
  console.log(scorePlayer);
  const diplayScorePlayer = document.createElement("div");
  diplayScorePlayer.id = "diplayScorePlayer";
  document.querySelector("#player").appendChild(diplayScorePlayer);
  document.querySelector("#diplayScorePlayer").innerHTML =
    "Ton score est de " + scorePlayer;
}

/// fonction calcul du score Dealer
function scoreDealer() {
  const initValueScoreDealer = 0;
  let scoreDealer = arrayScoreDealer.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initValueScoreDealer
  );
  console.log(scoreDealer);
  const diplayScoreDealer = document.createElement("div");
  diplayScoreDealer.id = "diplayScoreDealer";
  document.querySelector("#dealer").appendChild(diplayScoreDealer);
  document.querySelector("#diplayScoreDealer").innerHTML =
    "Ton score est de " + scoreDealer;
}

// evenement clique buttonPlay
document.querySelector("#buttonPlay").addEventListener("click", () => {
  document.querySelector("#player").innerHTML = "";
  document.querySelector("#dealer").innerHTML = "";
  arrayScoreDealer = [];
  arrayScorePlayer = [];
  play();
});

// evenement clique buttonRefresh
/*document.querySelector("#buttonRefresh").addEventListener("click",() => {
      location.reload()
  })*/

function WinnerLooser() {
  const initValueScorePlayer = 0;
  let scorePlayer = arrayScorePlayer.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initValueScorePlayer
  );
  const initValueScoreDealer = 0;
  let scoreDealer = arrayScoreDealer.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initValueScoreDealer
  );
  if (scorePlayer > scoreDealer) {
    const diplayWinnerLooser = document.createElement("div");
    diplayWinnerLooser.id = "WinnerLooser";
    document
      .querySelector("#diplayScorePlayer")
      .appendChild(diplayWinnerLooser);
    document.querySelector("#WinnerLooser").innerText = "Tu es le WINNER";
  } else if (scorePlayer < scoreDealer) {
    const diplayWinnerLooser = document.createElement("div");
    diplayWinnerLooser.id = "WinnerLooser";
    document
      .querySelector("#diplayScoreDealer")
      .appendChild(diplayWinnerLooser);
    document.querySelector("#WinnerLooser").innerHTML = "Tu es le WINNER";
  } else {
    const diplayWinnerLooser = document.createElement("div");
    diplayWinnerLooser.className = "WinnerLooser";
    document
      .querySelector("#diplayScorePlayer")
      .appendChild(diplayWinnerLooser);
    document.querySelector(".WinnerLooser").innerText = "Vous êtes égalité";

    const diplayWinnerLooser2 = document.createElement("div");
    diplayWinnerLooser2.className = "WinnerLooser2";
    document
      .querySelector("#diplayScoreDealer")
      .appendChild(diplayWinnerLooser2);
    document.querySelector(".WinnerLooser2").innerText = "Vous êtes égalité";
  }
}
