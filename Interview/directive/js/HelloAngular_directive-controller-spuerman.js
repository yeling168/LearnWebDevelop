//指令之间的交互，是通过指令内部controller暴露出的方法来给外部调用
var myModule = angular.module("MyModule", []);

myModule.directive("superman", function() {
  return {
    scope: {},
    restrict: "AE",
    controller: function($scope) {
      console.log($scope);
      $scope.abilities = [];
      this.addStrength = function() {
        $scope.abilities.push("strength");
      };
      this.addSpeed = function() {
        $scope.abilities.push("speed");
      };
      this.addLight = function() {
        $scope.abilities.push("light");
      };
    },
    link: function(scope, element, attrs) {
      //console.log(scope);
      element.addClass("btn btn-primary");
      element.bind("mouseenter", function() {
        console.log(scope.abilities);
      });
    }
  };
});

myModule.directive("strength", function() {
  return {
    //strength指令依赖superman指令，写了require之后，link函数才可以写第四个参数
    require: "^superman",
    link: function(scope, element, attrs, supermanCtrl) {
      supermanCtrl.addStrength();
    }
  };
});

myModule.directive("speed", function() {
  return {
    require: "^superman",
    link: function(scope, element, attrs, supermanCtrl) {
      supermanCtrl.addSpeed();
    }
  };
});

myModule.directive("light", function() {
  return {
    require: "^superman",
    link: function(scope, element, attrs, supermanCtrl) {
      supermanCtrl.addLight();
    }
  };
});
