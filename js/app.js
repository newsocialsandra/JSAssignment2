let playerName = "Penny";
let playerAge = 18;
let rightHand = "sword";
let leftHand = null;
let rollD20 = Math.floor(Math.random() * 20) + 1

function welcomePlayer(name) {
  return "Welcome, " + name;
}

function checkEligibility(age) {
  if(age < 12) {
    return "Too young to start the quest";
  }
  else {
    return "You are ready for the quest!";
  }
}

function startArea(diceroll) {

  if(diceroll < 8) {
    return "You rolled a " + diceroll + ". You start in a small village";
  }
  else if(diceroll < 15) {
    return "You rolled a " + diceroll + ". You start in a lush forest";
  }

  else {
    return "You rolled a " + diceroll + ". You start in a dark dungeon";
  }
}

function chooseEquipment(rightHand,leftHand) {
  if(rightHand && leftHand) {
    return "You are armed with a " + rightHand + " and " + leftHand;
  }
  else if(rightHand) {
    return "You only have a " + rightHand;
  }
  else if(leftHand) {
    return "You only have a " + leftHand;
  }
  else {
    "You are unarmed! Be careful!";
  }
}

function newGame(name, age, right, left) {
  console.log(welcomePlayer(playerName));
  console.log(checkEligibility("playerAge"));
  console.log(startArea(rollD20));
  console.log(chooseEquipment(rightHand, leftHand));
}

newGame();
