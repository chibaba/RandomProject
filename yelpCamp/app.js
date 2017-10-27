var express = require ('express')

var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}))

app.set('view engine', 'ejs')

var campgrounds = [
  {name:'salmon creek', image: 'http://www.photosforclass.com/download/7626464792' },
  {name:'granite hill', image: 'http://www.photosforclass.com/download/7121867321' },
  {name:'lapai village', image: 'http://www.photosforclass.com/download/9627572189' },
  {name:'salmon creek', image: 'http://www.photosforclass.com/download/7626464792' },
  {name:'granite hill', image: 'http://www.photosforclass.com/download/7121867321' },
  {name:'lapai village', image: 'http://www.photosforclass.com/download/9627572189' },
  {name:'salmon creek', image: 'http://www.photosforclass.com/download/7626464792' },
  {name:'granite hill', image: 'http://www.photosforclass.com/download/7121867321' },
  {name:'lapai village', image: 'http://www.photosforclass.com/download/9627572189' }
]

app.get('/', function(req, res){
  res.render('landing')
});

app.get('/campgrounds', function(req, res){
       
       res.render('campgrounds', {campgrounds:campgrounds})
})

app.post('/campgrounds', function(req, res){
  //get data from form and add to campground array
  var name = req.body.name
  var image = req.body.image
  var newCampground = {name: name, image: image}
  campgrounds.push(newCampground)
  //redirect to camp ground page
  res.redirect('/campgrounds');
})

app.get('/campgrounds/new', function(req, res ){
  res.render('new.ejs');
});


app.listen(3500, function(){
  console.log('app already on point')
});