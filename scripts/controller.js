
var app = angular.module('stamplay', ['ngStamplay'])
.run(function() {
 	Stamplay.init("trelloclone");
});

//CONTROLLER
app.controller('homeController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){

 //GET USER INFO ON PAGE LOAD
  appFactory.getUser().then(function(user) {
  	var email = user.get("email");
  	$scope.email = email;
  });

}]);

//CONTROLLER
app.controller('userController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){

//REGISTER NEW USER
	$scope.signUp = function(email, password){
		var registrationData = {
			email: email,
			password: password
			};

		var user = new Stamplay.User().Model;
		user.signup(registrationData).then(function(){
			window.location = "home.html";
		});
	};

//LOGIN USER//
	$scope.login = function(email,password){
		var user = new Stamplay.User().Model;
		user.login(email, password).then(function(){
  			window.location = "home.html";
		});
	};

}]);


//FACTORY----------------------------------------------------------------------------//
app.factory('appFactory', ["$q", function($q) {
  return {
    getUser : function(){
      var q = $q.defer();
      var user = new Stamplay.User().Model;
      user.currentUser().then(function(){
        q.resolve(user);
      });
      return q.promise;
    }



  };
}]);
