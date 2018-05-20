function Frame(){
  this.skittles = 10;
  this.rolls = [];
};

Frame.prototype.roll = function(numberOfSkittlesHit){
  if (this.skittles === 0) {
    null;
  } else if (numberOfSkittlesHit > this.skittles) {
    this.rolls.push(this.skittles);
    this.skittles = 0;
  } else {
    this.skittles -= numberOfSkittlesHit;
    this.rolls.push(numberOfSkittlesHit);
  }
};
