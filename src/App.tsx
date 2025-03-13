import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { useEffect } from "react";
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
      if (cursor instanceof HTMLElement) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    
    document.addEventListener('mousemove', moveCursor);
    
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      // Don't remove the cursor element on unmount to keep it across page changes
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
