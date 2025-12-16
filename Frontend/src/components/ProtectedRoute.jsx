import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const ProtectedRoute = ({ children }) => {
    const { userLogin, loading } = useContext(AuthContext)

    if (loading) {
        return (
            <div className="h-screen w-screen flex items-center justify-center text-3xl">
                Loading...
            </div>
        )
    }

    if (!userLogin) {
        return <Navigate to="/signup" replace />
    }

    return children
}

export default ProtectedRoute
