import React from 'react'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';

const Homepage = ({children}) => {
  const location = useLocation();

  return (
    <div className='flex h-[130v '>
      <div >
        <Sidebar />
      </div>
      <div className='w-full  lgxl:pl-60'>
        {
          (location.pathname === "/dashboard") ? (
            <>
              {children}
            </>
          )
            :
            (location.pathname === "/gig-category") ? (
              <>
                {children}
              </>
            ):
            (location.pathname === "/gig-custom-fields") ? (
              <>
              {children}
              </>
            ):
            <>
            
            </>
        }
      </div>
    </div>
  )
}

export default Homepage