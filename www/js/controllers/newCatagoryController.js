angular
	.module('starter')
	.controller('newCatagoryController', ['$scope', '$state', function($scope, $state) {
		$scope.columns = [{ 'id': 1 }];
    	$scope.colNum = "1";
    	$scope.addColumn = function () {
        	$scope.colNum++;
        	$scope.columns.push({ 'id': $scope.colNum });
    	};

    	$scope.removeCol = function (index) {
        	if (index != -1) {
            	$scope.colNum--;
            	$scope.columns.splice(index, 1);
        	}
    	};
	}]);