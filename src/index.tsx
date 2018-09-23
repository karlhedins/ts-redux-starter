import * as React from "react";
import * as ReactDOM from "react-dom";
// import App from './App';

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import { enthusiasm } from "./reducers/index";
import { IStoreState } from "./types/index";

import { EnthusiasmAction } from "./actions/index";
import HelloSFCContainer from "./components/HelloSFCContainer";

declare global {
  // tslint:disable-next-line
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const store = createStore<IStoreState, EnthusiasmAction, any, any>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: "TypeScript"
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ReactDOM.render(
//   <HelloCC name="TypeScript" enthusiasmLevel={3} />,
//   document.getElementById("root") as HTMLElement
// );

/* 
Notice that Hello no longer needs props, 
since we used our connect function to adapt our application's state
for our wrapped Hello component's props.
*/
ReactDOM.render(
  <Provider store={store}>
    <HelloSFCContainer />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

registerServiceWorker();
