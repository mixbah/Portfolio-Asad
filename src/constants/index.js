const navLinks = [
    {
      name: "Work",
      link: "#work",
    },
    {
      name: "Education",
      link: "#experience",
    },
    {
      name: "Skills",
      link: "#skills",
    },
    {
      name: "Testimonials",
      link: "#testimonials",
    },
  ];
  
  const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
  ];
  
  const counterItems = [
    { value: 4, suffix: "+", label: "Years of Coding Journey" },
    { value: 190, suffix: "+", label: "LeetCode Solution" },
    { value: 4, suffix: "+", label: "Completed deployed Projects" },
    { value: 18000, suffix: "+", label: "HackerRank" },
  ];
  
  const logoIconsList = [
    {
      imgPath: "/images/logos/company-logo-1.png",
    },
    {
      imgPath: "/images/logos/company-logo-2.png",
    },
    {
      imgPath: "/images/logos/company-logo-3.png",
    },
    {
      imgPath: "/images/logos/company-logo-4.png",
    },
    {
      imgPath: "/images/logos/company-logo-5.png",
    },
    {
      imgPath: "/images/logos/company-logo-6.png",
    },
    {
      imgPath: "/images/logos/company-logo-7.png",
    },
    {
      imgPath: "/images/logos/company-logo-8.png",
    },
    {
      imgPath: "/images/logos/company-logo-9.png",
    },
    {
      imgPath: "/images/logos/company-logo-10.png",
    },
    {
      imgPath: "/images/logos/company-logo-11.png",
    },
  ];
  
  const abilities = [
    {
      imgPath: "/images/seo.png",
      title: "Project Management",
      desc: "Ability to conceptualize and plan complex projects from ideation to implementation.",
    },
    {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Skilled at setting realistic expectations and managing project timelines through clear dialogue",
    },
    {
      imgPath: "/images/time.png",
      title: "Continuous Learning",
      desc: "Adaptable to new technologies and frameworks as needed for project requirements",
    },
  ];
  
  const techStackImgs = [
    {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
    },
    {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
    },
    {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
    },
    {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
    },
    {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
    },
  ];
  
  const techStackIcons = [
    {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
    },
    {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
    },
    {
      name: "Node Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
    },
    {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
    },
    {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
    },
  ];
  
  const expCards = [
    {
      review:
        "Asad brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Frontend Developing Journey",
      date: "January 2023 - June 2023",
      responsibilities: [
        "Built modular, reusable components that accelerated development cycles and maintained design consistency across multiple product verticals.",
"Developed interactive UI components with advanced animations and micro-interactions, elevating user engagement and brand experience.",
"Engineered responsive design systems that seamlessly adapt across devices, ensuring optimal user experience from mobile to desktop.",
      ],
    },
    {
      review:
        "Asad’s contributions to web applications and courses have been outstanding. He approaches challenges and real-life assessments with a problem-solving mindset.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Web Developing Journey",
      date: "June 2023 - Present",
      responsibilities: [
        "Built complete authentication and authorization systems using JWT, secure password hashing, and role-based access control, ensuring data security across both frontend and backend.",
        "Developed and optimized full-stack applications with the MERN stack (MongoDB, Express.js, React, Node.js), while also working with SQL for relational database management.",
        "Integrated real-time communication features using Socket.IO, enabling seamless live updates and chat functionality.",
        "Created interactive and visually engaging experiences with Three.js, adding 3D elements to web applications.",
      ],
    },
    {
      review:
        "Asad’s work on Chat APP brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Machine Learning Journey",
      date: "March 2024 - Present",
      responsibilities: [
        "Implemented machine learning algorithms such as K-Nearest Neighbors, classification, and regression models on real-world datasets to understand prediction and decision-making processes.",
        "Worked on preprocessing techniques like handling missing values, normalization, and feature selection to improve model accuracy and reliability.",
        "Explored large language models (LLMs) and AI agents, gaining hands-on experience in applying them for tasks such as text analysis and automated responses.",
        "Evaluated models using accuracy, precision, and recall, while comparing different approaches to choose the best-performing solution.",
      ],
    },
  ];
  
  const expLogos = [
    {
      name: "logo1",
      imgPath: "/images/logo1.png",
    },
    {
      name: "logo2",
      imgPath: "/images/logo2.png",
    },
    {
      name: "logo3",
      imgPath: "/images/logo3.png",
    },
  ];
  
  const testimonials = [
    {
      name: "Amash Khan",
      mentions: "@khantoamash",
      review:
        "Words fall short when it comes to praising Asad. He transformed complex project requirements into a beautifully seamless, fully functional website. His exceptional problem-solving skills and innovative approach truly set him apart.",
      imgPath: "/images/client1.png",
    },
    {
      name: "Mansi Gupta",
      mentions: "@mansi04",
      review:
        "Collaborating with Asad was an absolute pleasure. He revitalized outdated website into a sleek, modern, and highly user-friendly platform. His meticulous attention to detail and unwavering commitment to quality are truly unmatched. I wholeheartedly recommend him for any web development project.",
      imgPath: "/images/client3.png",
    },
    {
      name: "Aryan Rai",
      mentions: "@RaiorWot",
      review:
        "Asad turned complex requirements into a clean, functional website. His problem-solving skills and attention to detail made the entire process smooth and effective. Highly recommend working with him.",
      imgPath: "/images/client2.png",
    },
    {
      name: "Saad meraj",
      mentions: "@merajsaad",
      review:
        "Asad did an excellent job on the projects from start to finish. He took the time to understand requirements clearly and translated them into a modern, user-friendly website that works exactly as we needed. What stood out most was his ability to simplify complex ideas and turn them into practical solutions.",
      imgPath: "/images/client5.png",
    },
    {
      name: "Shadad",
      mentions: "@flyshadad",
      review:
        "Asad’s skill and professionalism really stood out during our team-project. He suggested clean approaches that works seamlessly. His problem-solving ability and attention to detail made the entire process smooth, and the end result has been a great fit for our needs.",
      imgPath: "/images/client4.png",
    },
    {
      name: "People Machine",
      mentions: "machine@people",
      review:
        "We appreciated Asad’s calm and solution-oriented mindset. Every challenge was handled quickly, and the end result was a dependable, polished website we’re proud to use.",
      imgPath: "/images/client6.png",
    },
  ];
  
  const socialImgs = [
    {
      name: "leetcode",
      url: "https://leetcode.com/u/CSAI_1520106/",
      imgPath: "/images/leetcode.png",
    },
    {
      name: "github",
      url: "https://github.com/mixbah",
      imgPath: "/images/github.png",
    },
    {
      name: "hackerrank",
      url: "https://www.hackerrank.com/profile/AI1B_2213529_AS",
      imgPath: "/images/hackerrank.png",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/misbahasad/",
      imgPath: "/images/linkedin.png",
    },
  ];
  
  export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
  };