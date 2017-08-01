angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
    .state('menu', {
        url: '/sideMenu',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
    })

      .state('menu.newJob', {
          url: '/newJob',
    views: {
        'sideMenu': {
        templateUrl: 'templates/newJob.html',
        controller: 'newJobCtrl'
      }
    }
  })

  .state('menu.newCatagory', {
      url: '/newCatagory',
    views: {
        'sideMenu': {
        templateUrl: 'templates/newCatagory.html',
        controller: 'newCatagoryCtrl'
      }
    }
  })

  .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
     
  })

  .state('menu.profile', {
      url: '/profile',
    views: {
        'sideMenu': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  
  .state('menu.newUser', {
      url: '/newUser',
      views: {
          'sideMenu': {
              templateUrl: 'templates/newUser.html',
              controller:'newUserCtrl'
          }
      }
  })

  .state('menu.logout', {
      url: '/logout',
      views: {
          'sideMenu': {
              templateUrl: 'templates/logout.html',
              controller: 'logoutCtrl'
          }
      }
  })

  $urlRouterProvider.otherwise('/login')

  

});