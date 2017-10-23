var express = require('express');
var app = express();

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', function(req, res){
  res.render('home')
});

app.get('/fallinlovewith/:thing', function(req, res){
  var thing = req.params.thing;
  res.render('love',  { thingVar: 'thing'});
});

app.get('/posts', function(req,res){
  var posts = [
    { title:'posts1', author: 'suzy'},
    { title: 'posts2', author: ' chibaba'},
    { title : 'posts3', author: 'kiddo'},
  ]
  res.render('posts', {posts: posts})
})


app.listen(2600, function(){
  console.log('app is listening at port 2600')
});