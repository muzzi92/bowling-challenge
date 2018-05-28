function Frame(){
  this.skittles = 10;
  this.rolls = [];
  this.score = function() {
    if (this.rolls[1]) {
      return this.rolls[0] + this.rolls[1];
    } else {
      return this.rolls[0];
    }
  }
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

Frame.prototype.isStrike = function(){
   return (this.rolls[0] === 10) ? true : false;
};

Frame.prototype.isSpare = function(){
  return (this.rolls[0] + this.rolls[1] === 10) ? true : false;
};
