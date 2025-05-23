
import React from 'react';
import { cn } from '@/lib/utils';
import { Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const partners = [
    { name: "Partner 1", logo: "/placeholder.svg" },
    { name: "Partner 2", logo: "/placeholder.svg" },
    { name: "Partner 3", logo: "/placeholder.svg" },
    { name: "Partner 4", logo: "/placeholder.svg" }
  ];
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#" },
        { name: "FAQ", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Research", href: "/research" },
        { name: "Team", href: "/team" },
        { name: "Blog", href: "#" },
        { name: "Partners", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "/contact" },
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Shipping Policy", href: "#" }
      ]
    }
  ];
  
  return (
    <footer id="contact" className="relative bg-secondary pt-16 pb-8 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 pb-16">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/f4ced00e-e94b-4461-8c57-dc92e37b4a70.png" 
                alt="MiraiTech Logo" 
                className="h-10 w-auto"
              />
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="text-sm block">gkalimuldina@nu.edu.kz</span>
                  <span className="text-sm block">azamat.yeshmukhametov@nu.edu.kz</span>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">+7 (775) 144-5841</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">53 Kabanbay Batyr Avenue, Nazarbayev University<br/>Astana, 010000<br/>Kazakhstan</span>
              </div>
            </div>
          </div>
          
          {footerLinks.map((group, index) => (
            <div key={index} className="space-y-4">
              <h4 className="font-bold text-base">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} MiraiTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
