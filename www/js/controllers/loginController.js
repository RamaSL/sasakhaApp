angular
	.module('starter')
	.controller('loginController', ['$scope', '$state', '$ionicPopup', 'loginService', '$localStorage', '$window', function ($scope, $state, $ionicPopup, loginService, $localStorage, $window) {
	     $scope.userData = {};

	    var userType = $window.localStorage.getItem('userType');
	    var email = $window.localStorage.getItem('email');
	    var pass = $window.localStorage.getItem('pass');
	    var username  = $window.localStorage.getItem('username');
	    var test = $window.localStorage.getItem('test');

	    console.log(userType);
	    console.log(email);
	    console.log(pass);
	    console.log(username);

	    if (email !== null && pass !== null && userType !== null) {
	        $state.go('app.home');
	        console.log('relogin '  + username + ' ' + userType);
	    }

			$scope.login = function () {
			loginService.loginUser($scope.userData.email, $scope.userData.password)
				.then(function successCallback(data) {
					$state.go('app.home');
					console.log('login ' + test + ' ' + username + ' ' + userType);
				}, function errorCallback(data) {
					var alertPopUp = $ionicPopup.alert({
							title: 'Login Failed',
							template: 'Check Credentials!'
					});
				});
		};	    	
	    


	}]);