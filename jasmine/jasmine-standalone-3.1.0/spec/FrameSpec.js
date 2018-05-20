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
});
