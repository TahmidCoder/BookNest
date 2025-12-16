import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [userLogin, setUserLogin] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios
            .get('http://localhost:5000/api/auth/me', { withCredentials: true })
            .then(response => {
                setUserLogin(true)
                localStorage.setItem('userData', JSON.stringify(response.data))
            })
            .catch(() => {
                setUserLogin(false)
                localStorage.removeItem('userData')
            })
            .finally(() => setLoading(false))
    }, [])

    return (
        <AuthContext.Provider value={{ userLogin, setUserLogin, loading }}>
            {children}
        </AuthContext.Provider>
    )
}
