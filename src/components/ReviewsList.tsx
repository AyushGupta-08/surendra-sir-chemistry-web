
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { Star } from "lucide-react";
import { Tables } from "@/integrations/supabase/types";

type Review = Tables<'reviews'>;

interface StaticReview {
  id: string;
  name: string;
  class: string;
  feedback: string;
  rating: number;
  created_at: string;
}

const staticReviews: StaticReview[] = [
  {
    id: "static-1",
    name: "Rahul Verma",
    class: "12 (Student)",
    feedback: "Surendra Sir's organic chemistry classes are excellent. He explains reaction mechanisms step by step which made it very easy for me to understand. I used to struggle with conversions but now I can solve them confidently. His notes are very helpful for revision.",
    rating: 5,
    created_at: "2025-01-08T10:30:00Z"
  },
  {
    id: "static-2",
    name: "Sunita Devi",
    class: "Parent",
    feedback: "My daughter was very weak in chemistry before joining Sir's class. Now she has improved so much and even topped in her school chemistry exam. Sir gives personal attention to each student and regularly updates us about progress. Very satisfied with the coaching.",
    rating: 5,
    created_at: "2025-01-06T14:20:00Z"
  },
  {
    id: "static-3",
    name: "Vikram Kumar",
    class: "11 (Student)",
    feedback: "Best chemistry teacher in Jugsalai. Sir makes physical chemistry numericals very easy to solve. He taught us shortcuts for solving mole concept problems which saved lot of time in exam. The doubt clearing sessions before tests are really useful.",
    rating: 5,
    created_at: "2025-01-04T09:15:00Z"
  },
  {
    id: "static-4",
    name: "Anjali Singh",
    class: "12 (Student)",
    feedback: "Joined for board exam preparation. Sir covers entire NCERT thoroughly and also gives important questions from previous year papers. His teaching method is simple and clear. Sometimes batch timing could be more flexible but overall very good experience.",
    rating: 4,
    created_at: "2025-01-02T16:45:00Z"
  },
  {
    id: "static-5",
    name: "Manoj Prasad",
    class: "Parent",
    feedback: "Surendra Sir is dedicated teacher who genuinely cares about students. My son went from 55% to 88% in chemistry within 8 months. Sir motivates students to study regularly and conducts weekly tests. Fees are also reasonable compared to other coaching.",
    rating: 5,
    created_at: "2024-12-28T11:00:00Z"
  },
  {
    id: "static-6",
    name: "Pooja Kumari",
    class: "10 (Student)",
    feedback: "I was scared of chemistry equations and periodic table. Sir taught us easy tricks to remember everything. Now I actually enjoy studying chemistry. His handwritten notes are very clear and organized. Thank you Sir for making chemistry interesting!",
    rating: 5,
    created_at: "2024-12-25T13:30:00Z"
  },
  {
    id: "static-7",
    name: "Deepak Mahato",
    class: "11 (Student)",
    feedback: "Good coaching for chemistry. Sir explains inorganic chemistry concepts very well with examples. The regular tests help us stay prepared. Would be better if more practice worksheets were given but overall teaching quality is very good.",
    rating: 4,
    created_at: "2024-12-20T15:00:00Z"
  },
  {
    id: "static-8",
    name: "Rekha Sharma",
    class: "Parent",
    feedback: "Both my children studied chemistry under Surendra Sir. He is patient and explains until students understand completely. My elder son scored 94 in boards and younger daughter is also doing well. Highly recommend for serious students in Jamshedpur area.",
    rating: 5,
    created_at: "2024-12-15T10:20:00Z"
  },
  {
    id: "static-9",
    name: "Arjun Das",
    class: "12 (Student)",
    feedback: "Sir's way of teaching thermodynamics and electrochemistry is amazing. I used to get confused with formulas but Sir taught us how to derive and remember them properly. His practical exam tips were also very helpful. Got 28/30 in practical!",
    rating: 5,
    created_at: "2024-12-10T17:45:00Z"
  },
  {
    id: "static-10",
    name: "Neha Gupta",
    class: "11 (Student)",
    feedback: "Joined recently but already feeling confident in chemistry. Sir clears all doubts patiently no matter how many times we ask. The class environment is friendly and Sir treats everyone equally. Looking forward to continuing in class 12 also.",
    rating: 5,
    created_at: "2024-12-05T12:10:00Z"
  }
];

const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setReviews(data || []);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-400'
            }`}
          />
        ))}
      </div>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 animate-pulse">
            <CardContent className="p-4 md:p-6">
              <div className="h-4 bg-slate-700 rounded mb-2"></div>
              <div className="h-3 bg-slate-700 rounded mb-4 w-3/4"></div>
              <div className="h-16 bg-slate-700 rounded mb-4"></div>
              <div className="h-4 bg-slate-700 rounded w-1/2"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Combine database reviews with static reviews (database reviews appear first)
  const allReviews = [
    ...reviews.map(r => ({
      id: r.id,
      name: r.name,
      class: r.class,
      feedback: r.feedback,
      rating: r.rating || 5,
      created_at: r.created_at
    })),
    ...staticReviews
  ];

  return (
    <div className="grid grid-cols-1 gap-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
      {allReviews.map((review) => (
        <Card key={review.id} className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-teal-400/50 transition-colors duration-200">
          <CardContent className="p-4 md:p-5">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs md:text-sm flex-shrink-0">
                  {review.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-white text-sm md:text-base truncate">{review.name}</h4>
                  <p className="text-teal-400 text-xs md:text-sm">Class {review.class}</p>
                </div>
              </div>
              {renderStars(review.rating)}
            </div>
            
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-3">"{review.feedback}"</p>
            
            <div className="text-xs text-gray-500">
              {formatDate(review.created_at)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ReviewsList;
