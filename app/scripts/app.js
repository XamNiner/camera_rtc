'use strict';

/**
 * @ngdoc overview
 * @name cameraRtcApp
 * @description
 * # cameraRtcApp
 *
 * Main module of the application.
 */
angular
  .module('cameraRtcApp', [
    'ngResource',
    'ngRoute',
    'webcam'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/camera', {
        templateUrl: 'views/camera.html',
        controller: 'CamCtrl',
        controllerAs: 'cam'
      })
    .when('/room', {
        templateUrl: 'views/room.html',
        controller: 'RommCtrl',
        controllerAs: 'room'
    })    
      .otherwise({
        redirectTo: '/'
      });
  });
