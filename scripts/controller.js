
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
		newUser.signup(registrationData).then(function(){
			window.location = "home.html";
		});
	};

	$scope.login = function(email,password){

		var user = new Stamplay.User().Model;
		user.login(email, password).then(function(){
  			window.location = "home.html";
		});
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