var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");
var util = require("util");
var app = express();
var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	next();
});

// Load Index.html
var path = require("path");
app.use(express.static(__dirname + "/"));

app.get("/", function(req,res){
	res.sendFile( __dirname + "/" + "index.html");
});

var visual_recognition = new VisualRecognitionV3({
  api_key: "243ed19843348fcdb81d320897e742f027887ab3",
  version_date: '2016-05-19'
});
var data;
var params = {
  images_file: fs.createReadStream('alien1.jpg'),
  classifier_ids:'alien_630240897',
  threshold: '0.6'
};


visual_recognition.classify(params, function(err, res) {
  if (err)
    console.log(err);
  else
    data=JSON.stringify(res, null, 2);
console.log(data);


});

app.get("/bla",function(req,res, body){
res.send(data);
});

app.listen(3000);
