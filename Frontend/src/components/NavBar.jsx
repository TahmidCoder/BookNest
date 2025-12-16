import React from "react";
import { useState } from "react";
import { HashLink } from 'react-router-hash-link'
import { useParams } from "react-router-dom";
import {
    BookOpen,
    Search,
    Heart,
    ShoppingCart,
    User,
    Menu,
    X,
} from "lucide-react";

import { Link, NavLink } from "react-router-dom";

const NavBar = ({ userLogin }) => {
    // State to hold user data (mocked from localStorage)
    const [userData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : { name: "Guest User", email: "guest@example.com" });

    // State to control mobile menu visibility
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // New state to control profile dropdown visibility
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    // Mock function to handle page navigation click and close mobile menu
    const handleNavClick = (page) => {
        setIsMenuOpen(false);
        setIsProfileMenuOpen(false); // Close profile menu on any nav click
    };

    // Function to handle sign out
    const handleSignOut = () => {
        // In a real application, this would call an API/Firebase method
        localStorage.removeItem('userData');
        setUserData(null);
        setIsProfileMenuOpen(false);
        // Redirect to home or login page after sign out
        // window.location.href = "/"; 
        console.log("User Signed out and data cleared.");
    };

    // Helper component for the Profile Dropdown (for separation of concerns)
    const ProfileDropdown = () => (
        <div
            // Fix: Removed 'mt-3' and added 'top-full' to ensure it sits directly below the parent container
            className="absolute right-0 top-full w-56 sm:w-64 bg-white rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 z-50 
                       transform transition duration-300 ease-out origin-top-right animate-in fade-in zoom-in-95"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
        >
            {/* User Info Section */}
            <div className="p-4 flex flex-col space-y-1">
                <p className="text-base font-bold text-gray-900 truncate">
                    Hi, {userData?.name || "Profile"}
                </p>
                <p className="text-sm text-gray-500 truncate">
                    {userData?.email || "Welcome"}
                </p>
            </div>

            {/* Account and Signout Links */}
            <div className="py-1">
                <Link
                    to="/account"
                    onClick={() => handleNavClick('account')}
                    className="flex items-center px-4 py-3 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition font-medium rounded-t-none rounded-b-lg"
                    role="menuitem"
                >
                    Account
                </Link>
                <Link
                    to="/" // Navigate to home or login page on sign out
                    onClick={(e) => {
                        e.preventDefault();
                        handleSignOut();
                    }}
                    className="flex items-center px-4 py-3 text-red-600 hover:bg-red-50 hover:text-red-700 transition font-medium rounded-t-none rounded-b-lg"
                    role="menuitem"
                >
                    Sign Out
                </Link>
            </div>
        </div>
    );


    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 ">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
                <div className="flex justify-between items-center h-14 sm:h-16 gap-6">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex items-center space-x-1.5 sm:space-x-2 flex-shrink-0"
                    >
                        <BookOpen className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                        <span className="text-xl sm:text-2xl font-bold text-gray-900">
                            BookNest
                        </span>
                    </Link>

                    {/* Desktop Navigation (Main Links) */}
                    <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "text-emerald-600" : "text-gray-700"} hover:text-emerald-600 transition font-medium`} > Home </NavLink>
                        <NavLink to="/categories" className={({ isActive }) => `${isActive ? "text-emerald-600" : "text-gray-700"} hover:text-emerald-600 transition font-medium`} > Categories </NavLink>
                        <NavLink to="/best-sellers" className={({ isActive }) => `${isActive ? "text-emerald-600" : "text-gray-700"} hover:text-emerald-600 transition font-medium`} > Best Sellers </NavLink>
                        <NavLink to="/new-arrivals" className={({ isActive }) => `${isActive ? "text-emerald-600" : "text-gray-700"} hover:text-emerald-600 transition font-medium`} > New Arrivals </NavLink>
                        <NavLink to="/deals" className={({ isActive }) => `${isActive ? "text-emerald-600" : "text-gray-700"} hover:text-emerald-600 transition font-medium`} > Deals </NavLink>
                    </div>

                    {/* Search Bar - Desktop */}
                    <div className="hidden lg:flex items-center flex-1 max-w-lg mx-4 xl:mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for books, authors..."
                                className="w-full px-4 py-2.5 pl-11 pr-4 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition"
                            />
                            <Search className="absolute left-3.5 top-3 h-5 w-5 text-gray-400" />
                        </div>
                    </div>

                    {/* Icons / Sign Up Button / Profile Dropdown */}
                    <div className="flex items-center space-x-1 sm:space-x-2">
                        {userLogin ? (
                            <>
                                {/* Wishlist - Desktop/Tablet */}
                                <Link to="/wishlist" className="hidden sm:block p-2 hover:bg-emerald-50 cursor-pointer rounded-full transition">
                                    <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                                </Link>

                                {/* Cart Icon */}
                                <Link to="/cart" className="p-2 hover:bg-emerald-50 rounded-full cursor-pointer transition relative">
                                    <ShoppingCart className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                                    <span className="absolute top-0 right-0 bg-emerald-600 text-white text-xs rounded-full h-4 w-4 sm:h-5 sm:w-5 flex items-center justify-center font-bold">
                                        3
                                    </span>
                                </Link>

                                {/* Profile Dropdown Container (Desktop/Tablet) - HOVER FIX APPLIED HERE */}
                                <div
                                    className="relative hidden sm:block pt-1" // Added pt-1 for slight visual separation without breaking hover area
                                    onMouseEnter={() => setIsProfileMenuOpen(true)}
                                    onMouseLeave={() => setIsProfileMenuOpen(false)}
                                >
                                    <button
                                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                                        className="p-2 hover:bg-emerald-50 cursor-pointer rounded-full transition focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                        aria-expanded={isProfileMenuOpen}
                                        aria-haspopup="true"
                                    >
                                        <User className="h-5 w-5 sm:h-6 sm:w-6 text-gray-700" />
                                    </button>

                                    {/* Render the dropdown when state is open */}
                                    {isProfileMenuOpen && <ProfileDropdown />}
                                </div>
                            </>
                        ) : (
                            <Link
                                to="/signup"
                                className="hidden sm:block px-4 sm:px-6 py-2 sm:py-2.5 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition font-medium shadow-md"
                            >
                                Sign Up
                            </Link>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 hover:bg-emerald-50 rounded-lg transition ml-1"
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Expanded View) */}
                {isMenuOpen && (
                    <div className="lg:hidden pb-4 space-y-4 animate-in slide-in-from-top duration-300">
                        <div className="relative mt-2">
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="w-full px-4 py-2.5 pl-11 pr-4 border-2 border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <Search className="absolute left-3.5 top-3 h-5 w-5 text-gray-400" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            {/* Mobile Nav Links */}
                            <NavLink to="/" onClick={() => handleNavClick("home")} className={({ isActive }) => `px-4 py-3 ${isActive ? "bg-emerald-50 text-emerald-600" : "text-gray-700"} hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium text-left`} > Home </NavLink>
                            <NavLink to="/categories" onClick={() => handleNavClick("categories")} className={({ isActive }) => `px-4 py-3 ${isActive ? "bg-emerald-50 text-emerald-600" : "text-gray-700"} hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium text-left`} > Categories </NavLink>
                            <NavLink to="/best-sellers" onClick={() => handleNavClick("best-sellers")} className={({ isActive }) => `px-4 py-3 ${isActive ? "bg-emerald-50 text-emerald-600" : "text-gray-700"} hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium text-left`} > Best Sellers </NavLink>
                            <NavLink to="/new-arrivals" onClick={() => handleNavClick("new-arrivals")} className={({ isActive }) => `px-4 py-3 ${isActive ? "bg-emerald-50 text-emerald-600" : "text-gray-700"} hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium text-left`} > New Arrivals </NavLink>
                            <NavLink to="/deals" onClick={() => handleNavClick("deals")} className={({ isActive }) => `px-4 py-3 ${isActive ? "bg-emerald-50 text-emerald-600" : "text-gray-700"} hover:bg-emerald-50 hover:text-emerald-600 rounded-lg transition font-medium text-left`} > Deals </NavLink>
                        </div>

                        <div className="flex justify-around pt-4 border-t-2 border-gray-100">
                            <Link to="/wishlist" onClick={() => handleNavClick("wishlist")} className="flex flex-col items-center p-2 hover:bg-emerald-50 rounded-lg transition">
                                <Heart className="h-6 w-6 text-gray-700 mb-1" />
                                <span className="text-xs text-gray-600">Wishlist</span>
                            </Link>
                            <Link to="/cart" onClick={() => handleNavClick("cart")} className="flex flex-col items-center p-2 hover:bg-emerald-50 rounded-lg transition relative">
                                <ShoppingCart className="h-6 w-6 text-gray-700 mb-1" />
                                <span className="text-xs text-gray-600">Cart</span>
                                <span className="absolute top-1 right-1 bg-emerald-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    3
                                </span>
                            </Link>

                            {/* Mobile Account/Sign In */}
                            {userLogin ? (
                                <>
                                    <Link to="/account" onClick={() => handleNavClick("account")} className="flex flex-col items-center p-2 hover:bg-emerald-50 rounded-lg transition">
                                        <User className="h-6 w-6 text-gray-700 mb-1" />
                                        <span className="text-xs text-gray-600">Account</span>
                                    </Link>
                                    <Link to="/" onClick={() => handleSignOut()} className="flex flex-col items-center p-2 hover:bg-red-50 rounded-lg transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-red-600 mb-1">
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" />
                                        </svg>
                                        <span className="text-xs text-red-600">Sign Out</span>
                                    </Link>
                                </>
                            ) : (
                                <Link to="/signup" onClick={() => handleNavClick("signup")} className="flex flex-col items-center p-2 hover:bg-emerald-50 rounded-lg transition">
                                    <User className="h-6 w-6 text-gray-700 mb-1" />
                                    <span className="text-xs text-gray-600">Sign Up</span>
                                </Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
export default NavBar;