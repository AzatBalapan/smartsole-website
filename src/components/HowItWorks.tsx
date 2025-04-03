
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedImage from './AnimatedImage';
import { Youtube } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps = [
    {
      number: '01',
      title: 'Insert in Your Shoes',
      description: 'Simply place the SmartSole inserts into any pair of shoes. The ultra-thin design ensures comfort without sacrificing function.',
      delay: 100,
      image: '/placeholder.svg'
    },
    {
      number: '02',
      title: 'Connect to Your Device',
      description: 'Pair with the SmartSole app via Bluetooth. The seamless connection process takes less than 30 seconds.',
      delay: 300,
      image: '/placeholder.svg'
    },
    {
      number: '03',
      title: 'Calibrate Your Profile',
      description: 'Take a few steps to calibrate the sensors to your unique walking pattern for personalized analysis and save your data for future analysis.',
      delay: 500,
      image: '/placeholder.svg'
    },
    {
      number: '04',
      title: 'Start Moving',
      description: 'Live your life while SmartSole silently collects data, providing insights and feedback as you move.',
      delay: 700,
      image: '/placeholder.svg'
    }
  ];
  
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
            How It Works
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Effortless Integration into Your Life
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8 relative">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "flex gap-6 opacity-0 animate-fade-in relative",
                  {[`animation-delay-${step.delay}`]: true}
                )}
                onMouseEnter={() => setActiveStep(index)}
                onMouseLeave={() => setActiveStep(null)}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center">
                    <span className="text-primary font-display font-bold">{step.number}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  
                  {activeStep === index && (
                    <div className="absolute -right-40 top-0 w-36 h-36 pointer-events-none animate-fade-in z-50">
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl animate-pulse-slow" />
            <div className="relative z-10 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/VWmFyXq70i8"
                  title="MiraiTech Smart Insole Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5" />
          <div className="relative z-10 py-12 px-6 md:p-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
                  The Technology Behind SmartSole
                </h3>
                <p className="text-lg">
                  Our proprietary sensor array uses micro-pressure detection technology originally developed for medical applications, now miniaturized for everyday use.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl font-display font-bold text-primary mb-1">64</div>
                    <div className="text-sm">Pressure points</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl font-display font-bold text-primary mb-1">0.8mm</div>
                    <div className="text-sm">Ultra-thin design</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl font-display font-bold text-primary mb-1">99%</div>
                    <div className="text-sm">Accuracy rating</div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg">
                    <div className="text-3xl font-display font-bold text-primary mb-1">50g</div>
                    <div className="text-sm">Lightweight</div>
                  </div>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <AnimatedImage 
                  src="/placeholder.svg" 
                  alt="SmartSole Technology Visualization" 
                  className="w-full h-full object-cover"
                  revealAnimation="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
