
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Specs from '@/components/Specs';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Preload team images in the background after the homepage is loaded
    const preloadTeamImages = () => {
      const teamImages = [
        '/lovable-uploads/Gulnur-min.jpg',
        '/lovable-uploads/Azamat-min.jpg',
        '/lovable-uploads/Adeliya-min.jpg',
        '/lovable-uploads/Anton-min.jpg',
        '/lovable-uploads/Moldir-min.jpg',
        '/lovable-uploads/Azat-min.jpg',
        '/lovable-uploads/Sultandiyar-min.jpg',
        '/lovable-uploads/Manat-min.jpg',
        '/lovable-uploads/Nurasil-min.jpg'
      ];
      
      // Use requestIdleCallback or setTimeout to defer loading until after critical content
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          teamImages.forEach(src => {
            const img = new Image();
            img.src = src;
          });
        });
      } else {
        // Fallback for browsers that don't support requestIdleCallback
        setTimeout(() => {
          teamImages.forEach(src => {
            const img = new Image();
            img.src = src;
          });
        }, 1000); // Wait for 1 second after page load
      }
    };
    
    // Start preloading after the main content is loaded
    if (document.readyState === 'complete') {
      preloadTeamImages();
    } else {
      window.addEventListener('load', preloadTeamImages);
      return () => window.removeEventListener('load', preloadTeamImages);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
