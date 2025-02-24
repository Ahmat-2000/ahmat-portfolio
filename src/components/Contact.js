'use client'
import { useForm } from "react-hook-form";
import { Suspense, useEffect, useRef, useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IconContext } from "react-icons";

import { userData } from "@/lib/user-english-data";
import Icon from "./ui/Icon";
import SocialMediaLinks from "./ui/SocialMediaLink";
import { postApiCall } from "@/lib/apiCallFonctions";
import LoadingSpin from "./ui/LoadingSpin";
import InputUI from "./ui/InputUI";
import ReCAPTCHA from "react-google-recaptcha";
import LoadingCaptcha from "./ui/LoadingCaptcha";

function Contact() {
  const [feedback,setFeedback] = useState({});
  const [isLoadingCaptcha, setIsLoadingCaptcha] = useState(true)
  const [captchaValue, setCaptchaValue] = useState(null)
  const recaptchaRef = useRef();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  // useEffect for resetting feedback after 5 seconds
  useEffect(() => {
    if (feedback.status === 200) {
      reset();
      recaptchaRef.current.reset();
    }
    if (feedback.message) {
      const timer = setTimeout(() => {
        setFeedback({});
      }, 5000); // 10 seconds

      return () => clearTimeout(timer); // Clear timer if feedback changes
    }
  }, [feedback,reset]);

  const onSubmit = async (data) => {    
    // api call
    const response = await postApiCall("/api/sendMail",{...data, captchaToken: recaptchaRef.current.getValue()});
    const { message } = await response.json();
    setFeedback({status: response.status, message: message});
  };

  return (
    <section className="p-4 mt-10 scroll-mt-10" id="contact">
      <div className="my-5">
        <h2 className="p-1 mb-8 text-3xl font-black title-blue sm:text-5xl">Contact Me</h2>
        <p className="md:w-[70%] text-sm sm:text-base">If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.</p>
      </div>
      <div className="grid gap-5 md:flex md:gap-10 md:justify-between">
        <form className="grid max-w-2xl gap-5 p-2 shadow-md shadow-gray-500 md:w-full" onSubmit={handleSubmit(onSubmit)}>

          {feedback && feedback?.status > 200 && <div className="px-4 py-3 text-red-700 rounded shadow-md animate-pulse shadow-red-900 " role="alert">
            <strong className="font-bold text-inherit">{feedback?.message}</strong>
          </div>}

          {feedback && feedback?.status === 200 && <div className="px-4 py-3 text-green-700 rounded shadow-md animate-pulse shadow-green-900" role="alert">
            <strong className="font-bold text-inherit">{feedback?.message}</strong>
          </div>}

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
            <label htmlFor="message" className="text-sm sm:text-base">Your Message <span className="font-semibold text-red-500">*</span></label>
            <textarea
              id="message"
              {...register("message",{required:"Message is required.", minLength: {
                  value: 10,
                  message: "Message must be at least 10 characters."
              }})}
              className="w-full bg-inherit rounded-lg border-stone-600/100 border shadow-sm shadow-stone-600/90 hover:shadow-stone-400/100 transition-shadow duration-500 focus:outline-none focus:shadow-stone-400/100 min-h-[200px] p-4"
            />
            {errors.message && <span className="px-2 font-semibold text-red-500">{errors.message?.message}</span>}
          </div>
          
            <div className="overflow-hidden">
              {isLoadingCaptcha && <LoadingCaptcha /> }
              <ReCAPTCHA 
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                asyncScriptOnLoad={()=> {setIsLoadingCaptcha(false);}}
                onChange={(value) => setCaptchaValue(value)}
              />
            </div>
          <button
            disabled={isSubmitting || !captchaValue} 
            type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center px-6 py-4 font-semibold transition-opacity duration-500 hover:opacity-75 text-neutral-300/80 bg-blue-500/75 rounded-3xl sm:w-1/2 sm:mx-auto sm:min-w-max ">
            {isSubmitting ? (<LoadingSpin text="Sending..."/>) : 
              !captchaValue ? 
              <>
                Solve The Captcha <span className="ml-2 text-xl">🥱</span>
              </>
              : "Send me your message"
            } 
          </button>
        </form>
        <div className="">
          <address className="grid gap-3 my-5 text-sm not-italic text-bold sm:text-base md:text-xl">
            <IconContext.Provider value={{size:'25'}}>
              <div className="flex items-center gap-3">
                <Icon><MdAlternateEmail fill="black"/></Icon>
                <span className="">{userData.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <Icon><MdOutlinePhoneInTalk fill="black"/></Icon>
                <span className="">{userData.phoneNumber}</span>
              </div>
              <div className="flex items-center gap-3">
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