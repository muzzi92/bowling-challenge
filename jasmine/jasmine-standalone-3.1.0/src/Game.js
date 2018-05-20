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

Game.prototype.isFrameComplete = function(){
  if (this.frame.rolls.length === 2) {
    return true;
  } else if (this.isStrike()) {
    return true;
  } else {
    return false;
  }
};

Game.prototype.nextFrame = function(){
  if (this.isFrameComplete()) {
    this.addCompleteFrame();
    this.frame = new Frame;
  };
};
