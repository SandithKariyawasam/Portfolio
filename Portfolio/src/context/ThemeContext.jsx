import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load saved themes from localStorage or use defaults
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('site_theme');
    if (saved) return JSON.parse(saved);
    return {
      primaryColor: '#5B78F6',
      bgColor: '#0F0F0F',
      textColor: '#9f9f9f',
      cardBgColor: '#0F0F0F',
      iconColor: '#ffffff',
      cursorColor: '#5B78F6',
      aboutText: 'I am a Software Engineer and DevOps practitioner based in Sri Lanka, focused on optimizing the path from code to production. While my core expertise encompasses web, mobile, and UI/UX design, I specialize in streamlining workflows through DevOps methodologies. I leverage my diverse experience across various fields to build robust infrastructure that supports seamless, high-quality user experiences.',
      credentialsText1: "I’m Sandith, a passionate and detail-oriented Software Engineer bridging the gap between modern application development and efficient operations. With a strong foundation in front-end technologies and Flutter, I don't just build user-friendly interfaces; I integrate DevOps practices to ensure those digital experiences are scalable, automated, and high-performing.",
      credentialsText2: "I have a natural curiosity for the entire software lifecycle, constantly diving into new frameworks, infrastructure tools, and CI/CD workflows to improve how software is delivered. Beyond coding, I’m driven to solve real-world problems through technology. Whether working independently or as part of a team, I prioritize clean, maintainable code and reliable deployment strategies. As I grow in the tech industry, I aim to contribute to impactful projects that sit at the cutting edge of software engineering and DevOps excellence.",
      
      // Identity & Social
      name: 'Sandith Kariyawasam',
      role: 'A DEVOPS ENGINEER',
      location: 'I am a DevOps Engineer based in Sri Lanka.',
      socialGithub: 'https://github.com/SandithKariyawasam',
      socialLinkedin: 'https://www.linkedin.com/in/sandith-kariyawasam-352069255/',
      socialFacebook: 'https://www.facebook.com/sandith.kariyawasam.2025',
      socialInstagram: 'https://www.instagram.com/sandith.kariyawasam/',
      
      // Experience
      experience: [
        { id: 1, date: '2022 - Present', title: 'Fullstack Developer', company: 'Freelancer', desc: 'I started my freelancing career in 2022, focusing on web development...' },
        { id: 2, date: '2024 - Present', title: 'Front-End Developer', company: 'Team DYNAMOSOLUTIONS', desc: 'As a front-end developer at DYNAMOSOLUTIONS, I specialize in creating dynamic...' }
      ],
      
      // Education
      education: [
        { id: 1, date: '2020', degree: 'G.C.E. Advanced Level (C, C, C) - 2020 (Mathematical Stream)', institution: 'Sri Sumangala College', desc: 'I completed my G.C.E. Advanced Level in 2020...' },
        { id: 2, date: '2022 - Present', degree: 'BSc. (Honours) in Software Engineering', institution: 'NSBM Green University', desc: 'Since 2022, I have been pursuing a BSc. (Honours) in Software Engineering...' }
      ],

      // Skills
      skills: [
        { id: 1, name: 'JavaScript', percent: '90%' },
        { id: 2, name: 'React', percent: '95%' },
        { id: 3, name: 'Node Js', percent: '90%' },
        { id: 4, name: 'Docker', percent: '80%' },
        { id: 5, name: 'Kubernetes', percent: '70%' },
      ],

      // Stats
      statsYears: '01',
      statsClients: '+1',
      statsProjects: '+12',

      // Services
      services: [
        { id: 1, icon: 'iconoir-code', title: 'WEB DESIGNING', desc: 'I design responsive and visually engaging websites that reflect each client\'s brand and purpose. Whether it\'s a personal site, business page, or online store, I make sure the design is clean, functional, and optimized for all devices to create a seamless user experience.' },
        { id: 2, icon: 'iconoir-smartphone-device', title: 'APP DESIGNING', desc: 'I craft user-friendly and attractive app interfaces for both mobile and web platforms. My focus is on usability and consistency, ensuring every design follows platform standards while providing an intuitive experience from the first tap to the last interaction.' },
        { id: 3, icon: 'iconoir-cloud', title: 'CLOUD SERVICES', desc: 'I offer cloud solutions that help individuals and businesses run more efficiently and securely. From setting up cloud infrastructure to handling deployments and backups, I make sure everything is scalable, reliable, and tailored to your specific needs.' },
        { id: 4, icon: 'iconoir-design-pencil', title: 'UI/UX DESIGN', desc: 'I create user interfaces and experiences that are not only visually appealing but also simple and effective to use. My design process is based on understanding real user behavior, which allows me to build digital products that are both functional and engaging.' },
      ]
    };
  });

  // Whenever theme state changes, inject the variables into the :root CSS and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--primary_color', theme.primaryColor);
    root.style.setProperty('--bg-color', theme.bgColor);
    root.style.setProperty('--text-color', theme.textColor);
    root.style.setProperty('--card-bg', theme.cardBgColor);
    root.style.setProperty('--icon-color', theme.iconColor);
    root.style.setProperty('--cursor-color', theme.cursorColor || '#5B78F6');

    localStorage.setItem('site_theme', JSON.stringify(theme));
  }, [theme]);

  const updateTheme = (key, value) => {
    setTheme(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetTheme = () => {
    setTheme({
      primaryColor: '#5B78F6',
      bgColor: '#0F0F0F',
      textColor: '#9f9f9f',
      cardBgColor: '#0F0F0F',
      iconColor: '#ffffff',
      cursorColor: '#5B78F6',
      aboutText: 'I am a Software Engineer and DevOps practitioner based in Sri Lanka, focused on optimizing the path from code to production. While my core expertise encompasses web, mobile, and UI/UX design, I specialize in streamlining workflows through DevOps methodologies. I leverage my diverse experience across various fields to build robust infrastructure that supports seamless, high-quality user experiences.',
      credentialsText1: "I’m Sandith, a passionate and detail-oriented Software Engineer bridging the gap between modern application development and efficient operations. With a strong foundation in front-end technologies and Flutter, I don't just build user-friendly interfaces; I integrate DevOps practices to ensure those digital experiences are scalable, automated, and high-performing.",
      credentialsText2: "I have a natural curiosity for the entire software lifecycle, constantly diving into new frameworks, infrastructure tools, and CI/CD workflows to improve how software is delivered. Beyond coding, I’m driven to solve real-world problems through technology. Whether working independently or as part of a team, I prioritize clean, maintainable code and reliable deployment strategies. As I grow in the tech industry, I aim to contribute to impactful projects that sit at the cutting edge of software engineering and DevOps excellence.",
      
      // Identity & Social
      name: 'Sandith Kariyawasam',
      role: 'A DEVOPS ENGINEER',
      location: 'I am a DevOps Engineer based in Sri Lanka.',
      socialGithub: 'https://github.com/SandithKariyawasam',
      socialLinkedin: 'https://www.linkedin.com/in/sandith-kariyawasam-352069255/',
      socialFacebook: 'https://www.facebook.com/sandith.kariyawasam.2025',
      socialInstagram: 'https://www.instagram.com/sandith.kariyawasam/',
      
      // Experience
      experience: [
        { id: 1, date: '2022 - Present', title: 'Fullstack Developer', company: 'Freelancer', desc: 'I started my freelancing career in 2022, focusing on web development...' },
        { id: 2, date: '2024 - Present', title: 'Front-End Developer', company: 'Team DYNAMOSOLUTIONS', desc: 'As a front-end developer at DYNAMOSOLUTIONS, I specialize in creating dynamic...' }
      ],
      
      // Education
      education: [
        { id: 1, date: '2020', degree: 'G.C.E. Advanced Level (C, C, C) - 2020 (Mathematical Stream)', institution: 'Sri Sumangala College', desc: 'I completed my G.C.E. Advanced Level in 2020...' },
        { id: 2, date: '2022 - Present', degree: 'BSc. (Honours) in Software Engineering', institution: 'NSBM Green University', desc: 'Since 2022, I have been pursuing a BSc. (Honours) in Software Engineering...' }
      ],

      // Skills
      skills: [
        { id: 1, name: 'JavaScript', percent: '90%' },
        { id: 2, name: 'React', percent: '95%' },
        { id: 3, name: 'Node Js', percent: '90%' },
        { id: 4, name: 'Docker', percent: '80%' },
        { id: 5, name: 'Kubernetes', percent: '70%' },
      ],

      // Stats
      statsYears: '01',
      statsClients: '+1',
      statsProjects: '+12',

      // Services
      services: [
        { id: 1, icon: 'iconoir-code', title: 'WEB DESIGNING', desc: 'I design responsive and visually engaging websites that reflect each client\'s brand and purpose. Whether it\'s a personal site, business page, or online store, I make sure the design is clean, functional, and optimized for all devices to create a seamless user experience.' },
        { id: 2, icon: 'iconoir-smartphone-device', title: 'APP DESIGNING', desc: 'I craft user-friendly and attractive app interfaces for both mobile and web platforms. My focus is on usability and consistency, ensuring every design follows platform standards while providing an intuitive experience from the first tap to the last interaction.' },
        { id: 3, icon: 'iconoir-cloud', title: 'CLOUD SERVICES', desc: 'I offer cloud solutions that help individuals and businesses run more efficiently and securely. From setting up cloud infrastructure to handling deployments and backups, I make sure everything is scalable, reliable, and tailored to your specific needs.' },
        { id: 4, icon: 'iconoir-design-pencil', title: 'UI/UX DESIGN', desc: 'I create user interfaces and experiences that are not only visually appealing but also simple and effective to use. My design process is based on understanding real user behavior, which allows me to build digital products that are both functional and engaging.' },
      ]
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, updateTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
