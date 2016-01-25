/*jshint node:true*/

var path = require('path');
var Sound = require('node-aplay');
var express = require('express');
var app = express();
var plucksound = new Sound('/home/pi/ClipWobSite/SoundClips/pluck-pcm8.wav');

app.use('/', express.static(path.join(__dirname,'../client')));

//console.log(__dirname + '../client');

app.get('/play', function (req, res) {
  plucksound.play();
  console.log('Started playing sound');
  res.send('Playing Sound'); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
