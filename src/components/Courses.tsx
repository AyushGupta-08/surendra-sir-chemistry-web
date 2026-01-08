
import React from 'react';
import { FlaskConical, Atom, BookOpen, Calculator, Beaker } from 'lucide-react';

const Courses = () => {
  const courses = [
    { 
      title: "Class 9 PCM", 
      subjects: "Physics, Chemistry & Mathematics",
      boards: "ICSE & CBSE", 
      color: "from-teal-400 to-teal-600",
      icon: <Calculator className="w-8 h-8 text-white" />,
      description: "Complete class 9 science and maths tuition in jamshedpur covering all fundamentals."
    },
    { 
      title: "Class 10 PCM", 
      subjects: "Physics, Chemistry & Mathematics",
      boards: "ICSE & CBSE", 
      color: "from-blue-400 to-blue-600",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      description: "Expert class 10 science and maths coaching in jamshedpur for board success."
    },
    { 
      title: "Class 11 Chemistry", 
      subjects: "Organic, Inorganic & Physical Chemistry",
      boards: "ISC & CBSE", 
      color: "from-teal-500 to-blue-500",
      icon: <Beaker className="w-8 h-8 text-white" />,
      description: "Comprehensive class 11 chemistry coaching in jamshedpur with concept clarity."
    },
    { 
      title: "Class 12 Chemistry", 
      subjects: "Advanced Chemistry for Boards",
      boards: "ISC & CBSE", 
      color: "from-blue-500 to-purple-500",
      icon: <FlaskConical className="w-8 h-8 text-white" />,
      description: "Result-oriented class 12 chemistry coaching in jamshedpur for top scores."
    },
    { 
      title: "Crash Courses", 
      subjects: "Quick Board Revision",
      boards: "All Boards", 
      color: "from-purple-400 to-pink-500",
      icon: <Atom className="w-8 h-8 text-white" />,
      description: "Intensive chemistry crash course in jamshedpur and chemistry revision classes in jamshedpur."
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
              Chemistry Coaching & PCM Tuition Programs
            </h2>
            <Atom className="w-8 h-8 text-blue-600 ml-3" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Comprehensive <strong>school chemistry tuition in jamshedpur</strong> and <strong>chemistry foundation classes in jamshedpur</strong>. We offer <strong>chemistry exam preparation in jamshedpur</strong> with expert guidance for all boards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {courses.map((course, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20 relative">
              <div className={`w-16 h-16 bg-gradient-to-br ${course.color} rounded-full flex items-center justify-center mb-4 shadow-lg`}>
                {course.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
              <p className="text-teal-600 font-semibold mb-2">{course.subjects}</p>
              <p className="text-gray-600 mb-3">{course.boards}</p>
              <p className="text-gray-500 text-sm mb-3">{course.description}</p>
              
              {/* Online/Offline availability */}
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-3 mb-3 border border-teal-100">
                <p className="text-sm text-gray-700 font-medium text-center">
                  📖 Available in both <span className="text-teal-600">online</span> and <span className="text-blue-600">offline</span> modes
                </p>
              </div>
              
              <p className="text-teal-600 font-medium text-sm">
                Contact us for more details and fee information.
              </p>
            </div>
          ))}
        </div>

        {/* Class 11 & 12 Chemistry Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Chemistry Coaching for Class 11 & 12 – CBSE, ISC & ICSE Boards
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-teal-600">Class 11 Chemistry Programs:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ <strong>Class 11 chemistry teacher in jamshedpur</strong> with expert guidance</li>
                  <li>✓ <strong>Chemistry coaching for class 11 in jamshedpur</strong> – complete syllabus</li>
                  <li>✓ <strong>Chemistry tuition for class 11 students in jugsalai</strong></li>
                  <li>✓ <strong>Organic chemistry coaching for class 11 jamshedpur</strong></li>
                  <li>✓ <strong>Physical chemistry coaching for class 11 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for isc class 11 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for cbse chemistry class 11</strong></li>
                  <li>✓ <strong>Chemistry coaching for chemistry numericals class 11</strong></li>
                  <li>✓ <strong>Chemistry classes for chemistry concepts class 11</strong></li>
                  <li>✓ <strong>Chemistry tuition for weak students class 11 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for chemistry revision class 11</strong></li>
                  <li>✓ <strong>Chemistry classes for chemistry fundamentals class 11</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry theory class 11</strong></li>
                  <li>✓ <strong>Chemistry coaching for school chemistry syllabus class 11</strong></li>
                  <li>✓ <strong>Chemistry tuition for science students class 11</strong></li>
                  <li>✓ <strong>Chemistry coaching for chemistry clarity class 11</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry improvement class 11</strong></li>
                  <li>✓ <strong>Chemistry tuition for exam oriented class 11 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for science stream class 11 jugsalai</strong></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600">Class 12 Chemistry Programs:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ <strong>Class 12 chemistry teacher in jamshedpur</strong> for board prep</li>
                  <li>✓ <strong>Chemistry coaching for class 12 in jamshedpur</strong> – advanced topics</li>
                  <li>✓ <strong>Chemistry tuition for class 12 boards in jugsalai</strong></li>
                  <li>✓ <strong>Inorganic chemistry coaching for class 12 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for board exams class 12 jugsalai</strong></li>
                  <li>✓ <strong>Chemistry tuition for reactions and mechanisms class 12</strong></li>
                  <li>✓ <strong>Chemistry coaching for scoring high in class 12 chemistry</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry doubts class 12</strong></li>
                  <li>✓ <strong>Chemistry tuition for chemistry mock tests class 12</strong></li>
                  <li>✓ <strong>Chemistry coaching for chemistry problem solving class 12</strong></li>
                  <li>✓ <strong>Chemistry tuition for chemistry numericals class 12</strong></li>
                  <li>✓ <strong>Chemistry coaching for board chemistry preparation</strong></li>
                  <li>✓ <strong>Chemistry classes for isc chemistry class 12</strong></li>
                  <li>✓ <strong>Chemistry coaching for chemistry confidence class 12</strong></li>
                  <li>✓ <strong>Chemistry tuition for chemistry exam readiness class 12</strong></li>
                  <li>✓ <strong>Chemistry classes for class 12 board chemistry</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry practice class 12</strong></li>
                  <li>✓ <strong>Chemistry tuition for chemistry success class 12</strong></li>
                  <li>✓ <strong>Chemistry tuition for science stream class 12 jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for board preparation class 12 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for exam oriented preparation class 12</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Class 9 & 10 PCM Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              PCM Coaching for Class 9 & 10 – Physics, Chemistry & Mathematics
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-teal-600">Class 9 Programs:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ <strong>Class 9 chemistry tuition in jamshedpur</strong></li>
                  <li>✓ <strong>Class 9 chemistry tuition in jugsalai</strong></li>
                  <li>✓ <strong>Class 9 physics chemistry maths tuition jugsalai</strong></li>
                  <li>✓ <strong>Pcm coaching for class 9 in jamshedpur</strong></li>
                  <li>✓ <strong>Science maths tuition for class 9 jugsalai</strong></li>
                  <li>✓ <strong>Physics chemistry maths teacher for class 9 jamshedpur</strong></li>
                  <li>✓ <strong>Class 9 cbse science maths coaching jamshedpur</strong></li>
                  <li>✓ <strong>Class 9 icse science maths tuition jugsalai</strong></li>
                  <li>✓ <strong>Class 9 board exam science maths coaching</strong></li>
                  <li>✓ <strong>Science and maths tuition for weak students class 9</strong></li>
                  <li>✓ <strong>Physics chemistry maths foundation class 9</strong></li>
                  <li>✓ <strong>Science maths coaching for concept clarity class 9</strong></li>
                  <li>✓ <strong>Class 9 science maths doubt clearing classes</strong></li>
                  <li>✓ <strong>Science maths coaching for exam preparation class 9</strong></li>
                  <li>✓ <strong>Class 9 physics chemistry maths revision classes</strong></li>
                  <li>✓ <strong>Science maths tuition for school exams class 9</strong></li>
                  <li>✓ <strong>Class 9 science maths teacher in jamshedpur</strong></li>
                  <li>✓ <strong>Science maths coaching for academic improvement class 9</strong></li>
                  <li>✓ <strong>Class 9 pcm tuition for strong foundation</strong></li>
                  <li>✓ <strong>Science maths tuition for exam confidence class 9</strong></li>
                  <li>✓ <strong>Chemistry tuition for class 9 beginners in jamshedpur</strong></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600">Class 10 Programs:</h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>✓ <strong>Class 10 chemistry tuition in jamshedpur</strong></li>
                  <li>✓ <strong>Class 10 chemistry tuition in jugsalai</strong></li>
                  <li>✓ <strong>Class 10 physics chemistry maths coaching jugsalai</strong></li>
                  <li>✓ <strong>Pcm coaching for class 10 in jamshedpur</strong></li>
                  <li>✓ <strong>Science maths tuition for class 10 jugsalai</strong></li>
                  <li>✓ <strong>Physics chemistry maths teacher for class 10 jamshedpur</strong></li>
                  <li>✓ <strong>Class 10 cbse science maths coaching jamshedpur</strong></li>
                  <li>✓ <strong>Class 10 icse science maths tuition jugsalai</strong></li>
                  <li>✓ <strong>Class 10 board exam science maths coaching</strong></li>
                  <li>✓ <strong>Science and maths tuition for weak students class 10</strong></li>
                  <li>✓ <strong>Physics chemistry maths foundation class 10</strong></li>
                  <li>✓ <strong>Science maths coaching for concept clarity class 10</strong></li>
                  <li>✓ <strong>Class 10 science maths doubt clearing classes</strong></li>
                  <li>✓ <strong>Science maths coaching for exam preparation class 10</strong></li>
                  <li>✓ <strong>Class 10 physics chemistry maths revision classes</strong></li>
                  <li>✓ <strong>Science maths tuition for school exams class 10</strong></li>
                  <li>✓ <strong>Class 10 science maths teacher in jamshedpur</strong></li>
                  <li>✓ <strong>Science maths coaching for academic improvement class 10</strong></li>
                  <li>✓ <strong>Class 10 pcm tuition for strong foundation</strong></li>
                  <li>✓ <strong>Science maths coaching for board success class 10</strong></li>
                  <li>✓ <strong>Chemistry coaching for class 10 boards in jugsalai</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                <strong>Best teacher for class 9 and 10 science maths jamshedpur</strong> | <strong>Pcm coaching for class 9 and 10 in jugsalai</strong> | <strong>Class 9 and 10 science maths coaching near me</strong> | <strong>Pcm tuition for class 9 and 10 boards</strong> | <strong>Science maths coaching for cbse students class 9 10</strong> | <strong>Class 9 10 science maths coaching with personal attention</strong> | <strong>Pcm coaching for foundation building class 9 10</strong> | <strong>Science maths tuition for disciplined study class 9 10</strong> | <strong>Class 9 to 12 science coaching in jamshedpur</strong> | <strong>Science maths and chemistry tuition in jugsalai jamshedpur</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Chemistry Topics Covered */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Specialized Chemistry Topics & Coaching Areas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-teal-600">Organic Chemistry:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Organic chemistry coaching in jamshedpur</strong></li>
                  <li>✓ <strong>Organic chemistry tuition in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for organic basics in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry classes for organic reactions jugsalai</strong></li>
                  <li>✓ <strong>Chemistry classes for hydrocarbons jugsalai</strong></li>
                  <li>✓ <strong>Chemistry classes for revision of organic chemistry jugsalai</strong></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600">Physical Chemistry:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Physical chemistry coaching in jamshedpur</strong></li>
                  <li>✓ <strong>Physical chemistry classes in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for physical chemistry numericals jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for physical chemistry theory jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry teacher for thermodynamics chemistry jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for electrochemistry jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for chemical equilibrium jugsalai</strong></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-purple-600">Inorganic Chemistry:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Inorganic chemistry coaching in jamshedpur</strong></li>
                  <li>✓ <strong>Inorganic chemistry coaching in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for inorganic concepts jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for periodic table concepts jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for redox reactions jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for acids salts bases jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for acids and bases jamshedpur</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-gray-800">Core Concepts:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Chemistry classes for chemical bonding jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for mole concept jugsalai</strong></li>
                  <li>✓ <strong>Chemistry tuition for structure and bonding jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for stoichiometry jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry classes for atomic structure jugsalai</strong></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-gray-800">Practice & Practicals:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Chemistry tuition for reactions practice jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry classes for equations balancing jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for numerical solving jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for practical chemistry jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry lab concepts jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry classes for school chemistry practicals jugsalai</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Exam Preparation Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Board Exam Preparation & Revision Programs
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-teal-600">CBSE Board Preparation:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Cbse chemistry coaching in jamshedpur</strong></li>
                  <li>✓ <strong>Board exam chemistry coaching in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for board exams in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry teacher for cbse boards in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for cbse students in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for cbse class 12 jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry classes for cbse students near jugsalai</strong></li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-bold text-blue-600">ISC/ICSE Board Preparation:</h4>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>✓ <strong>Isc chemistry coaching in jamshedpur</strong></li>
                  <li>✓ <strong>Icse chemistry tuition in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry teacher for isc boards in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for isc students in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for boards in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry tuition for icse students in jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for isc students class 11 12</strong></li>
                  <li>✓ <strong>Chemistry tuition for isc syllabus in jamshedpur</strong></li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 space-y-3">
              <h4 className="font-bold text-gray-800">Exam-Focused Training:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                <ul className="space-y-1">
                  <li>✓ <strong>Chemistry coaching for numerical accuracy jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for exam pattern chemistry jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for chapter wise preparation jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for quick revision jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for concept revision jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry mock tests jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry mock tests in jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry revision coaching in jamshedpur</strong></li>
                </ul>
                <ul className="space-y-1">
                  <li>✓ <strong>Chemistry classes for problem based learning jugsalai</strong></li>
                  <li>✓ <strong>Chemistry coaching for practice based study jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for theory clarity jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for exam confidence jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for chemistry fundamentals jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry tuition for regular assessment jugsalai</strong></li>
                  <li>✓ <strong>Chemistry teacher for chemistry worksheets jamshedpur</strong></li>
                  <li>✓ <strong>Chemistry coaching for step by step learning jamshedpur</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Class Timings */}
        <div className="mt-12 text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg max-w-2xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <FlaskConical className="w-6 h-6 text-teal-600 mr-2" />
              <h3 className="text-xl font-bold text-gray-800">Class Timings & Availability</h3>
              <Atom className="w-6 h-6 text-blue-600 ml-2" />
            </div>
            <div className="space-y-2 text-gray-600">
              <p>✓ Flexible class hours to accommodate student schedules</p>
              <p>✓ Weekday & weekend batches available</p>
              <p>✓ Online and offline sessions with interactive learning</p>
              <p>✓ <strong>Chemistry tuition with regular testing class 11 12</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
