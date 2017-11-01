bodyParser= require('body-parser'),
methodOveride= require('method-overide'),
 express = require('express'),
 mongoose = require('mongoose')
 app = express();
// config APP
 mongoose.connect('mongodb://localhost/BlogApp', {useMongoClient: true});
 app.set('view engine', 'ejs')
 app.use(express.static('public'));
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(methodOveride('_method'));
//MONGOOSE MODEL CONFIG
 var blogSchema = new mongoose.Schema ({
   title: String,
   image: String,
   body: String,
   created: {type: Date, default: Date.now}
 });

 var Blog = mongoose.model('Blog', blogSchema)
// RESTFUL ROUTES
app.get('/', function(req,res){
  res.redirect('/blogs')
})
//Index route
app.get('/blogs', function(req,res){
  Blog.find({},function(err, blogs){
    if(err) {
      console.log('ERROR!!');
    } else {
      res.render('index', {blogs:blogs});
    }
  })
});
//ADD NEW ROUTES
app.get('/blogs/new', function(req,res){
  res.render('new');
})
//Create new routes
app.post('/blogs', function(req, res){
  //create blog
  Blog.create(req.body.blog, function(err, newBlog){
    if(err){
      res.render('new')
    } else {
      res.redirect('/blogs');
    }
  })
})
// show routes
app.get('/blogs/:id', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect('/blogs');
    } else {
      res.render('show', {blog: foundBlog});
    }
  })
})
// EDIT ROUTE
app.get('/blogs/:id/edit', function(req, res){
  Blog.findById(req.params.id, function(err, foundBlog){
    if(err){
      res.redirect('/blogs');
    } else {
      res.render('edit', {blog: foundBlog})
    }
  })
  res.render('edit');
})

// UPDATE route
app.put('/blogs/:id', function(req, res){
  res.send('UPDATE route')
})


 app.listen(4000, function(){
   console.log('NO shaking, we are on port 4000')
 })