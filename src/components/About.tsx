
import React from 'react';
import { FlaskConical, Atom } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white relative overflow-hidden">
      {/* Subtle chemistry background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-16 h-16 border border-teal-300 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-blue-300 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-teal-200 rounded-full"></div>
        <div className="absolute top-1/3 right-10 w-6 h-6 bg-blue-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Atom className="w-8 h-8 text-teal-600 mr-3" />
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
              Meet Your Trusted Chemistry Teacher in Jugsalai
            </h2>
            <FlaskConical className="w-8 h-8 text-blue-600 ml-3" />
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-white/50 relative overflow-hidden">
            {/* Decorative chemistry elements */}
            <div className="absolute top-4 right-4 opacity-20">
              <FlaskConical className="w-12 h-12 text-teal-500" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-20">
              <Atom className="w-10 h-10 text-blue-500" />
            </div>
            
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <FlaskConical className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">
                Surendra Yadav – Experienced Chemistry Teacher in Jamshedpur
              </h3>
            </div>
            
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Surendra Yadav is widely recognized as the <strong>best chemistry teacher in jamshedpur</strong> and the most <strong>reliable chemistry coaching in jamshedpur</strong>. As a <strong>trusted chemistry teacher in jamshedpur</strong>, he has helped hundreds of students excel in their board exams. His classes are the <strong>best chemistry tuition for students in jamshedpur</strong>, known for transforming complex concepts into easy-to-understand lessons.
              </p>
              
              <p>
                If you're searching for a <strong>chemistry teacher near me jamshedpur</strong> or <strong>chemistry coaching near me jamshedpur</strong>, look no further. Our <strong>chemistry learning center in jamshedpur</strong> offers <strong>chemistry tuition for school students in jamshedpur</strong> with a focus on <strong>chemistry subject tuition in jamshedpur</strong> for all major boards. As the leading <strong>chemistry teacher for boards in jamshedpur</strong>, Surendra Sir provides <strong>chemistry coaching with personal attention in jamshedpur</strong> and <strong>chemistry tuition with small batches in jamshedpur</strong>.
              </p>
              
              <p>
                Located in the heart of Jugsalai, Surendra Sir is the <strong>best chemistry teacher in jugsalai</strong> and runs the most reputed <strong>chemistry coaching center in jugsalai</strong>. Students from all over seek <strong>chemistry tuition near jugsalai</strong> at our center. Whether you need a <strong>chemistry teacher near jugsalai station</strong> or <strong>chemistry coaching near jugsalai</strong>, our convenient location serves students from Sakchi, Bistupur, Mango, Golmuri, and the entire Tata Nagar area.
              </p>
              
              <p>
                As the most <strong>experienced chemistry teacher in jamshedpur</strong>, Surendra Sir offers <strong>chemistry coaching for students in jamshedpur</strong> with proven methodologies. He is a <strong>chemistry teacher recommended by students in jamshedpur</strong> for his engaging teaching style. Our <strong>local chemistry teacher in jugsalai</strong> provides <strong>chemistry tuition classes in jugsalai</strong> with flexible timings for working students.
              </p>
              
              <p>
                Looking for a <strong>chemistry tutor in jamshedpur</strong> or <strong>chemistry tutor in jugsalai</strong>? Surendra Sir is the <strong>chemistry tutor near jugsalai</strong> you need. He specializes in <strong>chemistry coaching for students in jugsalai</strong> and is known as the <strong>chemistry teacher for class 11 in jugsalai</strong> and <strong>chemistry teacher for class 12 in jugsalai</strong>. Our <strong>chemistry tuition for boards in jugsalai</strong> prepares students thoroughly for their examinations.
              </p>
              
              <p>
                Our center offers <strong>chemistry coaching near station road jugsalai</strong> and serves students looking for <strong>chemistry classes near jugsalai market</strong>. We are the premier <strong>chemistry tuition center in jugsalai</strong> providing quality education at affordable rates. Students can find <strong>chemistry coaching for school exams in jamshedpur</strong> right here, taught by a <strong>chemistry teacher for class 11 and 12 in jamshedpur</strong>.
              </p>
              
              <p>
                <strong>Surendra Sir provides flexible learning options, including both offline classroom sessions and interactive online classes.</strong> Whether you need <strong>chemistry tuition for science stream in jamshedpur</strong> or <strong>chemistry coaching near me jugsalai</strong>, we have you covered. Find the <strong>chemistry teacher near me jugsalai</strong> at our <strong>chemistry tuition center near me jugsalai</strong> for excellent board preparation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
