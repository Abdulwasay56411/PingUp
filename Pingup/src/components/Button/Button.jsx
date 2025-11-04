import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-linear-to-l from-[#615FFF] to-[#9810FA] w-full text-white h-11 rounded-lg flex justify-center items-center gap-2 text-2xl cursor-pointer transform duration-300  hover:scale-105 ">{props.icon} <span className="text-base">{props.text}</span> </button>
    </div>
  );
};

export default Button;
