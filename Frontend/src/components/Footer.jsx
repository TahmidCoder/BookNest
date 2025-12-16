import React from 'react'
import { ChevronRight, BookOpen } from 'lucide-react';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
                        <div className="text-center sm:text-left">
                            <div className="flex items-center space-x-2 mb-4 justify-center sm:justify-start">
                                <BookOpen className="h-8 w-8 text-emerald-500" />
                                <span className="text-2xl font-bold text-white">BookNest</span>
                            </div>
                            <p className="text-sm mb-4">Your one-stop destination for all your reading needs. Quality books at affordable prices.</p>
                            <div className="flex space-x-3 justify-center sm:justify-start">
                                <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <span className="text-xl">📘</span>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <span className="text-xl">📧</span>
                                </a>
                                <a href="#" className="bg-gray-800 hover:bg-emerald-600 p-2 rounded-full transition">
                                    <span className="text-xl">📱</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Contact</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> FAQ</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Shipping Info</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Return Policy</a></li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-bold text-white mb-4 text-lg">Categories</h3>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Fiction</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Non-Fiction</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Children's Books</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Academic</a></li>
                                <li><a href="#" className="hover:text-emerald-500 transition flex items-center justify-center sm:justify-start"><ChevronRight className="h-4 w-4" /> Best Sellers</a></li>
                            </ul>
                        </div>
                        <div className="text-center sm:text-left">
                            <h3 className="font-bold text-white mb-4 text-lg">Newsletter</h3>
                            <p className="text-sm mb-4">Subscribe to get special offers, free giveaways, and updates</p>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full px-4 py-2.5 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-3 text-sm"
                            />
                            <button className="w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold shadow-lg">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-10 pt-8 text-center">
                        <p className="text-sm">&copy; 2024 BookNest. All rights reserved. Made with ❤️ for book lovers</p>
                        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
                            <a href="#" className="hover:text-emerald-500 transition">Privacy Policy</a>
                            <span>•</span>
                            <a href="#" className="hover:text-emerald-500 transition">Terms of Service</a>
                            <span>•</span>
                            <a href="#" className="hover:text-emerald-500 transition">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer