import React, { useState } from 'react';
import { Star, Clock, Heart, ShoppingCart, Filter, ChevronDown } from 'lucide-react';

const NewArrivalsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('newest');
    const [wishlist, setWishlist] = useState([]);

    // Fake books data - uploaded in last 15 days
    const newBooks = [
        {
            id: 1,
            title: "The Midnight Library",
            author: "Matt Haig",
            price: 450,
            originalPrice: 600,
            rating: 4.8,
            reviews: 234,
            image: "./Book1.jpg",
            category: "Fiction",
            daysAgo: 2,
            discount: 25
        },
        {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            price: 520,
            originalPrice: 650,
            rating: 4.9,
            reviews: 456,
            image: "./Book1.jpg",
            category: "Self-Help",
            daysAgo: 5,
            discount: 20
        },
        {
            id: 3,
            title: "Project Hail Mary",
            author: "Andy Weir",
            price: 580,
            originalPrice: 750,
            rating: 4.7,
            reviews: 189,
            image: "./Book1.jpg",
            category: "Science Fiction",
            daysAgo: 7,
            discount: 23
        },
        {
            id: 4,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            price: 420,
            originalPrice: 550,
            rating: 4.6,
            reviews: 312,
            image: "./Book1.jpg",
            category: "Business",
            daysAgo: 8,
            discount: 24
        },
        {
            id: 5,
            title: "Klara and the Sun",
            author: "Kazuo Ishiguro",
            price: 490,
            originalPrice: 600,
            rating: 4.5,
            reviews: 167,
            image: "./Book1.jpg",
            category: "Fiction",
            daysAgo: 10,
            discount: 18
        },
        {
            id: 6,
            title: "The Four Winds",
            author: "Kristin Hannah",
            price: 550,
            originalPrice: 700,
            rating: 4.8,
            reviews: 289,
            image: "./Book1.jpg",
            category: "Historical Fiction",
            daysAgo: 12,
            discount: 21
        },
        {
            id: 7,
            title: "Think Again",
            author: "Adam Grant",
            price: 480,
            originalPrice: 620,
            rating: 4.7,
            reviews: 203,
            image: "./Book1.jpg",
            category: "Self-Help",
            daysAgo: 13,
            discount: 23
        },
        {
            id: 8,
            title: "The Code Breaker",
            author: "Walter Isaacson",
            price: 610,
            originalPrice: 800,
            rating: 4.6,
            reviews: 145,
            image: "./Book1.jpg",
            category: "Biography",
            daysAgo: 14,
            discount: 24
        },
        {
            id: 9,
            title: "Beautiful World, Where Are You",
            author: "Sally Rooney",
            price: 470,
            originalPrice: 590,
            rating: 4.4,
            reviews: 198,
            image: "./Book1.jpg",
            category: "Fiction",
            daysAgo: 3,
            discount: 20
        },
        {
            id: 10,
            title: "The Last Thing He Told Me",
            author: "Laura Dave",
            price: 440,
            originalPrice: 580,
            rating: 4.5,
            reviews: 276,
            image: "./Book1.jpg",
            category: "Mystery",
            daysAgo: 6,
            discount: 24
        },
        {
            id: 11,
            title: "Crying in H Mart",
            author: "Michelle Zauner",
            price: 410,
            originalPrice: 520,
            rating: 4.7,
            reviews: 221,
            image: "./Book1.jpg",
            category: "Memoir",
            daysAgo: 9,
            discount: 21
        },
        {
            id: 12,
            title: "The Invisible Life of Addie LaRue",
            author: "V.E. Schwab",
            price: 530,
            originalPrice: 680,
            rating: 4.8,
            reviews: 342,
            image: "./Book1.jpg",
            category: "Fantasy",
            daysAgo: 11,
            discount: 22
        }
    ];

    const categories = ['all', 'Fiction', 'Self-Help', 'Science Fiction', 'Business', 'Historical Fiction', 'Biography', 'Mystery', 'Memoir', 'Fantasy'];

    const toggleWishlist = (bookId) => {
        if (wishlist.includes(bookId)) {
            setWishlist(wishlist.filter(id => id !== bookId));
        } else {
            setWishlist([...wishlist, bookId]);
        }
    };

    const filteredBooks = selectedCategory === 'all'
        ? newBooks
        : newBooks.filter(book => book.category === selectedCategory);

    const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sortBy === 'newest') return a.daysAgo - b.daysAgo;
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-12 sm:py-16 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            🎉 Fresh Arrivals - Last 15 Days
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
                            New Arrivals
                        </h1>
                        <p className="text-base sm:text-lg text-emerald-50 max-w-2xl mx-auto">
                            Discover the latest additions to our collection. Fresh titles just for you!
                        </p>
                        <div className="flex items-center justify-center gap-6 mt-6 text-sm">
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{newBooks.length} New Books</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 fill-current" />
                                <span>Handpicked Selection</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filter & Sort Bar */}
            <div className="bg-white border-b sticky top-0 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                        {/* Category Filter */}
                        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
                            <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" />
                            <div className="flex gap-2">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${selectedCategory === cat
                                                ? 'bg-emerald-600 text-white'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        {cat === 'all' ? 'All Books' : cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Sort Dropdown */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Sort by:</span>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            >
                                <option value="newest">Newest First</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Highest Rated</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Books Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {sortedBooks.map(book => (
                        <div key={book.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group">
                            <div className="relative">
                                <img
                                    src={book.image}
                                    alt={book.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                                />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                                        New
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3 flex gap-2">
                                    <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                        -{book.discount}%
                                    </span>
                                </div>
                                <button
                                    onClick={() => toggleWishlist(book.id)}
                                    className="absolute bottom-3 right-3 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
                                >
                                    <Heart
                                        className={`w-5 h-5 ${wishlist.includes(book.id)
                                                ? 'fill-red-500 text-red-500'
                                                : 'text-gray-600'
                                            }`}
                                    />
                                </button>
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700">
                                    <Clock className="w-3 h-3 inline mr-1" />
                                    {book.daysAgo} days ago
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="text-xs text-emerald-600 font-semibold mb-1">
                                    {book.category}
                                </div>
                                <h3 className="font-bold text-lg mb-1 line-clamp-1">
                                    {book.title}
                                </h3>
                                <p className="text-sm text-gray-600 mb-2">
                                    by {book.author}
                                </p>
                                <div className="flex items-center gap-1 mb-3">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    <span className="text-sm font-semibold">{book.rating}</span>
                                    <span className="text-xs text-gray-500">({book.reviews})</span>
                                </div>
                                <div className="flex items-center justify-between mb-3">
                                    <div>
                                        <span className="text-xl font-bold text-emerald-600">
                                            ৳{book.price}
                                        </span>
                                        <span className="text-sm text-gray-400 line-through ml-2">
                                            ৳{book.originalPrice}
                                        </span>
                                    </div>
                                </div>
                                <button className="w-full bg-emerald-600 text-white py-2.5 rounded-lg font-semibold hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                                    <ShoppingCart className="w-4 h-4" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Results Count */}
                <div className="text-center mt-8 text-gray-600">
                    Showing {sortedBooks.length} of {newBooks.length} new books
                </div>
            </section>

            {/* Promotional Banner */}
            <section className="bg-gradient-to-r from-emerald-500 to-teal-500 py-12 sm:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                        🎁 Special Offer on New Arrivals
                    </h2>
                    <p className="text-lg mb-6 text-emerald-50">
                        Get up to 25% off on all newly added books. Limited time offer!
                    </p>
                    <button className="bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-emerald-50 transition shadow-xl">
                        Shop Now
                    </button>
                </div>
            </section>
        </div>
    );
};

export default NewArrivalsPage;