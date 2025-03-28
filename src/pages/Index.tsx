
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Specs from '@/components/Specs';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <Specs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
