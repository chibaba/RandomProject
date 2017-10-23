var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function() {
  res.render('home');
});

app.get('/friends', function(){
  var friends = ['mary', 'joy', 'mandela', 'prince', 'ben'];
  res.render('friends', {friends:friends});
});

app.post('/addFriend', function(req, res){

})

app.listen(3300, function(){
  console.log('app listening things');

});