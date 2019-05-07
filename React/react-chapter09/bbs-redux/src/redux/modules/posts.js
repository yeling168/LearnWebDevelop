import { get } from "http";

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
  }
};