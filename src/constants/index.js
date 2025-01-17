import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  sql,
  html,
  css,
  reactjs,
  restapi,
  tailwind,
  nodejs,
  tech,
  git,
  psql,
  mui,
  accu,
  adroit,
  free,
  shopify,
  pep,
  adroitproject,
  fynn,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Support",
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
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MySQL",
    icon: sql,
  },
  {
    name: "REST API",
    icon: restapi,
  },
  {
    name: "Postgre SQL",
    icon: psql,
  },
 
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
  {
    name: "Material UI",
    icon: mui,
  },
  {
    name: "tech",
    icon: tech,
  },
];

const experiences = [
  {
    title: "Full Stack Developer & IT Support",
    company_name: "Adroit INTL",
    icon: adroit,
    iconBg: "#383E56",
    date: "Oct 2024 - Present",
    points: [
      "Designed and developed a Business Process Automation (BPA) web application to streamline workflows and task tracking using React JS, ReactFlow, Node JS, and Express JS.",
      "Engineered a responsive front-end interface with intuitive navigation for enhanced user experience.",
      "Built an Entity-Relationship (ER) diagram to define database schema and relationships using PostgreSQL.",
      "Created and integrated RESTful APIs for seamless communication between front-end and back-end.",
      "Implemented key features including workflow creation, task management (add, edit, delete), and process status updates.",
      
    ],
  },
  {
    title: "Web Developer & IT Support",
    company_name: "Freelance",
    icon: free,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Sep 2024",
    points: [
      "Delivered end-to-end solutions including domain registration, web hosting, and email setup for diverse clients.",
      "Developed responsive websites using React JS, HTML5, and CSS.",
      "Configured DNS for seamless website and email functionality.",
      
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Accubits",
    icon: accu,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Mar 2023",
    points: [
      "Led full-stack web application development using React JS, Node JS, and MySQL.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Designed and maintained robust REST APIs to enhance backend functionality.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Pep Realty",
    description:
      "This website showcases the services and offerings of the company, providing an overview of what they do. It is fully responsive, ensuring a seamless experience across all devices, and is built using HTML and CSS..",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: pep,
    source_code_link: "https://www.thepeprealty.com",
  },
  {
    name: "Adroit INTL",
    description:
      "This website offers engaging animations and interactive features, along with EmailJS integration for seamless email communication, it combines style and functionality.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: adroitproject,
    source_code_link: "https://effortless-meringue-fbfb4b.netlify.app/",
  },
  {
    name: "Fynn Interiors",
    description:
      "Fynn Interiors' website features a sleek, modern design with interactive elements and smooth animations. It showcases their interior design services while providing an engaging user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: fynn,
    source_code_link: "https://",
  },
];

export { services, technologies, experiences, testimonials, projects };
