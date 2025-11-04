import React from "react";
import SideNav from "../SideNav/SideNav";
import Sample from "../../assets/sample.png";
import Sample1 from "../../assets/sample1.png";
import Sample2 from "../../assets/sample2.png";
import { FiMessageSquare } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";

const Message = () => {
  return (
    <div className="flex">
      <SideNav />
      <div>
        <Heading heading="Messages" />
        <Paragraph para="Talk to your friends and family"/>
        <div className=" px-5 md:px-16">
          {messageCard.map((card) => {
            return (
              <div className=" bg-white max-w-xl rounded-lg w-full h-auto shadow-md p-5 my-5">
                <div className="flex justify-between items-center ">
                  <div className="flex  gap-3">
                    <img className="w-12 h-12" src={card.image} />
                    <div>
                      <h1 className="text-[#314158] text-base font-medium">
                        {card.name}
                      </h1>
                      <h2 className="text-[#62748E] text-base font-normal">
                        {card.title}
                        <p className="text-[#4A5565] text-sm">{card.para}</p>
                      </h2>
                    </div>
                  </div>
                  <div>
                    <h1 className="flex justify-center items-center rounded-lg bg-[#F1F5F9] w-10 h-10 ">
                      {card.icon}
                    </h1>
                    <h2 className="flex justify-center items-center rounded-lg bg-[#F1F5F9] w-10 h-10 mt-4">
                      {card.icon2}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Message;

const messageCard = [
  {
    id: 1,
    image: Sample,
    name: "John Warren",
    title: "@john_warren",
    para: "🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨Staying curious. Creating with purpose.",
    icon: <FiMessageSquare />,
    icon2: <FiEye />,
  },
  {
    id: 2,
    image: Sample2,
    name: "Richard Hendricks",
    title: "@Richard Hendricks",
    para: "🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨Staying curious. Creating with purpose.",
    icon: <FiMessageSquare />,
    icon2: <FiEye />,
  },
  {
    id: 3,
    image: Sample1,
    name: "Alexa james",
    title: "@alexa_james",
    para: "🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨Staying curious. Creating with purpose.",
    icon: <FiMessageSquare />,
    icon2: <FiEye />,
  },
];
