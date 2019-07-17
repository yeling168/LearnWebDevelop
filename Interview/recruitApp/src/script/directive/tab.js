'use strict';
angular.module('app').directive('appTab',[function(){
    return {
        restrict:'A',
        replace:true,
        scope:{
            list:'=',
            tabClick:'&'
        },
        templateUrl:'view/template/tab.html',
        link:function($scope){
            $scope.click=function(tab){
                console.log(tab);
                $scope.selectId=tab.id;
                //通知父控制器元素被点击了
                $scope.tabClick(tab);
            };
        }
    };
}]);