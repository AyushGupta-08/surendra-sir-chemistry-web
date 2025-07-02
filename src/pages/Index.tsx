
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import FloatingButtons from '../components/FloatingButtons';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <About />
      <Courses />
      <Testimonials />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
