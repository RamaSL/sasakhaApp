angular
	.module('starter')
	.controller('homeController', ['$scope', '$localStorage', '$window' ,function($scope, $localStorage, $window){
		 $scope.userType = $window.localStorage.getItem('userType');
		 console.log("homeController");


		
	}]);
