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
  const message = "Hello json";
  if(process.env.MESSAGE_STYLE === "uppercase") {
    message = "HELLO JSON";
  }
  res.json({
    message: message
  });
});

// Assets at the /public route
app.use("/public", express.static(__dirname + "/public"));


































 module.exports = app;
