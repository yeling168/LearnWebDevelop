import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getLoggedUser } from "../../redux/modules/auth";
import { actions as postActions } from "../../redux/modules/posts";
import { actions as uiActions, isAddDialogOpen } from "../../redux/modules/ui";
import { getPostListWithAuthors } from "../../redux/modules";
//Redux模块准备好了，下面就可以通过Redux的connect函数把组件和Redux的store进行连接了。我们以组件PostList为例介绍连接过程

//注入state

//PostList组件需要从Redux的store中获取以下数据:当前登录用户，帖子列表数据和新建帖子编辑框的UI状态，根据store中的state的结构，一种最直接的获取所需数据的方式如下

const getPostList = state => {
  return state.posts.allIds.map(id => {
    return state.posts.byId[id];
  });
};

/* 注意，getPostListWithAuthors中还使用到了posts模块和users模块的selectors。这样通过selector
进行一些逻辑的处理和数据结构的转换，容器组件可以更加便利地使用全局state中的数据。最终，PostList注入state的代码如下 */

const mapStateToProps = (state, props) => {
  return {
    user: getLoggedUser(state), //当前登录用户
    posts: getPostListWithAuthors(state), //帖子列表数据
    isAddDialogOpen: isAddDialogOpen(state) //新建帖子编辑框的UI状态
  };
};

/* user和isAddDialogOpen两个属性可以直接从state中获取，但这种获取方式意味着组件必须
了解state结构，而且state结构发生变化时，组件也必须通过新的state结构访问使用的属性。总之，container
层和Redux的module层有了强耦合。良好的模块设计对外暴露的应该是模块的接口，而不是模块的
具体结构。我们可以利用Redux中的selector解决这个问题。selector是一个函数，用于从state中获取爱步组件所需的数据。
这样，当组件需要使用state中的数据时，不再直接访问state，而是通过selector获取。上面示例中
的getPostList就是一个selector，但selector适合定义在相关Redux模块中，即一个Redux模块不仅包含action types，action creators
和reducers，还包含从该模块state中获取数据的selector */

/* 接下来为PostList注入使用到的action creators.PostList中需要获取帖子列表，新建帖子，还
需要控制新建帖子编辑框的UI状态，因此，PostList需要使用到posts和ui两个模块中的action creators

其中，bindActionCreators是Redux提供的一个工具函数，它使用store的dispatch方法把参数对象中
包含的每个action creator包裹起来，这样就不需要显式地使用dispatch方法去发送action了
而是可以直接调用action creator函数(bindActionCreators返回的对象的属性就是可以直接调用的action creator)

注意,bindActionCreators的第一个参数可以是一个函数或者一个普通对象，如果是函数类型，这个函数就是一个actioncreator
如果是普通对象类型，对象的每一个属性就是一个action creator
*/

const mapDispatchToProps = dispatch => {
  return {
    ...bindActionCreators(postActions, dispatch),
    ...bindActionCreators(uiActions, dispatch)
  };
};

//最后，利用Redux的connect函数将PostList和Redux连接起来，并导出连接后的组件

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
