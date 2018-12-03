/**
 * 优化$digest循环
 * 
 * 查找性能，最明显的地方是从$digest循环开始。简而言之，Angular通过运行一系列监控列表来跟踪实时数据
 * 绑定。页面上每一个可能改变的实时数据都有一个监控函数。
 */
//优化前
app.factory("poller", function ($rootScope, $http) {
    var pollForEvent = function (timeout) {
        $http.get('/events').success(function (data) {
            var events = data.events;
            if (service.handlers[event]) {
                for (handler in service.handlers[event]) {
                    $rootScope.$apply(function () {
                        handler.apply(event);
                    });
                }
            }
            //设置下一个延时
            setTimeout(pollForEvent, timeout);
        });
    };
    //每半秒轮询一次
    setTimeout(function () {
        pollForEvent(500);
    });
    var service = {
        handlers: {},
        on: function (evt, callback) {
            if (!service.handlers[evt]) {
                service.handlers[evt] = [];
            }
            service.handlers[evt].push(callback);
        }
    }
    return service;
})

//优化后,节流函数
var throttle = function (fn, atMost, ctx) {
    var ctx = ctx || this;
    var atMost = atMost || 250;//毫秒
    var last, defer, result;
    return function () {
        var now = new Date(),
            args = arguments;
        if (last && now < last + atMost) {
            //延迟执行
            clearTimeout(defer);
            defer = setTimeout(function () {
                last = now;
                fn.apply(ctx, args);
            }, atMost);
        } else {
            result = fn.apply(ctx, args);
        }
        return result;
    }
}

//为了使用throttle函数设置$digest循环节流，你可以在事件循环中调用它：
for (var i = 0; i < events.length; i++) {
    var event = events[i];
    if (service.handlers[event])
        for (handler in service.handlers[event])
            throttle(function () {
                $rootScope.$apply(function () {
                    handler.apply(event);
                });
            }, 500);
}

/**优化$digest 调用 */
/**
 * 在改变一个变量时通常可以确定什么时候会运行$disgest循环，以及运行$digest循环会影
 * 响哪些作用域。在这种情况下，你无需在$rootScope上使用$scope.$apply()（这会导致每个子
 * 作用域$scope 跑进$digest 循环中）调用完整的$digest 循环。作为替代可以直接调用
 * $scope.$digest()。
 * 
 * 调用$scope.$digest()只会在调用了$digest()及其子节点的具体作用域上运行digest
 * 循环。
 */

 /**
  * 优化$watch函数
  */

  /**
   * 由于$watch列表中的表达式会在每个$digest循环中执行，保持较少的功能很重要。更小以
   * 及更专注的$watch表达式，会让应用程序的性能更好。
   * 
   * 在$watch()函数中避免深度比较、复杂的逻辑以及使用少量的循环，会有助于加速应用程序。
   * 例如，可以设置一个监控函数来监控一个对象。假设有一个Account对象：
   */

   $scope.account={
       active:true,
       userId:123,
       balance:1000//美分
   }

   //假定想要监控任意时刻的账户余额变化，然后在余额为0时设置账户为未激活。可以设置一个$watch函数来监控这个account对象，每当余额对象变化时更新账户信息：
   $scope.$watch('user',function(newAccount){
       if(newAccount.balance<=0){
           $scope.accout.active=false
       }
   },true)

   /**
    * $watch()函数的第三个参数用于告诉Angular，是否使用深度比较来监控这个对象，它会使用angular.equals()函数检查每个属性。
    * 这个选择将会导致糟糕的性能。不仅Angular会创建一个对象副本，在存储它时需要遍历每个属性来检查其中是否有任何变化。
    * 这里有一个构建$watch函数的技巧:使用它们跟踪明显会影响视图的变量。对于不会影响视图的任何任何事物都不需要使用$watch函数。
    * 有时候移除监控器对我们来说是有意义的，特别是在数据是静态的，并且只想在第一时间将它暴露给视图的时候，因为这时$watch函数就变得无关紧要了。
    * 从视图中移除自定义的监控器也很容易：让$watch函数自身返回一个为我们移除$watch的函数即可。
    */

//例如，比方说有一个自定义的指令等待解析变量name,由于这个customerName一旦设置后就不可改变，你可以通过移除已经设置的$watch函数来优化这个指令：
div data-my-directive name="customerName"></div>
angular.module('myApp',[]).directive('myDirective',function($q){
    return {
        //..
        scope:{
            name:'='
        },
        link:function(scope,ele,attrs,ctrl){
            var unWatch=$scope.$watch(attrs.name,function(n,o){
                if(n!==o){
                    //使用解析后的name做些什么事
                    //然后移除watch
                    unWatch();
                }
            })
        }
    }
})

/**bindonce */
/**
 * bindonce是一个可以用于你的应用中的即插即用模块，它只保留了监控一次的指令；它还为
 * 我们提供了传递异步数据的能力。
 * 
 * 这个库提供了新的指令，用于不需要实时更新的DOM元素。这些指令会留意值的填充和验
 * 证。一旦数据可用，它就渲染它以及子元素的内容，然后立即移除监控器。
 * 
 * 使用bindonce指令时创建的独立的临时监控器会在数据变得可用时被移除。如果数据在作用
 * 域中已经可用了，它不会创建监控器，而是渲染子元素。
 */

<ul>
    <li bindonce="email" ng-repeat="email in emails">
        <a bo-href-i="#/from/{{ email.sender }}" bo-text="email.sender"></a>
        <a bo-href-i="#/email/{{ email.id }}" bo-text="email.subject"></a>
    </li>
</ul>

/**
 * 使用bo-*标签时，需要确保包含了bindonce指令。所有子bo-*指令都会等待这个指令解析数据。
 * 1. bo-if="condition"
 * 这个指令等同于调用ng-if，但是它没有使用额外的监控器。
 * 
 * 2. bo-show="condition" / bo-hide="condition"
 * 这个指令等同于调用ng-show或者ng-hide，但是没有使用任何额外的监控器。
 * 
 * 3. bo-text="text"
 * 这个指令会对text求值，然后将它放到元素内。类似于ng-bind。
 * 
 * 4. bo-href="url" / bo-href-i="url"
 * 使用bo-href时不允许使用需要插值的"url"，而bo-href-i允许URL中包含插值。下面这两
 * 个调用功能是等价的：
 * // bo-href 不允许任何插值
 * <a bo-href="'/users/' + User.id">√</a>
 * // bo-href-i 允许插值
 * <a bo-href-i="'/users/{{ User.id }>√</a>
 * 
 * 5. bo-src="url" / bo-src-i="url"
 * bo-src不允许在URL内插值，而bo-src-i允许。下面这两个调用功能是等价的：
 * 
 * // bo-src不允许任何插值
 * <img bo-src="'/users/' + User.gravatar" />
 * // bo-src-i允许插值
 * <img bo-src="/users/{{ User.gravatar }}" />
 * 
 * 6. bo-alt="text"
 * 类似于bo-text，这个指令会在DOM元素内渲染文本，然后将文本设置给元素的alt属性。
 * 
 * 7. bo-title="title"
 * bo-title指令会在DOM元素内渲染文本，然后将文本设置给元素的title属性。
 * 
 * 8. bo-id="id"
 * 这个指令渲染"id"，然后将这个id设置给元素的id属性。
 * 
 * 9. bo-style="style"
 * 这个指令会使用和ng-style一样的语法将样式作为表达式渲染，而不会使用监控器。
 * 
 * 10. bo-value="value"
 * 这个指令渲染给定的值，然后将它设置给元素的value属性。
 * 
 * 11. bo-attr bo-attr-foo="hello"
 * 这个指令会在DOM元素中将文本"foo"作为自定义属性渲染。
 * 
 * 使用ng-repeat优化静态数据页面，Bindonce是一个很不错的选择。
 */

/**
 * $watch函数的自动优化
 * 
 * 最新版的Angular在找到恒定值时（比如，表达式解析为布尔值或者静态的整数）会自动移除$watch函数。
 */

 // 下面这些监控器会被自动移除
 // 因为Angular的$watches会检测到这些值都是不会改变的值
 $scope.$watch('true', function() {});
 $scope.$watch('2 + 2', function() {});

 /**
  * 优化过滤器
  * 位于视图中的每个过滤器将至少被调用2次，这是过滤器的本质。越是保持这些函数轻量以
  * 及对它们进行优化，应用程序就会更快。
  */

  
