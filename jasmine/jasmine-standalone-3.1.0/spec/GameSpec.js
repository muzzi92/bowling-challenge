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

  describe('#addCompleteFrame', function(){
    it('Adds total score of single frame to the frames array', function(){
      game.frame.roll(3);
      game.frame.roll(2);
      game.addCompleteFrame();
      expect(game.frames).toContain(game.frame);
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
    it('sets up new frame when current frame is complete', function(){
      game.frame.roll(3);
      game.frame.roll(4);
      spyOn(game, 'addCompleteFrame');
      game.nextFrame();
      expect(game.addCompleteFrame).toHaveBeenCalled();
    });
  });

  describe('#bowl', function(){
    it("calls the frame's roll function", function(){
      spyOn(game.frame, 'roll');
      game.bowl();
      expect(game.frame.roll).toHaveBeenCalled();
    });
    it('calls the nextFrame function', function(){
      spyOn(game, 'nextFrame');
      game.bowl();
      expect(game.nextFrame).toHaveBeenCalled();
    })
  })

  describe('#totalScore', function(){
    it('tallies a normal game', function(){
      for (var i = 0; i < 20; i++) { game.bowl(3) };
      expect(game.totalScore()).toEqual(60);
    });
    it('tallies a game with a strike bonus in it', function(){
      for (var i = 0; i < 16; i++) { game.bowl(3) };
      game.bowl(10);
      game.bowl(3);
      game.bowl(3);
      expect(game.totalScore()).toEqual(70);
    });
    it('tallies a game with a spare bonus in it', function(){
      for (var i = 0; i < 16; i++) { game.bowl(3) };
      game.bowl(5);
      game.bowl(5);
      game.bowl(3);
      game.bowl(3);
      expect(game.totalScore()).toEqual(67);
    });
    // it('tallies a game with multiple strike bonuses in a row', function(){
    //   game.bowl(10);
    //   game.bowl(10);
    //   for (var i = 0; i < 16; i++) { game.bowl(3) };
    //   expect(game.totalScore()).toEqual(87);
    //   for (var i = 0; i < game.frames.length; i++){
    //     console.log(game.frames[i].rolls)
    //   }
    // });
  })

});
