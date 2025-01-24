import formEditorImage from '@/images/projects/formEditor.png';
import portfolioImage from '@/images/projects/portfolio.png';
import hanabiImage from '@/images/projects/hanabi.png';
import ctfImage from '@/images/projects/ctf.png';
import ddosImage from '@/images/projects/ddos.png';
import promptAiImage from '@/images/projects/promptAi.png';
import dAppImage from '@/images/projects/dApp.png';


export const degreesData = [
    {
        year : "2024 - present",
        degree : "Second year of a Master's degree in Computer Science",
        university : "University of Caen Normandy",
    },
    {
        year : "2023 - 2024",
        degree : "First year of a Master's degree  in Computer Science",
        university : "University of Caen Normandy",
    },
    {
        year : "2019 - 2023",
        degree : "Bachelor's degree in Computer Science",
        university : "University of Caen Normandy",
    },
];

export const skillsData = [
    'Git',
    'AWS',
    'Docker',
    'React',
    'Next JS',
    'Django',
    'Graphql',
    'Tailwind',
    'C',
    'Python',
    'Java',
    'PHP',
    'HTML',
    'CSS',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    "Node JS",
    "Typescript"



    // Choose your skills from below. Make sure it's in the same format and spelled correctly.
    // Couldn't find the required skills? Raise an issue on github at https://github.com/hhhrrrttt222111/developer-portfolio/issues/new
    
    
    // AVAILABLE SKILLS
    
    /* 
    HTML
    CSS
    JS 
    React
    Next JS
    Nuxt JS
    Node JS
    Vue
    Angular
    Docker
    Photoshop
    Illustrator
    Svelte
    GCP
    Azure
    Fastify
    Haxe
    Ionic
    Markdown
    Microsoft Office
    Picsart
    Sketch
    Unity
    WolframAlpha
    Adobe XD
    After Effects
    Bootstrap
    Bulma
    CapacitorJs
    Coffeescript
    MemSQL
    C
    C++
    C#
    Python
    Java
    Julia
    Matlab
    Swift
    Ruby
    Kotlin
    Go
    PHP
    Flutter
    Dart
    Typescript
    Swift
    Git
    Figma
    Canva
    Ubuntu
    Bootstrap
    MongoDB
    Tailwind
    ViteJS
    VuetifyJS
    MySQL
    PostgreSQL
    AWS
    Firebase
    Blender
    Premiere Pro
    Adobe Audition
    Deno
    Django
    Gimp
    Graphql
    Lightroom
    MaterialUI
    Nginx
    Numpy
    OpenCV
    Pytorch
    Selenium
    Strapi
    Tensorflow
    Webex
    Wordpress
    */
    
];

export const experiencesData = [
    {
        title: "Web development intern",
        company: "Confledis - Paris - France",
        date : "June 2023 - August 2023",
        technologies : "React, AWS AppSync, AWS DynamoDB, Jira, Git",
        desciption : `
            During my internship at Confledis in Paris, I contributed to the development of a tourist website. In this role, I improved my skills in using React to create dynamic user interfaces. I also gained hands-on experience with AWS services like AppSync for data management and real-time communication, and DynamoDB for storage solutions. I learned how to use Jira for project management, which helped me improve my teamwork and organizational skills. This experience greatly improved my technical knowledge and understanding of web development in a professional setting.
        `,
    },

    {
        title: "Computer Tutoring - Fixed-Term Contract",
        company: "University of Caen - 14000 - France",
        date : "October 2023 - May 2024",
        technologies : "C, Java, MySql, Algorithms and Maths",
        desciption : `
            I worked as a computer science professor at the University of Caen, where I assisted second year students twice a week. My role was to help them better understand programming, algorithms, databases and mathematics. I used interactive sessions and provided personalized support to build their confidence and knowledge. This experience also allowed me to improve my teaching and communication skills.
        `,
    },
]

export const projectsData = [
    
    {
        title: "CTFs on TryHackMe",
        url: "https://tryhackme.com/p/Ahmat",
        image: ctfImage,
        technologies: "Kali Linux, Nmap, Metasploit, Burp Suite, Gobuster, Hydra, SQLMap...",
        description: "I gained hands-on experience with Capture The Flag (CTF) challenges on platforms like TryHackMe and Root-Me. These challenges focused on ethical hacking and penetration testing, allowing me to explore various real-world cybersecurity scenarios. Through these exercises, I improved my skills in identifying vulnerabilities and understanding how to protect systems effectively.",
    },
    {
        title: "Simulator of DDOS Attacks",
        url: "https://github.com/Ahmat-2000/DDOS-attack-with-docker",
        image: ddosImage,
        technologies: "Docker, Hping3, SlowLoris, Nginx, Apache",
        description: "A comprehensive tool designed to simulate and analyze DDoS attacks on web servers. It serves as an educational resource for understanding web server vulnerabilities and defense mechanisms.",
    },
    {
        title: "Blockchain Web Application",
        url: "https://blockchain-store-2024.vercel.app",
        image: dAppImage,
        technologies: "Next.js, Blockchain, Solidity",
        description: "A decentralized web application built with Next.js, leveraging blockchain technology and smart contracts written in Solidity enables secure transactions.",
    },
    
    {
        title: "Share Prompts",
        url: "https://share-prompts-2024.vercel.app/",
        image: promptAiImage,
        technologies: "React, NextJs, MongoDB, Google Auth API",
        description: "A web app for discovering and managing creative writing prompts, featuring user-friendly design and Google Auth for secure login.",
    },
    {
        title: "This Portfolio",
        url: "https://ahmat-mahamat.vercel.app/",
        image: portfolioImage,
        technologies: "React, NextJs, Tailwind CSS, NodeMailer, Google Captcha API",
        description: "A professional portfolio showcasing projects and skills with a responsive design and secure form handling using NodeMailer and Google ReCaptcha API.",
    },
    {
        title: "Hanabi Game Development",
        url: "https://github.com/Ahmat-2000/jeu-de-hanabi",
        image: hanabiImage,
        technologies: "Java, MVC, Apache Ant",
        description: "A game based on the Hanabi card game, developed with console and graphical versions, including AI elements to enhance gameplay.",
    },
    {
        title: "Geometric Shapes Editor",
        url: "https://github.com/Ahmat-2000/FormsEditeur",
        image: formEditorImage,
        technologies: "Java, MVC pattern, Command, Observer, State, Strategy, Factory Method",
        description: "An educational Java project demonstrating design patterns through a geometric shapes editor application.",
    },
];
