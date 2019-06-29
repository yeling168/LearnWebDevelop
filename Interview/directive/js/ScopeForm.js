var myModule = angular.module("MyModule", []);

myModule.controller("TestFormModule", [
  "$scope",
  function($scope) {
    $scope.user = {
      userName: "damoqiongqiu",
      password: ""
    };
    $scope.save = function() {
      alert("保存数据!");
    };
  }
]);
