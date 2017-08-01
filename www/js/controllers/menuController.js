angular
	.module('starter')
	.controller('menuController', ['$scope', '$state', '$localStorage', '$window',  function ($scope, $state, $localStorage, $window) {
	    
	    $scope.userType = $window.localStorage.getItem('userType');
	    console.log("menuController");
	    $scope.logout = function () {
	        
	        console.log($window.localStorage.getItem('userType') + " userType saved in rootScope");
	        $window.localStorage.clear();
	        $scope.userType = null;

	        console.log("logout process..");
	        var a = $window.localStorage.getItem('userType');
	        var b = $window.localStorage.getItem('email');
	        var c = $window.localStorage.getItem('pass');
	        var d = $window.localStorage.getItem('username');

	        console.log(a + " " + b + " " + c + " " + d);
	        console.log($window.localStorage.getItem('userType') + " erased rootScope");
	        $state.go('login');
	    	$window.location.reload();
	    }
	}]);