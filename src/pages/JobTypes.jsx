import React from 'react'
import Header from '../components/Header'
import Homepage from './Homepage'
import { FiMenu } from 'react-icons/fi'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { FaPlus } from 'react-icons/fa'
import { RiDeleteBin6Line } from 'react-icons/ri'

const JobTypes = () => {
    return (
        <Homepage>
            <Header />
            <div className='px-[15px] pt-6  h-[100vh bg-[#f9f9f9] h-[100vh overflow-y-scroll overflow-hidden no-scrollbar pb-12'>
                <div className='w-full h-full shadow p-5 bg-[#ffffff] rounded-sm px-6 pt-6'>
                    <div className='border w-full h-full p-6 rounded pt-6'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[#434343] font_Roboto_Regular text-lg'>All Salary Types</p>
                            <div className='px-3 h-[37px] bg-[#5cb85c] rounded-[3px] flex justify-center items-center text-white font_Roboto_Regular'> <FaPlus /> Add New</div>
                        </div>

                        <div className='flex flex-col gap-2.5 mt-6'>
                            <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                <div className=' flex items-center justify-between w-full '>
                                    <div className='flex items-center gap-2.5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Full Time <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Part Time  <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Temporary  <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Permanent  <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Internship  <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Freelancer  <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#383c43] font_Roboto_Medium flex items-center gap-2'>Remote Job  <IoChevronDownCircleOutline size={22} /></p>
                                    </div>
                                    <label class="inline-flex items-center ">
                                        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                    </label>
                                </div>
                            </div>
        
                        </div>
                        <div className='flex justify-end pt-5 '>
                            <button className='px-3 h-[37px] bg-[#d9534f] rounded-[3px] flex justify-center gap-1 items-center text-white font_Roboto_Regular'> <RiDeleteBin6Line size={18} /> Delete</button>
                        </div>

                        
                    </div>

                </div>
            </div>
        </Homepage>
    )
}

export default JobTypes