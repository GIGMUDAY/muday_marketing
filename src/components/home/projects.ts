// Portfolio case studies data - used in both Portfolio and Slider components
export const portfolioCaseStudies = [
  {
    title: 'Al Nujoom Domestic Worker',
    category: 'Social Media Marketing Specialist',
    bulletPoints: [
      'Consulted with clients on business issues and developed innovative proposals.',
      'Consulted with clients on business issues and developed innovative, high-impact proposals.',
    ],
    image: '/AlNujoomDomesticWorker.jpg',
    bgColor: 'bg-blue-600',
    textColor: 'text-white',
  },
  {
    title: 'NISIR IT SOLUTIONS',
    category: 'Social Media Marketing Specialist',
    description: 'NISIR IT SOLUTIONS, Ethiopia. Experienced and Skilled in Content Creation and innovative design solutions. Strong professional background in developing creative strategies that enhance brand visibility and drive audience engagement.',
    image: '/nisir-it-solutuins.jpg',
    bgColor: 'bg-teal-600',
    textColor: 'text-white',
  },
  {
    title: 'Careall Foreign Employment Agency',
    category: 'Digital Marketing Manager',
    bulletPoints: [
      'Consulted with clients on business issues and developed innovative proposals.',
      'Consulted with clients on business issues and developed innovative, high-impact proposals.',
    ],
    image: '/careall.jpg',
    bgColor: 'bg-purple-600',
    textColor: 'text-white',
  },
  {
    title: 'Sebez Training and Consultancy services',
    category: 'Marketing Consultant',
    bulletPoints: [
      'Consulted with clients on business issues and developed innovative proposals.',
      'Consulted with clients on business issues and developed innovative, high-impact proposals.',
    ],
    image: '/sebez.jpg',
    bgColor: 'bg-orange-600',
    textColor: 'text-white',
  },
  {
    title: 'Asham promotion and event organization',
    category: 'Event Coordinator',
    bulletPoints: [
      'Coordinated schedules and timelines for events.',
      'Managed event logistics and operations.',
      'Developed and distributed event surveys to gather feedback and assess event success.',
      'Developed detailed event reports, documenting all aspects of each event.',
    ],
    image: '/asham.jpg',
    bgColor: 'bg-indigo-600',
    textColor: 'text-white',
  },
  {
    title: 'ETrainCon',
    category: 'Marketing & Digital Marketing',
    bulletPoints: [
      'SEO & SEM',
      'Content creation',
      'CRM management',
      'Lead generation & nurture',
      'Campaign performance tracking & reporting',
      'Marketing analytic',
    ],
    image: '/etraincon.jpg',
    bgColor: 'bg-pink-600',
    textColor: 'text-white',
  },
  {
    title: 'PavePath Design',
    category: 'Marketing Director & Digital Specialist',
    description: 'Led integrated digital campaigns across email, social media, branding, content marketing, and website experiences for diverse clients. Applied strong market research and event-planning skills to design campaigns that delivered clear, measurable results. Increased brand visibility and high-quality lead generation by managing both internal and client-facing marketing programs. Developed strategic marketing plans that blended digital tactics with print campaigns and targeted word-of-mouth activation. Collaborated closely with designers and creatives to produce compelling visual assets, brand stories, and communication tools for key promotional launches.',
    bulletPoints: [
      'Led integrated digital campaigns across email, social media, branding, content marketing, and website experiences for diverse clients.',
      'Applied strong market research and event-planning skills to design campaigns that delivered clear, measurable results.',
      'Increased brand visibility and high-quality lead generation by managing both internal and client-facing marketing programs.',
      'Developed strategic marketing plans that blended digital tactics with print campaigns and targeted word-of-mouth activation.',
      'Collaborated closely with designers and creatives to produce compelling visual assets, brand stories, and communication tools for key promotional launches.',
    ],
    image: '/pave-path.jpg',
    bgColor: 'bg-cyan-600',
    textColor: 'text-white',
  },
];

// Convert portfolio case studies to projects format for slider
export const projects = portfolioCaseStudies.map((study, index) => {
  // Portfolio images are in public root (e.g., '/AlNujoomDomesticWorker.jpg')
  // Use the full path directly
  const imageSrc = study.image;
  
  // Convert bulletPoints or description to details array
  const details = study.bulletPoints 
    ? study.bulletPoints 
    : study.description 
      ? [study.description] 
      : [];

  // All cards use white background with black text
  return {
    title: study.title,
    details: details,
    src: imageSrc, // Full path from public root (e.g., '/AlNujoomDomesticWorker.jpg')
    link: '#',
    color: '#ffffff', // White background for all cards
    textcolor: '#000000', // Black text for light mode, will be overridden in dark mode
    left: index % 2 === 0, // Alternate left/right positioning
    mode: "list",
  };
});