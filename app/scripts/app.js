'use strict';

/**
 * @ngdoc overview
 * @name appPortalApp
 * @description
 * # appPortalApp
 *
 * Main module of the application.
 */
angular
  .module('appPortalApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      });
  });
