import React from 'react'
import { adminlogo } from '../assets'
import { useNavigate } from 'react-router-dom'
import CAPTCHA from "../assets/image/CAPTCHA.jpg"

const AdminLogin = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/dashboard')
    }

    return (

        <section className="bg-[#f9f9f9] ">
            <div className='pt-10'>

                <div className="flex flex-col items-center justify-cente px-6 py-8 mx-auto h-screen   lg:py-0 ">
                    <img className=" " src={adminlogo} alt="logo" />
                    <div className=" bg-white  shadow md:mt-0 sm:max-w-[557px] xl:p-0 w-full rounded-sm   ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-6">
                            <h1 className="text-xl font-medium leading-tight tracking-tight text-[#534343]">
                                Login
                            </h1>
                            <form className="space-y-4 md:space-y- pt-4 " >
                                <div>
                                    <input type="email" name="email" id="email"
                                        className="b0 border border-gray-300 text-gray-900 sm:text-sm rounded-sm block w-full p-2.5 outline-none placeholder:text-sm "
                                        placeholder="Username" required="" />
                                </div>
                                <div>
                                    <input type="password" name="password" id="password" placeholder="••••••••"
                                        className="b0 border border-gray-300 text-gray-900 sm:text-sm rounded-sm block w-full p-2.5 outline-none"
                                        required="" />
                                </div>
                                <div className='sm:w-[300px] h-[78px] border p-3 bg-[#f9f9f9] ml-4 rounded-sm'>
                                    <div class="flex items-center justify-between h-full gap-3">
                                        <div className='flex items-center gap-3'>
                                            <input id="link-checkbox"
                                                type="checkbox"
                                                value=""
                                                className="w-7 h-7 text-blue-600 bg-gray-100 border-gray-300 rounded  " />
                                            <p className='font_Roboto_Regular text-sm tracking-normal'>I am not a robot</p>
                                        </div>

                                        <div className='text-[10px] text-[#696969] font_Roboto_Regular flex flex-col items-center'>
                                        <img className='w-12' src={CAPTCHA} alt="" />
                                                <p>reCAPTCHA</p>
                                                <p className='text-[8px]'>Privacy - Terma</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start -mt-3">
                                        <div className="flex items-center h-5" >
                                            <input
                                                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-100 before:pointer-events-none before:absolute before:h-3.5 
                                            before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5
                                             after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] 
                                             after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#7dc855] checked:after:absolute checked:after:z-[2] 
                                             checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none 
                                             checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
                                             checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 
                                             focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                                             focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] 
                                             checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 
                                             checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                                             "
                                                type="checkbox"
                                                role="switch"
                                                id="flexSwitchCheckDefault" />

                                        </div>
                                        <div className=" text-sm ">
                                            <label for="remember" className="text-xs">Remember me</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='pt-2'>
                                    <button type="submit" className=" w-full text-white bg-[#7dc855]  font-medium rounded-sm  px-5 py-2 text-center text-base" onClick={handleNavigate}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AdminLogin