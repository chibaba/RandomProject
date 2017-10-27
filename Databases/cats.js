var mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temprament: String
});

var Cat = mongoose.model('Cat',catSchema);

var george = new Cat ({
  name: 'George',
  age: 11,
  temprament: 'Grouchy'
});
george.save(function(err, cat){
  if(err){
    console.log('something went wrong');
      } else {
        console.log('We just saved a cat to the db');
        console.log(cat);
      }
});