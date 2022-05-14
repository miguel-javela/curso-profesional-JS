function MediaPlayer(config) {
    this.media = config.el;//no entiendo esta linea de codigo
    this.plugins = config.plugins || [] //se le da un valor inicial

    this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function (){
  this.plugins.forEach(plugin =>{
    plugin.run(this);
  });
};

MediaPlayer.prototype.play = function() {
    this.media.play();
};

MediaPlayer.prototype.pause = function() {
    this.media.pause();
};

MediaPlayer.prototype.togglePlay = function() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
};

MediaPlayer.prototype.mute = function (){
  this.media.muted = true;
}

MediaPlayer.prototype.unmute = function (){
  this.media.muted = false;
}

MediaPlayer.prototype.toggleSound = function() {
  if (this.media.muted) {
    this.unmute();
  } else {
    this.mute();
  }
};

export default MediaPlayer