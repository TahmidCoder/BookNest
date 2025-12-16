import React from 'react'
import { TrendingUp, Clock, Award, Heart } from 'lucide-react';

const FeaturesBar = () => {
    return (
        <div>
            <section className="bg-white border-y-2 border-gray-100 py-4 sm:py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                        <div className="flex items-center space-x-3 justify-center">
                            <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
                            <div>
                                <div className="font-bold text-gray-900 text-sm sm:text-base">Free Shipping</div>
                                <div className="text-xs sm:text-sm text-gray-500">On orders over ৳500</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 justify-center">
                            <Clock className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
                            <div>
                                <div className="font-bold text-gray-900 text-sm sm:text-base">Fast Delivery</div>
                                <div className="text-xs sm:text-sm text-gray-500">2-3 days delivery</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 justify-center">
                            <Award className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
                            <div>
                                <div className="font-bold text-gray-900 text-sm sm:text-base">Best Quality</div>
                                <div className="text-xs sm:text-sm text-gray-500">Original books only</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 justify-center col-span-2 md:col-span-1">
                            <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-emerald-600" />
                            <div>
                                <div className="font-bold text-gray-900 text-sm sm:text-base">30-Day Return</div>
                                <div className="text-xs sm:text-sm text-gray-500">Easy return policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturesBar