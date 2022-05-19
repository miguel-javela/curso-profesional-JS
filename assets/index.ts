import MediaPlayer from './mediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins:[
  new AutoPlay(), new AutoPause(), new Ads()
] });

const buttonPlay: HTMLElement = document.getElementById('play');
buttonPlay.onclick = () => player.togglePlay();

const buttonSound: HTMLElement = document.getElementById('sound');
buttonSound.onclick = () => player.toggleSound();

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}