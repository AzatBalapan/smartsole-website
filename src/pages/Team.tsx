
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Github, Linkedin } from 'lucide-react';
import InstantImage from '@/components/InstantImage';

const Team: React.FC = () => {
  // Preload all team member images on component mount
  useEffect(() => {
    teamMembers.forEach(member => {
      const img = new Image();
      img.src = member.image;
    });
    
    advisors.forEach(advisor => {
      const img = new Image();
      img.src = advisor.image;
    });
  }, []);

  const teamMembers = [
    {
      name: "Dr. Gulnur Kalimuldina",
      role: "Founder",
      bio: "Leads the MiraiTech team with extensive expertise in biomedical engineering and innovative medical device development.",
      image: "/lovable-uploads/Gulnur-min.jpg", 
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Dr. Azamat Yeshmukhametov",
      role: "Co-founder",
      bio: "Expert in robotics and automation systems, bringing technical leadership to the development of MiraiTech's core technologies.",
      image: "/lovable-uploads/Azamat-min.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Sultandiar Mukhamedkali",
      role: "Medical Expert",
      bio: "Provides crucial medical expertise to ensure our technology meets therapeutic standards and delivers meaningful health benefits.",
      image: "/lovable-uploads/Sultandiyar-min.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Adeliya Anash",
      role: "Project Manager",
      bio: "Oversees the planning, execution, and delivery of MiraiTech's projects ensuring seamless coordination across all teams.",
      image: "/lovable-uploads/Adeliya-min.jpg", 
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Moldir Issabek",
      role: "Material Engineer",
      bio: "Specializes in advanced materials research and development, creating durable and responsive components for our smart insoles.",
      image: "/lovable-uploads/Moldir-min.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Azat Balapan",
      role: "Data Scientist",
      bio: "Develops sophisticated algorithms to analyze movement patterns and provide actionable insights through our technology.",
      image: "/lovable-uploads/Azat-min.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Anton Novikov",
      role: "Senior Developer",
      bio: "Leads the software development team, architecting the technical backbone of MiraiTech's innovative insole solutions.",
      image: "/lovable-uploads/Anton-min.jpg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Manat Nursultan",
      role: "Hardware Developer",
      bio: "Designs and refines the physical components of our smart insoles, focusing on durability, comfort, and functionality.",
      image: "/lovable-uploads/Manat-min.jpg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Nurassyl Nurmaganbet",
      role: "Electronic Engineer",
      bio: "Develops the electronic systems that enable precise sensing and feedback mechanisms in our smart insole technology.",
      image: "/lovable-uploads/Nurasil-min.jpg",
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
      <main className="flex-grow pt-5">
        <section className="py-12 md:py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-sm text-primary font-medium">
                Our Team
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight">
                Meet the Innovators
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <div className="aspect-[4/3] relative">
                    <InstantImage 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      preload={true}
                      priority={index < 6} // Prioritize loading for first 6 images
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
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
