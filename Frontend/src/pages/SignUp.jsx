import { useState } from 'react';
import axios from 'axios';

// রাউটিং ইমপোর্ট করার জন্য একটি প্লেসহোল্ডার।
// প্রোডাকশনে এটি 'react-router-dom' বা অন্য কোনো রাউটিং লাইব্রেরি থেকে আসবে।
// import { useNavigate } from 'react-router-dom';

/**
 * @fileoverview BookNestAuth Component
 * Handles user sign-up (registration) and login functionality.
 * Uses axios for API calls and FormData for file (profile picture) uploads.
 * Includes loading state, custom alerts, and client-side validation for a better UX.
 */

export default function BookNestAuth() {
    // NOTE: Production API URL should be configured properly.
    const API_URL = import.meta.env.VITE_APP_API_URL || 'https://api.booknest.com';

    // const navigate = useNavigate(); // For client-side routing after successful auth

    // --- State Management ---
    const [isSignUp, setIsSignUp] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'buyer',
        profilePic: null // File object
    });
    const [isLoading, setIsLoading] = useState(false); // New: For loading state
    const [errors, setErrors] = useState({}); // New: For field-specific validation errors

    // --- Custom Alert System (Replaces mandatory forbidden `alert()` calls) ---
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [alertType, setAlertType] = useState('success'); // 'success' or 'error'

    const displayAlert = (message, type = 'success') => {
        setAlertMessage(message);
        setAlertType(type);
        setIsAlertVisible(true);
        // Clear alert after 5 seconds
        setTimeout(() => setIsAlertVisible(false), 5000);
    };
    // --------------------------------------------------------------------------

    /**
     * Handles changes in form inputs.
     * @param {React.ChangeEvent<HTMLInputElement | HTMLSelectElement>} e - Event object.
     */
    const handleChange = (e) => {
        const { name, value, files } = e.target;
        // Clear field-specific error when user starts typing/changing
        setErrors(prev => ({ ...prev, [name]: '' }));

        if (name === 'profilePic' && files) {
            setFormData({
                ...formData,
                profilePic: files[0] // Store the File object
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    /**
     * Client-side validation logic.
     * @returns {boolean} - True if form is valid, false otherwise.
     */
    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        if (isSignUp) {
            if (!formData.name.trim()) {
                newErrors.name = 'নাম দিতে হবে।';
                isValid = false;
            }
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'বৈধ ইমেইল প্রয়োজন।';
            isValid = false;
        }

        if (formData.password.length < 6) {
            newErrors.password = 'পাসওয়ার্ড কমপক্ষে ৬ অক্ষরের হতে হবে।';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };


    /**
     * Main function to handle submission (Sign Up or Login).
     */
    const handleSubmit = async () => {
        if (isLoading) return; // Prevent multiple submissions

        if (!validateForm()) {
            displayAlert('ফর্ম পূরণে ত্রুটি আছে। লাল চিহ্নিত স্থানগুলি পূরণ করুন।', 'error');
            return;
        }

        setIsLoading(true);

        try {
            if (isSignUp) {
                // --- Sign Up Logic ---
                const data = new FormData();
                data.append('name', formData.name);
                data.append('email', formData.email);
                data.append('password', formData.password);
                data.append('role', formData.role);
                if (formData.profilePic) {
                    data.append('profilePic', formData.profilePic, formData.profilePic.name);
                }

                const response = await axios.post(`${API_URL}/auth/register`, data, {
                    withCredentials: true,
                    headers: {
                        'Content-Type': 'multipart/form-data' // Required for file upload
                    }
                });

                console.log('Signup Response:', response.data);
                displayAlert('সাইন আপ সফল হয়েছে! আপনাকে স্বাগতম।', 'success');

                // IMPORTANT: In a proper React app with 'react-router-dom', use:
                // navigate('/'); 
                window.location.href = '/'; // Fallback for simple app structure

            } else {
                // --- Login Logic ---
                const payload = { email: formData.email, password: formData.password };

                const response = await axios.post(`${API_URL}/auth/login`, payload, {
                    withCredentials: true
                });

                console.log('Login Response:', response.data);
                displayAlert('লগইন সফল হয়েছে! আপনাকে স্বাগতম।', 'success');

                // IMPORTANT: In a proper React app with 'react-router-dom', use:
                // navigate('/');
                window.location.href = '/'; // Fallback for simple app structure
            }

        } catch (error) {
            console.error('Auth Error:', error.response ? error.response.data : error.message);
            const errorMessage = error.response?.data?.message || `অজানা সমস্যা: ${isSignUp ? 'সাইন আপ' : 'লগইন'} এ সমস্যা হয়েছে।`;
            displayAlert(errorMessage, 'error');

        } finally {
            setIsLoading(false); // Always stop loading, regardless of success or failure
        }
    };

    /**
     * Clears the selected profile picture.
     */
    const handleClearProfilePic = (e) => {
        e.preventDefault();
        setFormData({ ...formData, profilePic: null });
        // Reset the file input value to allow re-selection of the same file
        const fileInput = document.getElementById('profilePic');
        if (fileInput) fileInput.value = null;
    };

    /**
     * Switches between Sign Up and Login modes.
     */
    const toggleMode = () => {
        setIsSignUp(!isSignUp);
        setFormData({
            name: '',
            email: '',
            password: '',
            role: 'buyer',
            profilePic: null
        });
        setErrors({}); // Clear validation errors on mode switch
    };

    // --- Utility Component for Reusability (Spinner) ---
    const LoadingSpinner = () => (
        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
    );
    // ---------------------------------------------------


    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 flex items-center justify-center p-4">

            {/* Custom Alert Box (Replaces window.alert) */}
            {isAlertVisible && (
                <div
                    className={`fixed top-4 right-4 p-4 rounded-lg shadow-xl text-white max-w-sm z-50 transition-all duration-300 ${alertType === 'success' ? 'bg-emerald-500' : 'bg-red-500'} animate-in fade-in slide-in-from-right`}
                    role="alert"
                >
                    {alertMessage}
                </div>
            )}

            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mb-4">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">BookNest</h1>
                    <p className="text-gray-600">
                        {isSignUp ? 'নতুন অ্যাকাউন্ট তৈরি করুন' : 'আপনার অ্যাকাউন্টে লগইন করুন'}
                    </p>
                </div>

                <div className="space-y-5">
                    {isSignUp && (
                        <>
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    নাম
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="আপনার নাম লিখুন"
                                />
                                {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                            </div>

                            {/* Profile Picture Input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    প্রোফাইল ছবি (ঐচ্ছিক)
                                </label>
                                <div className="flex items-center space-x-3">
                                    {/* Placeholder / Preview */}
                                    {formData.profilePic ? (
                                        <img
                                            src={URL.createObjectURL(formData.profilePic)}
                                            alt="Profile Preview"
                                            className="w-12 h-12 rounded-full object-cover border-2 border-amber-500"
                                        />
                                    ) : (
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 border-2 border-gray-300">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Custom Styled Label/Button */}
                                    <label
                                        htmlFor="profilePic"
                                        className="cursor-pointer flex-1 flex items-center justify-center px-4 py-2.5 border-2 border-dashed border-amber-300 text-sm font-medium rounded-lg text-amber-600 bg-amber-50 hover:bg-amber-100 hover:border-amber-500 transition shadow-sm"
                                    >
                                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                        <span className="truncate">
                                            {formData.profilePic ? formData.profilePic.name : 'ছবি নির্বাচন করতে ক্লিক করুন'}
                                        </span>
                                    </label>

                                    {/* Hidden Input (The actual file input element) */}
                                    <input
                                        type="file"
                                        id="profilePic"
                                        name="profilePic"
                                        accept="image/*"
                                        onChange={handleChange}
                                        className="hidden" // Hides the ugly default button
                                    />

                                    {/* Clear button if file selected */}
                                    {formData.profilePic && (
                                        <button
                                            type="button"
                                            onClick={handleClearProfilePic}
                                            className="p-3 text-red-500 hover:bg-red-100 rounded-full transition focus:outline-none focus:ring-2 focus:ring-red-300"
                                            title="ছবি মুছে দিন"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                        </button>
                                    )}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            ইমেইল
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="example@email.com"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="••••••••"
                        />
                        {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                    </div>

                    {/* Role Selection */}
                    {isSignUp && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                ভূমিকা নির্বাচন করুন
                            </label>
                            <div className="flex gap-4">
                                {/* Buyer Role */}
                                <label className="flex-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="buyer"
                                        checked={formData.role === 'buyer'}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    <div className={`p-4 border-2 rounded-xl transition shadow-sm ${formData.role === 'buyer'
                                        ? 'border-amber-500 bg-amber-50'
                                        : 'border-gray-300 hover:border-amber-300'
                                        }`}>
                                        <div className="text-2xl mb-1">🛒</div>
                                        <div className="font-semibold text-gray-800">ক্রেতা</div>
                                    </div>
                                </label>
                                {/* Seller Role */}
                                <label className="flex-1 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="role"
                                        value="seller"
                                        checked={formData.role === 'seller'}
                                        onChange={handleChange}
                                        className="sr-only"
                                    />
                                    <div className={`p-4 border-2 rounded-xl transition shadow-sm ${formData.role === 'seller'
                                        ? 'border-amber-500 bg-amber-50'
                                        : 'border-gray-300 hover:border-amber-300'
                                        }`}>
                                        <div className="text-2xl mb-1">🏪</div>
                                        <div className="font-semibold text-gray-800">বিক্রেতা</div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Submit Button with Loading State */}
                    <button
                        onClick={handleSubmit}
                        disabled={isLoading} // Disable button when loading
                        className={`w-full flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white py-3 rounded-lg font-semibold transition duration-300 shadow-lg ${isLoading ? 'opacity-60 cursor-not-allowed' : 'hover:from-amber-600 hover:to-orange-700 hover:shadow-xl'}`}
                    >
                        {isLoading ? (
                            <><LoadingSpinner /> {isSignUp ? 'সাইন আপ হচ্ছে...' : 'লগইন হচ্ছে...'}</>
                        ) : (
                            isSignUp ? 'সাইন আপ করুন' : 'লগইন করুন'
                        )}
                    </button>
                </div>

                {/* Toggle Mode Link */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600">
                        {isSignUp ? 'ইতিমধ্যে অ্যাকাউন্ট আছে?' : 'নতুন ব্যবহারকারী?'}
                        <button
                            onClick={toggleMode}
                            className="ml-2 text-amber-600 font-semibold hover:text-amber-700 transition"
                            disabled={isLoading} // Optional: Disable mode switch while an API call is active
                        >
                            {isSignUp ? 'লগইন করুন' : 'সাইন আপ করুন'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
}