import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

const timeFromStorage = localStorage.getItem(STORAGE_KEY);

const timeUpdate = function ({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
  console.log(seconds);
};

player.on('timeupdate', throttle(timeUpdate, 1000));

player.setCurrentTime(timeFromStorage).then(function () {});
