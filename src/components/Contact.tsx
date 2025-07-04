
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-teal-50 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your Chemistry journey? Contact us today!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      📞
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone & WhatsApp</p>
                      <p className="text-gray-600">+91 94313 40624</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      📍
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Location</p>
                      <p className="text-gray-600">Jugsalai, Jamshedpur, Jharkhand</p>
                      <p className="text-gray-600">Near Hotel Kuldeep, Station Road, Kumar Chowk</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                      💰
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Fee Information</p>
                      <p className="text-gray-600">Contact us for more details and fee information.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span className="text-gray-700">Board-oriented preparation (ICSE & CBSE)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span className="text-gray-700">Engaging and playful teaching style</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span className="text-gray-700">Conceptual clarity with real-life examples</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span className="text-gray-700">Flexible class timings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-teal-500 mr-3">✓</span>
                    <span className="text-gray-700">Proven track record of success</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
