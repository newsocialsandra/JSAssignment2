let playerName = "Penny";
let playerAge = 18;
let rightHand = "sword";
let leftHand = null;
let rollD20 = Math.floor(Math.random() * 20) + 1;
let rollD6 = Math.floor(Math.random() * 6) + 1;
let monsters = ["spider", "kobold", "cultist", "swarm of bats", "minotaur skeleton", "chimera"];

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

function startArea(roll) {

  if(roll < 8) {
    return "You rolled a " + roll + ". You start in a small village";
  }
  else if(roll < 15) {
    return "You rolled a " + roll + ". You start in a lush forest";
  }

  else {
    return "You rolled a " + roll + ". You start in a dark dungeon";
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
    return "You are unarmed! Be careful!";
  }
}

function monsterAppears(roll) {
  let monster = monsters[roll -1];
  return "A " + monster + " appears. What do you do?"
}

function newGame() {
  console.log(welcomePlayer(playerName));
  console.log(checkEligibility(playerAge));
  console.log(startArea(rollD20));
  console.log(chooseEquipment(rightHand, leftHand));
  console.log(monsterAppears(rollD6));
}

newGame();
