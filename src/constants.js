// Skills Section Logo's
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import cLogo from './assets/tech_logo/c.png';
import cssLogo from './assets/tech_logo/css.png';
import expressjsLogo from './assets/tech_logo/express.png';
import figmaLogo from './assets/tech_logo/figma.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import htmlLogo from './assets/tech_logo/html.png';
import javaLogo from './assets/tech_logo/java.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import mcLogo from './assets/tech_logo/mc.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import postmanLogo from './assets/tech_logo/postman.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Experience Section Logo's
import cetpa from './assets/company_logo/cetpa.png';
import heal from './assets/company_logo/heal.png';
import syan from './assets/company_logo/Syan.png';
// Education Section Logo's
import imsec from './assets/education_logo/imsec.png';
import mds from './assets/education_logo/mds.webp';

// Project Section Logo's
import bookstore from './assets/work_logo/bookstore.png';
import expence from './assets/work_logo/expence.png';
import job from './assets/work_logo/job.png';


//certificates
import acenture from './assets/Certificates/accenture.png';
import AI from './assets/Certificates/AI.jpg';
import cetpa1 from './assets/Certificates/cetpa1.jpg';
import cetpa2 from './assets/Certificates/cetpa2.jpg';
import codewar from './assets/Certificates/codewar.jpg';
import coding from './assets/Certificates/coding.jpg';
import Csharp from './assets/Certificates/Csharp.jpg';
import Gov from './assets/Certificates/gov.jpg';
import hackling from './assets/Certificates/hackling.jpg';
import Heal1 from './assets/Certificates/Heal1.jpg';
import heal2 from './assets/Certificates/heal2.jpg';
import java from './assets/Certificates/java.jpg';
import javascript from './assets/Certificates/javaScript.jpg';
import softpro from './assets/Certificates/softpro.jpg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: syan ,
      role: "MERN Intern",
      company: "SYNTHRALABS",
      date: "April 2025- June 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
        " Next Js",
      ],
    },
    {
      id: 1,
      img: heal,
      role: "Web Development Intern",
      company: "HEAL BHARAT",
      date: "March 2025 - April 2025",
      desc: "Worked as a Web Development Intern with a focus on Frontend Development, contributing to innovative projects by building responsive and user-friendly web interfaces using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Collaborated closely with the team to enhance user experience and ensure seamless integration of frontend components.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      id: 2,
      img: cetpa,
      role: "React Js Intern",
      company: "CETPA",
      date: "29 January 2024 - 15 March 2024",
      desc: "Worked as a React Developer Intern, designing and implementing scalable UI components and responsive web applications using React.js, JavaScript, HTML, CSS, Bootstrap, and Tailwind CSS. Collaborated closely with the design team to translate Figma wireframes and prototypes into interactive, user-friendly React components and pages.",
      skills: [
        "React Js",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "Figma",
        "Tailwind CSS",
        "Mongo DB"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: imsec,
      school: "IMS Engineering College, Ghaziabad",
      date: "Sept 2022 - Active(2026)",
      grade: "8.12 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology (B.Tech) in Computer Science from IMS Engineering College, Ghaziabad, and I am in my pre-final year. Throughout my academic journey so far, I have developed a strong foundation in programming, software development, and computer science principles. My coursework includes subjects such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I have actively participated in workshops, coding contests, and technical events, which have helped me enhance both my practical skills and theoretical understanding. This experience has fueled my passion for full-stack development and laid a solid groundwork for my future professional growth in the tech industry.",
    },
    {
      id: 1,
      img: mds,
      school: "M.D.S Inter College, Najibabad(Bijnor)",
      date: "Sept 2019 - Aug 2020",
      grade: "88.17%",
      desc: "I completed my Class 10 education from M.D.S. Inter College, Najibabad, under the UP board, securing an impressive 88.17%. During this time, I developed a strong academic foundation, with a particular interest in Science and Computer Studies.",
      degree: "Class 10th",
    },
    {
      id: 2,
      img: mds,
      school: "M.D.S Inter College, Najibabad(Bijnor)",
      date: "Apr 2021 - March 2022",
      grade: "75.8%",
      desc: "I completed my Class 12 education with Physics, Chemistry, and Mathematics (PCM) from M.D.S. Inter College, Najibabad, under the UP Board. This academic phase played a crucial role in strengthening my analytical and problem-solving abilities. My exposure to core science subjects, especially Mathematics, sparked a deep interest in technology, which ultimately inspired me to pursue a career in computer science and web development.",
      degree: "Class 12th",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "BIBLIOBILLS",
      description:
        "Bibliobills is a powerful and user-friendly MERN (MongoDB, Express.js, React, Node.js) application designed as a full-featured online bookstore with an integrated admin panel. This platform allows users to browse, search, and purchase books effortlessly while providing admins with full control over inventory, user management, and order tracking.",
      image: bookstore,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Mongo Db","Node JS","Express JS", "API"],
      github: "https://github.com/AnshulKumar72/Bibliobiles-",
      webapp: "https://keen-douhua-81d574.netlify.app/",
    },
    {
      id: 1,
      title: "JOB PORTAL",
      description:
        "A comprehensive full-stack job portal website designed to connect job seekers with recruiters efficiently. This platform allows users to create detailed profiles, upload resumes, browse job listings, and apply to opportunities in real-time. Recruiters can post jobs, manage applicants, and track hiring progress through a dedicated dashboard.",
      image: job,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript","API"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "AI EXPENCE TRACKER",
      description:
        "A powerful and intelligent full-stack expense tracker built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to help users manage their finances efficiently. The application offers real-time tracking of income and expenses, detailed analytics, and AI-powered recommendations to help users make smarter financial decisions.",
      image: expence,
      tags: ["Mongo DB","Node JS","Express JS","React JS","Gemini AI","Prisma", "API", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
  
  ];  

  //certificate section

export const certificates = [
  {
    id: 1,
    title: "Accenture Job Simulation",
    organization: "Accenture",
    date: "November 2024",
    img: acenture,
    description: "Completed a comprehensive task given by accenture.",
    skills: ["Programming", "Solutions", "Skills"],
  },
  {
    id: 2,
    title: "React JS Intern",
    organization: "CETPA",
    date: "Jan 2024",
    img: cetpa1,
    description: "React JS skills and projects.",
    skills: ["Fully responsive frontend"],
  },
  {
    id: 3,
    title: "React JS Training",
    organization: "CETPA",
    date: "Jan 2024",
    img: cetpa2,
    description: "Mastered core React JS training.",
    skills: ["HTML","CSS","JAVA SCRIPT","REACT JS"],
  },
  {
    id: 4,
    title: "Web Development Intern",
    organization: "HEAL BHARAT",
    date: "November 2025",
    img: Heal1,
    description: "Work an a frontend developer.",
    skills: ["HTML","CSS","JAVA SCRIPT","REACT JS"],
  },
  {
    id: 5,
    title: "Heal Bharat WorkShop Attende",
    organization: "HEAL BHARAT",
    date: "November 2025",
    img: heal2,
    description: "Attend one day workshop organized by heal bharat.",
    skills: ["Web skills and tools"],
  },
  {
    id: 6,
    title: "Hackingly Hackathon (PIET, Harayana)",
    organization: "HACKINGLY",
    date: "May 2024",
    img: hackling,
    description: "Mastered core JavaScript algorithms and data structures.",
    skills: ["JavaScript", "ES6+", "Algorithms", "Recursion"],
  },
  {
    id: 7,
    title: "Build & Beyond- Innovate through Code, Hackathon",
    organization: "IMS Engineering College, Ghaziabad",
    date: "April 2025",
    img: coding,
    description: "Web project hackathon and My team got 3rd position in the event.",
    skills: ["React JS","Node JS","Express JS","MongoDB"],
  },
  {
    id: 8,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: codewar,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
  {
    id: 9,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: AI,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
  {
    id: 10,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: Gov,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
  {
    id:11,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: Csharp,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
  {
    id: 12,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: java,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
  {
    id: 13,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: javascript,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
  {
    id: 14,
    title: "Coding Challange(DSA)",
    organization: "IMS Engineering College, Ghaziabad",
    date: "May 2024",
    img: softpro,
    description: "In this DSA challange I got 2nd position and got silver medel and certificate os appreciation.",
    skills: ["Data Structure and Algorithm using Java"],
  },
];
