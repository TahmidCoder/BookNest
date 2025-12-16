import React from 'react'
import { ChevronRight, Heart, Star } from 'lucide-react';

const FeaturedBooks = () => {
    const featuredBooks = [
        {
            id: 1,
            title: "The Midnight Library",
            author: "Matt Haig",
            price: 599,
            rating: 4.8,
            reviews: 245,
            image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
        },
        {
            id: 2,
            title: "Atomic Habits",
            author: "James Clear",
            price: 699,
            rating: 4.9,
            reviews: 532,
            image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
        },
        {
            id: 3,
            title: "The Silent Patient",
            author: "Alex Michaelides",
            price: 549,
            rating: 4.7,
            reviews: 189,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
        },
        {
            id: 4,
            title: "Educated",
            author: "Tara Westover",
            price: 649,
            rating: 4.8,
            reviews: 312,
            image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
        },
        {
            id: 5,
            title: "Where the Crawdads Sing",
            author: "Delia Owens",
            price: 599,
            rating: 4.6,
            reviews: 421,
            image: "https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=400&h=600&fit=crop"
        },
        {
            id: 6,
            title: "The Psychology of Money",
            author: "Morgan Housel",
            price: 729,
            rating: 4.9,
            reviews: 678,
            image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=400&h=600&fit=crop"
        },
        {
            id: 7,
            title: "Project Hail Mary",
            author: "Andy Weir",
            price: 799,
            rating: 4.8,
            reviews: 298,
            image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
        },
        {
            id: 8,
            title: "Thinking, Fast and Slow",
            author: "Daniel Kahneman",
            price: 849,
            rating: 4.7,
            reviews: 445,
            image: "https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400&h=600&fit=crop"
        },
    ];
    return (
        <div>
            <section className="py-12 sm:py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-3 sm:space-y-0">
                        <div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Featured Books</h2>
                            <p className="text-sm sm:text-base text-gray-600 mt-1">Handpicked selections for you</p>
                        </div>
                        <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center font-semibold text-sm sm:text-base group">
                            View All
                            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition" />
                        </a>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                        {featuredBooks.map((book) => (
                            <div
                                key={book.id}
                                className="bg-white rounded-xl sm:rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer border-2 border-gray-100 hover:border-emerald-200"
                            >
                                <div className="relative overflow-hidden aspect-[2/3] bg-gradient-to-br from-gray-100 to-gray-200">
                                    <img
                                        src={book.image}
                                        alt={book.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                    <div className="absolute top-2 right-2 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                        New
                                    </div>
                                    <button className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition opacity-0 group-hover:opacity-100">
                                        <Heart className="h-4 w-4 text-gray-700 hover:text-red-500 transition" />
                                    </button>
                                </div>
                                <div className="p-3 sm:p-4 space-y-2">
                                    <h3 className="font-bold text-sm sm:text-base lg:text-lg text-gray-900 group-hover:text-emerald-600 transition line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                                        {book.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">{book.author}</p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-1">
                                            <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                                            <span className="text-xs sm:text-sm font-bold text-gray-900">{book.rating}</span>
                                            <span className="text-xs text-gray-500">({book.reviews})</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 space-y-2 sm:space-y-0">
                                        <span className="text-xl sm:text-2xl font-bold text-emerald-600">৳{book.price}</span>
                                        <button className="w-full sm:w-auto bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-emerald-700 transition text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedBooks