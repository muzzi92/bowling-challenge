function Game(){
  this.frames = [];
  this.frame = new Frame();
};

Game.prototype.addCompleteFrame = function(){
  if (this.isFrameComplete) {
    this.frames.push(this.frame);
  }
};

Game.prototype.isFrameComplete = function(){
  if (this.frame.rolls.length === 2) {
    return true;
  } else if (this.frame.isStrike()) {
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

Game.prototype.bowl = function(num){
  this.frame.roll(num);
  this.nextFrame();
};

Game.prototype.totalScore = function(){
  var score = 0
  for (var i = 0; i < this.frames.length; i++){
    if (this.frames[i].isStrike()) {
      this.frames[i+1].rolls[0] += this.frames[i+1].rolls[0];
      this.frames[i+1].rolls[1] += this.frames[i+1].rolls[1];
    } else if (this.frames[i].isSpare()) {
      this.frames[i+1].rolls[0] += this.frames[i+1].rolls[0];
    }
    score += this.frames[i].score()
  }
  return score;
};
