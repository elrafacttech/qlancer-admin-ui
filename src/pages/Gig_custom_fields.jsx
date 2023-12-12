import React from 'react'
import Homepage from './Homepage'
import Header from '../components/Header'
import { BiPlusMedical } from "react-icons/bi";
import { FiMenu } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';


const Gig_custom_fields = () => {
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
                            <select id="countries" className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2 ">
                                <option selected className='font_Roboto_Regular'>Enabled</option>
                                <option value="US" className='font_Roboto_Regular'>Desabled</option>
                            </select>
                        </div>
                        <hr class="h-px my-10 bg-gray-200 " />

                        <div className='flex gap-3.5 -mt-5'>
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

export default Gig_custom_fields