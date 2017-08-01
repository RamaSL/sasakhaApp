angular
	.module('starter')
	.controller('profileController',['$scope','$window','$localStorage', function($scope, $window, $localStorage){
		$scope.username = $window.localStorage.getItem('username');
		$scope.mobile = $window.localStorage.getItem('mobile');
		$scope.address = $window.localStorage.getItem('address');
		$scope.job = 'N/A';

		var userType = $window.localStorage.getItem('userType');
		console.log(userType+' from profile controller');
		
		switch(userType){
			case '1' :
			$scope.job = 'Admin';
			break;

			case '2' :
			$scope.job = 'Marketing Manager';
			break;

			case '3' :
			$scope.job = 'Service Manager';
			break;

			case '4' :
			$scope.job = 'Marketing Agent';
			break;

			case '5' :
			$scope.job = 'Service Agent';
			break;

			default:
			$scope.job ='error retreiving job title'

		}
	}]);