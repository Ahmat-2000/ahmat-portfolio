import { FaGithub, FaYoutube , FaTwitter, FaLinkedin, FaFacebook} from "react-icons/fa";
import profileImage from "/src/images/profile.png";
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
        url: "#pricing",
        text: "Pricing",
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
        'icon' : <FaGithub />
    },
    {
        "name": "Linkedin",
        "url": "https://www.linkedin.com/in/ahmat-mahamat", // change it to your Linkedin profile link
        "show": true, // turn it to false if you don't have Linkedin
        "icon" : <FaLinkedin fill="#1d9bf0"/>
    },
    {
        "name": "Twitter",
        "url": "https://x.com/Ahmat_2000", // change it to your Twitter profile link
        "show": true, // turn it to false if you don't have Twitter
        "icon" : <FaTwitter fill="#1d9bf0"  />
    },
    {
        "name": "Youtube",
        "url": "", // add your Youtube channel link
        "show": false, // turn it to true if you have Youtube
        "icon" : <FaYoutube fill="#C53410"  />
    },
    {
        "name": "Facebook",
        "url": "", // add your facebook profile link
        "show": false, // turn it to false if have Facebook
        "icon" : <FaFacebook fill="#1d9bf0" />
    },
];

// update this variable with your data
export const userData = {
    name: "AHMAT",
    image: profileImage, // you need to put your image in /src/images with the name profile.png
    profession: ['Freelancer', 'Developer', 'Pentester'],
    descriptionText :"I am a self-taught programmer and passionate about cybersecurity.",
}
// your professions
export const wordToType = ['Freelancer', 'Developer', 'Pentester'];

// description
export const descriptionText = "I am a self-taught programmer and passionate about cybersecurity.";
