describe('Game', function(){

  beforeEach(function(){
    game = new Game();
  });

  describe('#frames', function(){
    it('Uses an array to store frames', function(){
      expect(game.frames).toBeArray();
    });
  });

  describe('#frame', function(){
    it('Starts the game with a new frame object', function(){
      expect(game.frame).toEqual(jasmine.any(Frame));
    });
  });

  describe('#isStrike', function(){
    it('Returns true if a strike is rolled', function(){
      game.frame.roll(10);
      expect(game.isStrike()).toEqual(true);
    });
    it('Returns false if a strike is not rolled', function(){
      game.frame.roll(5);
      expect(game.isStrike()).toEqual(false);
    });
  });

  describe('#isSpare', function(){
    it('Returns true if a spare is rolled', function(){
      game.frame.roll(4);
      game.frame.roll(6);
      expect(game.isSpare()).toEqual(true);
    });
    it('Returns false if a spare is not rolled', function(){
      game.frame.roll(3);
      game.frame.roll(2);
      expect(game.isSpare()).toEqual(false);
    });
  });

  describe('#addCompleteFrame', function(){
    it('Adds total score of single frame to the frames array', function(){
      game.frame.roll(3);
      game.frame.roll(2);
      game.addCompleteFrame();
      expect(game.frames).toContain(5);
    });
  });
});
