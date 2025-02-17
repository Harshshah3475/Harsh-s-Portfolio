import React from "react";
import profle from "../assets/profile.avif";
import github from "../assets/github.png"
import linkedin from "../assets/linkedin.png"


const nameCard = () => {
  return (
    <div>
      <div className=" w-[344px] h-[540px] bg-white border-2 rounded-2xl text-center mt-16">
        <div className="flex justify-center">
          <img
            src={profle}
            className="w-[240px] h-[284px] object-cover rounded-2xl mt-4"
          ></img>
        </div>
        <h1 className="text-black poppins-semibold text-4xl mt-2.5 ">Harsh Kumar</h1>
        <p className="text-[13px] p-4">A web developer Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laudantium tempore sapiente harum voluptates, </p>
        <div className="flex w-[100%] justify-center mt-3 ">
        <a href="#"><img src={github} className=" w-[25px] mx-2"></img></a>
        <a href="#"><img src={linkedin} className=" w-[25px] mx-2"></img></a>
        </div>

      </div>
    </div>
  );
};

export default nameCard;
