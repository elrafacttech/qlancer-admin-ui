import React, { useState } from 'react'
import Homepage from './Homepage'
import Header from '../components/Header'
import { IoIosInformationCircle, IoMdNotifications } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { PiToolboxFill } from 'react-icons/pi';
import { FaUsers } from 'react-icons/fa';
import { FaRegMoneyBill1 } from 'react-icons/fa6';
import { IoLocationSharp } from 'react-icons/io5';
import { Bar } from "react-chartjs-2";

import {
    BarElement,
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    Title,
    Tooltip,
} from "chart.js";

const Dashboard = () => {

    const data = {
        labels: [
            "Dec-06",
            "Dec-05",
            "Dec-04",
            "Dec-03",
            "Dec-02",
            "Dec-01",
            "Nov-30",
        ],
        datasets: [
            //   {
            //     label: "Product A",
            //     data: [ 20, 30, 40, 50, 60,70],
            //     backgroundColor: "green",
            //   },
            {
                label: "Product B",
                data: [0, 0, 0, 0, 2, 1, 1],
                backgroundColor: "#9ac6eb",
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 2,
                ticks: {
                    stepSize: 1, // Ensure ticks are integers
                    callback: (value) => Math.round(value),
                },
            },
        },
    };




    const [chartData, setChartData] = useState({
        series: [76],
        options: {
            chart: {
                type: "radialBar",
                offsetY: -20,
                sparkline: {
                    enabled: true,
                },
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#e7e7e7",
                        strokeWidth: "97%",
                        margin: 5, // margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: 2,
                            left: 0,
                            color: "#999",
                            opacity: 1,
                            blur: 2,
                        },
                    },
                    dataLabels: {
                        name: {
                            show: false,
                        },
                        value: {
                            offsetY: -2,
                            fontSize: "22px",
                        },
                    },
                },
            },
            grid: {
                padding: {
                    top: -10,
                },

            },
            fill: {
                type: "gradient",
                gradient: {
                    shade: "light",
                    shadeIntensity: 0.4,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 1,
                    stops: [0, 50, 53, 91],
                },
            },
            labels: ["Average Results"],
        },
    });




    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <Homepage>
            <Header />
            <div className='px-[15px] pt-[81px] bg-[#f9f9f9] h-[100vh] overflow-y-scroll overflow-hidden'>

                <div className='flex flex-col'>
                    <div className='flex md:flex-row flex-col gap-[30px]'>
                        <div className='flex xl:flex-row flex-col w-full gap-[30px]'>
                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#ffffff] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#358ed7] flex items-center justify-center text-white text-2xl'><IoMdNotifications /></div>
                                <div className='flex flex-col '>
                                    <p className='text-[#8d9ea7] font_Roboto_Medium text-sm'>Open Projects</p>
                                    <p className='text-[#358ed7] font_Roboto_Light font-semibo text-[26px]'>131</p>
                                </div>
                            </div>


                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#ffbe0b] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#edb20c] flex items-center justify-center text-white text-2xl'><IoIosInformationCircle /></div>
                                <div>
                                    <p className='text-[#ffecb6] font_Roboto_Medium text-sm'>Completed Projects</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>32</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex xl:flex-row flex-col w-full gap-[30px]'>
                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#f6511d] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#e54c1d] flex items-center justify-center text-white text-2xl'><PiToolboxFill /></div>
                                <div>
                                    <p className='text-[#fcc7ad] font_Roboto_Medium text-sm'>Active Jobs</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>0</p>
                                </div>
                            </div>

                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#7dc855] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#74bb51] flex items-center justify-center text-white text-2xl'><PiToolboxFill /></div>
                                <div>
                                    <p className='text-[#d4ecb8] font_Roboto_Medium text-sm'>New Jobs</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>29</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* second part */}
                    <div className='flex md:flex-row flex-col gap-[31px] pt-6'>
                        <div className='flex xl:flex-row flex-col w-full gap-[30px]'>
                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#838cc7] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#7a83bb] flex items-center justify-center text-white text-2xl'><FaUsers /></div>
                                <div className='flex flex-col '>
                                    <p className='text-[#d4daee] font_Roboto_Medium text-sm'>Total Users</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>713</p>
                                </div>
                            </div>

                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#39add1] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#35a2c4] flex items-center justify-center text-white text-2xl'><FaUsers /></div>
                                <div>
                                    <p className='text-[#c4e5ee] font_Roboto_Medium text-sm'>Freelancers</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>531</p>
                                </div>
                            </div>
                        </div>

                        <div className='flex xl:flex-row flex-col w-full gap-[30px]'>
                            <div className='w-full h-[101px] shadow  rounded-[3px] bg-[#53bbb3] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#4dafa8] flex items-center justify-center text-white text-2xl'><FaUsers /></div>
                                <div>
                                    <p className='text-[#cbe9e4] font_Roboto_Medium text-sm'>Employers</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>182</p>
                                </div>
                            </div>

                            <div className='w-full h-[101px] shadow rounded-[3px] bg-[#358ed7] flex items-center justify-between px-6'>
                                <div className='rounded-full h-12 w-12 bg-[#3185ca] flex items-center justify-center text-white text-2xl'><FaRegMoneyBill1 /></div>
                                <div>
                                    <p className='text-[#a3d9f3] font_Roboto_Medium text-sm'>Total Income</p>
                                    <p className='text-[#ffffff] font_Roboto_Light font-semibo text-[26px]'>305279.47 $</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='pt-6 w-full flex lg:flex-row flex-col gap-[31px]'>
                    <div className='shadow shadow-slate-300 lg:w-[68%] h-[347px]  p-5 rounded-[3px]'>
                        <p className='text-[#434343] font_Roboto_Medium text-lg'>Posts Statistics</p>
                    </div>
                    <div className='shadow shadow-slate-300  lg:w-[32%] w-full h-[347px]  p-5 rounded-[3px] overflow-hidden'>
                        <p className='text-[#434343] font_Roboto_Medium text-lg'>Weekly users</p>
                        <div >
                             <Bar data={data} options={options} 
                        // style={{ height: '230px', }} 
                        />
                        </div>
                       
                    </div>
                </div>

                <div className='pt-6 flex md:flex-row flex-col gap-[31px]'>
                    <div className='w-full h-full shadow p-5'>
                        <p className='text-[#434343] font_Roboto_Medium text-lg'>Recent Jobs</p>
                        <div className='flex flex-col gap-5'>
                            <div className='pt-14 flex gap-2.5'>
                                <img className='w-[75px] h-[75px]' src="https://quicklancer.bylancer.com/storage/products/329007344.jpg" alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>Specialist</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>freelancer <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp />  Nybro</span></p>
                                    <p className='text-[#8d9ea7] font_Roboto_Light text-xs'>7 days ago</p>
                                </div>
                            </div>

                            <div className=' flex gap-2.5'>
                                <img className='w-[75px] h-[75px]' src="https://quicklancer.bylancer.com/storage/products/329007344.jpg" alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>front end</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>freelancer <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp />  West Jordan</span></p>
                                    <p className='text-[#8d9ea7] font_Roboto_Light text-xs'>18 days ago</p>
                                </div>
                            </div>

                            <div className=' flex gap-2.5'>
                                <img className='w-[75px] h-[75px]' src="https://quicklancer.bylancer.com/storage/products/329007344.jpg" alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>AAA</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>pankajloniya <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> New Cairo</span></p>
                                    <p className='text-[#8d9ea7] font_Roboto_Light text-xs'>3 months ago</p>
                                </div>
                            </div>

                            <div className=' flex gap-2.5'>
                                <img className='w-[75px] h-[75px]' src="https://quicklancer.bylancer.com/storage/products/329007344.jpg" alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>Short surveys</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>nizar07  <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> New Dorp</span></p>
                                    <p className='text-[#8d9ea7] font_Roboto_Light text-xs'>4 months ago</p>
                                </div>
                            </div>

                            <div className=' flex gap-2.5'>
                                <img className='w-[75px] h-[75px]' src="https://quicklancer.bylancer.com/storage/products/329007344.jpg" alt="" />
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>@</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>Employer990 <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> Atlantic City</span></p>
                                    <p className='text-[#8d9ea7] font_Roboto_Light text-xs'>5 months ago</p>
                                </div>
                            </div>
                            <div className='flex justify-end pt-3'>
                                <button className='bg-[#5bc0de] text-white px-3 py-1.5 rounded-sm font_Roboto_Medium text-sm'>View All</button>
                            </div>
                        </div>
                    </div>


                    <div className='w-full h-full shadow p-5'>
                        <p className='text-[#434343] font_Roboto_Medium text-lg'>Recent Jobs</p>
                        <div className='flex flex-col gap-5'>
                            <div className='pt-14 flex gap-2.5'>

                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>web site seo</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>freelancer <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp />  Nybro</span></p>

                                </div>
                            </div>

                            <div className=' flex gap-2.5'>

                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>Test Project</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>freelancer <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp />  West Jordan</span></p>
                                </div>
                            </div>
                            <div className=' flex gap-2.5'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>AAA</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>pankajloniya <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> New Cairo</span></p>
                                </div>
                            </div>
                            <div className=' flex gap-2.5'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>Short surveys</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>nizar07  <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> New Dorp</span></p>

                                </div>
                            </div>
                            <div className=' flex gap-2.5'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>@</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>Employer990 <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> Atlantic City</span></p>
                                </div>
                            </div>
                            <div className=' flex gap-2.5'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>@</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>Employer990 <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> Atlantic City</span></p>
                                </div>
                            </div>
                            <div className=' flex gap-2.5'>
                                <div className='flex flex-col gap-1'>
                                    <p className='text-[#847670] font_Roboto_Medium'>@</p>
                                    <p className='text-[#7dc855] font_Roboto_Regular text-xs flex items-center'>Employer990 <span className='flex items-center pl-1 text-[#8d9ea7] font_Roboto_Light'> | <IoLocationSharp /> Atlantic City</span></p>
                                </div>
                            </div>
                            <div className='flex justify-end pt-3'>
                                <button className='bg-[#5bc0de] text-white px-3 py-1.5 rounded-sm font_Roboto_Medium text-sm'>View All</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </Homepage>

    )
}

export default Dashboard