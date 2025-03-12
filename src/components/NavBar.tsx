
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Specs', href: '#specs' },
    { name: 'Research', href: '/research' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-3 glass" : "py-6 bg-transparent"
      )}
    >
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img 
              src="/lovable-uploads/f4ced00e-e94b-4461-8c57-dc92e37b4a70.png" 
              alt="MiraiTech Logo" 
              className="h-12 w-auto"
            />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
            <Button>Pre-order Now</Button>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          "absolute top-full left-0 right-0 glass md:hidden transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container px-4 py-4 mx-auto space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="block py-2 text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full mt-4">Pre-order Now</Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
