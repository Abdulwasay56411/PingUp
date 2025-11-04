import React from "react";
import SideNav from "../SideNav/SideNav";
import { FaCirclePlus } from "react-icons/fa6";
import Background1 from "../../assets/background 1.png";
import Background2 from "../../assets/background 2.png";
import Background3 from "../../assets/background 3.png";
import Background4 from "../../assets/background 4.png";
import Sponsored from "../../assets/sponsored.png";
import Card from "../Card/Card";
import Sample from "../../assets/sample.png";
import Sample1 from "../../assets/sample1.png";
import Sample2 from "../../assets/sample2.png";

const Story = () => {
  return (
    <div>
      <div className="flex">
        <SideNav />

        <div className="flex flex-col lg:flex-row gap-4 w-full lg:mx-8 my-10 px-3">
         
          <div className="flex flex-col gap-4 w-full">
            
            <div className="flex gap-1 md:gap-4 w-full overflow-x-auto">
              <div className="w-[120px] h-40 border-2 border-dashed border-[#A3B3FF] bg-linear-to-t to-[#EEF2FF] rounded-md from-[#FFFFFF] shrink-0">
                <div className="flex flex-col justify-center h-full items-center ">
                  <FaCirclePlus className="text-[#615FFF] text-4xl cursor-pointer" />
                  <h1 className="font-medium text-sm pt-3">Create Story</h1>
                </div>
              </div>

              {story.map((show, index) => {
                return (
                  <img
                    key={show.id}
                    src={show.image}
                    alt={`Story ${show.id}`}
                    className={`w-[120px] h-40 object-cover rounded-md shrink-0 ${
                      index > 1 ? "hidden md:block" : ""
                    }`}
                  />
                );
              })}
            </div>

            <div>
              <Card />
            </div>
          </div>

          <div className="w-full lg:w-auto">
          
            <div className="hidden lg:block bg-white shadow-md w-80 h-fit rounded-lg p-2">
              <h1 className="font-semibold text-[12px] text-[#1D293D]">
                Sponsored
              </h1>

              <div className="mt-2">
                <img
                  className="w-full h-[200px] object-cover rounded-md"
                  src={Sponsored}
                  alt="Sponsored"
                />
              </div>

              <div>
                <h1 className="text-[12px] text-[#45556C] py-1">
                  Email marketing
                </h1>
                <p className="text-[12px] text-[#90A1B9]">
                  Supercharge your marketing with a powerful, easy- to-use
                  platform built for results.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg hidden lg:block shadow-md w-80 h-auto my-5 p-2">
              <h1>Recent Messages</h1>
              <div>
                {recentMessage.map((showMessage) => {
                  return (
                    <div
                      key={showMessage.id}
                      className="flex justify-between items-center px-2 my-4"
                    >
                      <div className="flex gap-2 items-center">
                        <img
                          className="w-8 h-8"
                          src={showMessage.imgae}
                          alt="User"
                        />
                        <div>
                          <h1 className="font-medium text-[12px] text-[#1D293D] ">
                            {showMessage.name}
                          </h1>
                          <p className="text-[12px] text-[#6A7282]">
                            {showMessage.para}
                          </p>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-[10px] text-[#90A1B9] font-normal">
                          {showMessage.seen}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;

const story = [
  { id: 1, image: Background1 },
  { id: 2, image: Background2 },
  { id: 3, image: Background3 },
  { id: 4, image: Background4 },
];

const recentMessage = [
  {
    id: 1,
    imgae: Sample2,
    name: "Richard Hendricks",
    para: "I seen your profile",
    seen: "3 hour ago",
  },
  {
    id: 2,
    imgae: Sample,
    name: "john Warren",
    para: "This is a Samsung Tablet",
    seen: "8 days ago",
  },
  {
    id: 3,
    imgae: Sample1,
    name: "Alexa james",
    para: "how are you",
    seen: "15 day ago",
  },
];
