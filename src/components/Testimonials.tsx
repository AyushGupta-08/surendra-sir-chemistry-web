
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Riya",
      class: "Class 12",
      review: "I used to fear Chemistry until I joined Surendra Sir's class. Now it's my favorite subject!",
      rating: 5
    },
    {
      name: "Ankit",
      class: "Class 10 CBSE",
      review: "His teaching style is fun and focused. Scored 92 in boards!",
      rating: 5
    },
    {
      name: "Priya",
      class: "Class 11 ICSE",
      review: "Sir makes even the most complex topics easy to understand. Highly recommend!",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Students Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Success stories from our satisfied students
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.review}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name[0]}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.class}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
