import React, { useState } from 'react'

import { HiHome, HiOutlineCurrencyDollar, HiOutlineHome } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { HiTableCells } from "react-icons/hi2";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { adminlogo } from '../assets';
import { PiNewspaperClippingThin } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";




const Sidebar = () => {
    const location = useLocation();
    const [links, setLinks] = useState([
        { to: "/dashboard", icon: <HiOutlineHome className='z-20' size={25} />, text: 'Dashboard' },
        { to: "/front_desk", icon: <FaCircleUser className='z-20' size={20} />, text: 'Front_desk' },
        { to: "/guest", icon: <HiTableCells className='z-20' size={20} />, text: 'Guest' },
        { to: "/rooms", icon: <IoNotifications className='z-20' size={20} />, text: 'Rooms' },
        { to: "/deal", icon: <IoNotifications className='z-20' size={20} />, text: 'Deal' },
        { to: "/rate", icon: <HiOutlineCurrencyDollar className='z-20' size={25} />, text: 'Rate' },
    ]);


    return (
        <div className='w-[240px] bg-[#ffffff] h-[100vh] border border-gray-300 lgxl:block  slg:block hidden'>
            <div className='px-5 pt-2.5'>
                <img className='w-52' src={adminlogo} alt="" />

                <div className='pt-10 px-1'>
                    <div>
                        <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>APPS</p>

                        <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                            <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                            <div className='flex items-center  gap-4 z-50'>
                                <AiOutlineDashboard className='text-[#787878]' />
                                <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Dashboard</p>
                            </div>
                        </div>
                    </div>


                    <div className='pt-7'>
                        <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>MANAGE SERVICE/GIG</p>
                        <div className='flex items-center gap-4 pt-5'>
                            <PiNewspaperClippingThin />
                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Gig Category</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar