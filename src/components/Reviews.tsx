
import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewsList from './ReviewsList';

const Reviews = () => {
  return (
    <section id="reviews" className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            What Students Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Real feedback from students who have experienced Surendra Sir's chemistry classes
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <ReviewForm />
          </div>
          <div className="lg:col-span-2">
            <ReviewsList />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
