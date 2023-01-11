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
var user = new Schema({
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

var User = mongoose.model('User', user);


//app.get('/createUsersTable', mongoose.User);

/*
mongoose.connect(
  process.env.FinalPrijectDB || 'mongodb://localhost:27017/FinalPrijectDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);*/

/*
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.FinalProjectDB, function(err, db) {
  if (err) throw err;
  console.log("Connected to the database!");
  // do something with the database here
});
*/

/*
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://talco4088:talco4088@finalprojectdb.sdvuqqp.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

*/