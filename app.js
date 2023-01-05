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
);*/


