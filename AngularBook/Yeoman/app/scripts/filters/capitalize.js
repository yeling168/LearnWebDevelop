'use strict';

/**
 * @ngdoc filter
 * @name yeomanApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the yeomanApp.
 */
angular.module('yeomanApp')
  .filter('capitalize', function () {
    return function (input) {
      return 'capitalize filter: ' + input;
    };
  });
