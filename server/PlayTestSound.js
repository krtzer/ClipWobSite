var Sound = require('node-aplay');
 
// fire and forget: 
new Sound('/home/pi/ClipWobSite/SoundClips/pluck-pcm8.wav').play();
 
// with ability to pause/resume: 
var music = new Sound('/path/to/the/file/filename.wav');
music.play();
