import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdSettings } from "react-icons/md";

const DashBoardHeader = () => {
  return (
    <div className="lg:flex gap-6">
      <div className="flex relative w-2/3 items-center gap-2">
        <input
          className="p-2 bg-white placeholder:text-[#969BA0] rounded-sm w-full border border-gray-300"
          type="search"
          name="search"
          id="search"
          placeholder="Search here... "
        />
        <span className="absolute right-4">
          <AiOutlineSearch size={20} />
        </span>
      </div>
      <div className="flex pt-6 lg:pt-0 items-center gap-6">
        <div className="relative gap-2">
          <span className="bg-[#F3F2F7] text-[#2D9CDB] rounded-full p-2">
            <FaBell />
          </span>
          <span className="text-xs bg-[#2D9CDB] absolute right-[-15px] top-0 text-[#F3F2F7] rounded-full p-1">23</span>
        </div>
        <div className="relative gap-2">
          <span className="bg-[#F3F2F7] text-[#2D9CDB] rounded-full p-2">
            <FaComment />
          </span>
          <span className="text-xs bg-[#2D9CDB] absolute right-[-15px] top-0 text-[#F3F2F7] rounded-full p-1">13</span>
        </div>
       
        <div className="relative  gap-2">
          <span className="bg-[#F3F2F7] text-[#5E6C93] rounded-full p-2">
            <FaDeleteLeft />
          </span>
          <span className="text-xs bg-[#5E6C93] absolute right-[-15px] top-0 text-[#F3F2F7] rounded-full p-1">23</span>
        </div>
         <div className="relative gap-2">
          <span className="bg-[#F3F2F7] text-[#FF5B5B] rounded-full p-2">
            <MdSettings />
          </span>
          <span className="text-xs bg-[#FF5B5B] absolute right-[-15px] top-0 text-[#F3F2F7] rounded-full p-1">23</span>
        </div>
     
      </div>
      <div className="flex items-center gap-2">
        <h1>Hello, Kosi</h1>
        <img
          className="rounded-full h-10 w-10"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={50}
          alt=""
        />
      </div>
    </div>
  );
};

export default DashBoardHeader;
