/**
 * @name PublicRoute
 * @description Route for unauthorize.
 */
import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import {Spinner} from "reactstrap";
const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      return (
        <Route
          {...rest}
          render={(props) => {
            return (
              <Suspense fallback={<Spinner color="primary"/>}>
                <Component {...props} />
              </Suspense>
            );
          }}
        />
      );
    }}
  />
);
const mapStateToProps = (state) => {
  // const isAuthenticated = state.login.loginFlag;
  return {};
};
export default PublicRoute;