import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ canActivate, redirectPath, ...props }) => {
    return canActivate ? <Route {...props} /> : <Navigate to={redirectPath} />;
};

export default ProtectedRoute;
