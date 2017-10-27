var express = require('express');
var app = express();

var bodyParser = require('bodyParser');

app.use(bodyParser.urlEncoded({Extended: true}))

app.set('view engine', 'ejs');

var friends = ['mary', 'joy', 'mandela', 'prince', 'ben'];

app.get('/', function() {
  res.render('home');
});

app.get('/friends', function(){
  res.render('friends', {friends:friends});
});

app.post('/addFriend', function(req, res){
   var newFriend = req.body.newFriend;
   friends.push(newFriend)
   res.redirect('/friends')
})

app.listen(3300, function(){
  console.log('app listening things');

});