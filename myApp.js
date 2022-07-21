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


































 module.exports = app;
