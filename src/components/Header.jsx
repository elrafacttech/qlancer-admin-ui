import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import user from "../assets/image/user.jpg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { CgLayoutGridSmall } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";





const Header = ({ data }) => {
  const [openSelect, setOpenSelect] = useState(false);

  const options = ["HOTEL 1", "HOTEL 2"];
  const [selectedHotel, setSelectedHotel] = useState(options[0]);
  const location = useLocation();

  return (
    <>
      <div className="flex justify-between h-16 shadow-sm  border-b w-ful px-3.5 font_Roboto_Regular fixe right-0 lgxl:w-[calc(100vw-237px)  w-full  bg-[#ffffff] z-50  ">
            <ul className="slg:flex hidden items-center lg:gap-8 gap-5 lg:text-base text-sm ">
                <li >Admin Panel</li>
                <li className="text-[#767676]">Support</li>
                <li className="text-[#767676]">Plugins</li>
                <li className="text-[#767676]">Banner Ads Manager</li>
                <li className="text-[#767676]">Settings</li>
            </ul>
            <ul className="slg:hidden flex items-center ">
                <li><RxHamburgerMenu  size={26} /></li>
            </ul>

            <ul className="flex items-center gap-5 pr-4 lg:text-base text-sm">
                <li><CgLayoutGridSmall className="text-[#6d6d6d]" size={35} /></li>

                <li className="flex gap-3 text-[#767676]">
                    <p className="flex items-center justify-center ">Admin <MdArrowDropDown /></p>
                    <img className="h-12 w-12 rounded-full object-cover" src={user} alt="" />
                </li>
                {/* <li className="">
                    <img className="h-12 w-12 rounded-full object-cover" src={user} alt="" />
                </li> */}
            </ul>
      </div>

    </>
  );
};

export default Header;