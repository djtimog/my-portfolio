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
  SiCplusplus,
  SiMysql,
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
        name: "Python",
        icon: FaPython,
        description: "Backend development and scripting.",
      },
      {
        name: "C/C++",
        icon: SiCplusplus,
        description: "Understanding low-level and system programming concepts.",
      },
    ],
  },
];

export const interests = [
  "Sci-Fi, Thriller & Horror Movies",
  "Programming Documentations & Articles",
  "Online Games(Call of Duty)",
  "Exploring New Frontend Tools & Trends",
];

export const experiences = [
  {
    role: "Backend Development Trainee",
    company: "Spraditech",
    duration: "2025 – Present",
    description:
      "Currently undergoing backend development training, focusing on server-side architecture, APIs, and system-level programming.",
    responsibilities: [
      "Learning backend development using Python and Node.js.",
      "Building APIs and working with databases.",
      "Exploring system programming concepts with C/C++.",
    ],
    type: "training",
  },
  {
    role: "Frontend Development Trainee",
    company: "Tech Master Institute",
    duration: "2024 – 2025",
    description:
      "Completed a hands-on frontend training program focused on building responsive and user-friendly web applications.",
    responsibilities: [
      "Built responsive user interfaces with React and Tailwind CSS.",
      "Integrated REST APIs and improved frontend performance.",
      "Collaborated on team projects using Git and GitHub.",
    ],
    type: "training",
  },
  {
    role: "Administrative Assistant (SIWES)",
    company: "Local Government Council – Budget Department",
    duration: "2024 (6 months)",
    description:
      "Supported budget operations and data organization while developing analytical and teamwork skills.",
    responsibilities: [
      "Maintained accurate records and financial documents.",
      "Prepared and reviewed budget-related reports.",
      "Assisted in administrative and data organization tasks.",
    ],
    type: "work",
  },
];

export const projects: Project[] = [
  {
    title: "TaskFlow – Full Stack Task Management App",
    overview:
      "A full-stack task management application that allows users to create, manage, and track tasks with authentication and real-time state updates. Built with modern frontend and backend technologies.",
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
      "Create, update, and delete tasks",
      "State management using Redux Toolkit",
      "Server state handling with React Query",
      "RESTful API built with Express",
      "MongoDB database integration",
      "Responsive UI with Tailwind CSS",
    ],
    images: ["/project/taskflow-01.png", "/project/taskflow-02.png"],
    liveHref: "https://task-flow-dpj4.onrender.com/",
    githubHref: "https://github.com/djtimog/task-flow",
    path: "taskflow",
    year: "2025",
    duration: "1 week",
    projectType: "Full Stack Project",
    highlight:
      "A complete full-stack task management system showcasing my ability to build scalable applications with authentication, API design, and modern frontend architecture.",
    references: [
      {
        label: "Spraditech Welcome Test",
        value: "Spraditech",
        link: "https://spraditech.vercel.app",
      },
      {
        label: "Full stack open",
        value: "Fullstackopen",
        link: "https://fullstackopen.com/",
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
      "A fun and interactive meme generator showcasing advanced UI interactions, drag-and-drop functionality, and dynamic rendering.",
    references: [
      {
        label: "Canva Design",
        value: "canva",
        link: "https://canva.com/",
      },
    ],
  },
  {
    title: "ChefClaude AI Recipe",
    overview:
      "A Vite-powered React library that integrates AI models (Gemini and HuggingFace) to generate and suggest recipes based on user-provided ingredients. Designed as a reusable component library for modern web apps.",
    client: "My Ex-Girlfriend",
    services: "Frontend Library Development",
    role: "Frontend Developer",
    technologies: [
      "Vite",
      "React DOM",
      "@google/genai",
      "TypeScript",
      "Plugin React (Vite)",
    ],
    features: [
      "Reusable React components for recipe generation",
      "Integration with Gemini AI APIs",
      "Ingredient-based recipe suggestions",
      "Lightweight Vite build system",
      "Linting and hooks support via ESLint",
      "Preview mode with Vite",
      "TypeScript type safety for React components",
    ],
    images: ["/project/chefclaude-01.png", "/project/chefclaude-02.png"],
    liveHref: "https://chef-claude-one.vercel.app/",
    githubHref: "https://github.com/djtimog/Chef-Claude",
    path: "chefclaude",
    year: "2025",
    duration: "1 Week",
    projectType: "Personal Project",
    highlight:
      "A modern Vite + React library that leverages AI APIs to create intelligent recipe components for web developers.",
    references: [
      {
        label: "AI",
        value: "Gemini API",
        link: "https://ai.google.dev/",
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
      "A Node.js-powered website that allows users to submit stories and uses AI to determine if a story is scary or not. Includes email subscription, story filtering, and a clean static frontend served with a custom Node HTTP server.",
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
      "Automatic metadata for SEO",
      "Daily story scheduling support (optional)",
    ],
    images: ["/project/halloween-01.png", "/project/halloween-02.png"],
    liveHref: "https://halloween-zyop.onrender.com",
    githubHref: "https://github.com/djtimog/halloween",
    path: "halloween-stories",
    year: "2025",
    duration: "1 Week",
    projectType: "Personal Project",
    highlight:
      "An AI-enhanced Halloween storytelling site where users can submit stories, join a mailing list, and receive daily spooky stories powered by Gemini AI.",
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
      {
        label: "Inspiration",
        value: "Scrimba Developer Project",
        link: "https://www.youtube.com/watch?v=LzMnsfqjzkA&t=122109s",
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
      "An esports hub where gamers can host tournaments, form teams, and manage matches in real time.",
    references: [
      {
        label: "Design",
        value: "Figma Wireframes",
        link: "https://www.figma.com/design/rlvPx8Ga2ACVfqKkmMTZwe/Esport-Gaming-Team-Landing-Page--Community-?m=auto&t=HLJAtxGEbzJk8Zvh-6",
      },
      {
        label: "Inspiration",
        value: "Call of Duty Mobile; I was inspired by the love of this game",
      },
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
    title: "Weather Forecast App",
    overview:
      "A clean, responsive weather app that provides real-time forecasts and location-based updates.",
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
      "Live weather updates using API",
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
      {
        label: "Design",
        value: "Frontend Mentor challenge",
        link: "https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49",
      },
      {
        label: "Inspiration",
        value: "Frontend Mentor challenge",
        link: "https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49",
      },
    ],
  },

  {
    title: "Next.js Dashboard App",
    overview:
      "A full-featured admin dashboard built with Next.js, showcasing authentication, database integration, and modern UI components.",
    client: "Self (Next.js Official Tutorial)",
    services: "Frontend Development & Authentication",
    role: "Frontend Developer",
    technologies: [
      "Next.js 15",
      "Next Auth v5",
      "Vercel Postgres",
      "Tailwind CSS",
      "TypeScript",
      "Zod",
    ],
    features: [
      "User authentication using NextAuth",
      "PostgreSQL database with Vercel integration",
      "Responsive dashboard with charts and tables",
      "Dynamic routes and layouts using Next.js App Router",
      "Form validation using Zod",
      "Secure password hashing with bcrypt",
    ],
    images: ["/project/acme-01.png", "/project/acme-02.png"],
    liveHref: "https://acme-gamma-three.vercel.app/",
    githubHref: "https://github.com/djtimog/nextJsApp/",
    path: "next-dashboard",
    year: "2025",
    duration: "1 weeks",
    projectType: "Learning Project",
    highlight:
      "A comprehensive learning project from the Next.js official tutorial that demonstrates full-stack functionality with authentication and data management.",
    references: [
      {
        label: "Tutorial",
        value: "Next.js Official Guide",
        link: "https://nextjs.org/learn",
      },
      {
        label: "Auth",
        value: "NextAuth Docs",
        link: "https://authjs.dev",
      },
      {
        label: "Database",
        value: "Vercel Postgres Docs",
        link: "https://vercel.com/docs/storage/vercel-postgres",
      },
    ],
  },
  {
    title: "Tic Tac Toe Game",
    overview:
      "An interactive two-player Tic Tac Toe game built with Next.js, focusing on responsive design, clean UI, and smooth gameplay logic.",
    client: "Self",
    services: "Frontend Development",
    role: "Frontend Developer",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Two-player mode with real-time game logic",
      "Dynamic board updates with turn indicators",
      "Win and draw detection system",
      "Responsive and minimal UI design",
      "Restart and reset functionality",
    ],
    images: ["/project/tic-01.png", "/project/tic-02.png"],
    liveHref: "https://tic-tac-toe-neon-xi.vercel.app",
    githubHref: "https://github.com/djtimog/tic-tac-toe",
    path: "tic-tac-toe",
    year: "2024",
    duration: "2 days",
    projectType: "Personal Project",
    highlight:
      "A simple yet engaging two-player Tic Tac Toe game showcasing game logic implementation, responsive design, and UI interaction in Next.js.",
    references: [
      {
        label: "Logic Inspiration",
        value: "React Tic Tac Toe Docs",
        link: "https://react.dev/learn/tutorial-tic-tac-toe",
      },
      {
        label: "Design",
        value: "React Tic Tac Toe Docs",
        link: "https://react.dev/learn/tutorial-tic-tac-toe",
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
      "Developed a responsive and visually engaging homepage from a Figma design as part of the TeachMaster program. This project improved my design-to-code workflow and leadership experience.",
    references: [
      {
        label: "Design",
        value: "Figma Mockup",
        link: "https://www.figma.com/design/5hb9TYUm3OrazIzQdXCV6R/languageacad?m=auto&t=HLJAtxGEbzJk8Zvh-6",
      },
      {
        label: "Icons",
        value: "Bootstrap Icons",
        link: "https://icons.getbootstrap.com",
      },
      {
        label: "Library",
        value: "Swiper.js",
        link: "https://swiperjs.com",
      },
    ],
  },

  {
    title: "Easybank Landing Page",
    overview:
      "A responsive and modern landing page built for the Easybank Frontend Mentor challenge. The design focuses on clean layouts, accessibility, and smooth responsiveness across devices.",
    client: "Frontend Mentor Challenge",
    services: "UI/Frontend Development",
    role: "Frontend Developer",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    features: [
      "Fully responsive design for all screen sizes",
      "Reusable and well-structured components",
      "Pixel-perfect implementation of the given design",
      "Accessible and SEO-friendly layout",
    ],
    images: ["/project/easybank-01.png", "/project/easybank-02.png"],
    liveHref: "https://easybank-mauve.vercel.app/",
    githubHref: "https://github.com/djtimog/easybank",
    path: "easybank-landing",
    year: "2024",
    duration: "2 days",
    projectType: "Frontend Mentor Challenge",
    highlight:
      "My first Tailwind CSS project , focused on building a visually appealing, pixel-perfect homepage from a Figma design challenge.",
    references: [
      {
        label: "Challenge",
        value: "Frontend Mentor Design",
        link: "https://frontendmentor.io",
      },
      {
        label: "Design System",
        value: "Easybank Style Guide",
        link: "https://frontendmentor.io/challenges",
      },
    ],
  },
];
