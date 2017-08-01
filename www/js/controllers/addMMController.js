angular
	.module('starter')
	.controller('addMMController', ['$scope', '$http', '$window', '$localStorage', function($scope, $http, $window, $localStorage){
		$scope.serviceMan = {};
		$scope.creator = $window.localStorage.getItem('username');
$scope.test = 'Fill the form and click create user';
console.log('add marketing manager controller');
		$scope.createServiceMan = function(){
			console.log('clicked');
			$scope.test = 'User '+$scope.serviceMan.name+' added';

			$http({
				url : 'http://10.10.6.53:3000/addMarketingManager',
				method : 'POST',
				data : {
					'e_name' : $scope.serviceMan.name,
					'email' : $scope.serviceMan.email,
					'address' : $scope.serviceMan.address,
					'mobile' : $scope.serviceMan.mobile,
					'creator' : $scope.creator
				},
				headers: {'Content-Type': 'application/json'}
			}).then(function successCallback(response){
				console.log('new marketing manager has been created!');
				console.log(response.data);				
				
			},function errorCallback(response){
				throw {error: true, data: response.data};
				console.log('error creating a new marketing manager ');
			})
		};


	}]);