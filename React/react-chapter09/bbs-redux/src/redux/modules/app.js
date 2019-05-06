//app模块负责标记API请求的开始和结束以及应用全局错误信息的设置

const initialState = {
  requestQuantity: 0, //当前应用中正在进行的API请求数
  error: null //应用全局错误信息
};

//action types

export const types = {
  START_REQUEST: "APP/START_REQUEST", //开始发送请求
  FINISH_REQUEST: "APP/FINISH_REQUEST", //请求结束
  SET_ERROR: "APP/SET_ERROR", //设置错误信息
  REMOVE_ERROR: "APP/REMOVE_ERROR" //删除错误信息
};

//action creators

export const actions = {
  startRequest: () => ({
    type: types.START_REQUEST
  }),

  finishRequest: () => ({
    type: types.FINISH_REQUEST
  }),

  setError: error => ({
    type: types.SET_ERROR,
    error
  }),

  removeError: () => ({
    type: types.REMOVE_ERROR
  })
};

//reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_REQUEST:
      //每接收一个API请求开始的action，requestQuantity加1
      return { ...state, requestQuantity: state.requestQuantity + l };
    case types.FINISH_REQUEST:
      //每接收一个API请求结束的action, requestQuantity减l
      return { ...state, requestQuantity: state.requestQuantity - 1 };
    case types.SET_ERROR:
      return { ...state, error: action.error };
    case types.REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};

export default reducer;

//这里需要注意，app模块中的action creators会被其他模块调用。例如，其他模块用于请求API
//的异步action中，需要在发送请求的开始和结束时分别调用startRequest和finishRequest：在API
//返回错误信息时，需要调用setError设置错误信息。这也说明，我们定义的模块并非只能被UI组件使用
//各个模块之间也是可以互相调用的。

