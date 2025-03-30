import {
  UserRound,
  BookText,
  FileJson,
  Headset,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact, FaGitAlt, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiExpress, SiJson } from "react-icons/si";

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
    name: "Github", 
    href: "https://github.com/djtimog/", 
    icon: Github 
  },
  {
    name: "Twitter",
    href: "https://x.com/darling23g",
    icon: Twitter,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ogunleye-timilehin-860502275/",
    icon: Linkedin,
  },
];

export const languages = [
  {
    name: "HTML",
    icon: FaHtml5,
    description: "I use HTML to structure web content, providing the foundation for all web pages."
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    description: "I leverage CSS to style websites, ensuring responsive layouts and visually appealing designs."
  },
  {
    name: "JavaScript",
    icon: FaJs,
    description: "I use JavaScript to add interactivity, dynamic content, and logic to web applications."
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    description: "I use Bootstrap to quickly build responsive and modern UI components with a mobile-first approach."
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    description: "I use Tailwind CSS to efficiently style applications with utility-first classes for rapid UI development."
  },
  {
    name: "React",
    icon: FaReact,
    description: "I develop interactive and reusable UI components using React for seamless user experiences."
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    description: "I use Next.js for server-side rendering, static site generation, and optimized performance in React apps."
  },
  {
    name: "Git",
    icon: FaGitAlt,
    description: "I use Git for version control, enabling efficient collaboration and code management in development projects."
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description: "I use Node.js to build scalable backend services and handle asynchronous operations efficiently."
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description: "I use Express.js to create RESTful APIs and backend services with minimal boilerplate."
  },
  {
    name: "REST API",
    icon: SiJson,
    description: "I design and consume RESTful APIs to enable seamless communication between frontend and backend systems."
  }
];

