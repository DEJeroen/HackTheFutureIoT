var app = angular.module("myapp",['ngRoute', 'ngAnimate']);
app.controller("htfCtrl", function($scope, $http, $location, $interval){
  console.log("lol");
var interval = $interval(function() {
$.ajax({
   url: "/path/to/your/script",
   success: function(response) {
     // here you do whatever you want with the response variable
   }
});
}, 5000);

});