import React from "react";
import SideNav from "../SideNav/SideNav";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import { CiSearch } from "react-icons/ci";
import Sample from "../../assets/sample.png";
import Sample1 from "../../assets/sample1.png";
import Sample2 from "../../assets/sample2.png";
import { CiLocationOn } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { LuMessageCircle } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";

const Discover = () => {
  return (
    <div className="flex ">
      <SideNav />
      <div className="flex-1 w-full">
        <Heading heading="Discover People" />
        <Paragraph para="Connect with amazing people and grow your network" />
        <div className=" px-5 md:px-16 my-5">
          <div className=" mx-auto p-5 relative bg-white shadow-md rounded-lg">
            <input
              className="outline-none border border-[#D1D5DC]  rounded-lg w-full py-2 px-9"
              type="text"
              placeholder="Search people by name, username, bio, or location..."
            />
            <CiSearch className="text-2xl absolute top-7 ml-2 text-[#90A1B9]" />
          </div>
          <div className="flex mx-8 md:mx-0 flex-wrap xl:flex-nowrap my-12 gap-5 ">
            {card.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full bg-white shadow-md text-center rounded-lg h-auto p-4"
                >
                  <div className="flex  flex-col items-center">
                    <img className="w-16 h-16 " src={item.image} />
                    <div className="p-2">
                      <h1>{item.name}</h1>
                      <h2>{item.title}</h2>
                      <p>{item.para}</p>
                    </div>
                    <div className="flex gap-2 text-[12px] text-[#4A5565]">
                      <div className="flex gap-2 items-center border border-[#D1D5DC] p-2 rounded-full">
                        {item.locationIcon}
                        {item.location}
                      </div>
                      <div className="text-center p-2 border border-[#D1D5DC] rounded-full">
                        {item.followers}
                      </div>
                    </div>
                    <div className="flex gap-2 items-center justify-center w-full mt-3">
                      <button className="flex items-center justify-center gap-2 w-[80%] py-2 text-white font-medium rounded-lg bg-linear-to-r from-[#615FFF] to-[#9810FA] transform duration-300 cursor-pointer hover:scale-105">
                        {item.userIcon}
                        {item.button}  
                      </button>
                      <div className="text-3xl text-[#62748E] font-normal border p-1 border-[#62748E] rounded-lg">
                        {item.icon}
                      </div>
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

export default Discover;

const card = [
  {
    id: 1,
    image: Sample,
    name: "John Warren",
    title: "@john_warren",
    para: "🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨ Staying curious. Creating with purpose.",
    location: "New York, NY",
    locationIcon: <CiLocationOn />,
    followers: "2 Followers",
    button: "Follow",
    icon: <GoPlus />,
    userIcon: <FaUserPlus />,
  },
  {
    id: 2,
    image: Sample2,
    name: "Richard Hendricks",
    title: "@Richard Hendricks",
    para: "🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨ Staying curious. Creating with purpose.",
    location: "New York, NY",
    locationIcon: <CiLocationOn />,
    followers: "2 Followers",
    button: "Following",
    icon: <LuMessageCircle />,
    userIcon: <FaUserPlus />,
  },
  {
    id: 3,
    image: Sample1,
    name: "Alexa james",
    title: "@alexa_james",
    para: "🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a time. ✨ Staying curious. Creating with purpose.",
    location: "New York, NY",
    locationIcon: <CiLocationOn />,
    followers: "2 Followers",
    button: "Following",
    icon: <LuMessageCircle />,
    userIcon: <FaUserPlus />,
  },
];
