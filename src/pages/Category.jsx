import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import Header from '../components/Header'
import Homepage from './Homepage'
import { FaLanguage, FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { motion } from 'framer-motion';

const Category = () => {
    const [show, setShow] = useState(false)
    const handleDropDown = () => {
        setShow(!show)
    }

    return (
        <Homepage>
            <Header />
            <div className='px-[15px]  pt-[20px] bg-[#f9f9f9] h-[100vh overflow-y-scroll overflow-hidden no-scrollbar pb-[49px]'>
                <div className='w-full h-full shadow p-5 bg-[#ffffff] rounded-sm px-6'>
                    <p className='text-[#434343] font_Roboto_Medium text-lg'>Categories</p>

                    <div className='w-full flex  lg:flex-row flex-col gap-5 pt-9'>
                        <div className='lg:w-[32.7%] flex flex-col gap-[5px] '>
                            <div className='border h-[54px] bg-[#0088cc] rounded-[5px] flex items-center px-2.5'>
                                <p className='text-[15.5px] font_Roboto_Regular text-white'>All Categories</p>
                            </div>

                            <div className='border h-[50px]  rounded-[5px] flex items-center px-2.5'>
                                <div className=' flex items-center justify-between w-full'>
                                    <div className='flex items-center gap-5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px] font_Roboto_Regular '>	Websites, IT & Software</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Writing & Content</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Design, Media & Architecture</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Mobile Phones & Computing</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Engineering , Manufacturing & Science</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Business, Accounting & Legal</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Sales & Marketing</p>
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
                                        <p className='text-[15.5px] font_Roboto_Regular '>Data Entry & Admin</p>
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
                                    <div className=''>
                                        <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                            <div className=' flex items-center justify-between w-full '>
                                                <div className='flex items-center gap-2.5'>
                                                    <FiMenu size={24} className='text-[#d2d7df]' />
                                                    <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2 cursor-pointer' onClick={handleDropDown}>Business Coaching <IoChevronDownCircleOutline size={22} /></p>
                                                </div>
                                                <label class="inline-flex items-center ">
                                                    <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                                </label>
                                            </div>
                                        </div>

                                        {
                                            show ?
                                                <>
                                                    <motion.div 
                                                       initial={{ opacity: 0, height: 0 }}
                                                       animate={{ opacity: 1, height: 'auto' }}
                                                       exit={{ opacity: 0, height: 0 }}
                                                       transition={{ duration: 0.3 }}
                                                    className='w-full border h-full rounded duration-700' >
                                                        <div className='p-4  '>
                                                            <div className='flex w-full gap-5'>
                                                                <div className='w-full '>
                                                                    <label class="block text-gray-700 text-[13px] font-bold mb-2 font_Roboto_Regular" for="title">
                                                                        Title
                                                                    </label>
                                                                    <input class=" border border-gray-300 rounded w-full py-[5px] px-3 text-gray-700  outline-none focus:border-blue-500" id="title" type="text" placeholder="Username" />
                                                                </div>
                                                                <div className='w-full'>
                                                                    <label class="block text-gray-700 text-[13px] font-bold mb-2 font_Roboto_Regular" for="slug">
                                                                        Slug
                                                                    </label>
                                                                    <input class=" border border-gray-300 rounded w-full py-[5px] px-3 text-gray-700  outline-none focus:border-blue-500" id="slug" type="text" placeholder="Username" />
                                                                </div>
                                                            </div>
                                                            <div className='flex w-full gap-5 pt-5'>
                                                                <div className='w-full '>
                                                                    <label class="block text-gray-700 text-[13px] font-bold mb-2 font_Roboto_Regular" for="imageurl">
                                                                        Icon Image Url
                                                                    </label>
                                                                    <input class=" border border-gray-300 rounded w-full py-[5px] px-3 text-gray-700  outline-none focus:border-blue-500" id="imageurl" type="text" placeholder="Username" />
                                                                </div>
                                                            </div>
                                                            <hr className='w-full h-[1px] my-5 bg-gray-400' />
                                                            <button className='px-7 h-[37px] py-[21px] bg-[#f0ad4e] rounded-[3px] text-base flex justify-center gap-1 items-center text-white font_Roboto_Regular'> <FaLanguage size={18} /> Edit Language</button>
                                                            <div className='flex justify-end gap-4'>
                                                                <button className='border bg-[#5cb85c] px-8 py-2  text-white  rounded font_Roboto_Regular'>Save</button>
                                                                <button className='border bg-[#ffffff] px-8 py-2   rounded font_Roboto_Regular'>Reset</button>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                </>
                                                :
                                                <>

                                                </>
                                        }

                                    </div>



                                    <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                        <div className=' flex items-center justify-between w-full '>
                                            <div className='flex items-center gap-2.5'>
                                                <FiMenu size={24} className='text-[#d2d7df]' />
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>	Cooking & Recipes <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Education & Tutoring <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>	Real Estate <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>	Testing / QA <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Event <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>	Health & Medical <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>	Trades & Services <IoChevronDownCircleOutline size={22} /></p>
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
                                                <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Jobs for Anyone <IoChevronDownCircleOutline size={22} /></p>
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

export default Category