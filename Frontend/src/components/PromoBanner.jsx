import React from 'react'

const PromoBanner = () => {
    return (
        <div>
            <section className="py-12 sm:py-16" id="promo-banner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 text-center text-white overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z" fill="%23ffffff" fill-opacity="1" fill-rule="evenodd"/%3E%3C/svg%3E")' }}></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">🎉 Special Weekend Offer!</h2>
                            <p className="text-lg sm:text-xl lg:text-2xl mb-4 sm:mb-6 max-w-2xl mx-auto">Get up to 30% off on all best sellers this week. Limited time only!</p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-4 sm:mb-6">
                                <button className="w-full sm:w-auto bg-white text-purple-600 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-purple-50 transition shadow-xl text-sm sm:text-base">
                                    Shop Best Sellers
                                </button>
                                <button className="w-full sm:w-auto border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-bold hover:bg-white hover:text-purple-600 transition text-sm sm:text-base">
                                    View All Deals
                                </button>
                            </div>
                            <div className="text-sm sm:text-base text-white/90">⏰ Offer ends in 3 days</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PromoBanner