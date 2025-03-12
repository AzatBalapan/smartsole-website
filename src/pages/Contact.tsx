
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Mail, MapPin, Phone, MessageSquare, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-32">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                Get In Touch
              </h1>
              <p className="text-xl text-muted-foreground">
                We'd love to hear from you. Our team is ready to answer your questions and help you discover how MiraiTech can transform your movement analysis.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="p-8 glass rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <a href="mailto:info@miraitech.com" className="text-muted-foreground hover:text-primary transition-colors">
                          info@miraitech.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <a href="tel:+1-555-123-4567" className="text-muted-foreground hover:text-primary transition-colors">
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Office</h3>
                        <address className="text-muted-foreground not-italic">
                          123 Innovation Way<br />
                          Tech Hub, CA 94103<br />
                          United States
                        </address>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Hours</h3>
                        <p className="text-muted-foreground">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 glass rounded-xl">
                  <h2 className="text-2xl font-bold mb-6">Department Contacts</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <MessageSquare className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-medium">Customer Support</h3>
                      </div>
                      <a href="mailto:support@miraitech.com" className="block text-muted-foreground hover:text-primary transition-colors">
                        support@miraitech.com
                      </a>
                      <p className="text-sm text-muted-foreground">For existing customers</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Building className="h-5 w-5 text-primary mr-2" />
                        <h3 className="font-medium">Business Development</h3>
                      </div>
                      <a href="mailto:partnerships@miraitech.com" className="block text-muted-foreground hover:text-primary transition-colors">
                        partnerships@miraitech.com
                      </a>
                      <p className="text-sm text-muted-foreground">For partnership inquiries</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 glass rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Your name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Your email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help you?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0673431906104!2d-122.41941548534444!3d37.77639637975903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1625612054527!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MiraiTech Office Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
