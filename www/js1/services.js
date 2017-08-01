angular.module('app.services', [])

.service('loginService', function($q, $http, $rootScope){
    var userDataModel = {};
    $rootScope.dataLength = 0;

    var deferred = $q.defer();
    var promise = deferred.promise;

    return {
        loginUser: function (email, pass) {
            $http({
                method: 'POST',
                url: 'http://127.0.0.1:3000/login',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    'email': email,
                    'pass': pass
                }
            }).then(function successCallBack(response) {
                console.log(response.data.status);
                userDataModel = response;
                if (userDataModel.data.status === "false") {
                     $rootScope.dataLength = 0;
                } else {
                     $rootScope.dataLength = 1;
                }
                console.log(userDataModel);
                console.log('^result of then^');
                return userDataModel;
            })

            console.log("Here -->" + $rootScope.dataLength);

            if ($rootScope.dataLength == 0) {
                deferred.resolve('Welcome '+ email );
            }else{
                deferred.reject('wrong credential');
            }
            promise.success = function(fn){
                promise.then(fn);
                return promise;
            }

            promise.error = function(fn){
                promise.then(null, fn);
                return promise;
            }
           // userDataModel = promise;
            console.log(userDataModel.email);
            console.log('^end result^');
            return promise;
        }
    }


    //console.log(userDataModel);
})