function Game(){
  this.frames = [];
  this.frame = new Frame();
};


Game.prototype.isStrike = function(){
   return (this.frame.rolls[0] === 10) ? true : false;
};

Game.prototype.isSpare = function(){
  return (this.frame.rolls[0] + this.frame.rolls[1] === 10) ? true : false;
};

Game.prototype.addCompleteFrame = function(){
  score = (this.frame.rolls[0] + this.frame.rolls[1]);
  this.frames.push(score);
};
