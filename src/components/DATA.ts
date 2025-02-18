import NextJS from "./icons/technical/NextJS.astro";
import NodeJS from "./icons/technical/NodeJS.astro";
import ExpressJS from "./icons/technical/ExpressJS.astro";
import Typescript from "./icons/technical/Typescript.astro";
import MongoDB from "./icons/technical/MongoDB.astro";
import Redis from "./icons/technical/Redis.astro";
import Solidity from "./icons/technical/Solidity.astro";
import Devops from "./icons/technical/Devops.astro";
import Blockchain from "./icons/technical/Blockchain.astro";
import Solana from "./icons/technical/Solana.astro";
import Kubernetes from "./icons/technical/Kubernetes.astro";
import AstroIcon from "./icons/technical/AstroIcon.astro";
import Tailwind from "./icons/technical/Tailwind.astro";
import ReactJS from "./icons/technical/ReactJS.astro";
import Firebase from "./icons/technical/Firebase.astro";
import Bootstrap from "./icons/technical/Bootstrap.astro";
import Sass from "./icons/technical/Sass.astro";
import Javascript from "./icons/technical/Javascript.astro";
import Java from "./icons/technical/Java.astro";
import Python from "./icons/technical/Python.astro";
import OCI from "./icons/technical/OCI.astro";
import Oracle from "./icons/technical/Oracle.astro";
import Shell from "./icons/technical/Shell.astro";
import SQL from "./icons/technical/SQL.astro";
import CPP from "./icons/technical/CPP.astro";
import WebRTC from "./icons/technical/WebRTC.astro";
import Git from "./icons/tools/Git.astro";
import Postman from "./icons/tools/Postman.astro";
import Docker from "./icons/tools/Docker.astro";
import GitHubColor from "./icons/tools/GitHubColor.astro";
import GitLab from "./icons/tools/GitLab.astro";
import Vercel from "./icons/tools/Vercel.astro";
import VSCode from "./icons/tools/VSCode.astro";
import MacOS from "./icons/tools/macOS.astro";
import Rollup from "./icons/tools/Rollup.astro";

const PROJECTTAGS = {
  NODE: {
    name: "Node.js",
    class: "bg-[#222222] text-white",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    class: "bg-[#323232] text-white",
    icon: ExpressJS,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    class: "bg-[#3178c661] text-white",
    icon: Typescript,
  },
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  REACT: {
    name: "React",
    class: "bg-[#23272f] text-white",
    icon: ReactJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    class: "bg-[#3f2c42] text-white",
    icon: Bootstrap,
  },
  SASS: {
    name: "SASS",
    class: "bg-[#6b717f] text-white",
    icon: Sass,
  },
  MONGODB: {
    name: "MongoDB",
    class: "bg-[#001e2b] text-white",
    icon: MongoDB,
  },
  FIREBASE: {
    name: "Firebase",
    class: "bg-[#5e5e5e] text-white",
    icon: Firebase,
  },
  REDIS: {
    name: "Redis",
    class: "bg-[#636466] text-white",
    icon: Redis,
  },
  ROLLUP: {
    name: "Rollup",
    class: "bg-[#a6432c6e] text-white",
    icon: Rollup,
  },

  SOLIDITY: {
    name: "Solidity",
  },
  ETHEREUM: {
    name: "Ethereum",
  },
  METAMASK: {
    name: "MetaMask",
  },
  WEB3JS: {
    name: "Web3.js",
  },
  THIRDWEB: {
    name: "Thirdweb",
  },
};

const SKILLS = {
  JAVA: {
    name: "Java",
    icon: Java,
  },
  PYTHON: {
    name: "Python",
    icon: Python,
  },
  JAVASCRIPT: {
    name: "JavaScript",
    icon: Javascript,
  },
  TYPESCRIPT: {
    name: "TypeScript",
    icon: Typescript,
  },
  CPP: {
    name: "C++",
    icon: CPP,
  },
  SQL: {
    name: "SQL",
    icon: SQL,
  },

  OCI: {
    name: "Oracle Cloud",
    icon: OCI,
  },
  REACT: {
    name: "React",
    icon: ReactJS,
  },
  NEXT: {
    name: "Next.js",
    icon: NextJS,
  },

  NODE: {
    name: "Node.js",
    icon: NodeJS,
  },
  EXPRESS: {
    name: "Express.js",
    icon: ExpressJS,
  },
  SHELL: {
    name: "Shell",
    icon: Shell,
  },
  MONGODB: {
    name: "MongoDB",
    icon: MongoDB,
  },
  REDIS: {
    name: "Redis",
    icon: Redis,
  },
  FIREBASE: {
    name: "Firebase",
    icon: Firebase,
  },
  ASTRO: {
    name: "Astro",
    icon: AstroIcon,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    icon: Tailwind,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: Bootstrap,
  },
  SASS: {
    name: "SASS",
    icon: Sass,
  },

  GIT: {
    name: "Git",
    icon: Git,
  },
  POSTMAN: {
    name: "Postman",
    icon: Postman,
  },
  DOCKER: {
    name: "Docker",
    icon: Docker,
  },
  APEX: {
    name: "APEX",
    icon: Oracle,
  },
  GITHUB: {
    name: "GitHub",
    icon: GitHubColor,
  },
  GITLAB: {
    name: "GitLab",
    icon: GitLab,
  },
  ROLLUP: {
    name: "Rollup",
    icon: Rollup,
  },
  VERCEL: {
    name: "Vercel",
    icon: Vercel,
  },
  MACOS: {
    name: "macOS",
    icon: MacOS,
  },
  VSCODE: {
    name: "VSCode",
    icon: VSCode,
  },

  SOLIDITY: {
    name: "Solidity",
    icon: Solidity,
  },
  SOLANA: {
    name: "Solana",
    icon: Solana,
  },
  BLOCKCHAIN: {
    name: "Blockchain",
    icon: Blockchain,
  },
  DEVOPS: {
    name: "DevOps",
    icon: Devops,
  },
  KUBERNETES: {
    name: "Kubernetes",
    icon: Kubernetes,
  },
  WEBRTC: {
    name: "WebRTC",
    icon: WebRTC,
  },
};

const NAVITEMS = [
  {
    title: "Experience",
    label: "experience",
    url: "/#experience",
  },
  {
    title: "Projects",
    label: "projects",
    url: "/#projects",
  },
  {
    title: "Skills",
    label: "skills",
    url: "/#skills",
  },
  {
    title: "About Me",
    label: "about-me",
    url: "/#about-me",
  },
  // {
  //   title: "Contact",
  //   label: "contact",
  //   url: "mailto:patelyashodhar012@gmail.com",
  // },
];

const EXPERIENCE = [
  {
    date: "January 2025 - Present",
    title: "Project Intern",
    company: "Oracle",
    type: "Internship",
    description: [
      "Working in a team that provides cloud infrastructure for internal Oracle projects, focusing on Oracle Cloud Infrastructure (OCI) and Oracle APEX.",
      "Automating cloud infrastructure processes, using Python and Shell Scripting to improve efficiency and scalability.",
    ],
  },
  {
    date: "January 2023 - December 2023",
    title: "Software Development Intern",
    company: "Drona Pay",
    type: "Part-time",
    description: [
      "Refactored and optimized a React codebase, reducing load times by 30%.",
      "Implemented best practices to improve code quality, reducing maintenance effort by 20%.",
      "Contributed to the development of Finos Perspective Dashboards, leveraging React to deliver data-driven visualizations.",
      "Resolved 100+ bugs and issues, maintaining dashboard stability.",
    ],
  },
  {
    date: "June 2023 - December 2023",
    title: "Maintainer",
    company: "TCET Open Source",
    type: "Part-time",
    description: [
      "Revamped the college website, resulting in significant improvement in user engagement and accessibility for a diverse user base of 4000 students.",
      "Enhanced UX with an intuitive design, reducing navigation time by 30%.",
      "Leveraged React and Tailwind CSS to contribute to the Resume Screener Project.",
    ],
  },
  {
    date: "February 2022 - July 2022",
    title: "React Development Intern",
    company: "Drona Pay",
    type: "Internship",
    description: [
      "Collaborated with design and product teams to align user interface with design guidelines, resulting in a 20% increase in user satisfaction.",
      "Developed and implemented behavioral fingerprints and keystroke dynamics, enhancing security by 15%.",
      "Created a comprehensive Postman automation suite, reducing testing time by 30% and enhancing efficiency in API functionality validation during development cycles.",
    ],
  },
];

const PROJECTS = [
  {
    title: "FundForTrust",
    subtitle: "Where Trust and Funding Meet",
    description:
      "FundForTrust, currently in development, is a blockchain-based crowdfunding platform designed to provide a safe, secure, and transparent way for creators and donors to engage in fundraising. By leveraging blockchain technology, it ensures donor guarantee, prevents data tampering, and enhances trust between creators and contributors. This platform aims to revolutionize crowdfunding by offering decentralized and immutable transaction records.",
    detail:
      "https://drive.google.com/file/d/1e8T6awd7yYmZnF4yR3y2y_l2oRKlJubJ/view?usp=sharing",
    github: "https://github.com/yashodharpatel/fundfortrust",
    link: "",
    image: "/projects/fundfortrust.webp",
    tags: [
      PROJECTTAGS.SOLIDITY,
      PROJECTTAGS.ETHEREUM,
      PROJECTTAGS.METAMASK,
      PROJECTTAGS.WEB3JS,
      PROJECTTAGS.THIRDWEB,
      PROJECTTAGS.REACT,
      PROJECTTAGS.TAILWIND,
    ],
  },
  {
    title: "Authease",
    subtitle: "Simplifying Authentication, Amplifying Development",
    description:
      "Authease, currently in development, is an open-source Node.js library that simplifies user authentication for frontend applications. It offers modular components, centralized configuration, and seamless integration with various frameworks, allowing developers to implement secure authentication features without extensive backend setup.",
    detail:
      "https://docs.google.com/document/d/18-8rOahuLzFEiHm6i_c9V5fHqA4sYOuEFaQlb3JAqyY/edit?usp=sharing",
    github: "https://github.com/yashodharpatel/authease",
    link: "",
    image: "/projects/authease.webp",
    tags: [
      PROJECTTAGS.NODE,
      PROJECTTAGS.EXPRESS,
      PROJECTTAGS.TYPESCRIPT,
      PROJECTTAGS.NEXT,
      PROJECTTAGS.TAILWIND,
      PROJECTTAGS.MONGODB,
      PROJECTTAGS.REDIS,
      PROJECTTAGS.ROLLUP,
    ],
  },
  {
    title: "Lingoleap",
    subtitle: "Elevate Your Language Journey",
    description:
      "Lingoleap is a web application offering interactive Hindi language therapy materials and learning exercises. It features structured Hindi content across beginner to advanced levels, gamified progression through XP and streaks, and supervisor oversight, providing an engaging platform for Hindi language therapy and learning.",
    detail:
      "https://docs.google.com/document/d/1K-LTq3XryjIPmVbhVND0o27JOETyU58s100DRQWR0LU/edit?usp=sharing",
    github: "https://github.com/yashodharpatel/Lingoleap",
    link: "https://drive.google.com/file/d/1IEzgALx_RX4I8iExSmb_al4i04t62JBP/view?usp=sharing",
    image: "/projects/lingoleap.webp",
    tags: [
      PROJECTTAGS.NODE,
      PROJECTTAGS.EXPRESS,
      PROJECTTAGS.NEXT,
      PROJECTTAGS.TAILWIND,
      PROJECTTAGS.MONGODB,
    ],
  },
  {
    title: "Codingpeer",
    subtitle: "Connecting Coders, Inspiring Innovation",
    description:
      "Codingpeer is a web application designed to connect developers and tech enthusiasts globally. Built with React.js and Firebase, it facilitates project collaboration, partner searching, and networking opportunities. Future plans include real-time chat, video conversations, and group creation features.",
    detail:
      "https://docs.google.com/document/d/1zLnrslIAHrNhGUnz19i4geDIjRlwXXubk9R3CR4d7cU/edit?usp=sharing",
    github: "https://github.com/yashodharpatel/Codingpeer",
    link: "https://drive.google.com/file/d/1BxbLVTyq1De3nDqRJfWUqYiG6qCMNjgo/view",
    image: "/projects/codingpeer.webp",
    tags: [
      PROJECTTAGS.REACT,
      PROJECTTAGS.FIREBASE,
      PROJECTTAGS.BOOTSTRAP,
      PROJECTTAGS.SASS,
    ],
  },
  {
    title: "Medishare",
    subtitle: "Bridging the Gap in Healthcare",
    description:
      "Medishare is a community pharmacy application that collects and distributes unused medicines to the needy. It features a medicine bank, volunteer management, and consumer protection measures, aiming to reduce drug wastage and improve medication access for underprivileged communities.",
    detail:
      "https://docs.google.com/document/d/1Rx2ty7P9X-XrZ9wUuoP-pXHtnz57gqR8usIACd9EBYI/edit?usp=sharing",
    github: "https://github.com/yashodharpatel/medishare",
    link: "https://drive.google.com/file/d/1f-ef8UZrMwNMJEJIwnEJkV-QjPXkLrBu/view?usp=sharing",
    image: "/projects/medishare.webp",
    tags: [
      PROJECTTAGS.REACT,
      PROJECTTAGS.FIREBASE,
      PROJECTTAGS.BOOTSTRAP,
      PROJECTTAGS.SASS,
    ],
  },
];

const SKILLSET = [
  {
    name: "Programming Languages",
    skills: [
      SKILLS.JAVA,
      SKILLS.PYTHON,
      SKILLS.JAVASCRIPT,
      SKILLS.TYPESCRIPT,
      SKILLS.CPP,
      SKILLS.SQL,
    ],
  },
  {
    name: "Technical",
    skills: [
      SKILLS.OCI,
      SKILLS.REACT,
      SKILLS.NEXT,
      SKILLS.NODE,
      SKILLS.EXPRESS,
      SKILLS.SHELL,
      SKILLS.MONGODB,
      SKILLS.REDIS,
      SKILLS.FIREBASE,
      SKILLS.ASTRO,
      SKILLS.TAILWIND,
      SKILLS.SASS,
      // SKILLS.BOOTSTRAP
    ],
  },
  {
    name: "Tools",
    skills: [
      SKILLS.POSTMAN,
      SKILLS.DOCKER,
      SKILLS.APEX,
      SKILLS.GIT,
      SKILLS.GITHUB,
      SKILLS.GITLAB,
      SKILLS.ROLLUP,
      SKILLS.VERCEL,
      SKILLS.MACOS,
      // SKILLS.VSCODE,
    ],
  },
  {
    name: "Currently Learning",
    skills: [
      SKILLS.SOLIDITY,
      SKILLS.BLOCKCHAIN,
      SKILLS.SOLANA,
      SKILLS.DEVOPS,
      SKILLS.KUBERNETES,
      // SKILLS.WEBRTC,
    ],
  },
];

export { NAVITEMS, EXPERIENCE, PROJECTS, SKILLSET };
