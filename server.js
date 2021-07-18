var express = require("express");
var path = require("path");

var app = express();

// import {} from './assets/scripts'


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});



const port = process.env.PORT || 7000; 
app.listen(port,() =>  {
    console.log(`Running on: http://localhost:${port}`);
});