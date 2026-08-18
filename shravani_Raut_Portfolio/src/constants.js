// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import prodigyLogo from './assets/company_logo/prodigy.png';
import YugyatraLogo from './assets/company_logo/yugyatra.png';  

// Education Section Logo's
import ternaLogo from './assets/education_logo/terna.png';
import rcfLogo from './assets/education_logo/RCF.png';
import dicsLogo from './assets/education_logo/DICS.png';

// Project Section Logo's
 import nss from './assets/extra/nss1.jpg';
 import nss2 from './assets/extra/nss2.png';
import nss3 from './assets/extra/nss3.png';
import s1 from './assets/extra/s1.png';
import s2 from './assets/extra/s2.png';
import s3 from './assets/extra/s3.png';
import a1 from './assets/extra/a1.jpeg';
import a2 from './assets/extra/a2.jpeg';
import a3 from './assets/extra/a3.jpeg';
import a4 from './assets/extra/a4.jpeg';

// certificates Section Logo's
import bitnbuildLogo from './assets/certificates_logo/bitnbuild.png';
import python1Logo from './assets/certificates_logo/python1.png';
import power from './assets/certificates_logo/power.png';
import SQL from './assets/certificates_logo/SQL.png'
import yugyatra from './assets/certificates_logo/yug_yatra.png';  
import Avalon from './assets/certificates_logo/Avalon.png';

 

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },  
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
       
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: prodigyLogo,
      role: "Web Developer",
      company: "Prodigy InfoTech Intern",
      date: "June 2025 - July 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },

    {
      id: 1,
      img: YugyatraLogo,
      role: "SoftwareDeveloper",
      company: "Yuga Yatra Retail ( OPC ) Private Limited",
      date: "June 2026 - August 2026",
      desc: " Worked on developing and maintaining web applications, implementing new features, and optimizing existing code for performance and scalability. Collaborated with the design team to create user-friendly interfaces and ensure seamless user experiences.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
      ],
    },
    
  ];
  
  export const education = [
    
    {
      id: 0,
      img: ternaLogo,
      school: "Terna Engineering College ",
      date: "Aug 2023 - May 2027",
      grade: "8.2CGPA Overall",
      desc: "I'm currently persuing Batchlor's Degree from Terna Engineering College and Currently I'm in 3rd Year who is kneen about learning about new technologies and programming languages.   .",
      degree: "Bachelor of  Engineering- Information Technology ",
    },
    {
      id: 1,
      img: rcfLogo,
      school: "R.C.F College, Alibag",
      date: "June 2022 - March 2023",
      grade: "68%",
      desc: "I completed my class 12 education from R.C.F College, Alibag, under the HSC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "HSC(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: dicsLogo,
      school: "D.I.C's English medium School,Nigdi",
      date: "2009-2020",
      grade: "97.6%",
      desc: "I completed my class 10 education from D.I.C's English medium School,Nigdi, under the SSC board, which was my basic step towards my learning journey.",
      degree: "SSC(X)",
    },
  ];
  
  export const projects = [
    
    {
      id: 0,
      title: "Workspace Management System",
      description:"Workspace Management System** is a Python-based desktop application built with Tkinter, MySQL, and Matplotlib to manage employee tasks, attendance, notifications, and performance reports. It provides separate Admin and Employee modules with database-driven task management and visual analytics, helping streamline everyday workplace operations.",
      tags: ["python"],
      github: "https://github.com/Shravani2137/Workspace_management.git",
      webapp: " ",
    },
     
    {
      id: 1,
      title: "Salon ManagementEasy Q Sysytem",
      description:"An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    
      tags: ["React JS", "Node.js", "NPM"],
      github: "https://github.com/Shravani2137/Salon-management-system-.git",
      webapp: " ",
    },
  
    {
      id: 2,
      title: "Smritika Jounal",
      description:"Smritika is a personalized digital journal and life-management web app that combines mood tracking, journaling, memories, goals, bucket lists, and personal favorites into one interactive dashboard. Built with HTML, CSS, JavaScript, and Firebase, it provides a private and visually engaging space for self-reflection and personal organization. ",
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shravani2137/Smritika-Journal ",
      webapp: " ",
    },

     {
      id: 3,
      title: "SheCares- Smart Women Health Care Platform ",
      description:
        "Built SheCares, a women-focused period tracking web application using modern web technologies, featuring cycle prediction, symptom tracking, and personalized wellness support.",
    
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Shravani2137/Smritika-Journal ",
      webapp: " ",
    },
  ]; 

export const Certificates = [
  {
    id: 0,
    title: "SQL Certificate",
    image: SQL,
    description: "Completed a test-based SQL certification validating basic knowledge of queries and database concepts.",
    tags: ["SQL", "Database"],
    link: "/certificates/sql.png"
  },
  {
    id: 1,
    title: "python Certificate",
    image: python1Logo,
    description: "Completed Python Programming Course from infosys springboard",
    tags: ["HTML", "CSS", "JS"],
    link: " "
  },
  
  {
    id: 2,
    title: "Bit N Build Hackathon",
    image: bitnbuildLogo,
    description: "Completed Data Structures & Algorithms training.",
    tags: ["reactjs", "hackathon"],
    link: " "
  },

  {
    id: 3,
    title: "Power Bi Certificate",
    image: power,
    description: "Completed Power BI training covering data modeling, DAX, interactive dashboards, and data visualization for business insights.",
    tags: ["powerbi", "data-visualization", "analytics"],
    link: " "
  },

  {
    id: 4,
    title: " Innov 4.0 Hackathon Certificate",
    image: Avalon,
    description: "competed among various teams in the hackathon by developing an innovative solution using cutting-edge technologies.",
    tags: ["hackathon", "innovation", "teamwork","AIML"],
    link: " "
  },

   {
    id: 4,
    title: " Software Developer Internship Certificate",
    image: yugyatra,
    description: "Completed a software development internship, gaining hands-on experience in Software development and team collaboration.",
    tags: ["internship", "web-development", "teamwork"],
    link: " "
  },
];

export const Extracurricular = [
  {
    id: 1,
    tag: "NSS",
    title: "NSS Documentation Head 2025",
    description: "Managed documentation and coordination of NSS activities for the year 2025-26 also experrience the joy of social work by participating in various events for 2 years.",
    photos: [ 
      nss,
      nss2,
      nss3,
    ],
  },

  {
    id: 2,
    tag: "Sports",
    title: "Volleyball & Tug-of-War",
    description: "Participated in college-level volleyball and tug-of-war activities.",
    photos: [
       s1,
       s2,
       s3,
    ],
  },

  {
    id: 3,
    tag: "Artist",
    title: "Artist",
    description: "won various national and state level art competitions during school times.",
    photos: [
       a1,
       a2,
       a3,
       a4,
    ],
  },
];