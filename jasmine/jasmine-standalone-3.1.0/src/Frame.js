function Frame(){
  this.skittles = 10;
  this.rolls = [];
};

Frame.prototype.roll = function(numberOfSkittlesHit){
  this.skittles -= numberOfSkittlesHit;
  this.rolls.push(numberOfSkittlesHit);
};
