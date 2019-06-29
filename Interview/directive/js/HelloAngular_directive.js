var myModule = angular.module("MyModule", []);

myModule.directive("hello", function() {
  return {
    restrict: "AEMC",
    template: "<div>Hi everyone!<div ng-transclude></div></div>",
    transclude:true
  };
});
