
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Github, Linkedin } from 'lucide-react';
import AnimatedImage from '@/components/AnimatedImage';
import { Skeleton } from '@/components/ui/skeleton';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Gulnur Kalimuldina",
      role: "Founder",
      bio: "Leads the MiraiTech team with extensive expertise in biomedical engineering and innovative medical device development.",
      image: "/lovable-uploads/Gulnur.jpg", 
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Dr. Azamat Yeshmukhametov",
      role: "Co-founder",
      bio: "Expert in robotics and automation systems, bringing technical leadership to the development of MiraiTech's core technologies.",
      image: "/lovable-uploads/Azamat.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Adeliya Anash",
      role: "Project Manager",
      bio: "Oversees the planning, execution, and delivery of MiraiTech's projects ensuring seamless coordination across all teams.",
      image: "/lovable-uploads/Adeliya.jpg", 
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Anton Novikov",
      role: "Senior Developer",
      bio: "Leads the software development team, architecting the technical backbone of MiraiTech's innovative insole solutions.",
      image: "/lovable-uploads/Anton.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Moldir Issabek",
      role: "Material Engineer",
      bio: "Specializes in advanced materials research and development, creating durable and responsive components for our smart insoles.",
      image: "/lovable-uploads/Moldir.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Azat Balapan",
      role: "Data Scientist",
      bio: "Develops sophisticated algorithms to analyze movement patterns and provide actionable insights through our technology.",
      image: "/lovable-uploads/Azat.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Sultandiar Mukhamedkali",
      role: "Medical Expert",
      bio: "Provides crucial medical expertise to ensure our technology meets therapeutic standards and delivers meaningful health benefits.",
      image: "/lovable-uploads/Sultandiyar.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Manat Nursultan",
      role: "Hardware Developer",
      bio: "Designs and refines the physical components of our smart insoles, focusing on durability, comfort, and functionality.",
      image: "/lovable-uploads/Manat.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Nurassyl Nurmaganbet",
      role: "Electronic Engineer",
      bio: "Develops the electronic systems that enable precise sensing and feedback mechanisms in our smart insole technology.",
      image: "/lovable-uploads/Nurasil.jpg",
      social: {
        linkedin: "#"
      }
    }
  ];

  const advisors = [
    {
      name: "Prof. James Wilson",
      role: "Scientific Advisor",
      bio: "Leading researcher in biomechanics at Stanford University with over 200 published papers on gait analysis.",
      image: "/placeholder.svg"
    },
    {
      name: "Dr. Emily Zhao",
      role: "Medical Advisor",
      bio: "Director of Rehabilitation Medicine at Mayo Clinic with expertise in technology-assisted recovery methods.",
      image: "/placeholder.svg"
    },
    {
      name: "Robert Taylor",
      role: "Business Advisor",
      bio: "Serial entrepreneur with successful exits in the health tech space. Guides our growth and commercialization strategy.",
      image: "/placeholder.svg"
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
                Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                Meet the Innovators
              </h1>
              <p className="text-xl text-muted-foreground">
                Passionate experts dedicated to transforming movement analysis through technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <AnimatedImage 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      revealAnimation="fade"
                      delay={(index % 3) * 100}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium mb-3">{member.role}</p>
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                          <Linkedin size={18} />
                        </a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors" aria-label="GitHub">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-center mb-12">
                Advisory Board
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {advisors.map((advisor, index) => (
                  <div key={index} className="flex flex-col items-center text-center p-6 glass rounded-xl">
                    <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                      <AnimatedImage 
                        src={advisor.image} 
                        alt={advisor.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        revealAnimation="fade"
                        delay={index * 100}
                      />
                    </div>
                    <h3 className="text-xl font-bold">{advisor.name}</h3>
                    <p className="text-primary font-medium mb-3">{advisor.role}</p>
                    <p className="text-muted-foreground">{advisor.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">Join Our Team</h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals passionate about technology, health, and improving lives.
              </p>
              <a 
                href="#careers" 
                className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
