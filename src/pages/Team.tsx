
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former biomedical engineer with 15+ years of experience in medical device innovation. Led the initial research that became MiraiTech's core technology.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Michael Patel",
      role: "CTO & Co-Founder",
      bio: "Specialist in machine learning and sensor technology with a background in sports medicine. Developed the proprietary algorithms that power our analytics.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Product",
      bio: "Former professional athlete with expertise in product management. Ensures our technology meets the real needs of athletes and healthcare providers.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Thomas Kim",
      role: "Chief Medical Officer",
      bio: "Orthopedic surgeon with specialization in sports medicine and rehabilitation. Guides clinical applications and oversees research partnerships.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#"
      }
    },
    {
      name: "Alex Johnson",
      role: "Lead Software Engineer",
      bio: "Experienced full-stack developer with expertise in real-time data processing and mobile applications. Leads the development of our software ecosystem.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Dr. Grace Liu",
      role: "Research Director",
      bio: "PhD in biomechanics with extensive research experience. Leads our ongoing studies and collaborations with academic and clinical partners.",
      image: "/placeholder.svg",
      social: {
        linkedin: "#",
        twitter: "#"
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
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
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
                      {member.social.twitter && (
                        <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                          <Twitter size={18} />
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
                      <img 
                        src={advisor.image} 
                        alt={advisor.name}
                        className="w-full h-full object-cover"
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
