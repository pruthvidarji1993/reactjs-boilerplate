// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import ReduxToastr from "react-redux-toastr";
import * as serviceWorker from "./serviceWorker";
import { store } from "./redux/storeConfig/store";
import { Spinner } from 'reactstrap';
// import Spinner from "./components/spinner/Fallback-spinner";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/style.css";
// import "./assets/css/responsive.css";
// import "../node_modules/react-redux-toastr/src/styles/index.scss";
// import qs from "qs";
// import ComponentSpinner from "./components/spinner/Loading-spinner";
import {
  setLoginFlag,
} from "./redux/actions/auth/loginAction";
import { history } from "./history";

const LazyApp = lazy(() => import("./App"));
const jsx = (
  <Provider store={store}>
    <Suspense fallback={<Spinner color="primary" />}>
      <LazyApp />
      {/* <ReduxToastr
        timeOut={2000}
        newestOnTop={false}
        preventDuplicates
        // position="top-right"
        transitionIn="fadeIn"
        transitionOut="fadeOut"
        progressBar
        closeOnToastrClick
      /> */}
      {/* <ComponentSpinner /> */}
    </Suspense>
  </Provider>
);
let hasRendered = false;
//renderApp
const renderApp = async () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};
ReactDOM.render(<Spinner />, document.getElementById("root"));
serviceWorker.unregister();
/**
 * @name renderLogin
 * @description To render login page/
 */
const renderLogin = () => {
  store.dispatch(setLoginFlag(false));
  // store.dispatch(changeRole(""));
  renderApp();
  if (
    window.location.pathname === "/" 
    // window.location.pathname === '/admin/'
    // window.location.pathname === `/${BASEURL}/`
  ) {
    history.push("/login");
  }
};
/**
 * @name tryLogin
 * @description try to login with token,
 * if token get expire then try login with refresh token ,
 * and if refresh get expire then user will redirect to login.
 */
const tryLogin = async () => {
  try {
    window.onbeforeunload = function () {
      if (!localStorage.remeberMe) {
        // this.localStorage.removeItem("isLogin");
        // this.localStorage.removeItem("adam-wa-mishmish");
      }
    };
    const login = localStorage.getItem("efamo");
    if (login) {
      const loginObject = JSON.parse(login);
      console.log("Login", loginObject);
      store.dispatch(setLoginFlag(true));
       renderApp();
      if (
        window.location.pathname === "/"
      ) {
        history.push("/");
      } else if (
        window.location.pathname === "/login"
      ) {
        store.dispatch(setLoginFlag(false));
        localStorage.removeItem("efamo");
      } else {
        // history.push(window.location.pathname);
      }
    } else {
      renderLogin();
    }
  } catch (e) {
    renderLogin();
  }
};

tryLogin();
serviceWorker.unregister();