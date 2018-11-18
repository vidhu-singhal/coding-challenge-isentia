var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var request = require("request");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app, request);

var server = app.listen(3000, function () {
  console.log("Backend server running on port", server.address().port);
});
