声明周期

http://www.sohu.com/a/255415579_100012573


beforeCreated：

在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

data和method方法都是取不到的，并且是在wath之前执行

created：

实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见

主要应用：调用数据，调用方法，调用异步函数

可以获取Vue的data，调用Vue方法，无法获取原本HTML上的直接加载出来的DOM（如li，p），也无法获取到通过挂载模板生成的DOM，即无法获取el

beforeMount：

测试结果和created一样，暂未发现区别，早期版本created拿不到el，但是beforeMounted可以拿到el，最新版本无此差别，早期版本参见lifecycle.html

mounted：

el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。

有初始值的DOM渲染，例如我们的初始数据list,渲染出来的li，只有这里才能获取

可以获取Vue的data，调用Vue方法，可以获取原本HTML上的直接加载出来的DOM（如li，p），可以获取到通过挂载模板生成的DOM，可以获取el

beforeUpdate和updated

beforeUpdate：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。

updated：

由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。

当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。

该钩子在服务器端渲染期间不被调用。

需要在打断点的过程中，看页面显示的变化：

可以发现this.$data是发生了变化，都是变化后的data

但是视图的效果是beforeUpdate，视图没有更新

updated阶段，视图是更新了，所以beforeUpdate是DOM发生变化前，updated是DOM发生变化后

beforeDestroy：

实例销毁之前调用。在这一步，实例仍然完全可用。

destroyed：

Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。