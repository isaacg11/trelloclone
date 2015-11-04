
var app = angular.module('stamplay', ['ngStamplay'])
.run(function() {
 	Stamplay.init("trelloclone");
});

//CONTROLLER
app.controller('appController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){

	$scope.signUp = function(email, password){
		
		var registrationData = {
			email: email,
			password: password
			};

		var newUser = new Stamplay.User().Model;
		newUser.signup(registrationData);
	};
}]);


//FACTORY
app.factory('appFactory', ["$q", function($q) {
  	return {
    	test : function(){
      		console.log('hit factory');
    	}
	};
}]);