var Sound = require('node-aplay');
 
// fire and forget: 
new Sound('/home/pi/ClipWobSite/SoundClips/REMINDER.WAV').play();
 
// with ability to pause/resume: 
var music = new Sound('/path/to/the/file/filename.wav');
music.play();