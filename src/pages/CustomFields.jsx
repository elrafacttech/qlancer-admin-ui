import React from 'react'
import { BiPlusMedical } from 'react-icons/bi'
import Header from '../components/Header'
import Homepage from './Homepage'
import { FiMenu } from 'react-icons/fi'
import { RiCoupon4Fill, RiDeleteBin6Line } from 'react-icons/ri'
import { FaLanguage, FaPlus } from 'react-icons/fa'

const CustomFields = () => {
    return (
        <Homepage>
            <Header />
            <div className='px-[15px] pt-6  h- bg-[#f9f9f9] h-[100vh overflow-y-scroll overflow-hidden no-scrollbar '>
                <div className='w-full h-full shadow p-5 bg-[#ffffff] rounded-sm px-6 '>
                    <p className='text-[#434343] font_Roboto_Medium text-lg'>Custom Fields</p>

                    <div className='border px-6 w-full h-ful rounded-[4px] mt-[37px] pt-6 pb-6'>
                        <p className='text-sm font_Roboto_Medium'>Bind fields to categories</p>
                        <p className='text-[#999eb9] text-[13px] pt-2 leading-4 font_Roboto_Regular italic w-[370px]'>When this setting is enabled you will be able to create category specific custom fields.</p>

                        <div className='w-1/3'>
                            <select id="countries" className="mt-2 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ">
                                <option selected className='font_Roboto_Regular'>Enabled</option>
                                <option value="US" className='font_Roboto_Regular'>Desabled</option>
                            </select>
                        </div>
                        <hr class="h-px my-10 bg-gray-200 " />

                        <div className='-mt-5'>
                            <div className='flex items-center gap-2'>
                                <FiMenu size={24} className='text-[#d2d7df]' />
                                <p className='font_Roboto_Medium'>Radio Button Group </p>
                                <RiDeleteBin6Line size={18} className='text-[#bb5850]' />
                            </div>
                            <div className='px-8 pt-4 '>
                                <div className='flex bg-red500 gap-5  '>
                                    <div className='w-[68%] bg-green500'>
                                        <div className="relative mb-3 flex  max-w-[740px] w-full">
                                            <input
                                                type="search"
                                                className="relative m-0 -mr-0.5 block  min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent  px-3 py-[0.25rem] text-base font-normal  "
                                                placeholder=" Enter a label"
                                                aria-label="Search"
                                                aria-describedby="button-addon3" />
                                            <div
                                                className="relative bg-[#e8ebf0] flex items-center gap-1.5 font_Roboto_Medium text-sm z-[2] rounded-r border-2 border-primary px-3 py-1.5  font-medium">
                                                <input id="default-checkbox" type="checkbox" value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded checked:bg-green-500 " />
                                                Required field
                                            </div>
                                        </div>
                                        <button className=' px-2 py-1.5 rounded border font_Roboto_Regular bg-[#ffffff] text-[13px] flex gap-1  items-center'><FaPlus />Radio Button</button>
                                    </div>

                                    <div className='-mt2 '>
                                        <div className='border flex items-center px-3 rounded'>
                                        <RiCoupon4Fill />
                                            <select id="countries" className=" borde font_Roboto_Regular border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full py-1.5 ">
                                                <option selected className='font_Roboto_Regular'>No category selected</option>
                                                <option value="US" className='font_Roboto_Regular'>Desabled</option>
                                            </select>
                                        </div>
                                    
                                        <button className='flex gap-1 py-1 text-xs items-center rounded bg-[#f0ad4e] text-white px-3'>
                                            <FaLanguage size={24} className='text-[#ffffff]' />  Language Translation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr class="h-px my-5 bg-gray-200 " />

                        <div className='flex gap-3.5 mt-5'>
                            <div className='flex gap-3.5  lg:flex-row flex-col'>
                                <div className='border rounded-[3px] px-3 py-1.5 flex items-center gap-1 font_Roboto_Regular text-[15px]'>
                                    <BiPlusMedical />
                                    Text Field
                                </div>
                                <div className='border rounded-[3px] px-3 py-1.5 flex items-center gap-1 font_Roboto_Regular text-[15px]'>
                                    <BiPlusMedical />
                                    Text Area
                                </div>


                                <div className='border rounded-[3px] px-3 py-1.5 flex items-center gap-1 font_Roboto_Regular text-[15px]'>
                                    <BiPlusMedical />
                                    CheckBox Group
                                </div>
                            </div>

                            <div className='flex gap-3.5  lg:flex-row flex-col'>
                                <div className='border rounded-[3px] px-3 py-1.5 flex items-center gap-1 font_Roboto_Regular text-[15px]'>
                                    <BiPlusMedical />
                                    Radio Button Group
                                </div>

                                <div className='border rounded-[3px] px-3 py-1.5 flex items-center gap-1 font_Roboto_Regular text-[15px]'>
                                    <BiPlusMedical />
                                    Drop Down
                                </div>
                            </div>


                        </div>


                        <p className='text-[#999eb9] text-[13px] pt-2 leading-4 font_Roboto_Regular italic w-[370px] '>HTML allowed in textarea.</p>
                        <hr class="h-px my-10 bg-gray-200 " />

                        <div className='flex gap-3 -mt-5 justify-end'>
                            <button className=' px-8 py-2 rounded text-white font_Roboto_Regular bg-[#5cb85c]'>Save</button>
                            <button className=' px-8 py-2 rounded font_Roboto_Regular border text-[#424852] '>Reset</button>
                        </div>

                    </div>
                </div>

            </div>
        </Homepage>

    )
}

export default CustomFields