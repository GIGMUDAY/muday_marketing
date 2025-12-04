import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const Team = () => {
  const teamMembers = [
    {
      category: "Leadership",
      title: "Founder & CEO",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Natan Kassayi</h4>
          <p className="text-white/90 mb-4">Founder & CEO</p>
          <p className="text-white/80 text-sm">
            Leading our vision and driving the strategic direction of Muday Marketing.
          </p>
        </div>
      ),
    },
    {
      category: "Finance",
      title: "Director of Finance",
      src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Tinsae Kefyalew</h4>
          <p className="text-white/90 mb-4">Director of Finance and Accounting</p>
          <p className="text-white/80 text-sm">
            Managing financial operations and ensuring fiscal responsibility across all projects.
          </p>
        </div>
      ),
    },
    {
      category: "Marketing",
      title: "Marketing Manager",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Michael Tamrat</h4>
          <p className="text-white/90 mb-4">Marketing Manager</p>
          <p className="text-white/80 text-sm">
            Overseeing marketing strategies and campaigns to drive business growth.
          </p>
        </div>
      ),
    },
    {
      category: "Digital Marketing",
      title: "Digital Marketing Manager",
      src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Beamlak Tamrat</h4>
          <p className="text-white/90 mb-4">Digital Marketing Manager</p>
          <p className="text-white/80 text-sm">
            Leading digital marketing initiatives and optimizing online presence.
          </p>
        </div>
      ),
    },
    {
      category: "Content",
      title: "Content Strategist",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Kidus Asrat</h4>
          <p className="text-white/90 mb-4">Content Strategist</p>
          <p className="text-white/80 text-sm">
            Crafting compelling content strategies that engage and convert audiences.
          </p>
        </div>
      ),
    },
    {
      category: "Social Media",
      title: "Social Media Manager",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Tsega Gufo</h4>
          <p className="text-white/90 mb-4">Social Media Manager</p>
          <p className="text-white/80 text-sm">
            Managing social media presence and building community engagement across platforms.
          </p>
        </div>
      ),
    },
    {
      category: "Development",
      title: "Developer",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Wondmeneh Dereje</h4>
          <p className="text-white/90 mb-4">Developer</p>
          <p className="text-white/80 text-sm">
            Building and maintaining digital solutions with cutting-edge technologies.
          </p>
        </div>
      ),
    },
    {
      category: "Design",
      title: "Graphic Designer",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Bethlehem Dinku</h4>
          <p className="text-white/90 mb-4">Graphic Designer</p>
          <p className="text-white/80 text-sm">
            Creating visually stunning designs that bring brands to life.
          </p>
        </div>
      ),
    },
    {
      category: "Research",
      title: "Marketing Research Analyst",
      src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Beamlak Tadesse</h4>
          <p className="text-white/90 mb-4">Marketing Research Analyst</p>
          <p className="text-white/80 text-sm">
            Analyzing market trends and consumer insights to inform strategic decisions.
          </p>
        </div>
      ),
    },
    {
      category: "Events",
      title: "Event Planner",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3",
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Yoseaf Ababw</h4>
          <p className="text-white/90 mb-4">Event Planner</p>
          <p className="text-white/80 text-sm">
            Planning and executing memorable events that create lasting impressions.
          </p>
        </div>
      ),
    },
  ];

  const cards = teamMembers.map((member, index) => (
    <Card key={`${member.title}-${index}`} card={member} index={index} />
  ));

  return (
    <section id="team" className="py-12 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[70vh] mb-16">
          {/* Top-Left: Meet Our Team */}
          <div className="absolute top-4 left-0">
            <h2
              className="text-xs font-normal text-black dark:text-white uppercase tracking-wide"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '12px' }}
            >
              Meet Our Team
            </h2>
          </div>

          {/* Center-Left: Large Headline */}
          <div className="flex items-center justify-start pt-20 pb-16">
            <h3
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-black dark:text-white leading-[1.1]"
              style={{ fontFamily: '"Urbanist", serif' }}
            >
              The People<br />
              Behind the Magic
            </h3>
          </div>

          {/* Bottom-Right: Description */}
          <div className="absolute bottom-4 right-0 text-right max-w-sm">
            <p
              className="text-sm text-black dark:text-white leading-relaxed"
              style={{ fontFamily: '"Urbanist", serif', fontSize: '14px' }}
            >
              Get to know the talented<br />
              individuals who make it all happen
            </p>
          </div>
        </div>

        {/* Team Carousel */}
        <div className="mt-20">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
};

export default Team;

