angular.module('trApp', ['ui.router', 'ui.bootstrap'])

.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      // .state('dashboard', {
      //   url: '/',
      //   templateUrl: 'views/mainView.html'
      // })

      .state('trip-detail', {
        url: '/trips',
        templateUrl: 'views/partials/tripDetailView.html'
      })

      .state('profile', {
        url: '/profile',
        templateUrl: 'views/partials/profileView.html'
      })
    })

    .directive('dashboard', function() {
      return {
        templateUrl: 'views/mainView.html'
      }
    })
