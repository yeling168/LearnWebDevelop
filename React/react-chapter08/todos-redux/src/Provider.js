class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.store
    };
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  store: React.PropTypes.object
};

import { createStore } from "redux";
import { Provider } from "react-redux";
import todoApp from "./reducers";
import App from "./components/App";

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

let next = store.dispatch;

store.dispatch = function dispatchAndLog(action) {
  console.log("dispatching", action);
  let result = next(action);
  console.log("next state", store.getState());
  return result;
};
