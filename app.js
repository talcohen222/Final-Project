const app = require("express")();
const mongoose = require('./createBD');
//process = require('process')

//const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Naama and Lior !!! :)");
});


app.listen(process.env.PORT || 3000);

const URI = process.env.MONGODB_URI;

var Schema = mongoose.Schema;
const user = new Schema({
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
