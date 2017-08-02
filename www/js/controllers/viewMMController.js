angular
	.module('starter')
	.controller('viewMMController',['$scope', '$http', function($scope, $http) {

		$scope.marketingManagerArr = {};

		$http({
			url : 'http://10.10.6.53:3000/viewMarketingManager',
			method : 'GET',
			headers: {'Content-Type': 'application/json'}
		}).then(function successCallback(response){
				console.log('Retrieving marketing managers was successful');
				console.log(response.data);	
				$scope.marketingManagerArr = response.data;

				
			},function errorCallback(response){
				throw {error: true, data: response.data};
				console.log('error retrieving marketing managers '+response.body);
			})

		$scope.deleteUser = function(){
			//body
		}

	}]);