// creation d'un input pour le nombre de pixel dans la grille
const tailleGrille = document.createElement("input");
tailleGrille.id = "tailleGrille";
tailleGrille.placeholder = "Taille de la grille";
document.querySelector(".configuration").appendChild(tailleGrille);

// creation d'un input pour la taille des pixels dans la grille
const taillePixel = document.createElement("input");
taillePixel.id = "taillePixel";
taillePixel.placeholder = "Taille des pixels dans la grille";
document.querySelector(".configuration").appendChild(taillePixel);

// Creation d'un bouton pour valider le formulaire
const buttonValid = document.createElement("button");
buttonValid.id = "buttonValid";
buttonValid.innerText = "Valider";
document.querySelector(".configuration").appendChild(buttonValid);

function generateGridInit() {
  // Creation d'une DIV pour englober la grille
  let game = document.createElement("div");
  game.id = "game";
  document.querySelector("#invader").appendChild(game);
  game.style.grid = `repeat(8, 50px) / repeat(8, 50px)`;
  for (let i = 0; i < 64; i++) {
    const case1 = document.createElement("div");
    case1.className = "case1";
    document.querySelector("#game").appendChild(case1);
    case1.addEventListener("click", changeColor);
    case1.addEventListener("dblclick", deleteColor);
  }
}
generateGridInit();

// Fonction pour générer la grille en fonction des input
function generateGrid() {
  document.querySelector("#invader").innerHTML = "";
  let userDataTaillePixel = document.querySelector("#taillePixel").value;
  let userDataTailleGrille = document.querySelector("#tailleGrille").value;
  let NombreDeCase = Math.pow(userDataTailleGrille, 2);
  // Creation d'une DIV pour englober la grille
  let game = document.createElement("div");
  game.id = "game";
  document.querySelector("#invader").appendChild(game);
  game.style.grid = `repeat(${userDataTailleGrille}, ${userDataTaillePixel}px) / repeat(${userDataTailleGrille}, ${userDataTaillePixel}px)`;
  for (let i = 0; i < NombreDeCase; i++) {
    const case1 = document.createElement("div");
    case1.className = "case1";
    document.querySelector("#game").appendChild(case1);
    case1.addEventListener("click", changeColor);
    case1.addEventListener("dblclick", deleteColor);
  }
}

function changeColor(event) {
  const case1 = event.target;
  console.log(selectColor);
  if (selectColor == "black") {
    case1.classList.add("black");
    case1.classList.remove("grey", "green", "yellow", "blue");
    return;
  }

  if (selectColor == "grey") {
    case1.classList.add("grey");
    case1.classList.remove("black", "green", "yellow", "blue");
    return;
  }
  if (selectColor == "yellow") {
    case1.classList.add("yellow");
    case1.classList.remove("black", "green", "grey", "blue");
    return;
  }
  if (selectColor == "green") {
    case1.classList.add("green");
    case1.classList.remove("black", "grey", "yellow", "blue");
    return;
  }
  if (selectColor == "blue") {
    case1.classList.add("blue");
    case1.classList.remove("black", "grey", "yellow", "green");
    return;
  }
}

function deleteColor(event) {
  const case1 = event.target;
  case1.classList.remove("black", "grey", "green", "yellow");
}

document.querySelector("#buttonValid").addEventListener("click", (e) => {
  e.preventDefault();
  generateGrid();
});

let selectColor = "black";

const containerColor = document.createElement("div");
containerColor.id = "containerColor";
document.body.append(containerColor);

const buttonGrey = document.createElement("button");
buttonGrey.id = "colorGrey";
buttonGrey.className = "buttonColor";
document.querySelector("#containerColor").append(buttonGrey);
buttonGrey.addEventListener("click", () => {
  selectColor = "grey";
  buttonBlack.classList.remove("selectorColor");
  buttonGrey.classList.add("selectorColor");
  buttonYellow.classList.remove("selectorColor");
  buttonGreen.classList.remove("selectorColor");
  buttonBlue.classList.remove("selectorColor");
});

const buttonBlack = document.createElement("button");
buttonBlack.id = "colorBlack";
buttonBlack.className = "buttonColor";
document.querySelector("#containerColor").append(buttonBlack);
buttonBlack.addEventListener("click", () => {
  selectColor = "black";
  buttonBlack.classList.add("selectorColor");
  buttonGrey.classList.remove("selectorColor");
  buttonYellow.classList.remove("selectorColor");
  buttonGreen.classList.remove("selectorColor");
  buttonBlue.classList.remove("selectorColor");
});

const buttonYellow = document.createElement("button");
buttonYellow.id = "colorYellow";
buttonYellow.className = "buttonColor";
document.querySelector("#containerColor").append(buttonYellow);
buttonYellow.addEventListener("click", () => {
  selectColor = "yellow";
  buttonBlack.classList.remove("selectorColor");
  buttonGrey.classList.remove("selectorColor");
  buttonYellow.classList.add("selectorColor");
  buttonGreen.classList.remove("selectorColor");
  buttonBlue.classList.remove("selectorColor");
});

const buttonGreen = document.createElement("button");
buttonGreen.id = "colorGreen";
buttonGreen.className = "buttonColor";
document.querySelector("#containerColor").append(buttonGreen);
buttonGreen.addEventListener("click", () => {
  selectColor = "green";
  buttonBlack.classList.remove("selectorColor");
  buttonGrey.classList.remove("selectorColor");
  buttonYellow.classList.remove("selectorColor");
  buttonGreen.classList.add("selectorColor");
  buttonBlue.classList.remove("selectorColor");
});

const buttonBlue = document.createElement("button");
buttonBlue.id = "colorBlue";
buttonBlue.className = "buttonColor";
document.querySelector("#containerColor").append(buttonBlue);
buttonBlue.addEventListener("click", () => {
  selectColor = "blue";
  buttonBlack.classList.remove("selectorColor");
  buttonGrey.classList.remove("selectorColor");
  buttonYellow.classList.remove("selectorColor");
  buttonGreen.classList.remove("selectorColor");
  buttonBlue.classList.add("selectorColor");
});
