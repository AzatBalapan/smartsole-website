
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Battery, Bluetooth, Ruler, Cpu, Gauge, Settings } from 'lucide-react';

const Specs: React.FC = () => {
  const specCategories = [
    {
      id: "physical",
      name: "Physical",
      icon: <Ruler className="h-5 w-5" />,
      specs: [
        { name: "Thickness", value: "0.8mm" },
        { name: "Weight", value: "50g per insole" },
        { name: "Material", value: "Medical-grade polymer" },
        { name: "Water Resistance", value: "IPX7 rated" },
        { name: "Durability", value: "500,000+ step lifecycle" },
        { name: "Sizes Available", value: "EU 35-48 / US 4-15" }
      ]
    },
    {
      id: "technical",
      name: "Technical",
      icon: <Cpu className="h-5 w-5" />,
      specs: [
        { name: "Sensor Type", value: "Capacitive microfiber array" },
        { name: "Sensor Count", value: "64 pressure points per insole" },
        { name: "Precision", value: "±0.01N force detection" },
        { name: "Sampling Rate", value: "200Hz" },
        { name: "Data Storage", value: "512MB onboard memory" },
        { name: "Processor", value: "ARM Cortex M4F microcontroller" }
      ]
    },
    {
      id: "connectivity",
      name: "Connectivity",
      icon: <Bluetooth className="h-5 w-5" />,
      specs: [
        { name: "Wireless Protocol", value: "Bluetooth 5.0 LE" },
        { name: "Range", value: "Up to 30m / 100ft" },
        { name: "Companion App", value: "iOS 14+ / Android 10+" },
        { name: "Data Export", value: "CSV, JSON, API access" },
        { name: "Cloud Integration", value: "iHealth, Google Fit, Apple Health" },
        { name: "Security", value: "AES-256 encryption" }
      ]
    },
    {
      id: "power",
      name: "Power",
      icon: <Battery className="h-5 w-5" />,
      specs: [
        { name: "Battery Type", value: "Lithium-polymer, 120mAh" },
        { name: "Battery Life", value: "10+ hours active use" },
        { name: "Standby Time", value: "14 days" },
        { name: "Charging Method", value: "Wireless Qi charging" },
        { name: "Charge Time", value: "45 minutes to full" },
        { name: "Power Saving", value: "Automatic sleep mode" }
      ]
    },
    {
      id: "features",
      name: "Features",
      icon: <Settings className="h-5 w-5" />,
      specs: [
        { name: "Gait Analysis", value: "Advanced algorithm with ML" },
        { name: "Posture Detection", value: "Real-time feedback" },
        { name: "Activity Recognition", value: "Auto-detects 8 activities" },
        { name: "Training Programs", value: "5 pre-loaded programs" },
        { name: "Pressure Mapping", value: "Visual heatmap in app" },
        { name: "Fall Detection", value: "Optional emergency alerts" }
      ]
    },
    {
      id: "performance",
      name: "Performance",
      icon: <Gauge className="h-5 w-5" />,
      specs: [
        { name: "Step Accuracy", value: "99.8% in lab conditions" },
        { name: "Distance Accuracy", value: "±2% compared to GPS" },
        { name: "Calorie Accuracy", value: "±8% compared to metabolic testing" },
        { name: "Temperature Range", value: "-10°C to 50°C / 14°F to 122°F" },
        { name: "Altitude Range", value: "Up to 5000m above sea level" },
        { name: "Response Time", value: "<5ms feedback latency" }
      ]
    }
  ];
  
  return (
    <section id="specs" className="py-24 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center space-y-4 mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
            Specifications
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight">
            Engineered for Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            Every component of SmartSole has been meticulously designed for optimal performance and reliability.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <Tabs defaultValue="physical" className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              {specCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="flex items-center gap-2"
                >
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            
            {specCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold">{category.name} Specifications</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.specs.map((spec, index) => (
                    <div key={index} className="bg-secondary p-4 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">{spec.name}</div>
                      <div className="font-medium">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Specs;
