var myModule=angular.module("MyModule",[]);

myModule.directive('hello',function(){
    return {
        restrict:'AE',
        template:'<div><input type="text" ng-model="username" />{{username}}</div>',
        replace:true,
        scope:{}
    }
})