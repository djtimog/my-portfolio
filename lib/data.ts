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
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiJson } from "react-icons/si";
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
      "I use HTML to structure web content, providing the foundation for all web pages.",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    description:
      "I leverage CSS to style websites, ensuring responsive layouts and visually appealing designs.",
  },
  {
    name: "JavaScript",
    icon: FaJs,
    description:
      "I use JavaScript to add interactivity, dynamic content, and logic to web applications.",
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    description:
      "I use Bootstrap to quickly build responsive and modern UI components with a mobile-first approach.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description:
      "I use Tailwind CSS to efficiently style applications with utility-first classes for rapid UI development.",
  },
  {
    name: "React",
    icon: FaReact,
    description:
      "I develop interactive and reusable UI components using React for seamless user experiences.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description:
      "I use Next.js for server-side rendering, static site generation, and optimized performance in React apps.",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description:
      "I use Git for version control, enabling efficient collaboration and code management in development projects.",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description:
      "I use Node.js to build scalable backend services and handle asynchronous operations efficiently.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description:
      "I use Express.js to create RESTful APIs and backend services with minimal boilerplate.",
  },
  {
    name: "REST API",
    icon: SiJson,
    description:
      "I design and consume RESTful APIs to enable seamless communication between frontend and backend systems.",
  },
];

export const technicalSkills = [
  "HTML, CSS, Tailwind CSS, Bootstrap.",
  "JavaScript (ES6+), TypeScript.",
  "React.js, Next.js.",
  "RESTful APIs Integration.",
  "Version Control (Git, GitHub).",
  "Responsive & Mobile-First Design.",
  "Collaboration with Backend Teams & API Consumption.",
];

export const professionalSkills = [
  "Excellent communication skills, both written and verbal",
  "Strong team player with the ability to collaborate effectively in cross-functional teams",
  "Analytical and solution-oriented mindset with a focus on creating efficient UI solutions",
  "Effective time management and ability to meet deadlines in fast-paced environments",
  "Adaptable and open to feedback for continuous learning and improvement",
  "Passionate about building engaging, scalable, and high-performance web applications",
];

export const interests = [
  "Sci-Fi, Thriller & Horror Movies",
  "Programming Documentations & Articles",
  "Online Games(Call of Duty)",
  "Exploring New Frontend Tools & Trends",
];

export const projects: Project[] = [
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
    ],
    features: [
      "Live weather updates using API",
      "Automatic location detection",
      "Search by city or coordinates",
      "Responsive UI with forecast display",
    ],
    images: ["/project/weather-01.png", "/project/weather-02.png"],
    liveHref: "https://weather-pi-one-74.vercel.app/",
    githubHref: "https://github.com/djtimog/weather",
    path: "weather-app",
    year: "2024",
    duration: "3 days",
    projectType: "Personal Project",
    highlight:
      "Displays real-time weather and forecasts with location detection and a simple modern UI.",
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
      "My first Tailwind CSS project — focused on building a visually appealing, pixel-perfect homepage from a Figma design challenge.",
  },
];
