
var app = angular.module('stamplay', ['ngStamplay'])
.run(function() {
 	Stamplay.init("trelloclone");
});

//CONTROLLER
app.controller('appController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){

	$scope.test = "hello";

}]);


//FACTORY
app.factory('appFactory', ["$q", function($q) {
  	return {
    	test : function(){
      		console.log('hit factory');
    	}
	};
}]);