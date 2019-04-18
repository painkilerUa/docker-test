var express = require('express');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://mongo:27017/test', {useNewUrlParser: true});
const Cat = mongoose.model('Cat', { name: String });

app.get('/', function (req, res) {
  const kitty = new Cat({ name: 'Zildjian' });
  kitty.save().then(() => {
    console.log('meow')
    res.send('Hello World!');
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});