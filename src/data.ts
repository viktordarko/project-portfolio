export const hero = {
  eyebrow: "Hi, I'm",
  name: "Victor Vargas",
  role: "Full-Stack Developer · Technical Lead",
  tagline:
    "I architect, build, and ship production web apps end-to-end — React & TypeScript front-ends, Node, Express & MongoDB back-ends.",
  resumeUrl: "/resume.pdf",
};

export const aboutBio =
  "Full-stack developer with 3+ years shipping production web apps end to end. I currently lead the technology function at a coaching company, where I architected and deployed a multi-site video learning platform serving 200+ programs and 7TB of content. A background in high-volume technical support at Apple gives me a strong instinct for users — and for translating between technical and non-technical people.";

export interface SpokenLanguage {
  name: string;
  level: string;
  flag: string;
}

export const spokenLanguages: SpokenLanguage[] = [
  { name: "Spanish", level: "Native", flag: "🇲🇽" },
  { name: "English", level: "Fluent", flag: "🇨🇦" },
  { name: "French", level: "Fluent", flag: "🇫🇷" },
];

export interface Country {
  name: string;
  flag: string;
}

export const countries: Country[] = [
  { name: "Mexico", flag: "🇲🇽" },
  { name: "France", flag: "🇫🇷" },
  { name: "Spain", flag: "🇪🇸" },
  { name: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Canada", flag: "🇨🇦" },
];

export interface TechSkill {
  name: string;
  /** Key resolved to a react-icons component in TechStack. */
  icon: string;
}

export interface TechCategory {
  label: string;
  skills: TechSkill[];
}

export const techStack: TechCategory[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "Astro", icon: "astro" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Vite", icon: "vite" },
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Supabase", icon: "supabase" },
      { name: "Auth0", icon: "auth0" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Vimeo", icon: "vimeo" },
    ],
  },
  {
    label: "Testing",
    skills: [
      { name: "Vitest", icon: "vitest" },
      { name: "Playwright", icon: "playwright" },
    ],
  },
  {
    label: "Tooling",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "GitHub Actions", icon: "githubactions" },
      { name: "Vercel", icon: "vercel" },
      { name: "Netlify", icon: "netlify" },
      { name: "Render", icon: "render" },
      { name: "Docker", icon: "docker" },
    ],
  },
];

export interface Contact {
  id: string;
  name: string;
  contactInfo: string;
}

export const contact: Record<string, Contact> = {
  email: {
    id: "email",
    name: "Email",
    contactInfo: "victor.vargas.mx@gmail.com",
  },
  github: {
    id: "github",
    name: "GitHub",
    contactInfo: "https://github.com/viktordarko",
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    contactInfo: "https://www.linkedin.com/in/vicvargast",
  },
  instagram: {
    id: "instagram",
    name: "Instagram",
    contactInfo: "https://www.instagram.com/viktordarko/",
  },
  twitter: {
    id: "twitter",
    name: "Twitter",
    contactInfo: "https://twitter.com/ViktorDarko",
  },
};

export interface Experience {
  id: string;
  company: string;
  country: string;
  period: string;
  title: string;
  moreInfo: string;
  imgSrc: string;
  highlights?: string[];
}

export const experience: Record<string, Experience> = {
  alphafemme: {
    id: "alphafemme",
    company: "Alpha Femme",
    country: "Remote · Canada",
    period: "April 2023 - Present",
    title: "Technical Lead & Software Engineer",
    moreInfo:
      "I own the company's technology end to end — architecture, development, deployment, and production support of a full-stack video learning platform.",
    imgSrc: "/assets/experienceImages/af.webp",
    highlights: [
      "Architected and built a multi-site platform (Alpha Femme & Alpha-HD) on a React / TypeScript / Vite front-end and Node / Express / MongoDB back-end, deployed via a GitHub Actions CI/CD pipeline to Redis, Render and Netlify.",
      "The platform serves 200+ programs and 7TB of video; I designed the MongoDB schemas and built an admin dashboard that lets content managers assemble complex program hierarchies (bundles, memberships, combos).",
      "Led the migration of the 7TB video library from YouTube to Vimeo, including French-subtitle integration across 200+ programs for an international audience.",
      "Built progress-tracking and timestamped note-taking features to support the learning experience, and integrated Keap CRM for automated client onboarding.",
      "Lead a platform-unification initiative with Deloitte and the consultant team — migrating features to Next.js and Supabase (in production) while consolidating infrastructure and adding new functionality.",
    ],
  },
  appleMontreal: {
    id: "appleMontreal",
    company: "Apple",
    country: "Montreal, Canada",
    period: "November 2018 - April 2023",
    title: "Genius · Technical Specialist",
    moreInfo:
      "Four years at the Apple Store Fairview, growing from Specialist to Technical Expert to Genius.",
    imgSrc: "/assets/experienceImages/apple2.webp",
    highlights: [
      "Genius / Technical Specialist (2022–2023): Diagnosed and repaired complex Mac, iPhone, and iPad hardware and software issues in a high-volume environment; first technician in-store to successfully repair the Mac Studio Display, and mentored and trained fellow Geniuses on advanced repair and diagnostic workflows.",
      "Technical Expert (2020–2022): Delivered technical support and product demonstrations across the iOS ecosystem, explaining complex concepts to non-technical customers; supported customers remotely via RCC during the COVID store closure while completing technical training.",
      "Specialist (2018–2020): Premium consultative sales in a high-volume retail setting.",
    ],
  },
  appleDubai: {
    id: "appleDubai",
    company: "Apple",
    country: "Dubai, UAE",
    period: "January 2016 - March 2017",
    title: "Specialist",
    moreInfo: "Premium consultative sales as an Apple Specialist in Dubai.",
    imgSrc: "/assets/experienceImages/apple1.webp",
  },
  ushuaia: {
    id: "ushuaia",
    company: "Ushuaïa Ibiza",
    country: "Ibiza, Spain",
    period: "May 2017 - October 2017",
    title: "Promotion & Entrance Assistant Manager",
    moreInfo:
      "A summer season at one of the world's top dayclubs — assisting the promotion manager with payroll and managing the entrance guestlist.",
    imgSrc: "/assets/experienceImages/ushuaia.webp",
  },
  masdepierre: {
    id: "masdepierre",
    company: "Le Mas de Pierre",
    country: "St. Paul de Vence, France",
    period: "April 2016 - September 2016",
    title: "Waiter & Minibar Manager",
    moreInfo: "A season at a Relais & Châteaux hotel restaurant in the South of France.",
    imgSrc: "/assets/experienceImages/masdepierre.webp",
  },
  lpm: {
    id: "lpm",
    company: "La Petite Maison",
    country: "Dubai, UAE",
    period: "January 2015 - January 2016",
    title: "Chef de Rang",
    moreInfo:
      "Fine-dining service at La Petite Maison, a Michelin-level restaurant in Dubai, serving a mostly VIP clientele.",
    imgSrc: "/assets/experienceImages/lpm.webp",
  },
};

export interface Project {
  id: string;
  title: string;
  isPlaceholder: boolean;
  description?: string;
  /** Lead framework — rendered as the badge over the screenshot. */
  framework?: TechSkill;
  /** Supporting stack — rendered as the icon rail in the card footer. */
  stack?: TechSkill[];
  ssSource?: string;
  url?: string;
  /** Only set when the repository is public. */
  repoUrl?: string;
}

export const projects: Record<string, Project> = {
  coco: {
    id: "coco",
    title: "Coco · Service Dog Verification",
    description:
      "A phone-first verification page for a service dog — an inline viewer for certifications, handler ID and medical letters, plus an emergency protocol for first responders.",
    framework: { name: "Astro", icon: "astro" },
    stack: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "CSS Modules", icon: "css3" },
      { name: "Cloudinary", icon: "cloudinary" },
    ],
    ssSource: "/assets/projectImages/coco.webp",
    isPlaceholder: false,
    url: "https://coco.victorvargas.dev/",
  },

  card: {
    id: "card",
    title: "Canadian Card Compare",
    description:
      "Compares 8 Canadian credit cards side by side, normalizing points, Membership Rewards and cashback into a single estimated cash value so cards with different currencies can be judged against each other.",
    framework: { name: "Next.js", icon: "nextjs" },
    stack: [
      { name: "React", icon: "react" },
      { name: "TypeScript", icon: "typescript" },
      { name: "CSS Modules", icon: "css3" },
      { name: "Vitest", icon: "vitest" },
    ],
    ssSource: "/assets/projectImages/card.webp",
    isPlaceholder: false,
    url: "https://card.victorvargas.dev/",
    repoUrl: "https://github.com/viktordarko/card-ranking-app",
  },

  got: {
    id: "got",
    title: "GoT · Space Invaders",
    description:
      "A Game of Thrones-themed Space Invaders clone — collision detection, waves and scoring written from scratch in vanilla JavaScript and CSS. No engine, no framework.",
    framework: { name: "JavaScript", icon: "javascript" },
    stack: [
      { name: "HTML5", icon: "html5" },
      { name: "CSS3", icon: "css3" },
    ],
    ssSource: "/assets/projectImages/got.webp",
    isPlaceholder: false,
    url: "https://js-got.vercel.app/",
    repoUrl: "https://github.com/viktordarko/project-js-got",
  },

  placeholder: {
    id: "placeholder",
    title: "More on the way",
    isPlaceholder: true,
  },
};
