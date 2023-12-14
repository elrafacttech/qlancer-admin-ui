import React, { useEffect, useState } from 'react'

import { HiHome, HiOutlineCurrencyDollar, HiOutlineHome, HiOutlineNewspaper, HiOutlinePaperClip } from "react-icons/hi2";
import { FaUserCircle } from "react-icons/fa";
import { HiTableCells } from "react-icons/hi2";
import { FaCircleUser } from 'react-icons/fa6';
import { IoNotifications } from "react-icons/io5";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { adminlogo } from '../assets';
import { PiNewspaperClippingThin, PiToolboxFill } from "react-icons/pi";
import { AiOutlineDashboard } from "react-icons/ai";
import { GiSoccerField } from "react-icons/gi";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { TbCurrencyDollar } from "react-icons/tb";






const Sidebar = () => {
    const [serviceDropDown, setServiceDropDown] = useState(false)
    const [jobDropdown, setJobsDropdown] = useState(false)
    const navigate = useNavigate()
    const location = useLocation();
    const [links, setLinks] = useState([
        { to: "/dashboard", icon: <HiOutlineHome className='z-20' size={25} />, text: 'Dashboard' },
        { to: "/front_desk", icon: <FaCircleUser className='z-20' size={20} />, text: 'Front_desk' },
        { to: "/guest", icon: <HiTableCells className='z-20' size={20} />, text: 'Guest' },
        { to: "/rooms", icon: <IoNotifications className='z-20' size={20} />, text: 'Rooms' },
        { to: "/deal", icon: <IoNotifications className='z-20' size={20} />, text: 'Deal' },
        { to: "/rate", icon: <HiOutlineCurrencyDollar className='z-20' size={25} />, text: 'Rate' },
    ]);


    const handleService = () => {
        if (serviceDropDown === false) {
            setServiceDropDown(true)
        } else {
            setServiceDropDown(false)
        }

    }

    const handleJobs = () => {
        if (jobDropdown === false) {
            setJobsDropdown(true)
        } else {
            setJobsDropdown(false)
        }
    }

    console.log("serviceDropDown", serviceDropDown);

    useEffect(() => {
        console.log("JHVJHVJHVJGHvJVJGvgvgv");
    }, [])


    return (
        <div className='w-[240px] bg-[#ffffff] h-[100vh] border border-r border-[#f0f0f0] lgxl:block   hidden  fixed overflow-hidden overflow-y-scroll no-scrollbar '>
            <div className='pl-5 pr-4 pt-2.5'>
                <img className='w-52' src={adminlogo} alt="" />

                <div className='pt-10 px-1'>
                    <Link to="/dashboard">
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
                    </Link>



                    <div className='pt-7 flex flex-col gap-1.5'>
                        <Link to="/gig-category">
                            <div>
                                <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>MANAGE SERVICE/GIG</p>
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex items-center  gap-4 z-50'>
                                            <PiNewspaperClippingThin className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Gig Category</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/gig-custom-fields">
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <GiSoccerField className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Gig Custom Fields</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group ' >
                            <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                            <div className='flex justify-between items-center w-full' onClick={handleService}>
                                <div className='flex items-center  gap-4 z-50'>
                                    <PiToolboxFill className='text-[#000000]' />
                                    <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Gig Services</p>
                                </div>
                                <div className='text-[10px] z-50'>
                                    {
                                        !serviceDropDown ? <TfiPlus /> : <TfiMinus />
                                    }
                                </div>
                            </div>
                        </div>
                        {serviceDropDown ?
                            <div className={`flex gap-6 flex-col pl-8  ${serviceDropDown ? "transition duration-150 ease-in-out pt-6 " : ""}`}>
                                <Link to="/gig-service/active">
                                    <p className=' text-[13px] text-[#909090] font_Roboto_Medium '>Active</p>
                                </Link>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>Pending for approval</p>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>All Gigs List</p>
                            </div>
                            :
                            <>

                            </>
                        }

                        <Link to="/orders">
                            <div>
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex justify-between items-center w-full'>
                                            <div className='flex items-center  gap-4 z-50'>
                                                <PiToolboxFill className='text-[#000000]' />
                                                <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Orders</p>
                                            </div>
                                            <div className='text-[10px] z-50'>
                                                <TfiPlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='pt-7 flex flex-col gap-1.5'>
                        <Link to="/projects">
                            <div>
                                <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>MANAGE PROJECT</p>
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex justify-between items-center w-full'>
                                            <div className='flex items-center  gap-4 z-50'>
                                                <PiToolboxFill className='text-[#000000]' />
                                                <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Projects</p>
                                            </div>
                                            <div className='text-[10px] z-50'>
                                                <TfiPlus />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className='pt-7 flex flex-col gap-1.5'>

                        <div>
                            <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>MANAGE JOBS</p>

                            <div className=''>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group ' onClick={handleJobs}>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex items-center  gap-4 z-50 '>
                                            <PiToolboxFill className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Jobs</p>
                                        </div>
                                        <div className='text-[10px] z-50'>
                                            <TfiPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {jobDropdown ?
                            <div className={`flex gap-6 flex-col pl-8  ${jobDropdown ? "transition duration-150 ease-in-out pt-6 " : ""}`}>
                                <Link to="/jobs/active-jobs">
                                    <p className=' text-[13px] text-[#909090] font_Roboto_Medium '>Active Jobs</p>
                                </Link>

                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>Pending Jobs</p>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>Hidden by User</p>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>Resubmitted Jobs</p>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>Hidden by User</p>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>Expire Jobs</p>
                                <p className=' text-[13px] text-[#909090] font_Roboto_Medium'>All Jobs List</p>
                            </div>
                            :
                            <>

                            </>
                        }


                        <Link to="/companies">
                            <div>
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex items-center  gap-4 z-50'>
                                            <GiSoccerField className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Companies</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/jobtypes">
                            <div>
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex items-center  gap-4 z-50'>
                                            <PiToolboxFill className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Job Types</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <Link to="/salary-type">
                            <div>
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex items-center  gap-4 z-50'>
                                            <TbCurrencyDollar className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Salary Types</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>


                        <Link to="/resume">


                            <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                <div className='flex items-center  gap-4 z-50'>
                                    <HiOutlinePaperClip className='text-[#000000] rotate-90' />
                                    <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Resume</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                    {/*  */}

                    <div className='pt-7 flex flex-col gap-1.5'>

                        <div>
                            <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>MANAGEMENT</p>
                            <Link to="/category">
                                <div>
                                    <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                        <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                        <div className='flex items-center  gap-4 z-50'>
                                            <HiOutlineNewspaper className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Category</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <GiSoccerField className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Custom Fields</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <PiToolboxFill className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Membership</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                            <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flex items-center  gap-4 z-50'>
                                    <PiToolboxFill className='text-[#000000]' />
                                    <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Membership</p>
                                </div>
                                <div className='text-[10px] z-50'>
                                    <TfiPlus />
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <TbCurrencyDollar className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Payment Methods</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <HiOutlinePaperClip className='text-[#000000] rotate-90' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Taxes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <TbCurrencyDollar className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Transations</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <HiOutlinePaperClip className='text-[#000000] rotate-90' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Withdrawel Request</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <HiOutlinePaperClip className='text-[#000000] rotate-90' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Email Template</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* INTERNATIONAL */}

                    <div className='pt-7 flex flex-col gap-1.5'>
                        <Link to="/gig-category">
                            <div>
                                <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>INTERNATIONAL</p>
                                <div>
                                    <div>
                                        <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                            <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                            <div className='flex items-center  gap-4 z-50'>
                                                <HiOutlineNewspaper className='text-[#000000]' />
                                                <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Language</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <GiSoccerField className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Currencies</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                            <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                            <div className='flex items-center  gap-4 z-50'>
                                <PiToolboxFill className='text-[#000000]' />
                                <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Countries</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <TbCurrencyDollar className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Time Zone</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* CONTENT */}
                    <div className='pt-7 flex flex-col gap-1.5'>
                        <Link to="/gig-category">

                            <div>
                                <p className='text-[#cccccc]  text-[11px]  tracking-wider font_Roboto_Medium'>CONTENT</p>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex justify-between items-center w-full'>
                                        <div className='flex items-center  gap-4 z-50'>
                                            <PiToolboxFill className='text-[#000000]' />
                                            <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Blog</p>
                                        </div>
                                        <div className='text-[10px] z-50'>
                                            <TfiPlus />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </Link>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <GiSoccerField className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Testimonials</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                            <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                            <div className='flex items-center  gap-4 z-50'>
                                <PiToolboxFill className='text-[#000000]' />
                                <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>Pages</p>
                            </div>
                        </div>

                        <div>
                            <div>
                                <div className='flex items-center  gap-4 pt-5 cursor-pointer relative group'>
                                    <div className='absolute group-hover:bg-[#fafafa] h-10 w-[238px] -left-6 duration-150 '></div>
                                    <div className='flex items-center  gap-4 z-50'>
                                        <TbCurrencyDollar className='text-[#000000]' />
                                        <p className=' text-[13px] text-[#434343] font_Roboto_Medium'>FAQ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                </div>
            </div>

        </div >
    )
}

export default Sidebar