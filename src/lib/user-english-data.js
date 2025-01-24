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
        url: "#skills",
        text: "Skills",
    },
    {
        url: "#experiences",
        text: "Experiences"
    },
    {
        url: "#projects",
        text: "Projects"
    },
    {
        url: "#education",
        text: "Education"
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
    profession: ['Pentester', 'Developer','Freelancer'],
    descriptionText: `Welcome to my portfolio! a dedicated Computer Science student with a strong focus on penetration testing and software development. My dual expertise allows me to identify vulnerabilities while creating robust applications. I’m passionate about building secure systems and tackling real-world cybersecurity challenges.`,
    phoneNumber : "+33 7 51 01 85 42",
    email : "ahmatmhtlouky@gmail.com",
    adress : "14000 Caen, France",
}