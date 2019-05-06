//auth模块负责应用的登录和注销。登录会调用服务器API做认证，这时就涉及异步action，我们使用前面介绍的
//redux-thunk定义异步action。注销逻辑仍然简化处理，只是清除客户端的登录用户信息。

import { post } from "../../utils/request";
import url from "../../utils/url";
import { action as appActions } from "../app";

const initialState = {
  userId: null,
  username: null
};

//action types

export const types = {
  LOGIN: "AUTH/LOGIN", //登录
  LOGOUT: "AUTH/LOGOUT" //注销
};

//action creators

export const actions = {
  //异步action，执行登录验证
  login: (username, password) => {
    return dispatch => {
      //每一个API请求开始前，发送app模块定义的startRequest action
      dispatch(appActions.startRequest());
      const params = { username, password };
      return post(url.login(), params).then(data => {
        //每个API请求结束后，发送app模块定义的finishRequest action
        dispatch(appActions.finishRequest());
        //请求返回成功，保存登录用户的信息，否则，设置全局错误信息
        if (!data.error) {
          dispatch(actions.setLoginInfo(data.userId, username));
        } else {
          dispatch(appActions.setError(data.error));
        }
      });
    };
  },
  logout: () => ({
    type: types.LOGOUT
  }),
  setLoginInfo: (userId, username) => ({
    type: types.LOGIN,
    userId: userId,
    username: username
  })
};

//reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return {
        ...state,
        userId: action.userId,
        username: action.username
      };
    case types.LOGOUT:
      return {
        ...state,
        userid: null,
        username: null
      };
    default:
      return state;
  }
};

export default reducer;
