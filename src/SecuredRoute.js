import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from './Auth';

function SecuredRoute(props) {
  console.log("Secured Route Props: %o", props);
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
        if (!auth0Client.isAuthenticated()) {
          auth0Client.signIn();
          return <div></div>;
        }
        return <Component products={props}/>
    }} />
  );
}

export default SecuredRoute;