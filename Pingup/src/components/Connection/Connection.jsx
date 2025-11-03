import React, { useState } from "react";
import SideNav from "../SideNav/SideNav";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import { FiUsers } from "react-icons/fi";
import { FaUserCheck } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { LuUserPlus } from "react-icons/lu";

const Connection = () => {

  const [isActive, setIsActive] = useState()

  return (
    <div className="flex">
      <SideNav />
      <div>
        <Heading heading="Connections" />
        <Paragraph para="Manage your network and discover new connections" />
        <div className="pl-16">
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
          <div className="flex gap-5 p-5 bg-white border w-full rounded-lg mt-5 h-[38px] border-[#E5E7EB] shadow-md">
            {heading.map((heading) =>{
              return(
                <div className="flex gap-2 items-center">
                  {heading.icon}
                  <div>
                  {heading.title}
                  </div>
                </div>
              )
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
  icon: <FiUsers/>
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
]
