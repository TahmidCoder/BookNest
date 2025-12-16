import React from 'react'
import { useState } from 'react';
import { Search, Grid, List, ChevronRight } from 'lucide-react';

const CategoriesPage = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [selectedFilter, setSelectedFilter] = useState('all');

    const allCategories = [
        {
            id: 1,
            name: "Fiction",
            count: 1250,
            description: "Immerse yourself in captivating stories and imaginative worlds",
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&h=400&fit=crop",
            color: "from-blue-500 to-blue-700",
            subcategories: ["Mystery", "Romance", "Thriller", "Fantasy", "Sci-Fi"]
        },
        {
            id: 2,
            name: "Non-Fiction",
            count: 890,
            description: "Discover real stories, facts, and knowledge that inspire",
            image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&h=400&fit=crop",
            color: "from-purple-500 to-purple-700",
            subcategories: ["Biography", "History", "Science", "Politics", "Travel"]
        },
        {
            id: 3,
            name: "Self-Help & Personal Development",
            count: 456,
            description: "Transform your life with practical wisdom and guidance",
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=600&h=400&fit=crop",
            color: "from-amber-500 to-orange-600",
            subcategories: ["Motivation", "Psychology", "Productivity", "Wellness", "Finance"]
        },
        {
            id: 4,
            name: "Biography & Memoir",
            count: 678,
            description: "Learn from the lives and experiences of remarkable people",
            image: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&h=400&fit=crop",
            color: "from-pink-500 to-rose-700",
            subcategories: ["Political", "Entertainment", "Sports", "Historical", "Business"]
        },
        {
            id: 5,
            name: "Children & Young Adult",
            count: 543,
            description: "Spark imagination and foster a love for reading in young minds",
            image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
            color: "from-green-500 to-emerald-700",
            subcategories: ["Picture Books", "Middle Grade", "YA Fiction", "Educational", "Comics"]
        },
        {
            id: 6,
            name: "Science & Technology",
            count: 321,
            description: "Explore the wonders of innovation and scientific discovery",
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
            color: "from-indigo-500 to-blue-700",
            subcategories: ["Physics", "Computer Science", "Biology", "Engineering", "Mathematics"]
        },
        {
            id: 7,
            name: "Business & Economics",
            count: 412,
            description: "Master the art of business and financial success",
            image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&h=400&fit=crop",
            color: "from-slate-600 to-gray-800",
            subcategories: ["Entrepreneurship", "Marketing", "Leadership", "Investing", "Management"]
        },
        {
            id: 8,
            name: "Arts & Photography",
            count: 289,
            description: "Celebrate creativity through visual storytelling and art",
            image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&h=400&fit=crop",
            color: "from-fuchsia-500 to-pink-700",
            subcategories: ["Photography", "Painting", "Design", "Architecture", "Film"]
        },
        {
            id: 9,
            name: "Cooking & Food",
            count: 367,
            description: "Discover delicious recipes and culinary adventures",
            image: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&h=400&fit=crop",
            color: "from-red-500 to-orange-700",
            subcategories: ["Recipes", "Baking", "Healthy Eating", "World Cuisine", "Vegetarian"]
        },
        {
            id: 10,
            name: "Religion & Spirituality",
            count: 234,
            description: "Find peace and purpose through spiritual exploration",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
            color: "from-teal-500 to-cyan-700",
            subcategories: ["Islam", "Buddhism", "Christianity", "Hinduism", "Philosophy"]
        },
        {
            id: 11,
            name: "Health & Fitness",
            count: 298,
            description: "Achieve your wellness goals with expert guidance",
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
            color: "from-lime-500 to-green-700",
            subcategories: ["Exercise", "Nutrition", "Mental Health", "Yoga", "Medicine"]
        },
        {
            id: 12,
            name: "Academic & Education",
            count: 523,
            description: "Comprehensive resources for learning and academic excellence",
            image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
            color: "from-violet-500 to-purple-700",
            subcategories: ["Textbooks", "Study Guides", "Research", "Reference", "Test Prep"]
        },
    ];

    const filters = [
        { id: 'all', name: 'All Categories' },
        { id: 'popular', name: 'Most Popular' },
        { id: 'new', name: 'Newly Added' },
        { id: 'trending', name: 'Trending' }
    ];

    return (
        <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
            {/* Header Section */}
            <section className="relative bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16 sm:py-20 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Browse All Categories</h1>
                        <p className="text-lg sm:text-xl text-emerald-50 max-w-3xl mx-auto mb-6">
                            Explore our extensive collection of books across {allCategories.length} different categories
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <div className="relative w-full sm:w-96">
                                <input
                                    type="text"
                                    placeholder="Search categories..."
                                    className="w-full px-5 py-3 pl-12 pr-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-full text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                                />
                                <Search className="absolute left-4 top-3.5 h-5 w-5 text-white/70" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filters & View Options */}
            <section className="bg-white border-b-2 border-gray-100 sticky top-16 z-40 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                            {filters.map((filter) => (
                                <button
                                    key={filter.id}
                                    onClick={() => setSelectedFilter(filter.id)}
                                    className={`px-4 py-2 rounded-full font-medium transition text-sm ${selectedFilter === filter.id
                                        ? 'bg-emerald-600 text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    {filter.name}
                                </button>
                            ))}
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 mr-2">View:</span>
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded-lg transition ${viewMode === 'grid'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <Grid className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-lg transition ${viewMode === 'list'
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <List className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Grid/List */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {viewMode === 'grid' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-emerald-200"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                                        <img
                                            src={category.image}
                                            alt={category.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                                            <span className="text-sm font-bold text-gray-900">{category.count} books</span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
                                            {category.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                            {category.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {category.subcategories.slice(0, 3).map((sub, idx) => (
                                                <span key={idx} className="text-xs px-2 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                                                    {sub}
                                                </span>
                                            ))}
                                            {category.subcategories.length > 3 && (
                                                <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full">
                                                    +{category.subcategories.length - 3} more
                                                </span>
                                            )}
                                        </div>
                                        <button className="w-full bg-emerald-600 text-white py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center justify-center group-hover:shadow-lg">
                                            Explore Category
                                            <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {allCategories.map((category) => (
                                <div
                                    key={category.id}
                                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-emerald-200"
                                >
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="relative sm:w-64 h-48 sm:h-auto overflow-hidden flex-shrink-0">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-80`}></div>
                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="flex-1 p-6">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition">
                                                        {category.name}
                                                    </h3>
                                                    <p className="text-gray-600 mb-4">
                                                        {category.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {category.subcategories.map((sub, idx) => (
                                                            <span key={idx} className="text-xs px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full">
                                                                {sub}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="flex flex-col items-end gap-3 w-full sm:w-auto">
                                                    <div className="bg-emerald-50 px-4 py-2 rounded-lg">
                                                        <span className="text-2xl font-bold text-emerald-600">{category.count}</span>
                                                        <span className="text-sm text-gray-600 ml-1">books</span>
                                                    </div>
                                                    <button className="w-full sm:w-auto bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center justify-center group-hover:shadow-lg">
                                                        Explore
                                                        <ChevronRight className="h-5 w-5 ml-1 group-hover:translate-x-1 transition" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">Can't Find What You're Looking For?</h2>
                    <p className="text-lg sm:text-xl text-emerald-50 mb-6">
                        Contact our support team and we'll help you find the perfect book
                    </p>
                    <button className="bg-white text-emerald-600 px-8 py-3.5 rounded-full font-bold hover:bg-emerald-50 transition shadow-xl">
                        Contact Support
                    </button>
                </div>
            </section>
        </div>
    );
};
export default CategoriesPage