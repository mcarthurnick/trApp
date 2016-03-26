angular.module('trApp', ['ui.router', 'ui.bootstrap'])

.config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider


      .state('trip-detail', {
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

    .directive('dashboard', function() {
      return {
        templateUrl: 'views/mainView.html'
      }
    })
