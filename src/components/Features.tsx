
import React from 'react';
import { Footprints, Activity, HeartPulse, SmartphoneCharging, Bluetooth, MapPin } from 'lucide-react';
import AnimatedImage from './AnimatedImage';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Footprints className="h-6 w-6 text-primary" />,
      title: "Precision Sensing",
      description: "Advanced sensors capture every detail of your footstep with unprecedented accuracy."
    },
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      title: "Activity Monitoring",
      description: "Track steps, distance, and calories with laboratory-grade precision."
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-primary" />,
      title: "Health Insights",
      description: "Analyze gait patterns to prevent injuries and improve posture."
    },
    {
      icon: <SmartphoneCharging className="h-6 w-6 text-primary" />,
      title: "Long Battery Life",
      description: "Up to 10 hours of continuous use with quick wireless charging."
    },
    {
      icon: <Bluetooth className="h-6 w-6 text-primary" />,
      title: "Seamless Connectivity",
      description: "Bluetooth 5.0 ensures reliable data synchronization with any device."
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Location Tracking",
      description: "Optional GPS integration for accurate route mapping and navigation."
    }
  ];
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-secondary rounded-tl-[100px] -z-10" />
      
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
            Features
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Smart Technology for Smarter Steps
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how SmartSole transforms ordinary insoles into powerful health and fitness companions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="relative p-6 rounded-2xl glass hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <AnimatedImage 
                src="/placeholder.svg" 
                alt="SmartSole App Interface" 
                className="w-full h-auto rounded-2xl shadow-xl"
                revealAnimation="slide-right"
              />
            </div>
            
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
                Mobile Integration
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
                Your Personal Health Coach
              </h2>
              <p className="text-lg text-muted-foreground">
                The SmartSole app transforms complex data into actionable insights. Get personalized recommendations to improve your walking technique, prevent injuries, and enhance your overall fitness level.
              </p>
              <ul className="space-y-3">
                {[
                  "Real-time feedback during activities",
                  "Personalized coaching based on your patterns",
                  "Progress tracking and goal setting",
                  "Share data with healthcare professionals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
