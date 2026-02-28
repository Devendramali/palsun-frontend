import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { RiLoginCircleLine } from "react-icons/ri";


const Topnav = () => {
  
  return (
    <div className="bg-[#f1f1f1] py-1 px-4 lg:px-10">
      
      {/* MAIN CONTAINER */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">

        {/* LOGO + TITLE */}
        <div className="flex flex-col items-center text-center lg:flex-row lg:text-left gap-2">
          <img src="/clean_logo.webp" className="w-12 h-12 my-2 lg:my-0" alt="" />
          <img src="/Logo2.png" className="w-12 h-12 my-2 lg:my-0" alt="" />
          <span className="text-sm sm:text-base lg:text-[16px] font-bold  my-2 lg:my-0">
            Government of Maharashtra | महाराष्ट्र शासन
          </span>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-col items-center gap-3 text-sm lg:flex-row lg:gap-4 lg:text-base">

          <span className="flex items-center gap-2 text-sm sm:text-base lg:text-[16px]">
            <FaPhone /> <span className="text-sm sm:text-base lg:text-[13px]">9421477822</span> 
          </span>

          <span className="flex items-center gap-2 break-all text-center text-sm sm:text-base lg:text-left lg:text-[16px]">
            <IoMail /> <span className="text-sm sm:text-base lg:text-[13px]">gppalsun2014@gmail.com</span>
          </span>

          <span className="flex items-center gap-2 text-sm sm:text-base lg:text-[16px]">
            <MdLocationOn /> <span className="text-sm sm:text-base lg:text-[13px]">PIN: 425416</span>
          </span>

          {/* ICONS */}
          <div className="flex gap-3">
            <NavLink
              to="/login"
              className="bg-orange-500 text-white w-8 h-8 flex justify-center items-center rounded-full"
            >
              <RiLoginCircleLine />
            </NavLink>

            {/* <button
            className="bg-[#003366] text-white text-sm w-10 h-8 rounded-full"
          >
            Eng
          </button> */}

          </div>

        </div>
      </div>
    </div>
  );
};

export default Topnav;
