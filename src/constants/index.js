import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  meta,
  aljazary,
  shkarrealestate,
  // kakonsoft,
  twekl,
  tesla,
  shopify,
  restaurant,
  ecommerce,
  ecommercestrapi,
  movieapp,
  weatherapp,
  threejs,
  mysql,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Node js Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Shkar Real Estate · Full-time · Onsite",
    icon: shkarrealestate,
    iconBg: "#383E56",
    date: "Aug 2023 - Present",
    points: [],
  },
  {
    title: "Full Stack Developer",
    company_name: "Twekl Company · Full-time · Onsite",
    icon: twekl,
    iconBg: "#383E56",
    date: "Aug 2022 - Aug 2023",
    points: [],
  },
  {
    title: "Frontend Developer",
    company_name: "Al-Jazary · Full-time · Onsite",
    icon: aljazary,
    iconBg: "#383E56",
    date: "Jan 2022 - Aug 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Proficiently used Git and Github on a daily basis for version control, collaboration, and seamless code management throughout the development lifecycle",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Restaurant Landing Page",
    description:
      "Welcome to the Restaurant Landing Page! This project showcases a modern and responsive landing page for a restaurant designed to captivate visitors and provide a delightful user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "frontend",
        color: "green-text-gradient",
      },
      {
        name: "landing-page",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/mohammadnazm/restaurant-landing-page",
  },
  {
    name: "E-commerce Website",
    description:
      "Welcome to the E-commerce Website! This open-source project aims to provide a robust and feature-rich platform for e-commerce websites.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "context-api",
        color: "green-text-gradient",
      },
      {
        name: "e-commerce",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/mohammadnazm/e-commerce-react.js",
  },
  {
    name: "Weather App",
    description:
      "WeatherApp is a user-friendly weather application that provides real-time weather updates for any location worldwide. Stay prepared with ease!.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "front-end",
        color: "green-text-gradient",
      },
      {
        name: "weather-app",
        color: "pink-text-gradient",
      },
    ],
    image: weatherapp,
    source_code_link: "https://github.com/mohammadnazm/weather-app",
  },
  {
    name: "E-commerce with Payment Integration using strapi",
    description:
      "Full Stack E-Commerce Application With Payment Integration using Strapi & Sanity.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "front-end",
        color: "green-text-gradient",
      },
      {
        name: "e-commerce",
        color: "pink-text-gradient",
      },
    ],
    image: ecommercestrapi,
    source_code_link: "https://github.com/mohammadnazm/e-commerce-next.js",
  },
  {
    name: "Movix",
    description:
      "Welcome to MovieX, the cutting-edge movie app designed to enhance your cinematic experience.",
    tags: [
      {
        name: "react.js",
        color: "blue-text-gradient",
      },
      {
        name: "front-end",
        color: "green-text-gradient",
      },
      {
        name: "movie-app",
        color: "pink-text-gradient",
      },
    ],
    image: movieapp,
    source_code_link: "https://github.com/mohammadnazm/movie-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
