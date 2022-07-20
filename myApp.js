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
  if(process.env.MESSAGE_STYLE === "uppercase") {
    response = "Hello World".toUpperCase();
  } else {
    response = "Hello World";
  }

  res.send({message:response});
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
