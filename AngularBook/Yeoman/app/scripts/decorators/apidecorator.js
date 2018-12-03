'use strict';

/**
 * @ngdoc function
 * @name yeomanApp.decorator:Api
 * @description
 * # Api
 * Decorator of the yeomanApp
 */
angular.module('yeomanApp')
  .config(function ($provide) {
    $provide.decorator('api', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
