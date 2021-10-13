/**
 * @name PrivateRoute
 * @description Routes for authorize.
 */
import React, { Suspense } from 'react';
// import '../assets/css/dashboard.css';
import { connect } from 'react-redux';
// import { setToggle } from '../redux/action/toggle/toggle';
import { Route, Redirect } from 'react-router-dom';
// import SideMenu from '../components/sideMenu/SideMenu';
// import Header from '../components/header/header';
// Main Layout
const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? (
        <div>
          {/* <SideMenu /> */}
          <div id='main-wrap' className='main-wrapper'>
            {/* <div
            id='main-wrap'
            className={
              'main-wrapper ' + (isToggle ? 'main-wrapper-collapse' : '')
            }
          > */}
            {/* <Header /> */}
            <div className='content-wrapper'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <Route
                      {...rest}
                      render={(props) => {
                        return (
                          // <Suspense fallback={<Spinner />}>
                          <Component {...props} />
                          // </Suspense>
                        );
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to='/login' />
      )
    }
  />
);
const mapStateToProps = (state) => {
  const isAuthenticated = state.login.loginFlag;
  // const { isToggle } = state.toggle;
  return { isAuthenticated };
};
export default connect(mapStateToProps)(PrivateRoute);