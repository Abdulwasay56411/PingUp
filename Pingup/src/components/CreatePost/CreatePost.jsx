import React from "react";
import SideNav from "../SideNav/SideNav";
import Heading from "../Heading/Heading";
import Paragraph from "../Paragraph/Paragraph";
import Sample from "../../assets/sample.png";
import { CiImageOn } from "react-icons/ci";
import Button from "../Button/Button";

const CreatePost = () => {
  return (
    <div className="flex">
      <SideNav />
      <div className="flex-1 ">
        <Heading heading="Create Post" />
        <Paragraph para="Share your throughts with the world" />
        <div className="mx-5 md:ml-16 my-5">
          <div className=" p-5 bg-white w-full max-w-xl  h-auto shadow-md rounded-lg">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12" src={Sample} />
              <div>
                <h1 className="text-base font-semibold">John Warren</h1>
                <h2 className="text-sm text-[#6A7282] font-normal">
                  @john_warren
                </h2>
              </div>
            </div>
            <div className="my-10">
              <p className="text-[#99A1AF] text-sm">What's happening?</p>
            </div>
            <div className="w-full h-0.5 bg-[#D1D5DC]"></div>
            <div className="flex  items-center mt-4 justify-between">
              <CiImageOn className="text-3xl text-[#6A7282]" />
              <button className="w-[138px] h-9 bg-linear-to-l from-[#615FFF] to-[#9810FA] rounded-lg cursor-pointer text-white">
                Publish Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
