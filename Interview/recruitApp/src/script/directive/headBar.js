'use strict';
angular.module('app').directive('appHeadBar',[function(){
    return {
        restrict:'A',
        replace:true,
        templateUrl:'view/template/headBar.html',
        scope:{
            text:'@'
        },
        //这里的scope是一个形参，写成scope或者$scope均可
        link:function($scope){
            $scope.back=function(){
                window.history.back();
            };
        }
    };
}]);