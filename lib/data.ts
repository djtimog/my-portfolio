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
    client: "Self",
    services: "Web Development",
    role: "Full Stack Developer",
    technologies: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "PostgreSQL",
      "ShadCN UI",
      "Pusher",
      "Clerk Auth",
    ],
    features: [
      "User authentication with Clerk",
      "Team creation and management",
      "Tournament hosting and registration",
      "Organizer and player dashboards",
      "Real-time updates using Pusher",
      "Feedback and announcements system",
    ],
    images: ["/images/tournament-hub.png"],
    liveHref: "https://pixelcore.gg",
    githubHref: "https://github.com/yourname/pixelcore",
    path: "/projects/tournament-hub",
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
    technologies: ["Next.js", "TypeScript", "OpenWeather API", "Tailwind CSS"],
    features: [
      "Live weather updates using API",
      "Automatic location detection",
      "Search by city or coordinates",
      "Responsive UI with forecast display",
    ],
    images: ["/images/weather-app.png"],
    liveHref: "https://weather.timog.dev",
    githubHref: "https://github.com/yourname/weather-app",
    path: "/projects/weather-app",
    year: "2024",
    duration: "2 weeks",
    projectType: "Personal Project",
    highlight:
      "Displays real-time weather and forecasts with location detection and a simple modern UI.",
  },
];
