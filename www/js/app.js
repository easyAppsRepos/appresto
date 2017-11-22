// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  $ionicConfigProvider.tabs.position('top');

$ionicConfigProvider.backButton.text('');
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/tabs.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      'tab-search': {
        templateUrl: "templates/search.html"
      }
    }
  })

  .state('app.browse', {
    url: "/browse",
    views: {
      'tab-browse': {
        templateUrl: "templates/browse.html"
      }
    }
  })



  .state('app.valorar', {
    url: "/valorar",
    views: {
      'tab-browse': {
        templateUrl: "templates/valorar.html"
      }
    }
  })
  .state('app.espera', {
    url: "/espera",
    views: {
      'tab-browse': {
        templateUrl: "templates/espera.html"
      }
    }
  })


  .state('app.playlists', {
    url: "/playlists",
    views: {
      'tab-playlists': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

    .state('favoritos', {
      url: '/favoritos',
      templateUrl: 'templates/favoritos.html',
      controller: 'PlaylistsCtrl'
  })

    .state('restaurantes', {
      url: '/restaurantes',
      templateUrl: 'templates/restaurantes.html',
      controller: 'PlaylistsCtrl'
  })


    .state('perfil', {
      url: '/perfil',
      templateUrl: 'templates/perfil.html',
      controller: 'PlaylistsCtrl'
  })


    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'tab-playlists': {
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
