import React from 'react';
import { Button } from '@/components/ui/button';
import AnimatedImage from './AnimatedImage';
import { ArrowRight, Activity, Bluetooth, Zap, Footprints, HeartPulse, Ruler } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pb-32 md:pt-40">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse-slow" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/10 rounded-full filter blur-2xl opacity-30 animate-float" />
      
      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium animate-fade-in">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Introducing a new era of smart insoles
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight tracking-tight animate-fade-in animation-delay-100">
              Feel Every <span className="text-gradient">Step</span> with MiraiTech
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
              <Button size="lg" className="group">
                Pre-order Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-4 pt-6 animate-fade-in animation-delay-500">
              <div className="flex flex-col items-center text-center p-2 rounded-lg glass">
                <Footprints className="h-6 w-6 text-primary mb-1" />
                <span className="text-xs font-medium">Precision Sensing</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg glass">
                <Activity className="h-6 w-6 text-primary mb-1" />
                <span className="text-xs font-medium">Activity Monitoring</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg glass">
                <HeartPulse className="h-6 w-6 text-primary mb-1" />
                <span className="text-xs font-medium">Health Insights</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg glass">
                <Bluetooth className="h-6 w-6 text-primary mb-1" />
                <span className="text-xs font-medium">Wireless Sync</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg glass">
                <Zap className="h-6 w-6 text-primary mb-1" />
                <span className="text-xs font-medium">10+ Hour Battery</span>
              </div>
              <div className="flex flex-col items-center text-center p-2 rounded-lg glass">
                <Ruler className="h-6 w-6 text-primary mb-1" />
                <span className="text-xs font-medium">Angle Measurements</span>
              </div>
            </div>
          </div>
          
          <div className="relative md:h-[600px] flex items-center justify-center">
            <div className="absolute w-full h-full max-w-md mx-auto">
              <div className="absolute top-1/4 left-1/4 w-full h-full bg-primary/20 rounded-full filter blur-3xl animate-pulse-slow" />
            </div>
            
            <div className="relative z-10 w-full max-w-md mx-auto">
              <AnimatedImage 
                src="/placeholder.svg" 
                alt="MiraiTech Insole" 
                className="w-full h-auto rounded-2xl shadow-xl"
                revealAnimation="scale"
              />
              
              <div className="absolute -right-6 -bottom-6 p-4 glass rounded-xl shadow-lg animate-slide-up animation-delay-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Step Analysis</p>
                    <p className="text-xs text-muted-foreground">99% Accuracy</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -left-6 top-20 p-4 glass rounded-xl shadow-lg animate-slide-up animation-delay-1000">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Ruler className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Angle Measurements</p>
                    <p className="text-xs text-muted-foreground">Real-time data</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
