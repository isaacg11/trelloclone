
var app = angular.module('stamplay', ['ngStamplay'])
.run(function() {
 	Stamplay.init("trelloclone");
});

//CONTROLLER
app.controller('appController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){



  /****************************/
  /*  GET USER & USERs TASK   */
  /****************************/
  appFactory.getUser().then(function(user) {
  	var email = user.get("email");
  	$scope.email = email;
  });

}]);


//FACTORY
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
