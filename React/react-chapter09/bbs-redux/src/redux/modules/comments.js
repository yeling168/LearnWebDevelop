import { get } from "http";

//comments 模块负责获取帖子的评论列表和创建新评论，与posts模块功能很相近，这里不再详细分析，只给出主要逻辑代码

const initialState = {
  byPost: {},
  byId: {}
};

//action types

export const types = {
  FETCH_COMMENTS: "COMMENTS/FETCH_COMMENTS", // 获取评论列表
  CREATE_COMMENT: "COMMENTS/CREATE_COMMENT" // 新建评论
};

//action creators

export const actions = {
  //获取评论列表
  fetchComments: postId => {
    return (dispatch, getState) => {
      if (shouldFetchComments(postId, getState())) {
        dispatch(appActions.startRequest());
        return get(url.getCommentList(postId)).then(data => {
          dispatch(appActions.finishRequest());
          if (!data.error) {
            const { comments, commentIds, users } = convertToPlainStructure(
              data
            );
            dispatch(fetchCommentsSuccess(postId, commentIds, comments, users));
          } else {
            dispatch(appActions.setError(data.error));
          }
        });
      }
    };
  }
};
