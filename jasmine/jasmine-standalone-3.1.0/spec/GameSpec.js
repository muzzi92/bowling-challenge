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

  describe('#isFrameComplete', function(){
    it('returns true when standard two rolls are taken', function(){
      game.frame.roll(3);
      game.frame.roll(2);
      expect(game.isFrameComplete()).toEqual(true);
    });
    it ('returns true when a strike is rolled', function(){
      game.frame.roll(10);
      expect(game.isFrameComplete()).toEqual(true);
    });
    it('returns false when one roll less than 10 is taken', function(){
      game.frame.roll(7);
      expect(game.isFrameComplete()).toEqual(false);
    });
    it('returns false when no roll is taken', function(){
      expect(game.isFrameComplete()).toEqual(false);
    });
  });

  describe('#nextFrame', function(){
    it('sets up new frame when current frame is complete', function(){
      game.frame.roll(3);
      game.frame.roll(4);
      game.nextFrame();
      expect(game.frame.rolls.length).toEqual(0);
    });
    it('calls the addCompleteFrame function', function(){
      game.frame.roll(3);
      game.frame.roll(4);
      game.nextFrame();
    });
    // it('sets up new frame when current frame is complete', function(){
    //   game.frame.roll(3);
    //   game.frame.roll(4);
    //   game.nextFrame();
    //   expect(game.addCompleteFrame).toHaveBeenCalled();
    // });
  });
});
