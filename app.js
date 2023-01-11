const express = require("express");
const createDB = require('./createBD');
const mongoose = require('mongoose');
//process = require('process')
const BodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.redirect('HomePage' , {});
});


app.listen(process.env.PORT || 3000);

const URI = process.env.MONGODB_URI;

const user = new mongoose.Schema({
  email: {
      type: String,
      required: true,
      unique: true
  },
  password: {
      type: String,
      required: true
  }, 
}, {autoIndex: true}, {timestamps: true});

const User = mongoose.model('User', user);

const U = new User({ email: 'tal@gmail.com', password: '123456'});
U.save(function (err) {
  if (err) return handleError(err);
  // saved!
});


