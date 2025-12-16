import React, { useState, useEffect } from 'react';
import { User, Mail, Lock, Camera, Trash2, Save, X } from 'lucide-react';

export default function AccountPage() {
    const [user, setUser] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null);
    const [loading, setLoading] = useState(false);
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        profilePic: null
    });
    const [previewImage, setPreviewImage] = useState(user ? user.profilePic : null);
    const [message, setMessage] = useState({ type: '', text: '' });
    const API_URL = import.meta.env.VITE_APP_API_URL;

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                profilePic: file
            });
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleUpdateProfile = async () => {

        try {
            const formDataToSend = new FormData();
            if (formData.name) formDataToSend.append('name', formData.name);
            if (formData.email) formDataToSend.append('email', formData.email);
            if (formData.profilePic) formDataToSend.append('profilePic', formData.profilePic);

            const response = await fetch(`${API_URL}/auth/update/${user._id}`, {
                method: 'PUT',
                credentials: 'include',
                body: formDataToSend
            });

            if (response.ok) {
                const updatedUser = await response.json();
                setUser(updatedUser);
                setEditing(false);
                showMessage('success', 'Profile updated successfully!');
                fetchUserData();
            } else {
                showMessage('error', 'Failed to update profile');
            }
        } catch (error) {
            showMessage('error', 'Error updating profile');
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAccount = async () => {
        if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            try {
                const response = await fetch(`${API_URL}/auth/delete/${user._id}`, {
                    method: 'DELETE',
                    credentials: 'include'
                });

                if (response.ok) {
                    showMessage('success', 'Account deleted successfully');
                    setTimeout(() => {
                        window.location.href = '/';
                    }, 2000);
                } else {
                    showMessage('error', 'Failed to delete account');
                }
            } catch (error) {
                showMessage('error', 'Error deleting account');
            }
        }
    };

    const showMessage = (type, text) => {
        setMessage({ type, text });
        setTimeout(() => setMessage({ type: '', text: '' }), 3000);
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                    <p className="mt-4 text-amber-800 font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-amber-900 mb-2">BookNest Account</h1>
                    <p className="text-amber-700">Manage your profile and settings</p>
                </div>

                {message.text && (
                    <div className={`mb-6 p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                        {message.text}
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white">
                        <div className="flex items-center space-x-6">
                            <div className="relative">
                                <div className="w-24 h-24 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    {previewImage ? (
                                        <img src={previewImage} alt="Profile" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-amber-200">
                                            <User className="w-12 h-12 text-amber-600" />
                                        </div>
                                    )}
                                </div>
                                {editing && (
                                    <label className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-lg hover:bg-amber-50 transition">
                                        <Camera className="w-4 h-4 text-amber-600" />
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageChange}
                                            className="hidden"
                                        />
                                    </label>
                                )}
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold">{user?.name}</h2>
                                <p className="text-amber-100">{user?.email}</p>
                                <span className="inline-block mt-2 px-3 py-1 bg-white text-black bg-opacity-20 rounded-full text-sm">
                                    Accout Type : <span className='text-red-500'>{user?.role || 'User'}</span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        {!editing ? (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-sm font-medium text-gray-600 mb-2 block">Full Name</label>
                                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                            <User className="w-5 h-5 text-gray-400" />
                                            <span className="text-gray-800">{user?.name}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-600 mb-2 block">Email Address</label>
                                        <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                            <Mail className="w-5 h-5 text-gray-400" />
                                            <span className="text-gray-800">{user?.email}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pt-6">
                                    <button
                                        onClick={() => setEditing(true)}
                                        className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition flex items-center justify-center space-x-2"
                                    >
                                        <Save className="w-5 h-5" />
                                        <span>Edit Profile</span>
                                    </button>
                                    <button
                                        onClick={handleDeleteAccount}
                                        className="px-6 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition flex items-center space-x-2"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                        <span>Delete Account</span>
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                placeholder="Your name"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium text-gray-700 mb-2 block">Email Address</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex space-x-4 pt-6">
                                    <button
                                        onClick={handleUpdateProfile}
                                        disabled={loading}
                                        className="flex-1 bg-amber-600 text-white py-3 rounded-lg font-medium hover:bg-amber-700 transition flex items-center justify-center space-x-2 disabled:opacity-50"
                                    >
                                        <Save className="w-5 h-5" />
                                        <span>{loading ? 'Saving...' : 'Save Changes'}</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEditing(false);
                                            setFormData({
                                                name: user.name,
                                                email: user.email,
                                                password: '',
                                                profilePic: null
                                            });
                                            setPreviewImage(user.profilePic);
                                        }}
                                        className="px-6 bg-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-400 transition flex items-center space-x-2"
                                    >
                                        <X className="w-5 h-5" />
                                        <span>Cancel</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-6 bg-amber-50 border border-amber-200 rounded-lg p-4">
                    <p className="text-sm text-amber-800">
                        <strong>Security Note:</strong> Your password is securely encrypted. To change your password, please contact support.
                    </p>
                </div>
            </div>
        </div>
    );
}