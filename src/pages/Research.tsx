
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ArrowUpRight, FileText, BarChart, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Research: React.FC = () => {
  const papers = [
    {
      title: "AI-Enhanced Gait Analysis Insole with Self-Powered Triboelectric Sensors for Flatfoot Condition Detection",
      authors: "Issabek, Moldir and Oralkhan, Sabyrzhan and Anash, Adeliya and Nurbergenova, Nuriya and Balapan, Azat and Yeshmukhametov, Azamat and Rakhmanov, Yeltay and Kalimuldina, Gulnur",
      journal: "Advanced Materials Technologies",
      year: "2024",
      link: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/admt.202401282"
    },
    {
      title: "Incorporating MIL-125 Metal-Organic Framework for Flexible Triboelectric Nanogenerators and Self-Powered Sensors for Robotic Grippers",
      authors: "Kakim, Alibek and Nurkesh, Ayan and Sarsembayev, Bayandy and Dauletiya, Daniyar and Balapan, Azat and Bakenov, Zhumabay and Yeshmukhametov, Azamat and Kalimuldina, Gulnur",
      journal: "Advanced Sensor Research",
      year: "2024",
      link: "https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/adsr.202300163"
    },
    {
      title: "A Novel Pattern Recognition Method for Self-Powered TENG Sensor Embedded to the Robotic Hand",
      authors: "Balapan, Azat and Yeralkhan, Rauan and Aryslanov, Alikhan and Kalimuldina, Gulnur and Yeshmukhametov, Azamat",
      journal: "IEEE Access",
      year: "2025",
      link: "https://ieeexplore.ieee.org/abstract/document/10843698"
    }
  ];

  const caseStudies = [
    {
      title: "Post-Surgical Rehabilitation Acceleration",
      description: "A study of 200 patients recovering from knee surgery showed 30% faster return to normal gait when using MiraiTech insoles.",
      metric: "30% faster recovery"
    },
    {
      title: "Athletic Performance Optimization",
      description: "Professional runners improved their form efficiency by 15% after 8 weeks of training with MiraiTech insole feedback.",
      metric: "15% efficiency improvement"
    },
    {
      title: "Diabetic Foot Ulcer Prevention",
      description: "High-risk diabetic patients showed 70% reduction in pressure-related complications with continuous monitoring.",
      metric: "70% risk reduction"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow pt-32">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
                Research
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                Advancing Motion Science
              </h1>
              <p className="text-xl text-muted-foreground">
                Our technology is built on a foundation of rigorous research and clinical validation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="p-6 rounded-2xl glass">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Published Research</h3>
                <p className="text-muted-foreground mb-4">
                  Our technology has been featured in leading scientific journals and conferences.
                </p>
                <div className="text-3xl font-display font-bold text-primary">15+</div>
                <p className="text-sm text-muted-foreground">peer-reviewed publications</p>
              </div>

              <div className="p-6 rounded-2xl glass">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Clinical Studies</h3>
                <p className="text-muted-foreground mb-4">
                  Rigorous testing in real-world clinical environments validates our approach.
                </p>
                <div className="text-3xl font-display font-bold text-primary">8</div>
                <p className="text-sm text-muted-foreground">clinical trials completed</p>
              </div>

              <div className="p-6 rounded-2xl glass">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Database className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Data Collection</h3>
                <p className="text-muted-foreground mb-4">
                  Our growing database of movement patterns informs our AI algorithms.
                </p>
                <div className="text-3xl font-display font-bold text-primary">50M+</div>
                <p className="text-sm text-muted-foreground">steps analyzed</p>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Latest Research Papers</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {papers.map((paper, index) => (
                    <a 
                      key={index} 
                      href={paper.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 rounded-xl border border-border hover:border-primary/30 transition-all duration-300 group"
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{paper.title}</h3>
                      <p className="text-muted-foreground mb-1">{paper.authors}</p>
                      <p className="text-sm font-medium mb-4">{paper.journal} - {paper.year}</p>
                      <div className="flex items-center text-primary">
                        <span className="text-sm font-medium">Read paper</span>
                        <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:translate-y-[-2px]" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Case Studies</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {caseStudies.map((study, index) => (
                    <div key={index} className="p-6 rounded-xl bg-white shadow-sm">
                      <div className="text-xl font-bold text-primary mb-4">{study.metric}</div>
                      <h3 className="text-lg font-bold mb-2">{study.title}</h3>
                      <p className="text-muted-foreground">{study.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Request Research Access</h2>
                <p className="text-muted-foreground mb-6">
                  Are you a researcher interested in working with our technology? We offer special programs for academic and clinical research.
                </p>
                <Button size="lg">Contact Research Team</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Research;
