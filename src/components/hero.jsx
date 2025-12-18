import React from "react";
import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import layersSVG from "../assets/layers.svg";
import layoutSVG from "../assets/layout.svg";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import scriptify from "../assets/scriptify.png";
import shivam from "../assets/shivam.png";
import wanderlust from "../assets/wanderlust.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import nextjs from "../assets/nextjs.avif";
import tailwind from "../assets/tailwindcss.png";
import figma from "../assets/figma.avif";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const [projects, setprojects] = useState([
    {
      image: scriptify,
      title: "Scriptify - AI SaaS Application",
      desc: "Full Stack AI Video Script Generator using Google Gemini Pro and REST APIs on GCP EC2.",
      link: "#",
    },
    {
      image: shivam,
      title: "Shivam Express News Portal",
      desc: "Production-grade news platform featuring OTP-based authentication and a custom CMS.",
      link: "https://shivamexpress.in",
    },
    {
      image: wanderlust,
      title: "Uttarakhand Wanderlust",
      desc: "AI Travel Planner that constructs personalized itineraries using LLM pipelines. 2nd in State Hackathon.",
      link: "#",
    },
    {
      image: project2,
      title: "SCPPS Official Portal",
      desc: "Official university portal for GBPUAT's Cultural Council, managing event registrations and team directories.",
      link: "https://scpps.co.in",
    },
  ]);

  const [tools, settools] = useState([
    {
      img: reactjs,
      toolName: "ReactJS",
      desc: "Front-end JS library",
    },
    {
      img: nodejs,
      toolName: "NodeJS",
      desc: "Cross platform JS runtime",
    },
    {
      img: expressjs,
      toolName: "EXpressJS",
      desc: "NodeJS framework",
    },
    {
      img: nextjs,
      toolName: "NextJS",
      desc: "React Framework",
    },
    {
      img: tailwind,
      toolName: "TailwindCSS",
      desc: "CSS framework",
    },
    { img: figma, toolName: "Figma", desc: "Design tool" },
  ]);

  const stats = [
    { count: "+2", label: "YEARS OF EXPERIENCE", delay: 200 },
    { count: "+7", label: "PROJECTS COMPLETED", delay: 300 },
    { count: "+1", label: "WORLDWIDE CLIENTS", delay: 400 },
  ];

  const skillsCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "SQL", "PHP", "HTML5", "CSS3"],
      icon: layersSVG,
      accentColor: "#F46C38",
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "Shadcn UI",
        "Figma",
        "UI/UX Design",
      ],
      icon: layoutSVG,
      accentColor: "#C5FF41",
    },
    {
      title: "Backend & Database",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Supabase",
        "REST APIs",
        "postgreSQL",
      ],
      icon: layersSVG,
      accentColor: "#00D2D3",
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Linux Administration",
        "Vercel",
        "Clerk Auth",
        "Gemini API",
      ],
      icon: layoutSVG,
      accentColor: "#FF9FF3",
    },
  ];

  const [form, setform] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      // console.log("Please fill all the details");
    } else {
      // console.log(
      //   `name is ${form.name} \n email: ${form.email} \n msg: ${form.message}`
      // );
    }
  };

  return (
    <div className="md:mt-8 md:text-left text-center md:ml-9 mt-8 h-fit">
      <div
        id="home"
        className={`poppins-bold md:text-6xl text-4xl transition-all duration-700 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h1 className="text-white">WEB</h1>
        <h1 className="text-[#B6B4BD] opacity-40">DEVELOPER</h1>
      </div>
      <div
        className={`md:w-[80%] mt-3 transition-all duration-700 delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <p className="text-[#B6B4BD] md:text-lg text-sm">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>

      {/* numbers */}
      <InView>
        {({ inView, ref, entry }) => (
          <div
            ref={ref}
            className="flex text-white md:w-[80%] justify-between my-3"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${
                  inView
                    ? `flex-1 transition-all duration-${stat.delay} ease-in text-center`
                    : "flex-1 opacity-0"
                }`}
              >
                <h1 className="poppins-bold md:text-4xl text-xl">
                  {stat.count}
                </h1>
                <span className="md:text-xs text-center text-[8px] p-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </InView>
      {/* numbers end */}

      {/* Technology and skills section */}

      {/* Technology and skills section ended */}

      {/* Recent prpojects */}
      <div>
        <div
          id="projects"
          className={`poppins-bold md:text-6xl text-4xl mt-8 transition-all duration-700 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-white">RECENT</h1>
          <h1 className="text-[#B6B4BD] opacity-40">PROJECTS</h1>
        </div>

        {projects.map((e, index) => {
          return (
            <a key={e.image} href={e.link} target="_blank">
              <div
                className={`w-full md:h-40 h-fit hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-200 flex flex-col md:flex-row items-center rounded-xl my-8 relative group ${
                  isLoaded
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <div className="w-[80%] flex flex-col items-center md:flex-row md:items-start">
                  <img
                    src={e.image}
                    className="md:w-[240px] w-[200px] h-40 object-cover rounded-xl"
                  />
                  <div className="md:ml-6 pt-2 md:pt-6 text-center md:text-left">
                    <h1 className="text-white poppins-medium text-2xl">
                      {e.title}
                    </h1>
                    <p className="text-[#B6B4BD] poppins-light text-sm mt-1 md:mt-2">
                      {e.desc}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 rotate-[-45deg]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {/* tools section */}
      <div>
        <div
          id="tools"
          className={`poppins-bold md:text-6xl text-4xl mt-8 transition-all duration-700 delay-[1300ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-white">PREMIUM</h1>
          <h1 className="text-[#B6B4BD] opacity-40">TOOLS</h1>
        </div>
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={ref} className="flex w-full flex-wrap mt-8">
              {tools.map((e) => {
                return (
                  <div
                    key={e.img}
                    className={
                      !inView
                        ? "md:w-[45%] w-full flex justify-center my-2 text-left opacity-0"
                        : "md:w-[45%] w-full flex justify-center my-2 text-left transition-all duration-200 ease-in opacity-100"
                    }
                  >
                    <div className="flex w-[80%]">
                      <img src={e.img} className="w-16 rounded-2xl" />
                      <div className=" ml-5 text-sm mt-2 text-white">
                        {e.toolName}
                        <p className="text-[#B6B4BD]">{e.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </InView>
        <div
          className={`w-full flex flex-col items-center md:items-start mt-12 pr-4 md:pr-0 transition-all duration-700 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center md:justify-start">
            {skillsCategories
              .flatMap((category) => category.skills)
              .map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-[#B6B4BD] hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
          </div>
        </div>
        {/* contact form */}
        {/* <div
          id="contact"
          className={`poppins-bold md:text-7xl text-5xl mt-8 transition-all duration-700 delay-[1500ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h1 className="text-white">LET'S WORK</h1>
          <h1 className="text-[#B6B4BD] opacity-40">TOGETHER</h1>
        </div> */}

        {/* <div
          className={`flex flex-wrap mt-8 gap-4 px-4 md:px-0 transition-all duration-700 delay-[1700ms] ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="w-full md:w-[45%]">
            <label
              htmlFor="name"
              className="text-white poppins-medium mb-2 block text-sm md:text-base"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => {
                setform((prefForm) => ({ ...prefForm, name: e.target.value }));
              }}
              className="h-10 md:h-12 rounded-xl bg-[#343434] text-white w-full px-3 md:px-4 focus:outline-none focus:shadow-inner shadow-sm transition-all text-sm md:text-base border border-[#4a4a4a] focus:border-[#5a5a5a]"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label
              htmlFor="email"
              className="text-white poppins-medium mb-2 block text-sm md:text-base"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => {
                setform((prefForm) => ({ ...prefForm, email: e.target.value }));
              }}
              className="h-10 md:h-12 rounded-xl bg-[#343434] text-white w-full px-3 md:px-4 focus:outline-none focus:shadow-inner shadow-sm transition-all text-sm md:text-base border border-[#4a4a4a] focus:border-[#5a5a5a]"
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="msg"
              className="text-white poppins-medium mb-2 block text-sm md:text-base"
            >
              Message
            </label>
            <textarea
              id="msg"
              required
              onChange={(e) => {
                setform((prefForm) => ({
                  ...prefForm,
                  message: e.target.value,
                }));
              }}
              className="h-28 md:h-32 w-full rounded-sm resize-y bg-[#343434] text-white px-3 md:px-4 py-2 md:py-3  focus:outline-none focus:shadow-inner shadow-sm transition-all text-sm md:text-base border border-[#4a4a4a] focus:border-[#5a5a5a]"
            ></textarea>
          </div>
          <div className="w-full flex justify-center md:justify-start">
            <button
              onClick={handleSubmit}
              className="backdrop-blur-sm bg-white/10 hover:bg-white/20 text-white poppins-medium py-1.5 md:py-2 px-5 md:px-6 rounded-xl transition-all border border-white/20 text-sm"
            >
              Send Message
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
