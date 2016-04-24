angular.module('trApp', ['ui.router', 'ui.bootstrap', 'uiRouterStyles'])



.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'views/partials/loginView.html'
        })

      .state('dashMain', {
        url: '/dashboard',
        templateUrl: 'views/mainView.html'
      })

      .state('deposit', {
        url: '/deposit',
        templateUrl: "/views/mainView.html"
      })

      .state('register', {
        url: '/register',
        templateUrl: '/views/partials/register.html'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: '/views/partials/profileView.html'
      })

    })

    // .directive('dashboard', function() {
    //   return {
    //     templateUrl: 'views/mainView.html',
    //       // link: function(scope, element, attributes) {
    //       //     element.addClass('dashClass');
    //       // }
    //   }
    // })

  // .run(['$state', function($state) {
  //   $state.go('dashMain.tripDetail').then(function() {
  //     $state.go('dashMain.createTrip');
  //   });
  // }]);
