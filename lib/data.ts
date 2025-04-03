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
    name: "Twitter",
    href: "https://x.com/djtimog",
    icon: Twitter,
    account: "@djtimog"
  },
  { 
    name: "Github", 
    href: "https://github.com/djtimog/", 
    icon: Github,
    account: "github.com/djtimog"
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/djtimog",
    icon: Linkedin,
    account: "linkedin.com/in/djtimog"
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

export const technicalSkills = [
  "HTML, CSS, Tailwind CSS, Bootstrap",
  "JavaScript (ES6+), TypeScript",
  "React.js, Next.js",
  "State Management (Redux, Zustand, Context API)",
  "RESTful APIs & GraphQL Integration",
  "Component-Based Architecture & UI/UX Principles",
  "Performance Optimization & Accessibility (a11y)",
  "Version Control (Git, GitHub, GitLab)",
  "Testing (Jest, React Testing Library, Cypress)",
  "Responsive & Mobile-First Design",
  "Collaboration with Backend Teams & API Consumption"
];

export const professionalSkills = [
  "Excellent communication skills, both written and verbal",
  "Strong team player with the ability to collaborate effectively in cross-functional teams",
  "Analytical and solution-oriented mindset with a focus on creating efficient UI solutions",
  "Effective time management and ability to meet deadlines in fast-paced environments",
  "Adaptable and open to feedback for continuous learning and improvement",
  "Leadership experience in guiding UI development and delivering complex projects",
  "Passionate about building engaging, scalable, and high-performance web applications"
];

export const interests = [
  "Sci-Fi & Horror Movies",
  "Tech Contents",
  "Programming Documentations & Articles",
  "Online Games(Call of Duty)",
  "Building Side Projects",
  "Exploring New Frontend Tools & Trends"
];

