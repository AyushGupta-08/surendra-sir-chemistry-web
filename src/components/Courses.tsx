
import React from 'react';

const Courses = () => {
  const courses = [
    { title: "Class 9 Chemistry", boards: "ICSE & CBSE", color: "from-teal-400 to-teal-600" },
    { title: "Class 10 Chemistry", boards: "ICSE & CBSE", color: "from-blue-400 to-blue-600" },
    { title: "Class 11 Chemistry", boards: "ISC & CBSE", color: "from-teal-500 to-blue-500" },
    { title: "Class 12 Chemistry", boards: "ISC & CBSE", color: "from-blue-500 to-purple-500" },
    { title: "Crash Courses", boards: "Board Revision Sessions", color: "from-purple-400 to-pink-500" }
  ];

  return (
    <section id="courses" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Courses Offered
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive Chemistry education tailored for different boards and grade levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center mb-4`}>
                <span className="text-white font-bold text-xl">{course.title.split(' ')[1]}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.boards}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">₹1200</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Class Timings</h3>
            <div className="space-y-2 text-gray-600">
              <p>✓ Flexible class hours to accommodate student schedules</p>
              <p>✓ Weekday & weekend batches available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
