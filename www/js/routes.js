angular
  .module('starter')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('app', {
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'menuController'
        })
        .state('app.home',{
            url:'/home',
            views:{
                'sideMenu':{
                    templateUrl: 'templates/home.html',
                    controller: 'homeController'
                }
            }
        })
        .state('app.profile', {
            url: '/profile',
            views: {
                'sideMenu': {
                    templateUrl: 'templates/profile.html',
                    controller: 'profileController'
                }
            }
        })
        .state('app.newJob', {
            url: '/newJob',
            views: {
                'sideMenu': {
                    templateUrl: 'templates/newJob.html'
                }
            }
        })
        .state('app.newCatagory', {
            url: '/newCatagory',
            views: {
                'sideMenu': {
                    templateUrl: 'templates/newCatagory.html',
                    controller: 'newCatagoryController'
                }
            }
        })
        .state('app.addMarketingManager', {
            url: '/addMarketingManager',
            views: {
                'sideMenu': {
                    templateUrl: 'templates/addMarketingManager.html',
                    controller: 'addMMController'
                }
            }
        })
        .state('app.viewMarketingManager', {
            url: '/viewMarketingManager',
            views: {
                'sideMenu': {
                    templateUrl: 'templates/viewMarketingManagers.html',
                    controller: 'viewMMController'
                }
            }
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'loginController'
        });
    }]);