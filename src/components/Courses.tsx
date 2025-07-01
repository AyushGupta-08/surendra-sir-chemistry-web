
import React from 'react';
import { FlaskConical, Atom } from 'lucide-react';

const Courses = () => {
  const courses = [
    { 
      title: "Class 9", 
      subjects: "Physics, Chemistry & Mathematics",
      boards: "ICSE & CBSE", 
      color: "from-teal-400 to-teal-600",
      icon: <Atom className="w-8 h-8 text-white" />
    },
    { 
      title: "Class 10", 
      subjects: "Physics, Chemistry & Mathematics",
      boards: "ICSE & CBSE", 
      color: "from-blue-400 to-blue-600",
      icon: <FlaskConical className="w-8 h-8 text-white" />
    },
    { 
      title: "Class 11 Chemistry", 
      subjects: "Pure Chemistry Focus",
      boards: "ISC & CBSE", 
      color: "from-teal-500 to-blue-500",
      icon: <Atom className="w-8 h-8 text-white" />
    },
    { 
      title: "Class 12 Chemistry", 
      subjects: "Advanced Chemistry",
      boards: "ISC & CBSE", 
      color: "from-blue-500 to-purple-500",
      icon: <FlaskConical className="w-8 h-8 text-white" />
    },
    { 
      title: "Crash Courses", 
      subjects: "Board Revision Sessions",
      boards: "All Boards", 
      color: "from-purple-400 to-pink-500",
      icon: <Atom className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="courses" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Chemistry-themed background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-24 h-24 border-2 border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 border-2 border-teal-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-blue-400 rounded-full"></div>
        <div className="absolute bottom-1/3 right-10 w-12 h-12 bg-teal-400 rounded-full"></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-purple-400 rounded-full"></div>
        
        {/* Molecular bond lines */}
        <div className="absolute top-1/4 left-1/3 w-20 h-0.5 bg-teal-300 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-0.5 bg-blue-300 -rotate-45"></div>
        <div className="absolute top-2/3 left-1/2 w-12 h-0.5 bg-purple-300 rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <FlaskConical className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Courses Offered
            </h2>
            <Atom className="w-8 h-8 text-blue-600 ml-3" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive Science education tailored for different boards and grade levels
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
              <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-teal-600 font-semibold mb-2">{course.subjects}</p>
              <p className="text-gray-600 mb-4">{course.boards}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-teal-600">₹1200</span>
                <span className="text-sm text-gray-500">/month</span>
              </div>
              
              {/* Decorative chemistry elements */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-teal-300 to-blue-300 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6 text-teal-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Class Timings</h3>
              <Atom className="w-6 h-6 text-blue-600 ml-2" />
            </div>
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
