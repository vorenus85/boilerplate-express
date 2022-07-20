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

app.get("/json", (req, res) => {
  res.send("Hello Express");
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
