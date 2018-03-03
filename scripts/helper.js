
  class Helper {
      playPauseAndUpdate(song) {

        player.playPause(song);



        $('.total-time').text( player.prettyTime(player.currentlyPlaying.duration) );
      };

}

var helper = new Helper();
