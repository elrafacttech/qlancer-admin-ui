import React from 'react'
import Header from '../Header'
import Homepage from '../../pages/Homepage'
import { FaPlus } from 'react-icons/fa6'
import { PiPlus } from 'react-icons/pi'
import { FiDelete, FiMenu } from 'react-icons/fi'
import { IoChevronDownCircleOutline } from 'react-icons/io5'
import { RiDeleteBin5Fill } from 'react-icons/ri'

const CustomSettings = () => {
    return (
        <Homepage>
            <Header />
            <div className='px-[15px] pt-6  h-[100vh] bg-[#f9f9f9] h-[100vh overflow-y-scroll overflow-hidden no-scrollbar pb-12'>
                <div className='w-full h-ful shadow p-5 bg-[#ffffff] rounded-sm px-6  pt-6'>
                    <div className='border rounded p-6 '>
                        <div className='flex justify-between items-center pt- '>
                            <p className='text-[#434343] font_Roboto_Regular text-lg'>Custom Settings</p>
                            <div className='px-3 h-[37px] bg-[#5cb85c] rounded-[3px] flex justify-center items-center text-white font_Roboto_Medium'> <FaPlus className='' /> Add New</div>
                        </div>
                        <div className='pt-7 flex flex-col gap-2.5'>
                            <div className='border h-[47px]  rounded-[4px] flex items-center bg-[#e8ebf0] px-4 '>
                                <div className=' flex items-center justify-between w-full '>
                                    <div className='flex items-center gap-2.5'>
                                        <FiMenu size={24} className='text-[#d2d7df]' />
                                        <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>Free Support <IoChevronDownCircleOutline size={22} /></p>
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
                                        <p className='text-[15.5px]  text-[#3e424a] font_Roboto_Medium flex items-center gap-2'>commision <IoChevronDownCircleOutline size={22} /></p>
                                    </div>
                                    <label class="inline-flex items-center ">
                                        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 border" />
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className='flex justify-end pt-5'>
                        <div className='px-3 h-[37px] bg-[#d9534f] rounded-[3px] flex justify-center items-center gap-1 text-white font_Roboto_Regular'> <RiDeleteBin5Fill   className='' /> Delete</div>
                        </div>

                    </div>



                </div>
            </div>
        </Homepage>
    )
}

export default CustomSettings