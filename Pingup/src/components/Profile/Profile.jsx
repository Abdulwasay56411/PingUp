import React from "react";
import SideNav from "../SideNav/SideNav";
import ProfileImage from '../../assets/profile.png'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { useState } from "react";
import Card from "../Card/Card";
import Background from '../../assets/Background.png'

const Profile = () => {
  const [isActive, setIsActive] = useState(1);

  const handleColor = (id) => {
    setIsActive(id);
  };

  return (
    <div className="flex">
      <SideNav />

      <div className="mt-5 mx-auto w-full max-w-3xl px-4">
        <div className="w-full h-56 rounded-t-lg bg-cover" style={{backgroundImage: `url(${Background})`}}></div>

        <div className="w-full bg-white shadow-md rounded-b-lg pb-5">
          <div className="flex flex-col md:flex-row items-start relative">
            <img
              className="
                w-[120px] h-auto  bg-center
                ml-5 sm:ml-14 
                absolute -top-14 
              "
              src={ProfileImage}
              alt="Profile"
            />

            <div
              className="
                flex flex-col sm:flex-row 
                w-full justify-between gap-3 
                pt-5 sm:pt-5  mt-12
                pl-5
                 sm:mt-0 
                sm:pl-44
              "
            >
              <div>
                <h1 className="flex items-center text-[#101828] text-2xl font-bold">
                  John Warren{" "}
                  <span className="text-[#2B7FFF] ml-1">
                    <IoCheckmarkDoneCircleOutline />
                  </span>
                </h1>
                <h2 className="text-[#4A5565] text-base font-normal">
                  @john_warren
                </h2>
              </div>

              <button className="border flex items-center justify-center gap-1 border-[#D1D5DC] w-[86px]  rounded-lg cursor-pointer font-medium mt-3 sm:mt-0">
                <FiEdit /> <span>Edit</span>
              </button>
            </div>
          </div>
          <div className="pl-5 sm:pl-44 pr-5 pt-5">
            <p className="text-[#364153] text-sm">
              🌍 Dreamer | 📚 Learner | 🚀 Doer Exploring life one step at a
              time. ✨ Staying curious. Creating with purpose.
            </p>

            <div className="flex gap-5 my-5 flex-wrap">
              <h1 className="flex items-center gap-2 text-lg text-[#6A7282]">
                <IoLocationOutline />
                <span className="text-sm">New York, NY</span>
              </h1>

              <h1 className="flex items-center gap-2 text-lg text-[#6A7282]">
                <CiCalendarDate />
                <span className="text-sm">Joined 16 days ago</span>
              </h1>
            </div>
            <div className="w-full h-0.5 bg-[#E5E7EB]"></div>

            <div className="flex gap-6 py-2 flex-wrap">
              {following.map((item) => (
                <div key={item.id}>
                  <h1 className="font-bold text-[#101828] text-xl">
                    {item.num}{" "}
                    <span className="font-normal text-sm text-[#6A7282]">
                      {item.title}
                    </span>
                  </h1>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" flex justify-around items-center h-10 bg-white py-3 shadow-md my-10 mx-20 rounded-lg">
          {button.map((buttonItem) => {
            return (
              <div
                onClick={() => handleColor(buttonItem.id)}
                className={`w-full text-center p-2 rounded-lg h-9 cursor-pointer font-medium text-sm ${
                  isActive === buttonItem.id
                    ? "bg-[#4F39F6] text-white"
                    : "bg-white text-[#4A5565]"
                }`}
              >
                {buttonItem.name}
              </div>
            );
          })}
        </div>
        <Card/>
      </div>
    </div>
  );
};

export default Profile;

const following = [
  { id: 1, num: "6", title: "Posts" },
  { id: 2, num: "2", title: "Followers" },
  { id: 3, num: "2", title: "Following" },
];

const button = [
  {
    id: 1,
    name: "Posts",
  },
  {
    id: 2,
    name: "Media",
  },
  {
    id: 3,
    name: "Likes",
  },
];
