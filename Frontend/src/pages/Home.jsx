import React, { useState } from 'react';
import { Heart, Star, TrendingUp, Clock, Award, ChevronRight, BookOpen } from 'lucide-react';
import PromoBanner from '../components/PromoBanner';
import FeaturedBooks from '../components/FeaturedBooks';
import Footer from '../components/Footer';
import FeaturesBar from '../components/FeaturesBar';


const HomePage = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        <div className="space-y-4 sm:space-y-6 text-center md:text-left">
                            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                                📚 Over 50,000 Books Available
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                Discover Your Next Favorite Book
                            </h1>
                            <p className="text-base sm:text-lg lg:text-xl text-emerald-50 max-w-xl mx-auto md:mx-0">
                                Explore thousands of books across all genres. Free delivery on orders over ৳500 and 30-day return policy
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 justify-center md:justify-start">
                                <button className="bg-white text-emerald-600 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-emerald-50 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 text-sm sm:text-base">
                                    Shop Now
                                </button>
                                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-white hover:text-emerald-600 transition text-sm sm:text-base">
                                    Browse Categories
                                </button>
                            </div>
                            <div className="grid grid-cols-3 gap-4 pt-4 sm:pt-6">
                                <div className="text-center md:text-left">
                                    <div className="text-2xl sm:text-3xl font-bold">50K+</div>
                                    <div className="text-xs sm:text-sm text-emerald-100">Books</div>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-2xl sm:text-3xl font-bold">15K+</div>
                                    <div className="text-xs sm:text-sm text-emerald-100">Happy Readers</div>
                                </div>
                                <div className="text-center md:text-left">
                                    <div className="text-2xl sm:text-3xl font-bold">4.9★</div>
                                    <div className="text-xs sm:text-sm text-emerald-100">Rating</div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden md:flex justify-center items-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-white/20 rounded-3xl blur-3xl"></div>
                                <img
                                    src="./Book1.jpg"
                                    alt="Books"
                                    className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500 w-full max-w-sm"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features Bar */}
            <FeaturesBar />
            {/* Featured Books */}
            <FeaturedBooks />
            {/* Promo Banner */}
            <PromoBanner />
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default HomePage