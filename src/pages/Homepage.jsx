import React from 'react'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';

const Homepage = ({children}) => {
  const location = useLocation();

  return (
    <div className='flex h-[130vh] '>
      <div >
        <Sidebar />
      </div>
      <div className='w-full'>
        {
          (location.pathname === "/dashboard") ? (
            <>
              {children}
            </>
          )
            :
            <>
             {/* {children} */}
            </>
        }
      </div>
    </div>
  )
}

export default Homepage