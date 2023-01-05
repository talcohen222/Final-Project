const app = require("express")();
//process = require('process')

//const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Naama and Lior !!! :)");
});

app.listen(process.env.PORT || 3000);

/*
mongoose.connect(
  process.env.FinalPrijectDB || 'mongodb://localhost:27017/FinalPrijectDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
*/

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(process.env.FinalPrijectDB, function(err, db) {
  if (err) throw err;
  console.log("Connected to the database!");
  // do something with the database here
});