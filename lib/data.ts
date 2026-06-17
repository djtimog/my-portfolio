import {
  UserRound,
  BookText,
  FileJson,
  Headset,
  Github,
  Twitter,
  Linkedin,
  MessageCirclePlus,
} from "lucide-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaLock,
  FaPython,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiJson,
  SiTypescript,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiVitest,
  SiTestinglibrary,
  SiVercel,
  SiMysql,
  SiGo,
} from "react-icons/si";
import { Project } from "./types";

export const navLinks = [
  {
    name: "About Me",
    href: "/",
    icon: UserRound,
  },
  {
    name: "Resume",
    href: "/resume",
    icon: BookText,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: FileJson,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Headset,
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://x.com/djtimog",
    icon: Twitter,
    account: "@djtimog",
  },
  {
    name: "Github",
    href: "https://github.com/djtimog/",
    icon: Github,
    account: "github.com/djtimog",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/djtimog",
    icon: Linkedin,
    account: "linkedin.com/in/djtimog",
  },
  {
    name: "Whatsapp",
    href: "https://wa.me/+2347055354961",
    icon: MessageCirclePlus,
    account: "wa.me/+2347055354961",
  },
];

export const languages = [
  {
    name: "HTML",
    icon: FaHtml5,
    description:
      "Semantic markup for structuring accessible and well-organized web pages.",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    description:
      "Responsive layouts and modern UI styling with best practices.",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    description:
      "Core language for building dynamic and interactive web applications.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    description:
      "Type-safe JavaScript for scalable and maintainable applications.",
  },
  {
    name: "React",
    icon: FaReact,
    description:
      "Component-based UI development with efficient state management.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "Full-stack React framework with routing, SSR, and performance optimization.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "Utility-first CSS framework for rapid and consistent UI development.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description:
      "Backend runtime for building scalable APIs and server-side logic.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description:
      "Lightweight framework for building RESTful APIs and backend services.",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    description:
      "Flexible data querying for efficient client-server communication.",
  },
  {
    name: "REST API",
    icon: SiJson,
    description:
      "Designing and consuming RESTful services for web applications.",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    description:
      "Relational database management for structured and scalable data.",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description: "NoSQL database for flexible and document-based data storage.",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description: "Version control and collaboration using Git and GitHub.",
  },
  {
    name: "Testing",
    icon: SiTestinglibrary,
    description:
      "Component and unit testing using Vitest and React Testing Library.",
  },
];

export const skills = [
  {
    category: "Frontend",
    items: [
      {
        name: "HTML",
        icon: FaHtml5,
        description:
          "Structuring web pages with semantic and accessible markup.",
      },
      {
        name: "CSS",
        icon: FaCss3Alt,
        description: "Styling responsive layouts and modern UI designs.",
      },
      {
        name: "JavaScript",
        icon: FaJs,
        description: "Building dynamic and interactive web applications.",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        description: "Writing type-safe and scalable JavaScript applications.",
      },
      {
        name: "React",
        icon: FaReact,
        description:
          "Building reusable UI components and managing state efficiently.",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        description: "Creating optimized React apps with SSR and routing.",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Rapid UI development using utility-first CSS framework.",
      },
    ],
  },

  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        description: "Building scalable backend services and APIs.",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        description: "Creating RESTful APIs and server-side logic.",
      },
      {
        name: "GraphQL",
        icon: SiGraphql,
        description: "Efficient data fetching with flexible query structures.",
      },
      {
        name: "REST APIs",
        icon: SiJson,
        description: "Designing and consuming RESTful services.",
      },
      {
        name: "Authentication",
        icon: FaLock,
        description: "Implementing secure authentication systems (JWT, Clerk).",
      },
      {
        name: "Python",
        icon: FaPython,
        description: "Backend development, automation, and AI/ML workflows.",
      },
    ],
  },

  {
    category: "Database",
    items: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        description: "Managing relational databases and structured data.",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        description: "Handling NoSQL data for flexible applications.",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        description: "Writing queries and managing relational databases.",
      },
    ],
  },

  {
    category: "Tools & Testing",
    items: [
      {
        name: "Git",
        icon: FaGitAlt,
        description: "Version control and collaboration using Git & GitHub.",
      },
      {
        name: "Postman",
        icon: SiPostman,
        description: "Testing and debugging APIs.",
      },
      {
        name: "Vitest",
        icon: SiVitest,
        description: "Unit and component testing for modern React apps.",
      },
      {
        name: "React Testing Library",
        icon: SiTestinglibrary,
        description: "Testing UI components from a user perspective.",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        description: "Deploying and hosting frontend applications.",
      },
    ],
  },

  {
    category: "Currently Learning",
    items: [
      {
        name: "Go",
        icon: SiGo,
        description:
          "High-performance backend development and system-level programming.",
      },
      {
        name: "Java",
        icon: FaJava,
        description:
          "Object-oriented programming and enterprise backend development.",
      },
      {
        name: "Python (AI/ML)",
        icon: FaPython,
        description: "NumPy, scikit-learn, and machine learning pipelines.",
      },
    ],
  },
];

export const interests = [
  "Sci-Fi, Thriller & Horror Movies",
  "Programming Documentations & Articles",
  "Online Games (Call of Duty)",
  "Exploring New Frontend Tools & Trends",
  "AI & Machine Learning",
];

export const experiences = [
  {
    role: "Backend Engineering Trainee",
    company: "Spraditech",
    duration: "Jan 2026 – Present",
    description:
      "Undergoing structured backend engineering training focused on Python, Go, and Java for server-side development, alongside foundational exposure to AI/ML workflows.",
    responsibilities: [
      "Building server-side applications and RESTful APIs using Python and Node.js.",
      "Structured training in Go for high-performance backend services.",
      "Designing and querying relational (PostgreSQL, MySQL) and non-relational (MongoDB) databases.",
      "Gaining foundational exposure to AI/ML workflows including NumPy and scikit-learn.",
      "Utilizing AI development tools daily to accelerate learning and improve code quality.",
    ],
    type: "training",
  },
  {
    role: "Frontend Development Trainee",
    company: "Tech Master Institute",
    duration: "Apr 2024 – Apr 2025",
    description:
      "Completed a hands-on frontend training program focused on building responsive and user-friendly web applications.",
    responsibilities: [
      "Built responsive user interfaces with React and Tailwind CSS for multiple client-facing projects.",
      "Integrated REST APIs into frontend components, managing async data flows and error states.",
      "Collaborated on team projects using Git and GitHub for version control and code reviews.",
    ],
    type: "training",
  },
];

export const projects: Project[] = [
  {
    title: "GigTax – Freelance Tax Calculator",
    overview:
      "A free, production-grade freelance tax calculator covering 53+ countries. Built with Next.js 15 and TypeScript, it helps freelancers calculate income tax, expenses, and net earnings with country-specific tax brackets and regional breakdowns.",
    client: "General Public (Freelancers Worldwide)",
    services: "Full Stack Development & SEO",
    role: "Full Stack Developer",
    technologies: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Vercel",
      "Vercel Analytics",
      "Google AdSense",
    ],
    features: [
      "Tax calculations for 53+ countries with accurate regional brackets",
      "Custom SVG donut chart for tax summary visualization",
      "Full SEO infrastructure: sitemap, robots.txt, JSON-LD structured data, canonical tags",
      "Static generation with generateStaticParams for all country/region routes",
      "AdSense ad slot system with placeholder/live switching via environment variable",
      "Vercel Analytics and Speed Insights for performance monitoring",
      "Contextual not-found pages per country route",
    ],
    images: ["/project/gigtax-01.png", "/project/gigtax-02.png"],
    liveHref: "https://gigtax.xyz",
    githubHref: "https://github.com/djtimog/gigtax",
    path: "gigtax",
    year: "2026",
    duration: "2 weeks",
    projectType: "Full Stack Project",
    highlight:
      "A live, production-grade SaaS tool used by freelancers across 53+ countries to calculate tax obligations, built and launched solo with full SEO and monetization infrastructure.",
    references: [
      {
        label: "Live Site",
        value: "gigtax.xyz",
        link: "https://gigtax.xyz",
      },
    ],
  },
  {
    title: "TaskFlow – Full Stack Task Management App",
    overview:
      "A full-stack task management application that allows users to create, manage, and track tasks with authentication, task assignment, comments, and real-time state updates.",
    client: "Personal Project",
    services: "Full Stack Development",
    role: "Full Stack Developer",
    technologies: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "React Query",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "ShadCN UI",
    ],
    features: [
      "User authentication with JWT",
      "Create, update, delete and assign tasks to team members",
      "Comments and messaging system on tasks",
      "State management using Redux Toolkit",
      "Server state handling with React Query",
      "RESTful API built with Express and documented in Postman",
      "MongoDB database integration with Mongoose schemas",
      "Responsive UI with dark mode support",
    ],
    images: ["/project/taskflow-01.png", "/project/taskflow-02.png"],
    liveHref: "https://task-flow-dpj4.onrender.com/",
    githubHref: "https://github.com/djtimog/task-flow",
    path: "taskflow",
    year: "2025",
    duration: "1 week",
    projectType: "Full Stack Project",
    highlight:
      "A complete full-stack task management system showcasing end-to-end ownership of API design, authentication, database architecture, and modern frontend.",
    references: [
      {
        label: "Spraditech Welcome Test",
        value: "Spraditech",
        link: "https://spraditech.vercel.app",
      },
      {
        label: "Full Stack Open",
        value: "Fullstackopen",
        link: "https://fullstackopen.com/",
      },
    ],
  },
  {
    title: "GitHub Repository Browser – React Native App",
    overview:
      "A cross-platform mobile and web application built with React Native and Expo that fetches and browses GitHub repositories using the GitHub GraphQL API with Apollo Client v3.",
    client: "University of Helsinki – Full Stack Open",
    services: "Mobile App Development",
    role: "Mobile Developer",
    technologies: [
      "React Native",
      "Expo SDK 54",
      "GraphQL",
      "Apollo Client v3",
      "Formik",
      "Yup",
      "react-router-native",
    ],
    features: [
      "Fetches live GitHub repository data using the GitHub GraphQL API",
      "Apollo Client v3 with custom useQuery hooks for efficient caching",
      "Cross-platform support for iOS and Web via Expo",
      "Authentication flow with Formik and Yup form validation",
      "react-router-native navigation between screens",
      "Resolved complex Windows/Metro bundler ESM scheme errors",
    ],
    images: [
      "/project/github-browser-01.png",
      "/project/github-browser-02.png",
    ],
    liveHref: "",
    githubHref: "https://github.com/djtimog/rate-repository-app",
    path: "github-browser",
    year: "2026",
    duration: "2 weeks",
    projectType: "Full Stack Open – React Native Module",
    highlight:
      "A production-grade React Native app built as the capstone project for the University of Helsinki Full Stack Open React Native module, demonstrating GraphQL, Apollo Client, and cross-platform mobile development.",
    references: [
      {
        label: "Course",
        value: "Full Stack Open React Native",
        link: "https://fullstackopen.com/en/part10",
      },
    ],
  },
  {
    title: "ChefClaude – AI Recipe Generator",
    overview:
      "A web application that integrates with the Anthropic Claude API to generate real-time recipes based on ingredients a user has at home. Originally built as a personal project for a close friend.",
    client: "Personal Project",
    services: "Frontend Development & AI Integration",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "Anthropic Claude API", "Vite"],
    features: [
      "Programmatic API calls to the Anthropic Claude API",
      "Ingredient-based recipe generation in real time",
      "Prompt engineering for consistent, structured recipe output",
      "Graceful error handling for API failures and timeouts",
      "Lightweight Vite build system",
    ],
    images: ["/project/chefclaude-01.png", "/project/chefclaude-02.png"],
    liveHref: "https://chef-claude-one.vercel.app/",
    githubHref: "https://github.com/djtimog/Chef-Claude",
    path: "chefclaude",
    year: "2025",
    duration: "1 week",
    projectType: "Personal Project",
    highlight:
      "My first AI-integrated project — built to solve a real everyday problem using the Anthropic Claude API with custom prompt engineering for reliable recipe output.",
    references: [
      {
        label: "AI",
        value: "Anthropic Claude API",
        link: "https://www.anthropic.com/",
      },
      {
        label: "Build Tool",
        value: "Vite Docs",
        link: "https://vitejs.dev/",
      },
    ],
  },
  {
    title: "Halloween AI Story Website",
    overview:
      "A Node.js-powered website that allows users to submit stories and uses Gemini AI to determine if a story is scary or not. Includes email subscription, story filtering, and a clean static frontend served with a custom Node HTTP server.",
    client: "General Public (Readers & Horror Fans)",
    services: "Backend Web App Development",
    role: "Full Stack Developer",
    technologies: [
      "Node.js (HTTP server)",
      "JavaScript",
      "Gemini AI",
      "Jest",
      "HTML & CSS",
      "Nodemailer",
      "Node Cron",
      "Sanitize Html",
      "JSON-based data storage",
    ],
    features: [
      "Custom Node.js server without Express",
      "AI-powered scary story detection using Gemini",
      "Story submission system (scary & non-scary)",
      "Email subscription for daily stories",
      "Jest testing with ignored files configuration",
      "Static file serving for HTML/CSS/JS",
    ],
    images: ["/project/halloween-01.png", "/project/halloween-02.png"],
    liveHref: "https://halloween-zyop.onrender.com",
    githubHref: "https://github.com/djtimog/halloween",
    path: "halloween-stories",
    year: "2025",
    duration: "1 week",
    projectType: "Personal Project",
    highlight:
      "An AI-enhanced Halloween storytelling site where users submit stories, join a mailing list, and receive daily spooky stories powered by Gemini AI — built without Express to deepen Node.js fundamentals.",
    references: [
      {
        label: "AI",
        value: "Gemini API",
        link: "https://ai.google.dev/",
      },
      {
        label: "Testing",
        value: "Jest Testing Framework",
        link: "https://jestjs.io/",
      },
      {
        label: "Email",
        value: "Nodemailer Docs",
        link: "https://nodemailer.com/",
      },
    ],
  },
  {
    title: "Tournament Hub Platform",
    overview:
      "A full-featured esports platform for hosting and managing tournaments, with real-time updates and role-based access control.",
    client: "General Public (Gamers)",
    services: "Web App Development",
    role: "Full Stack Developer",
    technologies: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "ShadCN UI",
      "Pusher",
      "Clerk Auth",
      "Zod",
      "Tailwind CSS",
      "React Hook Form",
    ],
    features: [
      "User authentication with Clerk",
      "Team creation and management",
      "Tournament hosting and registration",
      "Organizer and player dashboards",
      "Real-time updates using Pusher",
      "Feedback and announcements system",
    ],
    images: ["/project/pixelcore-01.png", "/project/pixelcore-02.png"],
    liveHref: "https://pixelcore-gaming.vercel.app",
    githubHref: "https://github.com/djtimog/pixelcore-gaming",
    path: "tournament-hub",
    year: "2024",
    duration: "Ongoing",
    projectType: "Personal Project",
    highlight:
      "An esports hub where gamers can host tournaments, form teams, and manage matches in real time — the early concept for BracketRush.",
    references: [
      {
        label: "Realtime",
        value: "Pusher Docs",
        link: "https://pusher.com/docs",
      },
      {
        label: "Auth",
        value: "Clerk Documentation",
        link: "https://clerk.com/docs",
      },
    ],
  },
  {
    title: "Meme Generator App",
    overview:
      "An interactive meme generator that allows users to create and customize memes with draggable text, styling options, and image export functionality.",
    client: "Personal Project",
    services: "Frontend Development",
    role: "Frontend Developer",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "html2canvas",
    ],
    features: [
      "Drag and position text on images",
      "Customize font, color, and size",
      "Generate and download memes",
      "Responsive and interactive UI",
      "Canvas-based rendering using html2canvas",
    ],
    images: ["/project/meme-01.png", "/project/meme-02.png"],
    liveHref: "https://meme-generator-six-rust.vercel.app/",
    githubHref: "https://github.com/djtimog/meme-generator",
    path: "meme-generator",
    year: "2025",
    duration: "3 days",
    projectType: "Personal Project",
    highlight:
      "A fun and interactive meme generator showcasing advanced UI interactions, drag-and-drop functionality, and dynamic canvas rendering.",
    references: [],
  },
  {
    title: "Weather Forecast App",
    overview:
      "A clean, responsive weather app that provides real-time forecasts and location-based updates using the OpenWeather API.",
    client: "Self",
    services: "Frontend Development",
    role: "Frontend Developer",
    technologies: [
      "Next.js",
      "TypeScript",
      "OpenWeather API",
      "Tailwind CSS",
      "ShadCN UI",
      "React Snowfall",
    ],
    features: [
      "Live weather updates using OpenWeather API",
      "Automatic location detection",
      "Search by city or coordinates",
      "Responsive UI with forecast display",
    ],
    images: ["/project/sky-watch-01.png", "/project/sky-watch-02.png"],
    liveHref: "https://weather-pi-one-74.vercel.app/",
    githubHref: "https://github.com/djtimog/weather",
    path: "weather-app",
    year: "2025",
    duration: "3 days",
    projectType: "Personal Project",
    highlight:
      "Displays real-time weather and forecasts with location detection and a simple modern UI.",
    references: [
      {
        label: "API",
        value: "OpenWeather API",
        link: "https://openweathermap.org/api",
      },
    ],
  },
  {
    title: "Language Academy Website",
    overview:
      "A responsive educational landing page designed and developed for the TeachMaster program. Built from a Figma design to practice design-to-code skills and modern responsive layouts.",
    client: "TeachMaster Program",
    services: "Frontend Development & UI Implementation",
    role: "Team Lead / Frontend Developer",
    technologies: [
      "Next.js",
      "React Bootstrap",
      "Sass",
      "Swiper.js",
      "Yup",
      "React Hook Form",
      "Bootstrap Icons",
      "FontAwesome",
    ],
    features: [
      "Responsive layout across all screen sizes",
      "Modern educational landing page UI",
      "Implemented directly from Figma design",
      "Team collaboration and version control using GitHub",
      "Smooth animations and transitions with Swiper.js",
    ],
    images: ["/project/language-01.png", "/project/language-02.png"],
    liveHref: "https://langacademy.vercel.app/",
    githubHref: "https://github.com/djtimog/my-app",
    path: "language-academy",
    year: "2024",
    duration: "2 weeks",
    projectType: "Team Project",
    highlight:
      "Developed a responsive and visually engaging homepage from a Figma design as part of the TeachMaster program, leading a team and improving my design-to-code workflow.",
    references: [
      {
        label: "Design",
        value: "Figma Mockup",
        link: "https://www.figma.com/design/5hb9TYUm3OrazIzQdXCV6R/languageacad?m=auto&t=HLJAtxGEbzJk8Zvh-6",
      },
    ],
  },
];
