var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl", [
  "$scope",
  function($scope) {
    $scope.sayHello = function(name) {
      alert("Hello" + name);
    };
  }
]);

myModule.directive("greeting", function() {
  return {
    restrict: "AE",
    template:
      '<input type="text" ng-model="userName"/><br/>' +
      '<button class="btn btn-default" ng-click="greet({name:userName})">Greet</button><br/>',
    scope: {
      greet: "&"
    }
  };
});
