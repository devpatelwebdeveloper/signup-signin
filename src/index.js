import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux/store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>,
  rootElement
);
