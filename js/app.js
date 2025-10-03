let playerName = "Penny";
let playerAge = 18;
let rightHand = "sword";
let lefthand = null;

function checkEligibility(age) {
  if(age < 12) {
    return "Too young to start the quest";
  }
  else {
    return "You are ready for the quest!"
  }
}

function chooseEquipment(rightHand,leftHand) {
  if(rightHand && leftHand) {
    return "You are armed with a " + rightHand + " and " + leftHand
  }
  else if(rightHand) {
    return "You only have a " + rightHand
  }
  else if(leftHand) {
    return "You only have a " + leftHand
  }
  else {
    "You are unarmed! Be careful!"
  }
}

console.log(checkEligibility("playerAge"));
console.log(chooseEquipment(rightHand, lefthand));
