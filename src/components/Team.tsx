import React from "react";
import { Carousel, Card } from "./ui/apple-cards-carousel";

const Team = () => {
  const gradients = [
    'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
    'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
    'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
    'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)',
    'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)',
    'linear-gradient(135deg, #a855f7 0%, #6b21a8 100%)',
    'linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)',
    'linear-gradient(135deg, #fb7185 0%, #f43f5e 100%)',
  ]

  const teamMembers = [
    {
      category: "Leadership",
      title: "Founder & CEO",
      src: "",
      background: gradients[0],
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Beamlak Tamrat</h4>
          <p className="text-white/90 mb-4">Founder & CEO</p>
          <p className="text-white/80 text-sm">
            Leading our vision and driving the strategic direction of Muday Marketing Solutions.
          </p>
        </div>
      ),
    },
    {
      category: "Leadership",
      title: "Co-Founder",
      src: "",
      background: gradients[1],
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Natan Kassaye</h4>
          <p className="text-white/90 mb-4">Co-Founder</p>
          <p className="text-white/80 text-sm">
            Partnering on strategy and growth to keep Muday Marketing Solutions pushing forward.
          </p>
        </div>
      ),
    },
    {
      category: "Finance",
      title: "Director of Finance",
      src: "",
      background: gradients[2],
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
      src: "",
      background: gradients[3],
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
      src: "",
      background: gradients[4],
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Beamlak Tadesse</h4>
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
      src: "",
      background: gradients[5],
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
      src: "",
      background: gradients[6],
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
      src: "",
      background: gradients[7],
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Bereket Tadesse</h4>
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
      src: "",
      background: gradients[8],
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
      src: "",
      background: gradients[9],
      content: (
        <div className="bg-white/10 dark:bg-black/20 backdrop-blur-sm p-6 rounded-2xl">
          <h4 className="text-xl font-bold mb-2">Saron Yilma</h4>
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
      src: "",
      background: gradients[10],
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

