class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || []; //se le da un valor inicial

    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }
  mute() {
    this.media.muted = true;
  }
  unmute() {
    this.media.muted = false;
  }
  toggleSound() {
    if (this.media.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}


export default MediaPlayer