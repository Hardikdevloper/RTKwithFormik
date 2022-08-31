import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import store from "./Redux/CounterSlice";
import { Provider } from "react-redux";
import "./style.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </StrictMode>,
  rootElement
);

