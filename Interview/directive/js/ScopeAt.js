var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl", [
  "$scope",
  function($scope) {
    $scope.ctrlFlavor = "百威";
  }
]);

myModule.directive("drink", function() {
  return {
    restrict: "AE",
    template: "<div>{{flavor}}</div>",
    scope:{
        flavor:'@'
    }
    // link: function(scope, element, attrs) {
    //   console.log(attrs);
    //   scope.flavor = attrs.flavor;
    // }
  };
});
