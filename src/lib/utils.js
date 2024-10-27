import { FaGithub, FaYoutube , FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import profileImage from "@/images/profile.png";
import logo from "@/images/logo.png";
// nav link
export const links = [
    {
        url: "#home",
        text: "Home"
    },
    {
        url: "#features",
        text: "Features"
    },
    {
        url: "#resume",
        text: "Resume"
    },
    {
        url: "#services",
        text: "Services",
    },
    {
        url: "#contact",
        text: "Contact"
    },
];

// social media
export const media = [
    {
        "name": "Github",
        "url": "https://github.com/Ahmat-2000", // change it to your Github profile link
        "show": true, // turn it to false if you don't have Github
        'icon' : <FaGithub fill="black"/>
    },
    {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/ahmat-mahamat", // change it to your Linkedin profile link
        "show": true, // turn it to false if you don't have Linkedin
        "icon" : <FaLinkedin className="rounded-full" fill="black"/>
    },
    {
        "name": "Twitter",
        "url": "https://x.com/Ahmat_2000", // change it to your Twitter profile link
        "show": true, // turn it to false if you don't have Twitter
        "icon" : <FaTwitter fill="black"  />
    },
    {
        "name": "Youtube",
        "url": "", // add your Youtube channel link
        "show": false, // turn it to true if you have Youtube
        "icon" : <FaYoutube fill="black"  />
    },
    {
        "name": "Facebook",
        "url": "", // add your facebook profile link
        "show": false, // turn it to false if have Facebook
        "icon" : <FaFacebook fill="black" />
    },
];

// update this variable with your data
export const userData = {
    name: "AHMAT",
    logo: logo,
    image: profileImage, // you need to put your image in /src/images with the name profile.png
    profession: ['Freelancer', 'Developer', 'Pentester'],
    // descriptionText :"As a dedicated, self-taught programmer currently pursuing my studies, I am passionate about cybersecurity and eager to apply my skills in a professional setting. I am looking for a 6-month internship opportunity where I can further develop my expertise and contribute significantly to a dynamic team.",
    descriptionText: "I am a master's student in computer science, specializing in cybersecurity, pentesting, and application development. With a strong foundation in these areas, I am passionate about designing secure solutions and solving complex challenges through code. I am driven to apply my advanced knowledge and hands-on skills to real-world problems, continuously expanding my expertise in a fast-evolving tech landscape. My goal is to make impactful contributions to innovative projects that prioritize security and efficiency.",
    phoneNumber : "+33 7 51 01 85 42",
    email : "ahmatmhtlouky@gmail.com",
    adress : "14000 Caen, France",
}
// your professions
export const wordToType = ['Freelancer', 'Developer', 'Pentester'];

// description