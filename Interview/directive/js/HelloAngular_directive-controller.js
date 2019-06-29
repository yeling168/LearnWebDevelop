//指令和控制器之间的交互
var myModule = angular.module("MyModule", []);

myModule.controller("MyCtrl", [
  "$scope",
  function($scope) {
    $scope.loadData = function() {
      console.log("加载数据中...");
    };
  }
]);

myModule.controller("MyCtrl2", [
  "$scope",
  function($scope) {
    $scope.loadData2 = function() {
      console.log("加载数据中...22222");
    };
  }
]);

myModule.directive("loader", function() {
  return {
    restrict: "AE",
    link: function(scope, element, attr) {
      console.log(scope);
      console.log(element);
      console.log(attr);
      element.bind("mouseenter", function() {
        //scope.loadData();
        //scope.$apply("loadData()");
        scope.$apply(attr.howtoload);
      });
    }
  };
});
