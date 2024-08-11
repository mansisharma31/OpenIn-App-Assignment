import React from 'react';
import { Route, Navigate } from 'react-router-dom';
function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = /* Check if the user is authenticated */ false;
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Navigate to="/dashboard" />
      }
    />
  );
}
export default PrivateRoute;