angular
	.module('starter')
	.factory('loginService', ['$http', '$localStorage', '$window',  function ($http, $localStorage, $window) {
		return {
			loginUser: function (email, password) {
				return $http({
					url: 'http://10.10.6.53:3000/login',
					method: 'POST',
					data: {
						'email': email,
						'password': password
					},
					headers: {'Content-Type': 'application/json'}
				}).then(function successCallback(response) {
				    console.log(response.data);

				    $window.localStorage.setItem('userType', response.data[0].user_type_id);
				    $window.localStorage.setItem('email', response.data[0].email);
				    $window.localStorage.setItem('pass', response.data[0].password);
				    $window.localStorage.setItem('username', response.data[0].user_name);
				    $window.localStorage.setItem('mobile', response.data[0].mobile);
				    $window.localStorage.setItem('address', response.data[0].address);

				    
				    console.log("loginService");
					return response.data;
				}, function errorCallback(response) {
					throw {error: true, data: response.data};
				});
			}
		};
	}]);