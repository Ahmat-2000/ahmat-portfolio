'use client'
import { useForm } from "react-hook-form";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";

import { userData } from "@/lib/utils";
import Icon from "./ui/Icon";
import SocialMediaLinks from "./ui/SocialMediaLink";

const InputUI = ({id,type,labelText,error,register}) => {
    return (
    <div className="grid gap-2">
        <label htmlFor={id}>{labelText} <span className="text-red-500 font-semibold">*</span> </label>
        <input
            type={type}
            id={id}
            {...register}
            className="bg-inherit rounded-lg border-stone-600/100 border h-12 p-3 shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100"
        />
        {error && <span className="text-red-500 font-semibold px-2">{error.message}</span>}
    </div>
)};

function Contact() {
    const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = async (data) => {
        // api call
        const response = await fetch("/api/sendMail")
        console.table(data)
    }
    return (
        <section className="scroll-mt-32 p-4 mt-20" id="contact">
            <div className="my-5">
                <h2 className="title-blue text-3xl font-black mb-8 p-1 sm:text-5xl">Contact Me</h2>
                <p className="md:w-[70%] sm:text-lg">If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
            </div>
            <div className="md:flex md:gap-10 md:justify-between gap-5 grid">
                <form className="grid gap-5 shadow-md shadow-gray-500 p-2 md:w-full max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
                    <InputUI id="name" type="text" labelText="Your Name" 
                        register={{...register("name",{required: "Name is required."})}}
                        error={errors?.name}
                    />
                    <InputUI id="email" type="email" labelText="Your E-mail" 
                        register={{...register("email",{
                            required: "E-mail is required.",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Invalid email address."
                            }
                        })}}
                        error={errors?.email}
                    />
                    <div className="grid gap-2">
                        <label htmlFor="message">Your Message <span className="text-red-500 font-semibold">*</span></label>
                        <textarea
                            id="message"
                            {...register("message",{required:"Message is required.", minLength: {
                                value: 100,
                                message: "Message must be at least 100 characters."
                            }})}
                            className="w-full bg-inherit rounded-lg border-stone-600/100 border p-4shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100 min-h-[200px] p-3"
                        />
                        {errors.message && <span className="text-red-500 font-semibold px-2">{errors.message.message}</span>}
                    </div>
                    <button
                        /* disabled={!isFormValid} */
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