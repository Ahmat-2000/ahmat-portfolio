'use client'
import { useState, useEffect } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";

import { userData } from "@/lib/utils";
import Icon from "./ui/Icon";
import SocialMediaLinks from "./ui/SocialMediaLink";

const InputUI = ({id,type,name,labelText,value,setValue,error,onBlur}) => {
    return (
    <div className="grid gap-2">
        <label htmlFor={id}>{labelText} <span className="text-red-500 font-semibold">*</span> </label>
        <input
            required
            value={value}
            onBlur={onBlur}
            onChange={(e) => setValue(e.target.value)}
            type={type}
            id={id}
            name={name}
            className="bg-inherit rounded-lg border-stone-600/100 border h-12 p-3 shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100"
        />
        {error && <span className="text-red-500 font-semibold px-2">{error}</span>}
    </div>
)};

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [isTouched, setIsTouched] = useState({email:false,name:false,message:false});
    useEffect(() => {
        validateFields({ name, email, message });
    }, [isTouched,name,email,message])
    const validateFields = (fieldValues = { name, email, message }) => {
        const newErrors = {};
        if (isTouched.name && !fieldValues.name) {
            newErrors.name = 'Name is required.';
        }
        if (isTouched.email && !fieldValues.email) {
            newErrors.email = 'Email is required.';
        } else if (isTouched.email && !/\S+@\S+\.\S+/.test(fieldValues.email)) {
            newErrors.email = 'Invalid email address.';
        }
        if (isTouched.message && !fieldValues.message) {
            newErrors.message = 'Message is required.';
        } else if (isTouched.message && fieldValues.message.length < 100) {
            newErrors.message = 'Message must be at least 100 characters.';
        }
        setErrors(newErrors);
        setIsFormValid(Object.keys(newErrors).length === 0);
    };

    const onBlur = (event) => {
        const { name, value } = event.target;
        setIsTouched((prev) => ({ ...prev, [name]: true }));
        validateFields({ ...{ name, email, message }, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsTouched({ email: true, name: true, message: true });
        if (isFormValid) {
            // api call
            console.log('Form submitted successfully!');
        } else {
            console.log('Form has errors. Please correct them.');
        }
    };
    return (
        <section className="scroll-mt-32 p-4 mt-20" id="contact">
            <div className="my-5">
                <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">Contact Me</h2>
                <p className="md:w-[70%] sm:text-lg">If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            </div>
            <div className="md:flex md:gap-10 md:justify-between gap-5 grid">
                <form className="grid gap-5 shadow-md shadow-gray-500 p-2 md:w-full max-w-2xl" action="" method="">
                    <InputUI id="name" name="name" type="text" labelText="Your Name" value={name} setValue={setName} onBlur={onBlur} error={errors.name} />
                    <InputUI id="email" name="email" type="email" labelText="Your E-mail" value={email} setValue={setEmail} onBlur={onBlur} error={errors.email}/>
                    <div className="grid gap-2">
                        <label htmlFor="message">Your Message <span className="text-red-500 font-semibold">*</span></label>
                        <textarea
                            required
                            value={message}
                            onBlur={onBlur}
                            onChange={(e) => setMessage(e.target.value)}
                            id="message"
                            name="message"
                            className="w-full bg-inherit rounded-lg border-stone-600/100 border p-4shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100 min-h-[200px] p-3"
                        />
                        {errors.message && <span className="text-red-500 font-semibold px-2">{errors.message}</span>}
                    </div>
                    <button
                        disabled={!isFormValid}
                        type="submit"
                        onClick={handleSubmit}
                        className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500/80 rounded-3xl h-[60px]">
                        Send Me your Message
                    </button>
                </form>
                <div className="">
                    <address className="grid gap-3 my-5 text-bold  md:text-xl sm:text-lg">
                        <IconContext.Provider value={{size:'25'}}>
                            <div className="flex gap-3 items-center">
                                <Icon><MdAlternateEmail fill="black"/></Icon>
                                <span className="">{userData.email}</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Icon><MdOutlinePhoneInTalk fill="black"/></Icon>
                                <span className="">{userData.phoneNumber}</span>
                            </div>
                            <div className="flex gap-3 items-center">
                                <Icon><FaLocationDot fill="black"/></Icon>
                                <span className="">{userData.adress}</span>
                            </div>
                        </IconContext.Provider>
                    </address>

                    <SocialMediaLinks size="25"/>
                </div>
            </div>
        </section>
    );
}

export default Contact;