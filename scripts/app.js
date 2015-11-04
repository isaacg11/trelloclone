
var app = angular.module('stamplay', ['ngStamplay'])
.run(function() {
 	Stamplay.init("trelloclone");
});

//CONTROLLER
app.controller('taskController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){

	$scope.test = "hello";
}]);

