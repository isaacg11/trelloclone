
// //CONTROLLER
// app.controller('appController', ["$scope", "$stamplay", "appFactory", function($scope, $stamplay, appFactory){

// //REGISTER NEW USER//
// 	$scope.signUp = function(email, password){
// 		var registrationData = {
// 			email: email,
// 			password: password
// 			};

// 		var user = new Stamplay.User().Model;
// 		user.signup(registrationData).then(function(){
// 			window.location = "home.html";
// 		});
// 	};

// //LOGIN USER//
// 	$scope.login = function(email,password){
// 		var user = new Stamplay.User().Model;
// 		user.login(email, password).then(function(){
//   			window.location = "home.html";
// 		});
// 	};

// }]);

// //LOAD ALL DATA WHEN PAGE LOADS//
// // 	var user = new Stamplay.User().Model;
// // 	user.currentUser().then(function(user){
// // 		console.log(user.email);
// // 		$scope.name = user;
// // });
	
// 	appFactory.getUser().then(function(user){
// 		console.log(user);
// 	});

// //FACTORY
// app.factory('appFactory', ["$q", function($q) {
//   	return {
//     	getUser : function(){
//       		var q = $q.defer();
//       		var user = new Stamplay.User().Model;
//       		user.currentUser().then(function(){
//         		q.resolve(user);
//       		});
//       		return q.promise;
//     	}
// 	};

// }]);