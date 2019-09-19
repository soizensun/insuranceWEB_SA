const express = require('express');
const app = express();
var mongoose = require('mongoose');

//Strat Server
app.listen(5000, () => console.log("server started at port 5000"))

//Start Database
mongoose.connect('mongodb://localhost/user-manager', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("---- Connected to DB ----"))
  .catch((err) => console.log("------- ERROR --------"));
  
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

//Middleware
// app.use(express.urlencoded({extended: true}));
// app.use(express.json);

//Controller
const UserController = require('./Controller/UserController');

//Routes
app.post('/createUser', UserController.create);
app.post('/test', (req, res) => { res.json({"res" : "wow za"}) })
app.get('/hi', (req, res) => { res.json('Hello, World!') })


// const express = require('express');
// const app = express();
// app.listen(5000, () => console.log("server started at port 5000"))

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true });

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   // we're connected!
// });

// var kittySchema = new mongoose.Schema({
//   name: String,
//   sirname: String
// });

// kittySchema.methods.speak = function () {
//   var greeting = this.name
//     ? "Meow name is " + this.name
//     : "I don't have a name";
//   console.log(greeting);
// }

// var Kitten = mongoose.model('MyKitten', kittySchema);

// var fluffy1 = new Kitten({ name: "2", sirname: "zenn" });

// fluffy1.save(function (err, fluffy) {
//   if (err) return console.error(err);
//   fluffy.speak();
// });

// Kitten.find(function (err, kittens) {
//   if (err) return console.error(err);
//   console.log(kittens);
// })

// app.get('/test1', (req, res) => {
//  Kitten.find(function (err, kittens) {
//     if (err) return console.error(err);
//     res.send(kittens)
//   });
  
// })