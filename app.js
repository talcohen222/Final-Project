const app = require("express")();
const mongoose = require('./createBD');
const mongoose = require('mongoose');
//process = require('process')

//const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Naama and Lior !!! :)");
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
