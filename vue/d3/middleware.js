createTemplateAction(middlewares, actionFunc) {
    return this.actionFactory(UPDATE_STATE_FIELD, middlewares, actionFunc)
  },
  /**
   * 创建action的工厂方法
   * @param { String } mutationType muation的名称
   * @param { Function[] } middlewares action执行之前处理数据的中间件函数，大致上是data => newData的函数形式
   * @param { Function } actionFunc action函数
   * @returns Function(context, payload)
  */
  actionFactory(mutationType, middlewares, actionFunc) {
    const action = actionFunc || (({
      commit
    }, payload) => {
      commit(mutationType, payload)
    })
    if (!middlewares || !middlewares.length) {
      return action
    }
    return this.applyMiddleware(action, middlewares)
  },
  /**
   *
   * @param {Function} action vueX的action函数
   * @param {Function[]} middlewares action执行之前处理数据的中间件函数，大致上是data => newData的函数形式
   * @returns Function(context, payload)
   */
  applyMiddleware(action, middlewares) {
    if (!middlewares || !middlewares.length) {
      return action
    }
    return (context, payload) => {
      const actionExecutor = (data) => action(context, data)
      return [...middlewares, actionExecutor].reduce((m1, m2) => {
        if (m1 && m1 instanceof Promise) {
          return m1.then(data => m2(data))
        }
        return m2(m1)
      }, payload)
    }
  },
  pipe(funcArr) {
    if (!funcArr || !funcArr.length) return
    const firstFunc = funcArr[0]
    if (funcArr.length === 1) return (...params) => firstFunc.apply(undefined, params)
    return (...params) => {
      const f0 = funcArr[0]
      const firstReturn = f0.apply(undefined, params)
      const restFuncs = funcArr.slice(1)
      return restFuncs.reduce((f1, f2) => {
        if (f1 && f1 instanceof Promise) {
          return f1.then(data => f2(data))
        }
        return f2(f1)
      }, firstReturn)
    }
  }
