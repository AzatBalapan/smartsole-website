
import React from 'react';
import { Footprints, Activity, HeartPulse, SmartphoneCharging, Bluetooth, Ruler } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Footprints className="h-6 w-6 text-primary" />,
      title: "Precision Sensing",
      description: "Advanced sensors capture specific foot areas with unprecedented accuracy."
    },
    {
      icon: <Activity className="h-6 w-6 text-primary" />,
      title: "Activity Monitoring",
      description: "Track steps, distance, and movement patterns with laboratory-grade precision."
    },
    {
      icon: <HeartPulse className="h-6 w-6 text-primary" />,
      title: "Health Insights",
      description: "Analyze gait patterns to prevent injuries, speed up rehabilitation, and improve sport activity."
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
      icon: <Ruler className="h-6 w-6 text-primary" />,
      title: "Angle Measurements",
      description: "Precise tracking of knee angles for improved posture and mobility assessment."
    }
  ];
  
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Video and Sales Text Section */}
      <div className="container px-4 md:px-6 mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-2xl overflow-hidden">
            <video 
              className="w-full h-auto rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              poster="/placeholder.svg"
            >
              <source src="/placeholder.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
              Transform Your Movement Analysis
            </h2>
            <p className="text-lg text-muted-foreground">
              Our smart insoles revolutionize how healthcare professionals and athletes track and analyze movement patterns, providing unprecedented insights for improved performance and faster rehabilitation.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="p-4 glass rounded-lg">
                <CountUpNumber 
                  end={8} 
                  suffix="+" 
                  className="text-3xl font-display font-bold text-primary"
                />
                <p className="text-sm text-muted-foreground">Analytics graphs</p>
              </div>
              <div className="p-4 glass rounded-lg">
                <CountUpNumber 
                  end={5000} 
                  suffix="+" 
                  className="text-3xl font-display font-bold text-primary"
                />
                <p className="text-sm text-muted-foreground">Patients analyzed</p>
              </div>
              <div className="p-4 glass rounded-lg">
                <CountUpNumber 
                  end={10} 
                  suffix="+" 
                  className="text-3xl font-display font-bold text-primary"
                />
                <p className="text-sm text-muted-foreground">Data metrics</p>
              </div>
              <div className="p-4 glass rounded-lg">
                <CountUpNumber 
                  end={30} 
                  suffix="%" 
                  className="text-3xl font-display font-bold text-primary"
                />
                <p className="text-sm text-muted-foreground">Faster recovery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
            Discover how MiraiTech transforms ordinary insoles into powerful health and fitness companions.
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
      </div>
    </section>
  );
};

export default Features;
