angular.module('app.controllers', [])
  
.controller('newJobCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('newCatagoryCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {
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

}])
   
.controller('menuCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', function ($scope,loginService, $ionicPopup, $state) {
    $scope.userData = {};
    $scope.login = function () {
        loginService.loginUser($scope.userData.email, $scope.userData.password)
        .success(function (data) {
            $state.go('menu.profile');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login Failed',
                template: 'Check Credentials!'
            });
        });
    }

})

.controller('logoutCtrl', function ($scope, $state, $ionicHistory) {
    $scope.logout = function () {
        $ionicHistory.clearCache()
        .then(function () {
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
            $state.go('login');
        })
    }
})
   
.controller('profileCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {


}])

.controller('newUserCtrl', ['$scope', '$stateParams',
function ($scope, $stateParams) {

}])
 