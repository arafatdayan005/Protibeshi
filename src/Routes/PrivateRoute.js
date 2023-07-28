import React, { useContext } from 'react'
import { AuthContext } from './../Providers/AuthProviders'
import { Navigate, useLocation } from 'react-router-dom'

function PrivateRoute({ children }) {
    const { user, loader } = useContext(AuthContext)
    const location = useLocation();

    if (loader) {
        return <div>
            <p>Loading...</p>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace ></Navigate>
}

export default PrivateRoute;