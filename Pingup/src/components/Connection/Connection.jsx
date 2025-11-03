import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import { FiUsers } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { LuUserPlus } from "react-icons/lu";
import Sample from "../../assets/sample.png";
import Sample1 from "../../assets/sample1.png";
import Button from "../Button/Button";

const Connection = () => {
  const [isActive, setIsActive] = useState(1);

  const handleColor = (id) => {
    setIsActive(id);
  };

  return (
    <div className="flex mx-auto">
      <SideNav />
      <div>
        <Heading heading="Connections" />
        <Paragraph para="Manage your network and discover new connections" />
        <div className="pl-16 mx-auto">
          <div className="flex justify-center gap-8 mt-5 flex-wrap">
            {followingBox.map((box) => {
              return (
                <div
                  key={box.id}
                  className="bg-white text-center border border-[#E5E7EB] shadow-sm  w-40  mt-5 p-5 rounded-lg"
                >
                  <h1 className="text-base font-bold ">{box.number}</h1>
                  <p className="text-[#45556C] text-base font-normal">
                    {box.title}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-5 p-3 bg-white border w-full rounded-lg mt-5 border-[#E5E7EB] shadow-md">
            {heading.map((item) => {
              return (
                <div
                  key={item.id}
                  onClick={() => handleColor(item.id)}
                  className={`flex gap-2 items-center cursor-pointer select-none ${
                    isActive === item.id
                      ? "text-black font-medium"
                      : "text-[#6A7282]"
                  }`}
                >
                  {item.icon}
                  <div>{item.title}</div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap my-5 md:flex-nowrap gap-4 ">
            {card.map((cardItem) => {
              return (
                <div className="bg-white w-full h-[168px] shadow-md rounded-lg mx-5 md:mx-0 my-4 p-3">
                  <div className="flex justify-center gap-4 items-start ">
                    <img src={cardItem.image} />
                    <div>
                      <h1>{cardItem.name}</h1>
                      <h2>{cardItem.title}</h2>
                      <p>{cardItem.para}</p>
                      <div className="mt-3">{cardItem.button}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connection;

const followingBox = [
  {
    id: 1,
    number: "2",
    title: "Followers",
  },
  {
    id: 2,
    number: "2",
    title: "Following",
  },
  {
    id: 3,
    number: "1",
    title: "Pending",
  },
  {
    id: 4,
    number: "3",
    title: "Connection",
  },
];

const heading = [
  {
    id: 1,
    title: "Followers",
    icon: <FiUsers />,
  },
  {
    id: 2,
    title: "Following",
    icon: <FaUserCheck />,
  },
  {
    id: 3,
    title: "Pending",
    icon: <FaUserEdit />,
  },
  {
    id: 4,
    title: "Connections",
    icon: <LuUserPlus />,
  },
];

const card = [
  {
    id: 1,
    image: Sample,
    name: "Richard Hendricks",
    title: "@Richard Hendricks",
    para: "🌍 Dreamer | 📚 Learner | 🚀 D...",
    button: <Button text="View Profile" />,
  },
  {
    id: 2,
    image: Sample1,
    name: "Alexa james",
    title: "@alexa_james",
    para: "🌍 Dreamer | 📚 Learner | 🚀 D...",
    button: <Button text="View Profile" />,
  },
];
