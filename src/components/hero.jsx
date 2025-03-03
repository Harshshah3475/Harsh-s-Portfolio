import React from "react";
import { useState } from "react";

const hero = () => {
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

  const [form, setform] = useState([{ name: "", email: "", message: "" }]);

  const handleSubmit = () => {
    console.log(
      `name is ${form.name} \n email: ${form.email} \n msg: ${form.message}`
    );
  };
  return (
    <>
      <div className="md:mt-8 md:text-left text-center ml-9 mt-8 h-fit">
        <div className="poppins-bold md:text-8xl text-5xl">
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

        <div className="flex text-white md:w-[80%] justify-between my-3">
          <div className="md:w-16">
            <h1 className="poppins-bold md:text-5xl text-3xl">+1</h1>
            <span className="md:text-sm w-3 text-balance text-[12px]">
              YEARS OF EXPERIENCE
            </span>
          </div>

          <div className="md:w-16">
            <h1 className="poppins-bold md:text-5xl text-3xl">+3</h1>
            <span className="md:text-sm w-3 text-balance text-[12px]">
              PROJECTS COMPLETED
            </span>
          </div>

          <div className="md:w-16">
            <h1 className="poppins-bold md:text-5xl text-3xl">+0</h1>
            <span className="md:text-sm w-3 text-balance text-[12px]">
              WORLDWIDE CLIENTS
            </span>
          </div>
        </div>
        {/* numbers end */}

        <div className="w-full md:h-28 md:flex mt-8">
          <div className="md:w-[35%] h-28 rounded-xl my-2 bg-[#F46C38]"></div>
          <div className="md:w-[55%] h-28 rounded-xl my-2 md:mx-2  bg-[#C5FF41]"></div>
        </div>
        {/* colored boxes ended */}

        {/* Recent prpojects */}
        <div>
          <div className="poppins-bold md:text-8xl text-5xl mt-8">
            <h1 className="text-white">RECENT</h1>
            <h1 className="text-[#B6B4BD] opacity-40">PROJECTS</h1>
          </div>

          {projects.map((e) => {
            return (
              <a key={e.image} href={e.link} target="_blank">
                <div className="w-full md:h-40 h-fit md:flex hover:bg-[#343434]  rounded-2xl my-8 pt-1 pl-1 ">
                  <img
                    src={e.image}
                    className="md:w-[240px] h-38 object-cover rounded-2xl  "
                  />
                  <div className="md:ml-3 pt-2 md:pt-6">
                    <h1 className="text-white poppins-medium text-2xl  ">
                      {e.title}
                    </h1>
                    <p className="text-[#B6B4BD] poppins-light text-sm mt-1 md:mt-2">
                      {e.desc}
                    </p>
                    #36454F
                  </div>
                </div>
              </a>
            );
          })}
        </div>
        <div>
          <div className="poppins-bold md:text-8xl text-5xl mt-8">
            <h1 className="text-white">PREMIUM</h1>
            <h1 className="text-[#B6B4BD] opacity-40">TOOLS</h1>
          </div>
          <div className="flex w-full flex-wrap mt-8">
            {tools.map((e) => {
              return (
                <div key={e.img} className="md:w-[45%] flex m-2 text-left ">
                  <img src={e.img} className="w-16 rounded-2xl" />
                  <div className=" ml-5 text-sm mt-2 text-white">
                    {e.toolName}
                    <p className="text-[#B6B4BD]">{e.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* contact form */}
        <div className="poppins-bold md:text-7xl text-5xl mt-8">
          <h1 className="text-white">LET'S WORK</h1>
          <h1 className="text-[#B6B4BD] opacity-40">TOGETHER</h1>
        </div>

        <div className="flex flex-wrap">
          <div className="w-[50%]">
            <label htmlFor="name">Name</label> <br></br>
            <input
              type="text"
              id="name"
              required
              onChange={(e) => {
                setform((prefForm) => ({ ...prefForm, name: e.target.value }));
              }}
              className=" h-9 rounded-xl  bg-[#343434] text-white w-[90%]"
            />
          </div>
          <div className="w-[50%]">
            <label htmlFor="email">Email</label> <br></br>
            <input
              type="email"
              id="email"
              required
              onChange={(e) => {
                setform((prefForm) => ({ ...prefForm, email: e.target.value }));
              }}
              className="h-9 rounded-xl  bg-[#343434] text-white w-[90%]"
            />
          </div>
          <div className="w-full">
            <label htmlFor="msg">Message</label> <br></br>
            <textarea
              id="msg"
              required
              onChange={(e) => {
                setform((prefForm) => ({ ...prefForm, message: e.target.value }));
              }}
              className="h-32 w-full rounded-xl bg-[#343434] text-white px-4 py-2 resize-none"
            ></textarea>
          </div>
          <button onClick={handleSubmit}>click here</button>
        </div>
      </div>
    </>
  );
};

export default hero;
