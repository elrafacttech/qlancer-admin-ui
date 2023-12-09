import React from 'react'
import Homepage from './Homepage'
import Header from '../components/Header'
import { IoMdMenu } from 'react-icons/io'
import { FiMenu } from "react-icons/fi";
import { FaLanguage, FaPlus, FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from "react-icons/ri";
import { ImPlus } from "react-icons/im";
import { IoChevronDownCircleOutline } from 'react-icons/io5';




const Gig_Category = () => {
    return (
        <Homepage>
            <Header />
            <div className='px-[15px]  pt-[88px] bg-[#f9f9f9] h-[100vh overflow-y-scroll overflow-hidden no-scrollbar pb-[49px]'>
                <div className='w-full h-full shadow p-5 bg-[#ffffff] rounded-sm px-6'>
                    <p className='text-[#434343] font_Roboto_Medium text-lg'>Gig Categories</p>

                    <div className='w-full flex  lg:flex-row flex-col gap-5 pt-9'>
                        <div className='lg:w-[32.7%] flex flex-col gap-[5px] '>
                            <div className='border h-[54px] bg-[#0088cc] rounded-[5px] flex items-center px-2.5'>
                                <p className='text-[15.5px] font_Roboto_Regular text-white'>All Gig Categories</p>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Graphics & Design</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>	Digital Marketing</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>
                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Writing & Translation</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Video & Animation</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Music & Audio</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Programming & Tech</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Data</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>Business</p>
                                    </div>
                                    <div className='flex items-center gap-2.5 pr-1'>
                                        <FaLanguage size={24} className='text-[#0088cc]' />
                                        <FaRegEdit size={19} className='text-[#0088cc]' />
                                        <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                                    </div>
                                </div>
                            </div>

                            <button className='border border-[#60b972] h-[40px]  rounded-[5px] flex items-center justify-center px-2.5 mt-4 font_Roboto_Regular text-sm text-[#60b972]'>
                                 New Category
                            </button>
                        </div>


                        <div className='lg:w-[67.3%]  h-full  '>
                            <div className='w-full h-full  border border-[#d0d0d0] p-5 bg-[#ffffff] px-6 pt-8 rounded-sm'>
                                {/* <div className='flex justify-between'>
                                    <p className='text-[#434343] font_Roboto_Regular text-lg'>Business</p>
                                    <button className='bg-[#5cb85c] h-9 w-40  font_Roboto_Regular rounded-[4px] text-white flex items-center justify-center'>
                                        <ImPlus size={15} />
                                        Add Sub-Category
                                    </button>
                                </div> */}


                                <div className='flex flex-col gap-2.5 mt-6'>
                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Logo Design <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Brand Style Guides <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Game Art <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Graphics for Streamers <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Business Cards & Statioinery <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Website Design <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>App Design <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Landing Page Design <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Social Media <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Website Design <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>

                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>App Design <IoChevronDownCircleOutline size={22} /></p>
                                            </div>
                                            <label class="inline-flex items-center ">
                                                <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                            </label>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Homepage>

    )
}

export default Gig_Category