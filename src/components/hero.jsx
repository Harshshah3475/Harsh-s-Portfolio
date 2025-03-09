import React from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";


  const Hero = () => {
  

  const [projects, setprojects] = useState([
    {
      image: "/src/assets/project1.png",
      title: "Notes4all",
      desc: "A platform for getting your college notes at one place.",
      link: "https://notes4all-mu.vercel.app",
    },
    {
      image: "/src/assets/project2.png",
      title: "SCP Website",
      desc: "Website for college most prestigeious society Sanskritik Chetna Parishad.",
      link: "https://scpps.co.in",
    },
  ]);

  const [tools, settools] = useState([
    {
      img: "/src/assets/reactjs.png",
      toolName: "ReactJS",
      desc: "Front-end JS library",
    },
    {
      img: "/src/assets/nodejs.png",
      toolName: "NodeJS",
      desc: "Cross platform JS runtime",
    },
    {
      img: "/src/assets/expressjs.png",
      toolName: "EXpressJS",
      desc: "NodeJS framework",
    },
    {
      img: "/src/assets/nextjs.avif",
      toolName: "NextJS",
      desc: "React Framework",
    },
    {
      img: "/src/assets/tailwindcss.png",
      toolName: "TailwindCSS",
      desc: "CSS framework",
    },
    { img: "/src/assets/figma.avif", toolName: "Figma", desc: "Design tool" },
  ]);

  const [form, setform] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      console.log("Please fill all the details");
    } else {
      console.log(
        `name is ${form.name} \n email: ${form.email} \n msg: ${form.message}`
      );
    }
  };

  return (
    <div className="md:mt-8 md:text-left text-center md:ml-9 mt-8 h-fit">
        <div id="home" className="poppins-bold md:text-8xl text-5xl">
          <h1 className="text-white">WEB</h1>
          <h1 className="text-[#B6B4BD] opacity-40">DEVELOPER</h1>
        </div>
        <div className="md:w-[80%] mt-3">
     

          <p className="text-[#B6B4BD] ">
            Passionate about creating intuitive and engaging user experiences.
            Specialize in transforming ideas into beautifully crafted products.
          </p>
        </div>

        {/* numbers */}
        <InView>
          {({inView, ref, entry}) => (
            <div ref={ref} className="flex text-white md:w-[80%] justify-between my-3">
              <div className={`${inView ? "md:w-8 transition-all duration-200 ease-in" : "md:w-8 opacity-0 "}`}>
                <h1 className="poppins-bold md:text-5xl text-3xl">+1</h1>
                <span className="md:text-sm w-3 text-balance text-[12px] p-1">
                  YEARS OF EXPERIENCE
                </span>
              </div>

          <div className={`${inView ? "md:w-8 transition-all duration-300 ease-in" : "md:w-8 opacity-0 "}`}>
            <h1 className="poppins-bold md:text-5xl text-3xl">+3</h1>
            <span className="md:text-sm w-3 text-balance text-[12px] p-1">
              PROJECTS COMPLETED
            </span>
          </div>

              <div className={`${inView ? "md:w-8 transition-all duration-400 ease-in" : "md:w-8 opacity-0 "}`}>
                <h1 className="poppins-bold md:text-5xl text-3xl">+0</h1>
                <span className="md:text-sm w-3 text-balance text-[12px] p-1">
                  WORLDWIDE CLIENTS
                </span>
              </div>
            </div>
          )}
        </InView>
        {/* numbers end */}

        <div className="w-full md:h-28 md:flex mt-8">
          <div className="md:w-[35%] h-28 rounded-xl my-2 bg-[#F46C38]"></div>
          <div className="md:w-[55%] h-28 rounded-xl my-2 md:mx-2  bg-[#C5FF41]"></div>
        </div>
        {/* colored boxes ended */}

        {/* Recent prpojects */}
        <div>
          <div id="projects" className="poppins-bold md:text-8xl text-5xl mt-8">
            <h1 className="text-white">RECENT</h1>
            <h1 className="text-[#B6B4BD] opacity-40">PROJECTS</h1>
          </div>

          {projects.map((e) => {
            return (
              <a key={e.image} href={e.link} target="_blank">
                <div className="w-full md:h-40 h-fit hover:bg-[#343434] flex flex-col md:flex-row items-center rounded-2xl my-8 pt-1">
                  <div className="w-[80%] flex flex-col items-center md:flex-row md:items-start">
                    <img
                      src={e.image}
                      className="md:w-[240px] w-[200px] h-38 object-cover rounded-2xl"
                    />
                    <div className="md:ml-3 pt-2 md:pt-6 text-center md:text-left">
                      <h1 className="text-white poppins-medium text-2xl">
                        {e.title}
                      </h1>
                      <p className="text-[#B6B4BD] poppins-light text-sm mt-1 md:mt-2">
                        {e.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* tools section */}
        <div>
          <div id="tools" className="poppins-bold md:text-8xl text-5xl mt-8">
            <h1 className="text-white">PREMIUM</h1>
            <h1 className="text-[#B6B4BD] opacity-40">TOOLS</h1>
          </div>
          <InView>
            {({inView, ref, entry}) => (
              <div ref={ref} className="flex w-full flex-wrap mt-8">
                {tools.map((e) => {
                  return (
                    <div
                      key={e.img}
                      className={(!inView)?"md:w-[45%] w-full flex justify-center my-2 text-left opacity-0": "md:w-[45%] w-full flex justify-center my-2 text-left transition-all duration-200 ease-in opacity-100"}
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
          {/* contact form */}
          <div id="contact" className="poppins-bold md:text-7xl text-5xl mt-8">
            <h1 className="text-white">LET'S WORK</h1>
            <h1 className="text-[#B6B4BD] opacity-40">TOGETHER</h1>
          </div>

          <div className="flex flex-wrap mt-8 gap-4 px-4 md:px-0">
            <div className="w-full md:w-[45%]">
              <label htmlFor="name" className="text-white poppins-medium mb-2 block text-sm md:text-base">Name</label>
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
              <label htmlFor="email" className="text-white poppins-medium mb-2 block text-sm md:text-base">Email</label>
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
              <label htmlFor="msg" className="text-white poppins-medium mb-2 block text-sm md:text-base">Message</label>
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
          </div>
        </div>
    </div>
  );
};

export default Hero;
