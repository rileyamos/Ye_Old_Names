'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;

// Require Other JS Flies That We Have Created And Saved In the Lib directory
var Adjective = require('./lib/adjective.js');
var Verb = require('./lib/verb.js');
var Noun = require('./lib/noun.js');
var getRandomWord = require('./lib/getRandomWord.js');
var postWord = require('./lib/post-word.js');
var findYear = require('./lib/findYear.js');


app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

// Serves all of our static files from the app directory
app.use(express.static(__dirname + '/app/'));

var adjective = new Adjective();
var verb = new Verb();
var noun = new Noun();

//GET ROUTES 
app.get('/adjective', function(req, res) { //This is what will happen if the adjective endpoint is hit with a get request
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) { //This is what will happen if the verb endpoint is hit with a get request
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) { //This is what will happen if the noun endpoint is hit with a get request
  res.json(getRandomWord(noun));
});

app.get('/year', function(req, res) { //This is what will happen if the noun endpoint is hit with a get request
  res.json(findYear());
});

//POST ROUTES
app.post('/adjective', function(req, res) { //This is what will happen if the adjective endpoint is hit with a post request
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.post('/verb', function(req, res) { //This is what will happen if the adjective endpoint is hit with a post request
  var word = postWord(req.body.word, verb);
  res.json(word);
});

app.post('/noun', function(req, res) { //This is what will happen if the adjective endpoint is hit with a post request
  var word = postWord(req.body.word, noun);
  res.json(word);
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });
