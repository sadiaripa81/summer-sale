import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="height-[50vh] w-screen flex items-end justify-center">
            <span className="loading loading-spinner w-20 h-20 text-error"></span>
        </div>
    }

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login" ></Navigate>
};

export default PrivateRoute;