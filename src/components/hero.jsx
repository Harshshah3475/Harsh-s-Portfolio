import React from "react";
import { useState, useEffect } from "react";
import { InView } from "react-intersection-observer";
import layersSVG from "../assets/layers.svg";
import layoutSVG from "../assets/layout.svg";


const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        <div 
          id="home" 
          className={`poppins-bold md:text-8xl text-5xl transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <h1 className="text-white">WEB</h1>
          <h1 className="text-[#B6B4BD] opacity-40">DEVELOPER</h1>
        </div>
        <div 
          className={`md:w-[80%] mt-3 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <p className="text-[#B6B4BD]">
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

        <div 
          className={`w-full md:h-38 md:flex mt-8 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
          <div className="md:w-[40%] h-38 rounded-xl my-2 bg-[#F46C38] transform hover:scale-[1.02] transition-all relative overflow-hidden">
            <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 400 200">
              <path d="M-50 40 C 50 80, 100 0, 200 40 S 350 80, 450 40" stroke="white" strokeWidth="2" fill="none" />
              <path d="M-50 80 C 50 120, 100 40, 200 80 S 350 120, 450 80" stroke="white" strokeWidth="2" fill="none" />
              <path d="M-50 120 C 50 160, 100 80, 200 120 S 350 160, 450 120" stroke="white" strokeWidth="2" fill="none" />
              <path d="M-50 160 C 50 200, 100 120, 200 160 S 350 200, 450 160" stroke="white" strokeWidth="2" fill="none" />
            </svg>
            <img src={layersSVG} alt="Layers" className="w-8 h-8 md:mt-8 mt-4 ml-6 relative z-10" />
            <h1 className="text-white poppins-medium text-2xl mt-2 ml-6 relative z-10">Frontend</h1>
            <span className="poppins-medium text-lg ml-6 relative z-10">ReactJS, TailwindCSS</span>
          </div>
          <div className="md:w-[50%] h-38 rounded-xl my-2 md:mx-2 bg-[#C5FF41] transform hover:scale-[1.02] transition-all relative overflow-hidden">
          <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 400 200">
              <path d="M-50 40 C 50 80, 100 0, 200 40 S 350 80, 450 40" stroke="black" strokeWidth="2" fill="none" />
              <path d="M-50 80 C 50 120, 100 40, 200 80 S 350 120, 450 80" stroke="black" strokeWidth="2" fill="none" />
              <path d="M-50 120 C 50 160, 100 80, 200 120 S 350 160, 450 120" stroke="black" strokeWidth="2" fill="none" />
              <path d="M-50 160 C 50 200, 100 120, 200 160 S 350 200, 450 160" stroke="black" strokeWidth="2" fill="none" />
            </svg>
            <img src={layoutSVG} alt="Layout" className="w-8 h-8 md:mt-8 mt-4 ml-6 relative z-10"/> 
            <h1 className="text-black poppins-medium text-2xl mt-2 ml-6 relative z-10">Backend</h1>
            <span className="text-black poppins-medium text-lg ml-6 relative z-10">NodeJS, ExpressJS</span>
          </div>
        </div>
        {/* colored boxes ended */}

        {/* Recent prpojects */}
        <div>
          <div 
            id="projects" 
            className={`poppins-bold md:text-8xl text-5xl mt-8 transition-all duration-700 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h1 className="text-white">RECENT</h1>
            <h1 className="text-[#B6B4BD] opacity-40">PROJECTS</h1>
          </div>
          

          {projects.map((e, index) => {
            return (
              <a key={e.image} href={e.link} target="_blank">
                <div 
                  className={`w-full md:h-40 h-fit hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all duration-700 flex flex-col md:flex-row items-center rounded-xl my-8 relative group ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: `${900 + index * 200}ms` }}
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 rotate-[-45deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
            className={`poppins-bold md:text-8xl text-5xl mt-8 transition-all duration-700 delay-[1300ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
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
          <div 
            id="contact" 
            className={`poppins-bold md:text-7xl text-5xl mt-8 transition-all duration-700 delay-[1500ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
            <h1 className="text-white">LET'S WORK</h1>
            <h1 className="text-[#B6B4BD] opacity-40">TOGETHER</h1>
          </div>

          <div 
            className={`flex flex-wrap mt-8 gap-4 px-4 md:px-0 transition-all duration-700 delay-[1700ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
          >
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
