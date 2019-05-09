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
  },
  //新建评论
  createComment: comment => {
    return dispatch => {
      dispatch(appActions.startRequest());
      return postMessage(url.createComment(), comment).then(data => {
        dispatch(appActions.finishRequest());
        if (!data.error) {
          dispatch(createCommentSuccess(data.post, data));
        } else {
          dispatch(appActions.setError(data.error));
        }
      });
    };
  }
};

//获取评论列表成功
const fetchCommentsSuccess = (postId, commentIds, comments, users) => ({
  type: types.FETCH_COMMENTS,
  postId,
  commentIds,
  comments,
  user
});

//新建评论成功
const createCommentSuccess = (postId, comment) => ({
  type: types.CREATE_COMMENT,
  postId,
  comment
});

//reducers
const byPost = (state = initialState.byPost, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return { ...state, [action.postId]: action.commentIds };
    case types.CREATE_COMMENT:
      return {
        ...state,
        [action.postId]: [action.comment.id, ...state[action.postId]]
      };
    default:
      return state;
  }
};

const byId = (state = initialState.byId, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return { ...state, ...action.comments };
    case types.CREATE_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      };
    default:
      return state;
  }
};

const reducer = combineReducers({
  byPost,
  byId
});

export default reducer;
