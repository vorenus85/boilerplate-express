let express = require('express');
let app = express();
/*
app.get("/", function(req, res) {
  res.send("Hello Express");
});
*/

app.get("/", function (req, res){
  res.sendFile(__dirname + "/views/index.html");
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));

app.get("/json", function (req, res){
  res.json({message: "Hello json"});
});
































 module.exports = app;
