$(document).ready(function(){
  var game = new Game();

  $('#submitPins').click(function(){
    var pinsHit = $('#pinsHit').val();
    game.bowl(pinsHit);
    console.log(game.frames.length);
    updateScoreboard();
  });

  var updateScoreboard = function(){
    console.log(game.frames.length);
    for (var i = 0; i < game.frames.length; i++){
      console.log(game.frames[i])
      if (game.frames[i]) {
        console.log('test2')
        $("#score0").text(game.frames[i].score());
      }
    }
  }

})
