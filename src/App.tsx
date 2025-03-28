
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import Research from "./pages/Research";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";

const queryClient = new QueryClient();

// Custom cursor component to be used across all pages
const CursorManager = () => {
  const location = useLocation();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Initialize custom cursor
    let cursor = document.querySelector('.custom-cursor');
    
    // If cursor doesn't exist, create it
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);
    }
    
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      if (cursor instanceof HTMLElement) {
        // Use direct position instead of transform with negative offsets
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    
    const handleMouseLeave = () => {
      if (cursor instanceof HTMLElement) {
        cursor.style.opacity = '0';
      }
    };
    
    const handleMouseEnter = () => {
      if (cursor instanceof HTMLElement) {
        cursor.style.opacity = '1';
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);
    document.documentElement.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [location.pathname]); // Re-initialize when path changes
  
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CursorManager />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/research" element={<Research />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ScrollToTopButton />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
