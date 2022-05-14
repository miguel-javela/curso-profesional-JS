import MediaPlayer from './mediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins:[new AutoPlay()] });

const buttonPlay = document.getElementById('play');
buttonPlay.onclick = () => player.togglePlay();

const buttonSound = document.getElementById('sound');
buttonSound.onclick = () => player.toggleSound();