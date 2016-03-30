angular.module('trApp', ['ui.router', 'ui.bootstrap', 'uiRouterStyles'])



.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'views/partials/loginView.html'
        })

      .state('dashMain', {
        url: '/dashboard',
        templateUrl: 'views/mainView.html'
      })

      .state('tripDetail', {
        url: '/trips',
        templateUrl: 'views/partials/tripDetailView.html'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: 'views/partials/profileView.html'
      })

      .state('create', {
        url: '/create',
        templateUrl: 'views/partials/createTrip.html'

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
