describe('Frame', function(){

  beforeEach(function(){
    frame = new Frame();
  });

  describe('#skittles', function(){
    it('Starts with 10 skittles', function(){
      expect(frame.skittles).toEqual(10);
    });
  });

  describe('#rolls', function(){
    it('Starts with an empty array to store rolls', function(){
      expect(frame.rolls).toBeArray();
    });
  });
  describe('#roll', function(){
    it('Reduces the number of skittles by input amount', function(){
      frame.roll(5);
      expect(frame.skittles).toEqual(5);
    });
    it('Adds the score of the roll to the rolls array', function(){
      frame.roll(5);
      expect(frame.rolls).toContain(5);
    });
  });

  describe('#isStrike', function(){
    it('Returns true if a strike is rolled', function(){
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });
    it('Returns false if a strike is not rolled', function(){
      frame.roll(5);
      expect(frame.isStrike()).toEqual(false);
    });
  });

  describe('#isSpare', function(){
    it('Returns true if a spare is rolled', function(){
      frame.roll(4);
      frame.roll(6);
      expect(frame.isSpare()).toEqual(true);
    });
    it('Returns false if a spare is not rolled', function(){
      frame.roll(3);
      frame.roll(2);
      expect(frame.isSpare()).toEqual(false);
    });
  });
});
