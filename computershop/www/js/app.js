// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ionic-material'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html'
    })
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent' :{
          templateUrl: 'templates/home.html',
          controller: 'mainhome'
        }
      }
    })
    .state('app.comments', {
      url: '/comments',
      views: {
        'menuContent' :{
          templateUrl: 'templates/comments.html',
          controller: 'CommentsCtrl'
        }
      }
    })
    .state('app.comment', {
      url: '/comment/:id',
      views: {
        'menuContent' :{
          templateUrl: 'templates/comment.html',
          controller: 'Comment'
        }
      }
    })
    .state('app.contact', {
      url: '/contact',
      views: {
        'menuContent' :{
          templateUrl: 'templates/contact.html'
        }
      }
    }).state('app.single', {
      url: '/ordinateur/:id',
      views: {
        'menuContent' :{
          templateUrl: 'templates/details.html',
          controller:'detailsshow'
        }
      }
    })
    .state('app.commenter', {
      url: '/commenter/:id',
      views: {
        'menuContent' :{
          templateUrl: 'templates/commenter.html',
          controller: 'Commenter'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent' :{
          templateUrl: 'templates/about.html',
          controller: 'AboutCtrl'
        }
      }
    });

    $urlRouterProvider.otherwise('/app/home');
  });
