
import React from 'react';
import AnimatedImage from './AnimatedImage';
import CountUpNumber from './CountUpNumber';

const Features: React.FC = () => {
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
            Innovative Technology
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover how our technology can elevate your experience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
