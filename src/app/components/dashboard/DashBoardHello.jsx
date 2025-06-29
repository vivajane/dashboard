import React from "react";
import { MdMovieFilter } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

const DashBoardHello = () => {
  return (
    <div className="lg:flex py-2 justify-between items-center">
      <div>
        <h1 className="text-[#464255] text-2xl">DashBoard</h1>
        <p className="text-[#A3A3A3] font-medium text-base py-2">
          Hi, Samantha. Welcome back to Sedap Admin!
        </p>
      </div>
      <div className="bg-white rounded-md mt-4 lg:mt-0 flex gap-4 text-sm p-3">
        <span className="bg-[#F3F2F7] text-[#2D9CDB] rounded-lg p-2"><MdMovieFilter size={20} /></span>
       <div className="flex gap-2">
         <div>
            <h1 className="text-base">FilterPeriode</h1>
            <p className="text-[#3E4954] text-sm py-[1px] text-center">10th April - 1st May</p>

        </div>
        <span>
            <RiArrowDownSLine size={20} />
        </span>

       </div>
      </div>
    </div>
  );
};

export default DashBoardHello;
