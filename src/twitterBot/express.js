var express = require("express");
var bodyparser = require("body-parser");
var request = require("request");
var firebase = require("firebase");
var util = require("util");
var app = express();
app.use(bodyparser.json());

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-With, Content-Type, Accept");
	next();
});


// Initialize the app with no authentication
firebase.initializeApp({
  databaseURL: "https://percipience-ace91.firebaseio.com"
});

// The app only has access to public data as defined in the Security Rules
var db = firebase.database();


// Load Index.html
var path = require("path");
app.use(express.static(__dirname + "/"));

app.get("/", function(req,res){
	res.sendFile( __dirname + "/" + "index.html");
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//----->>// REST API //<---------//


// Get request for  all data
app.get("/twitter/get",function(req,res, body){
    
  
});  
    
    
app.post('/twitter/post', function (req, res, body) {


});



app.put('/twitter/put', function (req, res, body) {
       

});


app.delete('/twitter/delete', function (req, res, body) {
          

});


app.listen(3000);
