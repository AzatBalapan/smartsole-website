
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Youtube size={18} />, href: "#", label: "YouTube" }
  ];
  
  const footerLinks = [
    {
      title: "Product",
      links: [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Features", href: "#features" },
        { name: "Specifications", href: "#specs" },
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
            
            <p className="text-muted-foreground">
              Revolutionizing how you understand and improve your movement through intelligent tactile feedback in smart insoles.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">hello@miraitech.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0 mt-1" />
                <span className="text-sm">123 Innovation Way, Tech Hub, CA 94103</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
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
          
          <div className="space-y-4 md:col-span-2">
            <h4 className="font-bold text-base">Stay Updated</h4>
            <p className="text-sm text-muted-foreground">
              Subscribe to receive the latest news and early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-l-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="sm:rounded-l-none">Subscribe</Button>
            </div>
          </div>
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
