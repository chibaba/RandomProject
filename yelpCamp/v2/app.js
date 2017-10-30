var express = require ('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:/yelp_camp', { useMongoClient: true });

app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')
 
var campgroundSchema = new mongoose.Schema({
  name: String,
  image:String,
  description: String
})
var campground = mongoose.model('campground', campgroundSchema);

//campground.create(
 // {
 //  name:'lapai village', 
   // image: 'http://www.photosforclass.com/download/9627572189', 
    //description: 'this is something really beautiful'
   
  //},function(err,campground){
    //if(err){
     // console.log(err)
    //} else {
     // console.log('NEWLY CREATED CAMPGROUND');
     // console.log(campground);
  //  }
 // })



app.get('/', function(req, res){
  res.render('landing')
});

app.get('/campgrounds', function(req, res){
  campground.find({}, function(err, allCampgrounds){
    if(err){
      console.log(err) 

      } else {
        res.render('index', { campgrounds:allCampgrounds })

      }
    })
  })
       


app.post('/campgrounds', function(req, res){
  //get data from form and add to campground array
  var name = req.body.name
  var image = req.body.image
  var desc = req.body.description
  var newCampground = {name: name, image: image, description:desc}
  //create a new campground and save to database
  campground.create(newCampground,function(err, newlyCreated){
    if(err) {
      console.log(err); 

      } else {
        res.redirect('/campgrounds');
      }
      });
    })
    

app.get('/campgrounds/new', function(req, res ){
    res.render('new.ejs');
});
//show more info about the campground
app.get('/campgrounds/:id', function(req, res){
  //find campgrounds with provided id
  campground.findById(req.params.id, function(err, foundCampground){
    if(err) {
      console.log(err);
    } else {
      res.render('show', {campground: foundCampground});
    }
  });
});


app.listen(3500, function(){
  console.log('app already on point')
});

