import React, { useContext, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { AuthContext } from './context/AuthContext'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import CategoriesPage from './pages/Categories'
import BestSellers from './pages/BestSellers'
import SignUp from './pages/SignUp'
import ProtectedRoute from './components/ProtectedRoute'
import NewArrivalsPage from './pages/NewArrivlas'
import axios from 'axios'
import AccountPage from './pages/Account'
const App = () => {
  const API_URL = import.meta.env.VITE_API_URL
  const location = useLocation()
  const { userLogin, loading } = useContext(AuthContext)

  if (loading) return null // Or loading spinner

  return (
    <div>
      {/* Navbar show all routes except /signup */}
      {location.pathname !== '/signup' && <NavBar userLogin={userLogin} />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/categories"
          element={
            <ProtectedRoute>
              <CategoriesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/best-sellers"
          element={
            <ProtectedRoute>
              <BestSellers />
            </ProtectedRoute>
          }
        />
        <Route path='/new-arrivals' element={
          <ProtectedRoute>
            <NewArrivalsPage />
          </ProtectedRoute>
        } />
        <Route path="/account" element={
          <ProtectedRoute>
            <AccountPage />
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
