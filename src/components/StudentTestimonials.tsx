
import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  role: 'Student' | 'Parent';
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Sharma",
    role: "Student",
    rating: 5,
    review: "Surendra Sir explains even the toughest organic chemistry concepts in such a simple way. Before joining his class, I used to struggle with reactions and mechanisms. Now I can solve them confidently. His notes are very helpful during exams."
  },
  {
    name: "Priya Kumari",
    role: "Student",
    rating: 5,
    review: "I was very weak in physical chemistry numericals. Sir took extra time to clear my doubts after class. His step-by-step approach helped me understand mole concept and stoichiometry properly. Scored 89 in boards!"
  },
  {
    name: "Rajesh Gupta",
    role: "Parent",
    rating: 5,
    review: "My son was struggling in chemistry since class 9. After joining Surendra Sir's coaching, his confidence improved a lot. He now enjoys studying chemistry. Sir is very patient and genuinely cares about each student's progress."
  },
  {
    name: "Sneha Das",
    role: "Student",
    rating: 4,
    review: "Good teaching style and regular tests keep us prepared. Sometimes the batch gets a bit crowded, but Sir still manages to give individual attention. The doubt clearing sessions before exams are really useful."
  },
  {
    name: "Amit Kumar",
    role: "Student",
    rating: 5,
    review: "Sir's way of teaching inorganic chemistry is amazing. I used to hate memorizing periodic table trends but his tricks and mnemonics made it so easy. He also focuses on NCERT thoroughly which helped in my board exams."
  },
  {
    name: "Meena Devi",
    role: "Parent",
    rating: 5,
    review: "Very satisfied with my daughter's improvement. She went from 65% to 91% in chemistry within one year. Surendra Sir is dedicated and keeps parents informed about the child's progress. Fees are also reasonable."
  },
  {
    name: "Rohit Singh",
    role: "Student",
    rating: 4,
    review: "Joined for class 12 board preparation. Sir covers the entire syllabus systematically and gives important questions chapter-wise. The revision sessions helped me a lot. Would have been better with more practice worksheets."
  },
  {
    name: "Ananya Patel",
    role: "Student",
    rating: 5,
    review: "I was scared of chemistry lab practicals and viva. Sir explained all the experiments practically and gave us tips for viva questions. I got full marks in practical exam. His teaching is very student-friendly."
  },
  {
    name: "Suresh Mahato",
    role: "Parent",
    rating: 5,
    review: "Surendra Sir is one of the best chemistry teachers in Jugsalai area. My both children studied under him. He treats students like his own children and motivates them to study regularly. Highly recommended for serious students."
  },
  {
    name: "Kavita Sinha",
    role: "Student",
    rating: 5,
    review: "The best thing about Sir's classes is that he never makes you feel bad for asking silly doubts. He explains until we understand completely. His handwritten notes are gold for last-minute revision. Thank you Sir!"
  }
];

const StudentTestimonials = () => {
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : star <= Math.ceil(rating) && rating % 1 !== 0
                ? 'fill-yellow-400/50 text-yellow-400'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-50 via-white to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
            What Our Students & Parents Say
          </h2>
          <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-teal-500 to-blue-600 mx-auto mb-3"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base px-4">
            Real experiences from students and parents who have been part of our chemistry coaching journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 will-change-auto"
            >
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        testimonial.role === 'Student' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-teal-100 text-teal-700'
                      }`}>
                        {testimonial.role}
                      </span>
                    </div>
                  </div>
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  "{testimonial.review}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
