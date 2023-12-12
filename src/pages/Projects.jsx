import React from 'react'
import Homepage from './Homepage'
import Header from '../components/Header'
import { IoIosEye } from 'react-icons/io'
import { RiCloseLine } from 'react-icons/ri'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

const Projects = () => {
    const checkboxStyle = {
        borderColor: 'your-desired-color',
    };
    return (
        <>
            <Homepage>
                <Header />
                <div className='px-[15px] pt-6  h-[100vh bg-[#f9f9f9] h-[100vh overflow-y-scroll overflow-hidden no-scrollbar pb-12'>
                    <div className='w-full h-full shadow p-5 bg-[#ffffff] rounded-sm px-6 '>
                        <div className='flex justify-between items-center pt-2'>
                            <p className='text-[#434343] font_Roboto_Medium text-lg'>Projects List</p>
                            <div className='px-3 h-[37px] bg-[#5cb85c] rounded-[3px] flex justify-center items-center text-white font_Roboto_Medium'>Projects setting</div>
                        </div>

                        <section className='pt-7'>
                            <div className='flex justify-between'>
                                <select id="countries" className="mt-2  border border-gray-300 outline-none text-gray-900 text-xs rounded-[4px] block w-[66px] pl-3 h-10 ">
                                    <option selected className='font_Roboto_Regular '>10</option>
                                    <option value="US" className='font_Roboto_Regular'>25</option>
                                    <option selected className='font_Roboto_Regular '>50</option>
                                    <option value="US" className='font_Roboto_Regular'>100</option>
                                </select>

                                <form className="flex items-center">
                                    <label for="voice-search" className="sr-only">Search</label>
                                    <button type="submit"
                                        className="inline-flex items-center  px-3 ms-2 text-sm font_Roboto_Regular ">
                                        Search:
                                    </button>
                                    <div className="relative w-40">
                                        <input
                                            type="text"
                                            id="voice-search"
                                            className=" border text-gray-900 text-sm rounded-sm  block w-full  p-2 outline-none h-[38px] hover:border-gray-300"
                                            // placeholder="Search Mockups, Logos, Design Templates..."
                                            required />
                                    </div>
                                </form>
                            </div>

                            {/* TABLE */}
                            <div className="relative overflow-x-auto pt-[26px] px-4">
                                <table className="w-full text-left text-sm  rtl:text-right ">
                                    <thead className=" text-sm   border-b border-gray-300 ">
                                        <tr className='font_Roboto_Light '>
                                            <th>
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <th scope="col" className="px-6 py-3">Title</th>
                                            <th scope="col" className="px-6 py-3">Employer Name</th>
                                            <th scope="col" className="px-6 py-3">Bids</th>
                                            <th scope="col" className="px-6 py-3">Milestone</th>
                                            <th scope="col" className="px-6 py-3">Posted</th>
                                            <th scope="col" className="px-6 py-3">Status</th>
                                            <th scope="col" className="px-6 py-3">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b font_Roboto_Thin text-base h-20">
                                            <th scope="row" className=" px6   h-full gap-0.5">
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <td className="px-6 py-4    font_Roboto_Regular   text-sm">
                                                I7wai
                                                <p className='font_Roboto_Light text-[#8d9ea7]'>Digital Marketing</p>
                                            </td>
                                            <td className=" py-4  ">
                                                <div className=' px-4  text-sm font_Roboto_Light flex items-center'>
                                                    Juna
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                33
                                            </td>
                                            <td className="px- py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#f0ad4e]  max-w-[80px] px-2 h-[20px] rounded-3xl px- hover:text-white cursor-pointer  text-[10px] font_Roboto_Medium hover:underline flex items-center justify-center'>
                                                    0 Milestone
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                1 year ago
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#5cb85c] w-[50px] h-[17px] rounded-3xl px- text-white text-[11px] font_Roboto_Medium flex items-center justify-center'>
                                                    open
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='border flex w-10 justify-center gap-1 px-1 h-5 items-center text-sm '>
                                                    <IoIosEye className='text-xl ' />
                                                    <hr className='border h-full' />
                                                    <RiCloseLine className='text-xl' />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="border-b font_Roboto_Thin text-base h-20">
                                            <th scope="row" className=" px6   h-full gap-0.5">
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <td className="px-6 py-4    font_Roboto_Regular   text-sm">
                                                i need css 2
                                                <p className='font_Roboto_Light text-[#8d9ea7]'>Digital Marketing</p>
                                            </td>
                                            <td className=" py-4  ">
                                                <div className=' px-4  text-sm font_Roboto_Light flex items-center'>
                                                    Juna
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                33
                                            </td>
                                            <td className="px- py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#f0ad4e]  max-w-[80px] px-2 h-[20px] rounded-3xl px- hover:text-white cursor-pointer  text-[10px] font_Roboto_Medium hover:underline flex items-center justify-center'>
                                                    0 Milestone
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                1 year ago
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#5cb85c] w-[50px] h-[17px] rounded-3xl px- text-white text-[11px] font_Roboto_Medium flex items-center justify-center'>
                                                    open
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='border flex w-10 justify-center gap-1 px-1 h-5 items-center text-sm '>
                                                    <IoIosEye className='text-xl ' />
                                                    <hr className='border h-full' />
                                                    <RiCloseLine className='text-xl' />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="border-b font_Roboto_Thin text-base h-20">
                                            <th scope="row" className=" px6   h-full gap-0.5">
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <td className="px-6 py-4    font_Roboto_Regular   text-sm">
                                                Welcome to Workazi - Test
                                                <p className='font_Roboto_Light text-[#8d9ea7]'>Digital Marketing</p>
                                            </td>
                                            <td className=" py-4  ">
                                                <div className=' px-4  text-sm font_Roboto_Light flex items-center'>
                                                    Juna
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                33
                                            </td>
                                            <td className="px- py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#f0ad4e]  max-w-[80px] px-2 h-[20px] rounded-3xl px- hover:text-white cursor-pointer  text-[10px] font_Roboto_Medium hover:underline flex items-center justify-center'>
                                                    0 Milestone
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                1 year ago
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#5cb85c] w-[50px] h-[17px] rounded-3xl px- text-white text-[11px] font_Roboto_Medium flex items-center justify-center'>
                                                    open
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='border flex w-10 justify-center gap-1 px-1 h-5 items-center text-sm '>
                                                    <IoIosEye className='text-xl ' />
                                                    <hr className='border h-full' />
                                                    <RiCloseLine className='text-xl' />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="border-b font_Roboto_Thin text-base h-20">
                                            <th scope="row" className=" px6   h-full gap-0.5">
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <td className="px-6 py-4    font_Roboto_Regular   text-sm">
                                                Welcome to Workazi - Test
                                                <p className='font_Roboto_Light text-[#8d9ea7]'>Digital Marketing</p>
                                            </td>
                                            <td className=" py-4  ">
                                                <div className=' px-4  text-sm font_Roboto_Light flex items-center'>
                                                    Juna
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                33
                                            </td>
                                            <td className="px- py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#f0ad4e]  max-w-[80px] px-2 h-[20px] rounded-3xl px- hover:text-white cursor-pointer  text-[10px] font_Roboto_Medium hover:underline flex items-center justify-center'>
                                                    0 Milestone
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                1 year ago
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#5cb85c] w-[50px] h-[17px] rounded-3xl px- text-white text-[11px] font_Roboto_Medium flex items-center justify-center'>
                                                    open
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='border flex w-10 justify-center gap-1 px-1 h-5 items-center text-sm '>
                                                    <IoIosEye className='text-xl ' />
                                                    <hr className='border h-full' />
                                                    <RiCloseLine className='text-xl' />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="border-b font_Roboto_Thin text-base h-20">
                                            <th scope="row" className=" px6   h-full gap-0.5">
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <td className="px-6 py-4    font_Roboto_Regular   text-sm">
                                                Welcome to Workazi - Test
                                                <p className='font_Roboto_Light text-[#8d9ea7]'>Digital Marketing</p>
                                            </td>
                                            <td className=" py-4  ">
                                                <div className=' px-4  text-sm font_Roboto_Light flex items-center'>
                                                    Juna
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                33
                                            </td>
                                            <td className="px- py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#f0ad4e]  max-w-[80px] px-2 h-[20px] rounded-3xl px- hover:text-white cursor-pointer  text-[10px] font_Roboto_Medium hover:underline flex items-center justify-center'>
                                                    0 Milestone
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                1 year ago
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#5cb85c] w-[50px] h-[17px] rounded-3xl px- text-white text-[11px] font_Roboto_Medium flex items-center justify-center'>
                                                    open
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='border flex w-10 justify-center gap-1 px-1 h-5 items-center text-sm '>
                                                    <IoIosEye className='text-xl ' />
                                                    <hr className='border h-full' />
                                                    <RiCloseLine className='text-xl' />
                                                </div>
                                            </td>
                                        </tr>

                                        <tr className="border-b font_Roboto_Thin text-base h-20">
                                            <th scope="row" className=" px6   h-full gap-0.5">
                                                <input id="link-checkbox"
                                                    type="checkbox"
                                                    value=""
                                                    className="w-5 h-5 text-blue-600 bg-gray-100  rounded  "
                                                    style={checkboxStyle}
                                                />
                                            </th>
                                            <td className="px-6 py-4    font_Roboto_Regular   text-sm">

                                                Laravel Developer
                                                <p className='font_Roboto_Light text-[#8d9ea7]'>Digital Marketing</p>
                                            </td>
                                            <td className=" py-4  ">
                                                <div className=' px-4  text-sm font_Roboto_Light flex items-center'>
                                                    Juna
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm">
                                                33
                                            </td>
                                            <td className="px- py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#f0ad4e]  max-w-[80px] px-2 h-[20px] rounded-3xl px- hover:text-white cursor-pointer  text-[10px] font_Roboto_Medium hover:underline flex items-center justify-center'>
                                                    0 Milestone
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                1 year ago
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='bg-[#5cb85c] w-[50px] h-[17px] rounded-3xl px- text-white text-[11px] font_Roboto_Medium flex items-center justify-center'>
                                                    open
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 font_Roboto_Light text-sm">
                                                <div className='border flex w-10 justify-center gap-1 px-1 h-5 items-center text-sm '>
                                                    <IoIosEye className='text-xl ' />
                                                    <hr className='border h-full' />
                                                    <RiCloseLine className='text-xl' />
                                                </div>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                                <div className='flex justify-between items-center pt-6'>
                                    <p className='text-[#7dc855 -mx-3 font_Roboto_Regular '>
                                        <span className='font_Roboto_Light'>Showing</span> 1-10 <span className='font_Roboto_Light'>of</span> 11
                                    </p>
                                    <div className=' flex justify-center items-center gap-3'>
                                        <SlArrowLeft className='text-xs text-[#a59890]' />

                                        <div className='flex gap-1 font_Roboto_Regular'>
                                            <div className='w-[34px] h-[34px] bg-[#7dc855] rounded-[3px] flex justify-center items-center text-white'>1</div>
                                            <div className='w-[34px] h-[34px] ] rounded-[3px] flex justify-center items-center hover:bg-[#f0f0f0] '>2</div>
                                            <div className='w-[34px] h-[34px] ] rounded-[3px] flex justify-center items-center hover:bg-[#f0f0f0] '>3</div>
                                            <div className='w-[34px] h-[34px] ] rounded-[3px] flex justify-center items-center hover:bg-[#f0f0f0] '>4</div>
                                            <div className='w-[34px] h-[34px] ] rounded-[3px] flex justify-center items-center hover:bg-[#f0f0f0] '>5</div>
                                            <div className='w-[34px] h-[34px] ] rounded-[3px] flex justify-center items-center cursor-not-allowed '>...</div>
                                            <div className='w-[34px] h-[34px] ] rounded-[3px] flex justify-center items-center hover:bg-[#f0f0f0] '>14</div>
                                        </div>

                                        <SlArrowRight className='text-xs text-[#a59890]' />
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </div>
            </Homepage>
        </>
    )
}

export default Projects