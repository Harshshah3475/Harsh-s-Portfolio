import React from "react";
import { useState } from "react";

const hero = () => {
  const [projects, setprojects] = useState([
    {
      image: "/src/assets/project1.png",
      title: "Notes4all",
      desc: "A platform for getting your college notes at one place.",
    },
    {
      image: "/src/assets/project2.png",
      title: "SCP Website",
      desc: "Website for college most prestigeious society Sanskritik Chetna Parishad.",
    },
  ]);
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
              <div
                key={e.image}
                className="w-full md:h-40 h-fit md:flex hover:bg-gray-800  rounded-2xl my-8 pt-1 pl-1 "
              >
                <img
                  src={e.image}
                  className="md:w-[240px] h-38 object-cover rounded-2xl  "
                />
                <div className="md:ml-3 pt-2 md:pt-6">
                  <h1 className="text-white poppins-medium text-2xl  ">{e.title}</h1>
                  <p className="text-[#B6B4BD] poppins-light text-sm mt-1 md:mt-2">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default hero;
