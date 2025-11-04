import React, { useState } from "react";
import Sample from "../../assets/sample.png";
import Image from "../../assets/images.png";
import { FaRegHeart } from "react-icons/fa6";
import { FaRegComment } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import CardImage from "../../assets/images (1).png";
import CardImage2 from "../../assets/images (2).png";

const Card = ({ text }) => {
  return (
    <div>
      <div className="w-full h-auto my-6  p-3 rounded-lg bg-white shadow-lg ">
        <div className="flex gap-2 items-center">
          <img className="w-10 h-10" src={Sample} />
          <div>
            {name.map((userName) => {
              return (
                <div key={userName.id}>
                  <h1 className="flex items-center font-semibold gap-0.5">
                    {userName.name}
                    <span className="text-[#2B7FFF]">{userName.icon}</span>
                  </h1>
                  <h2 className="text-[#6A7282] text-sm">{userName.heading}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p className="text-[#1E2939] text-sm pt-4 pb-2 ">
            We're a small <span className="text-[#4F39F6]">#team</span> with a
            big vision — working day and night to turn dreams into products, and
            <span className="text-[#4F39F6]">#products</span> into something
            people love.
          </p>
        </div>
        <div className="mt-1 mb-4">
          <img className="w-full" src={Image} />
        </div>
        <div className="w-full h-0.5 bg-[#D1D5DC]"></div>
        <div className="flex gap-5 mt-3">
          {Icon.map((show) => {
            return (
              <div
                key={show.id}
                className="flex gap-2 items-center text-sm text-[#6A7282]"
              >
                {show.icon}
                {show.heading}
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="bg-white shadow-lg w-full h-auto my-5 rounded-lg px-4">
          <div className="flex items-center gap-3">
            <img className="w-8 h-8" src={Sample} />
            <div>
              <h1 className="text-base font-semibold">John Warren</h1>
              <p className="text-sm text-[#6A7282]">
                @john_warren • 16 days ago
              </p>
            </div>
          </div>
          <p className="text-sm text-[#1E2939] py-5">
            Unlock your potential—every small step counts. Stay consistent, stay
            focused, and trust the process. Growth takes time, but every day is
            a new chance to be better than yesterday. 🌱✨
          </p>
          <p className="text-sm text-[#4F39F6]">
            #Motivation #GrowthMindset #DailyInspiration #StayFocused #LevelUp
            #PositiveVibes #KeepGoing #SelfImprovement #MindsetMatters
            #SuccessJour
          </p>
          <div className="w-full h-0.5 bg-[#D1D5DC] mt-9 mb-2"></div>
          <div className="flex gap-4">
            {Icon.map((icon) => {
              return (
                <div
                  key={icon.id}
                  className="flex items-center gap-2 text-sm text-[#4A5565]"
                >
                  {icon.icon}
                  {icon.heading}
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white w-full h-auto rounded-lg shadow-lg p-4">
          {name.map((msg) => {
            return (
              <div key={msg.id} className="flex items-center gap-3">
                <img className="w-8 h-8" src={Sample} />
                <div>
                  <h1 className="flex items-center gap-1 font-semibold text-base">
                    {msg.name}{" "}
                    <span className="text-[#2B7FFF]">{msg.icon}</span>
                  </h1>
                  <div className="text-sm text-[#6A7282]">{msg.heading}</div>
                </div>
              </div>
            );
          })}
          <div className="text-sm mt-5 text-[#1E2939] flex flex-wrap gap-1">
            {"This is a sample paragraph with some #hashtags like #socialmedia and #marketing. Let's find them!"
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className={
                    word.trim().startsWith("#")
                      ? "text-[#4F39F6]"
                      : "text-[#1E2939]"
                  }
                >
                  {word}
                </span>
              ))}
          </div>
        </div>
        <div>
          {card.map((showCard) => {
            return (
              <div
                key={showCard.id}
                className="w-full h-auto bg-white shadow-lg my-5 p-4 rounded-lg "
              >
                <div className="flex gap-3 items-center">
                  <img className="w-8 h-8" src={showCard.userImg} />
                  <div>
                    <h1 className="flex gap-1 items-center text-base font-semibold">{showCard.name} <span className="text-[#2B7FFF]">{showCard.icon}</span> </h1>
                    <p className="text-sm text-[#6A7282]">{showCard.heading}</p>
                  </div>
                </div>
                <div className="mt-2 text-[#1E2939] text-sm">{showCard.para}</div>
                <div>
                  <img className="w-full h-[400px] my-5 object-center" src={showCard.image} />
                </div>
                <div className="w-full h-0.5 bg-[#D1D5DC] mb-1"></div>
                <div className="flex gap-5">
                   {Icon.map((cardIcon) =>{
                    return(
                      <div key={cardIcon.id} className="flex items-center gap-2">
                       {cardIcon.icon}
                        {cardIcon.heading} 
                      </div>

                    )
                   })}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          {name.map((card) =>{
            return(
              <div key={card.id} className="bg-white w-full p-4 my-5 h-auto shadow-lg rounded-lg">
                <div className="flex gap-4 items-center">
                  <img src={card.image} />
                  <div>
                    <h1 className="flex items-center gap-1 text-base font-semibold">{card.name} <span className="text-[#2B7FFF]">{card.icon}</span></h1>
                    <p className="text-[#6A7282] text-sm">{card.heading}</p>
                  </div>
                </div>
                <div className="mt-5 mb-2 text-[#1E2939] text-sm">
                  {card.para}
                </div>
                <div className="w-full h-0.5 bg-[#D1D5DC] my-2"></div>
                <div className="flex gap-5">
                 {Icon.map((icon) =>{
                  return(
                    <div className="flex items-center gap-2">
                       {icon.icon}
                       {icon.heading}
                    </div>
                  )
                 })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;

const Icon = [
  {
    id: 1,
    icon: <FaRegHeart />,
    heading: "0",
  },
  {
    id: 2,
    icon: <FaRegComment />,
    heading: "12",
  },
  {
    id: 3,
    icon: <MdOutlineShare />,
    heading: "7",
  },
];

const name = [
  {
    id: 1,
    name: "John Warren",
    icon: <IoCheckmarkDoneCircleOutline />,
    heading: "@john_warren • 9 days ago",
    para: "Hello, Everyone this is my first Post",
    image: Sample,
  },
];

const card = [
  {
    id: 1,
    userImg: Sample,
    name: "John Warren",
    icon: <IoCheckmarkDoneCircleOutline />,
    heading: "@john_warren • 16 days ago",
    image: CardImage,
  },
  {
    id: 2,
    userImg: Sample,
    para: "Finally, got the card !",
    name: "John Warren",
    icon: <IoCheckmarkDoneCircleOutline />,
    heading: "@john_warren • 16 days ago",
    image: CardImage2,
  },
];
