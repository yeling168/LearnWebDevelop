import { get } from "http";
import { puts } from "util";

//posts模块负责与帖子相关的状态管理，包括获取帖子列表，获取帖子详情，新建帖子和修改帖子。使用到的action types定义如下

// action types
export const types = {
  CREATE_POST: "POSTS/CREATE_POST", //新建帖子
  UPDATE_POST: "POSTS/UPDATE_POST", //修改帖子
  FETCH_ALL_POSTS: "POSTS/FETCH_ALL_POSTS", //获取帖子列表
  FETCH_POST: "POSTS/FETCH_POST" //获取帖子详情
};

//相应地，我们需要定义如下action creators:

export const actions = {
  //获取帖子列表
  fetchAllPosts: () => {
    return (dispatch, getState) => {
      if (shouldFetchAllPosts(getState())) {
        dispatch(appActions.startRequest());
        return get(url.getPostList()).then(data => {
          dispatch(appActions.finishRequest());
          if (!data.error) {
            const { posts, postsIds, authors } = convertPostsToPlain(data);
            dispatch(fetchAllPostsSuccess(posts, postsIds, authors));
          } else {
            dispatch(appActions.setError(data.error));
          }
        });
      }
    };
  },
  //获取帖子详情
  fetchPost: id => {
    return (dispatch, getState) => {
      if (shouldFetchAllPost(id, getState())) {
        dispatch(appActions.startRequest());
        return get(url.getPostById(id)).then(data => {
          dispatch(appActions.finishRequest());
          if (!data.error && data.length === 1) {
            const { post, author } = convertSinglePostToPlain(data[0]);
            dispatch(fetchAllPostsSuccess(post, author));
          } else {
            dispatch(appActions.setError(data.error));
          }
        });
      }
    };
  },
  //新建帖子
  createPost: (title, content) => {
    return (dispatch, getState) => {
      const state = getState();
      const author = state.auth.userId;
      const params = {
        author,
        title,
        content,
        vote: 0
      };
      dispatch(appActions.startRequest());
      return post(url.createPost(), params).then(data => {
        dispatch(appActions.finishRequest());
        if (!data.error) {
          dispatch(createPostSuccess(data));
        } else {
          dispatch(appActions.setError(data.error));
        }
      });
    };
  },
  //更新帖子
  updatePost: (id, post) => {
    return dispatch => {
      dispatch(appActions.startRequest());
      return put(url.updatePost(id), post).then(data => {
        dispatch(appActions.finishRequest());
        if (!data.error) {
          dispatch(updatePostSuccess(data));
        } else {
          dispatch(appActions.setError(data.error));
        }
      });
    };
  }
};

//获取帖子列表成功
const fetchAllPostsSuccess = (posts, postIds, authors) => ({
  type: types.FETCH_ALL_POSTS,
  posts,
  postIds,
  users: authors
});

//获取帖子详情成功
const fetchPostSuccess = (post, author) => ({
  type: types.FETCH_POST,
  post,
  user: author
});

// 新建帖子成功
const createPostSuccess = post => ({
  type: types.CREATE_POST,
  post: post
});

// 更新帖子成功
const updatePostSuccess = post => ({
  type: types.UPDATE_POST,
  post: post
});

/* 1）每一个action type实际上对应两个action creator，一个创建异步action发送API请求，
例如fetchAllPosts;另一个根据API返回的数据创建普通的action，例如fetchAllPostsSuccess。

2）供外部使用的action creators定义在常量对象actions中，例如fetchA!lPosts 、fetchPost 、
createPost和updatePost。仅在模块内部使用的action creators 不需要被导出，例如
fetchAllPostsSuccess 、fetchPostSuccess、create PostSuccess和updatePostSuccess。

3）Redux的缓存作用。fetchAllPosts中调用了shouldFetchAllPosts ，用于判断当前的state
中是否已经有帖子列表数据，如果没有才会发送API请求。之所以可以这么处理，正是基于Redux
使用一个全局state管理应用状态，这种缓存机制可以提高应用的性能。fetchPost中调用的
shouldFetchPost也是同样的作用。

4）API返回的数据结构往往有嵌套，我们需要把嵌套的数据结构转换成扁平的结构，这样
才能方便地被扁平化的state所使用。fetchAllPosts 中的convertPostsToPlain和fetchPost中
convertSinglePostToPlain两个函数就用于执行这个转换过程的。转换过程的实现依赖于API返回的
数据结构和业务逻辑，具体代码参考项目源代码。另外，还可以使用normalizr
( https://github.com/paularmstrong/normalizr ）这个库将嵌套的数据结构转换成扁平结构。

posts 模块的state 又拆分成alllds和byld两个子state ，每个子state 使用一个reducer 处理，最
后通过Redux提供的combineReducers把两个reducer 合并成一个。posts 模块的reducer定义如下： */

//reducers

const allIds = (state = initialState.allIds, action) => {
  switch (action.type) {
    case types.FETCH_ALL_POSTS:
      return action.postIds;
    case types.CREATE_POST:
      return [action.post.id, ...state];
    default:
      return state;
  }
};

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case types.FETCH_ALL_POSTS:
      return action.posts;
    case types.FETCH_POST:
    case types.CREATE_POST:
    case types.UPDATE_POST:
      return {
        ...state,
        [action.post.id]: action.post
      };
    default:
      return state;
  }
};

const reducer=combineReducers({
  allIds,byId
});

export default reducer;