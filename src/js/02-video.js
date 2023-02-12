import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(evt => {
    localStorage.setItem('videoplayer-current-time', evt.seconds);
  }, 1000)
);
const time = localStorage.getItem('videoplayer-current-time');
if (time) {
  player.setCurrentTime(time);
}

// player
//   .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
//   .then(function (title) {
//     console.log('title', title);
//   });
