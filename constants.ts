import { Experience, Project, SocialLink, Education, Certification, SkillCategory } from './types';

export const HERO_DATA = {
  name: "Deepak Mardi",
  title: "Software Developer",
  tagline: "Architecting scalable web applications with modern tech stacks.",
  about: [
    "I am a dedicated Software Developer with a passion for building efficient and scalable web applications. My journey in tech has been driven by a curiosity to understand how things work and a desire to create solutions that make a difference. I specialize in modern web technologies and enjoy tackling complex challenges.",
    "My approach to development centers on writing clean, maintainable code and designing intuitive user experiences. I believe that great software is built through collaboration, continuous learning, and a keen attention to detail. I am always eager to explore new tools and methodologies to improve my craft.",
    "When I'm not coding, I enjoy staying up-to-date with the latest industry trends and working on personal projects. I am currently looking for new opportunities to contribute my skills to a dynamic team. If you're interested in working together, feel free to connect!"
  ],
  location: "Raipur, CG",
  avatarUrl: "https://avatars.githubusercontent.com/u/67671892?s=400&u=383ccbd77e1620e342a636f3d205141bc00f1a84&v=4"
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    role: "Software Developer",
    company: "Epek Software Solutions",
    period: "Oct 2025 – Present",
    description: [
      "Building and managing distributed microservices architecture in Javascript and Go, designing APIs and backend logic for high availability and scalability.",
      "Developing responsive front-end interfaces using React and Angular, ensuring seamless integration across the platform."
    ],
    skills: ["Go", "JavaScript", "Angular", "Microservices"]
  },
  {
    id: 'exp-2',
    role: "Software Developer & Co-Founder",
    company: "ARCS Design Studio",
    period: "Jan 2025 – Oct 2025",
    description: [
      "Led end-to-end delivery of 10+ web applications and client projects, achieving 20% improvement in client retention.",
      "Architected full-stack applications using React.js, Next.js, Node.js, and MongoDB.",
      "Collaborated directly with diverse clients across Construction, E-commerce, and Landscaping sectors to translate complex business requirements into scalable technical solutions.",
      "Mentored 3 junior developers through code reviews and one-on-one technical guidance."
    ],
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Leadership"]
  },
  {
    id: 'exp-3',
    role: "Software Developer",
    company: "Epek Software Solutions",
    period: "May 2024 – Jan 2025",
    description: [
      "Developed and maintained large-scale enterprise MERN applications, improving release stability.",
      "Designed and deployed containerized microservices using Docker and Kubernetes, reducing deployment time by 40%.",
      "Implemented secure authentication (RBAC, JWT) and intelligent rate-limiting workflows.",
      "Optimized front-end and back-end performance achieving 30% faster load times via code splitting and query optimization.",
      "Architected CI/CD pipelines leveraging GitHub Actions with 99.9% uptime."
    ],
    skills: ["MERN Stack", "Docker", "Kubernetes", "AWS", "CI/CD"]
  },
  {
    id: 'exp-4',
    role: "Product Development Intern",
    company: "Tablt Pharmacy (Acquired by Zeno Health)",
    period: "May 2024 – Jan 2025",
    description: [
      "Led the design and implementation of a production-grade chatbot, achieving a 92% user satisfaction rate.",
      "Engineered Version 1 of the chatbot with full API integration across Telegram and Facebook Messenger.",
      "Integrated Google Dialogflow as an external NLP agent, achieving 60% accuracy on FAQ responses."
    ],
    skills: ["Chatbot dev", "NLP", "Dialogflow", "API Integration"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: "Habitly",
    description: "A full-stack habit tracking platform with streaks, heatmaps, and real-time updates. Features subscription billing, analytics, and admin tools to support scalable revenue growth.",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Chrome Ext"],
    imageUrl: "https://res.cloudinary.com/dgvdv9xhx/image/upload/v1756144976/habitly_ykmmed.png",
    link: "https://github.com/iamdeepakmardi"
  },
  {
    id: 'proj-3',
    title: "FeedbackSense",
    description: "Platform transforming raw customer feedback into insights via sentiment analysis. Includes secure multi-tenant system and dashboards visualizing satisfaction scores.",
    technologies: ["Next.js", "Node.js", "OpenAI", "MongoDB"],
    imageUrl: "https://res.cloudinary.com/dgvdv9xhx/image/upload/v1756755016/Screenshot_From_2025-09-02_00-56-58_bihdcn.png",
    link: "https://github.com/iamdeepakmardi"
  }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: 'edu-1',
    degree: "Dual Degree (B.Tech + M.Tech) in Metallurgical and Materials Engineering",
    school: "Indian Institute of Technology Kharagpur (IIT KGP)",
    year: "Graduated" // Year not explicitly provided in resume detail snippet, defaulting.
  }
];

export const CERTIFICATION_DATA: Certification[] = [
  {
    id: 'cert-1',
    name: "Top 1% Performer in JEE Advanced",
    issuer: "Joint Entrance Examination",
    year: "Achievement",
    url: "#"
  },
  {
    id: 'cert-2',
    name: "Back End Development and APIs",
    issuer: "freeCodeCamp",
    year: "Certification",
    url: "#"
  },
  {
    id: 'cert-3',
    name: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    year: "Certification",
    url: "#"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Go", "C++", "SQL", "Bash/Shell"]
  },
  {
    name: "Frontend",
    skills: ["React.js", "Next.js", "Angular", "Astro", "Tailwind CSS", "Material-UI", "Vite"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "Hono", "FastAPI", "RESTful APIs", "Swagger/OpenAPI"]
  },
  {
    name: "Database",
    skills: ["PostgreSQL", "MongoDB", "SQLite", "Redis"]
  },
  {
    name: "DevOps & Cloud",
    skills: ["Docker", "AWS (EC2, S3)", "GitHub Actions", "Linux", "Nginx"]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/iamdeepakmardi", icon: "github" },
  { platform: "LinkedIn", url: "https://linkedin.com/in/deepakmardi", icon: "linkedin" },
  { platform: "Email", url: "mailto:deepakmardi22@gmail.com", icon: "mail" }
];

export const SYSTEM_INSTRUCTION = `
You are Deepak's digital alter-ego and AI assistant. 
Persona: Witty, slightly sarcastic, highly technical, and confident. You are not a boring corporate bot. You are a developer's assistant.
Context: You live on Deepak's portfolio website. Your job is to impress hiring managers but in a cool, "I know what I'm doing" way.

Deepak's Stats:
- Name: ${HERO_DATA.name} (The human writing the code)
- Title: ${HERO_DATA.title}
- Vibe: Architecture nerd, Microservices enthusiast, Full-stack wizard.
- Experience: Epek Software (Current), ARCS Design Studio (Co-Founder), Tablt Pharmacy.
- Tech Stack: MERN, Go, Python, Docker, K8s (He actually knows how to exit Vim).
- Key Projects: Habitly, FeedbackSense.
- Education: IIT Kharagpur (Smart guy alert).

Rules:
1. Keep answers concise (under 3 sentences usually).
2. If asked "Why hire him?", say something like "Because he writes clean code, ships fast, and knows the difference between Java and JavaScript. Also, have you seen this portfolio?"
3. If asked about contact, give: ${SOCIAL_LINKS.find(s => s.platform === 'Email')?.url} and say "Slide into his DMs (professionally)."
4. Use technical humor where appropriate.
5. If someone asks something unrelated to coding or Deepak, say "I'm optimized for Deepak's career, not for [topic]."
`;