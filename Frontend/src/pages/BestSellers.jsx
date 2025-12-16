import React from 'react'
import { useState } from 'react';
import { Award, Star, TrendingUp,  ShoppingCart,Heart } from 'lucide-react';


const BestSellersPage = () => {
    const [selectedPeriod, setSelectedPeriod] = useState('month');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('rank');

    const periods = [
        { id: 'week', name: 'This Week' },
        { id: 'month', name: 'This Month' },
        { id: 'year', name: 'This Year' },
        { id: 'alltime', name: 'All Time' }
    ];

    const categories = [
        { id: 'all', name: 'All Categories' },
        { id: 'fiction', name: 'Fiction' },
        { id: 'nonfiction', name: 'Non-Fiction' },
        { id: 'selfhelp', name: 'Self-Help' },
        { id: 'business', name: 'Business' }
    ];

    const sortOptions = [
        { id: 'rank', name: 'Best Selling' },
        { id: 'rating', name: 'Highest Rated' },
        { id: 'price-low', name: 'Price: Low to High' },
        { id: 'price-high', name: 'Price: High to Low' }
    ];

    const bestsellerBooks = [
        {
            id: 1,
            rank: 1,
            title: "Atomic Habits",
            author: "James Clear",
            price: 699,
            originalPrice: 899,
            rating: 4.9,
            reviews: 15420,
            soldCount: 45230,
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
            category: "Self-Help",
            trending: true,
            badge: "#1 Best Seller"
        },
        {
            id: 2,
            rank: 2,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            price: 729,
            originalPrice: 899,
            rating: 4.8,
            reviews: 12350,
            soldCount: 38920,
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop",
            category: "Business",
            trending: true,
            badge: "#2 Best Seller"
        },
        {
            id: 3,
            rank: 3,
            title: "The Midnight Library",
            author: "Matt Haig",
            price: 599,
            originalPrice: 799,
            rating: 4.7,
            reviews: 10240,
            soldCount: 35120,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
            category: "Fiction",
            badge: "#3 Best Seller"
        },
        {
            id: 4,
            rank: 4,
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            price: 849,
            originalPrice: 999,
            rating: 4.6,
            reviews: 9850,
            soldCount: 32450,
            image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=600&fit=crop",
            category: "Non-Fiction",
            badge: "#4 Best Seller"
        },
        {
            id: 5,
            rank: 5,
            title: "Educated",
            author: "Tara Westover",
            price: 649,
            originalPrice: 799,
            rating: 4.8,
            reviews: 11230,
            soldCount: 30120,
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
            category: "Biography",
            trending: true,
            badge: "#5 Best Seller"
        },
        {
            id: 6,
            rank: 6,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            price: 549,
            originalPrice: 699,
            rating: 4.7,
            reviews: 8920,
            soldCount: 28340,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
            category: "Fiction",
            badge: "#6 Best Seller"
        },
        {
            id: 7,
            rank: 7,
            title: "Project Hail Mary",
            author: "Andy Weir",
            price: 799,
            originalPrice: 949,
            rating: 4.8,
            reviews: 7650,
            soldCount: 26780,
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
            category: "Fiction",
            badge: "#7 Best Seller"
        },
        {
            id: 8,
            rank: 8,
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            price: 599,
            originalPrice: 749,
            rating: 4.6,
            reviews: 9120,
            soldCount: 25430,
            image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop",
            category: "Fiction",
            badge: "#8 Best Seller"
        },
        {
            id: 9,
            rank: 9,
            title: "Sapiens",
            author: "Yuval Noah Harari",
            price: 899,
            originalPrice: 1099,
            rating: 4.7,
            reviews: 13420,
            soldCount: 24890,
            image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop",
            category: "Non-Fiction",
            trending: true,
            badge: "#9 Best Seller"
        },
        {
            id: 10,
            rank: 10,
            title: "The 7 Habits of Highly Effective People",
            author: "Stephen Covey",
            price: 749,
            originalPrice: 899,
            rating: 4.8,
            reviews: 10890,
            soldCount: 23120,
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
            category: "Self-Help",
            badge: "#10 Best Seller"
        },
        {
            id: 11,
            rank: 11,
            title: "The Alchemist",
            author: "Paulo Coelho",
            price: 499,
            originalPrice: 649,
            rating: 4.9,
            reviews: 16780,
            soldCount: 22450,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
            category: "Fiction",
            badge: "#11 Best Seller"
        },
        {
            id: 12,
            rank: 12,
            title: "Rich Dad Poor Dad",
            author: "Robert Kiyosaki",
            price: 649,
            originalPrice: 799,
            rating: 4.6,
            reviews: 9430,
            soldCount: 21890,
            image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=400&h=600&fit=crop",
            category: "Business",
            badge: "#12 Best Seller"
        },
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Header Section */}
            <section className="relative bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 text-white py-16 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                            <Award className="h-5 w-5" />
                            <span className="font-semibold">Most Popular Books</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Best Sellers</h1>
                        <p className="text-lg sm:text-xl text-orange-50 max-w-3xl mx-auto mb-6">
                            Discover the most loved books by thousands of readers. Updated weekly based on sales and ratings.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                                <div className="text-3xl font-bold">250K+</div>
                                <div className="text-sm text-orange-100">Books Sold</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                                <div className="text-3xl font-bold">4.8★</div>
                                <div className="text-sm text-orange-100">Avg Rating</div>
                            </div>
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 text-center">
                                <div className="text-3xl font-bold">98%</div>
                                <div className="text-sm text-orange-100">Satisfaction</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="bg-white border-b-2 border-gray-100 sticky top-16 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center">
                        {/* Period Filter */}
                        <div className="w-full lg:w-auto">
                            <label className="text-xs font-semibold text-gray-600 mb-2 block">TIME PERIOD</label>
                            <div className="flex flex-wrap gap-2">
                                {periods.map((period) => (
                                    <button
                                        key={period.id}
                                        onClick={() => setSelectedPeriod(period.id)}
                                        className={`px-4 py-2 rounded-full font-medium transition text-sm ${selectedPeriod === period.id
                                            ? 'bg-orange-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {period.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Category Filter */}
                        <div className="w-full lg:w-auto lg:ml-6">
                            <label className="text-xs font-semibold text-gray-600 mb-2 block">CATEGORY</label>
                            <div className="flex flex-wrap gap-2">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`px-4 py-2 rounded-full font-medium transition text-sm ${selectedCategory === cat.id
                                            ? 'bg-emerald-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="w-full lg:w-auto lg:ml-auto">
                            <label className="text-xs font-semibold text-gray-600 mb-2 block">SORT BY</label>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full lg:w-auto px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 font-medium text-sm"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Sellers List */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-6">
                        {bestsellerBooks.map((book) => (
                            <div
                                key={book.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-200"
                            >
                                <div className="flex flex-col sm:flex-row">
                                    {/* Rank Badge */}
                                    <div className="hidden sm:flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-600 text-white w-24 flex-shrink-0">
                                        <div className="text-center">
                                            <div className="text-4xl font-bold">#{book.rank}</div>
                                            <div className="text-xs uppercase font-semibold">Rank</div>
                                        </div>
                                    </div>

                                    {/* Book Image */}
                                    <div className="relative w-full sm:w-48 h-64 sm:h-auto overflow-hidden flex-shrink-0">
                                        <img
                                            src={book.image}
                                            alt={book.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {book.trending && (
                                            <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 animate-pulse">
                                                <TrendingUp className="h-3 w-3" />
                                                <span>Trending</span>
                                            </div>
                                        )}
                                        <div className="sm:hidden absolute top-3 right-3 bg-gradient-to-br from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                                            #{book.rank}
                                        </div>
                                    </div>

                                    {/* Book Details */}
                                    <div className="flex-1 p-6">
                                        <div className="flex flex-col h-full">
                                            <div className="flex-1">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div className="flex-1">
                                                        <div className="inline-block bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold mb-2">
                                                            {book.badge}
                                                        </div>
                                                        <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition">
                                                            {book.title}
                                                        </h3>
                                                        <p className="text-gray-600 mb-3">by {book.author}</p>
                                                        <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                                                            {book.category}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">Rating</div>
                                                        <div className="flex items-center space-x-1">
                                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                            <span className="font-bold text-gray-900">{book.rating}</span>
                                                            <span className="text-xs text-gray-500">({book.reviews.toLocaleString()})</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className="text-xs text-gray-500 mb-1">Sold</div>
                                                        <div className="font-bold text-gray-900">{book.soldCount.toLocaleString()}+</div>
                                                    </div>
                                                    <div className="col-span-2 sm:col-span-1">
                                                        <div className="text-xs text-gray-500 mb-1">Price</div>
                                                        <div className="flex items-center space-x-2">
                                                            <span className="text-2xl font-bold text-emerald-600">৳{book.price}</span>
                                                            <span className="text-sm text-gray-400 line-through">৳{book.originalPrice}</span>
                                                            <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full font-bold">
                                                                {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                                <button className="flex-1 bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition font-bold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center">
                                                    <ShoppingCart className="h-5 w-5 mr-2" />
                                                    Add to Cart
                                                </button>
                                                <button className="sm:w-auto bg-white border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-lg hover:bg-orange-50 transition font-bold flex items-center justify-center">
                                                    <Heart className="h-5 w-5 mr-2" />
                                                    Wishlist
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Best Sellers Section */}
            <section className="py-16 bg-gradient-to-br from-orange-50 to-amber-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Best Sellers?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">These books have earned their place through thousands of satisfied readers</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="inline-block bg-orange-100 p-4 rounded-full mb-4">
                                <Award className="h-8 w-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Reader Approved</h3>
                            <p className="text-gray-600">Loved by thousands of readers with verified purchases and reviews</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-block bg-emerald-100 p-4 rounded-full mb-4">
                                <TrendingUp className="h-8 w-8 text-emerald-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Quality</h3>
                            <p className="text-gray-600">High ratings and consistent sales prove these books deliver value</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
                                <Star className="h-8 w-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Life Changing</h3>
                            <p className="text-gray-600">Books that have made a real impact on readers' lives and thinking</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Never Miss a Best Seller!</h2>
                    <p className="text-lg sm:text-xl text-orange-50 mb-6">
                        Subscribe to get notified about new best sellers and exclusive deals
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-5 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition shadow-xl">
                            Subscribe
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BestSellersPage