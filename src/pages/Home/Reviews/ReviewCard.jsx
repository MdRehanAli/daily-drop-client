import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const ReviewCard = ({ review }) => {
    const { userName, review: testimonial, user_photoURL, user_email } = review;
    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 relative">
                {/* quote icon */}
                <div className="absolute top-6 left-6">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-teal-50 text-teal-300">
                        <FaQuoteRight className="text-2xl" />
                    </div>
                </div>

                {/* content */}
                <div className="pt-12">
                    <p className="text-gray-700 leading-relaxed text-base md:text-lg font-medium">
                        {testimonial}
                    </p>

                    {/* dashed divider */}
                    <div className="mt-6">
                        <div className="w-full border-t-2 border-dashed border-teal-200" />
                    </div>

                    {/* footer */}
                    <div className="flex items-center gap-4 mt-6">
                        {/* colored circle avatar */}
                        <div className="w-12 h-12 rounded-full bg-teal-900 shrink-0">
                            <img src={user_photoURL} alt="" />
                        </div>
                        <div>
                            <h3 className="text-teal-900 font-extrabold text-lg md:text-xl leading-tight">
                                {userName}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base">
                                {user_email}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;