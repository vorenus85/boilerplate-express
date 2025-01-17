let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(function myLogger(req, res, next) {
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", (req, res) => {
  let response;
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello json".toUpperCase();
  } else {
    response = "Hello json";
  }

  res.json({message:response});
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/now", function (req, res, next){
  req.time = new Date().toString();
  next();
}, function (req, res){
  res.send({time: req.time})
});

app.get("/:word/echo",(req, res) =>{
  const { word } = req.params;
  res.json({echo: word});
});

app.get("/name", (req, res) =>{
  var firstName = req.query.first;
  var lastName = req.query.last;
  // OR you can destructure and rename the keys
  var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
});

app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});

































 module.exports = app;
