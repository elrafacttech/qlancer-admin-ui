import React from 'react'
import Sidebar from '../components/Sidebar'
import { useLocation } from 'react-router-dom';

const Homepage = ({ children }) => {
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
            ) :
              (location.pathname === "/gig-custom-fields") ? (
                <>
                  {children}
                </>
              ) :
                (location.pathname === "/gig-service/active") ? (
                  <>
                    {children}
                  </>
                ) :
                  (location.pathname === "/orders") ? (
                    <>
                      {children}
                    </>
                  ) :

                    (location.pathname === "/projects") ? (
                      <>
                        {children}
                      </>
                    ) : (location.pathname === "/jobs/active-jobs") ? (
                      <>
                        {children}
                      </>
                    ) : (location.pathname === "/companies") ? (
                      <>
                        {children}
                      </>
                    ) : (location.pathname === "/jobtypes") ? (
                      <>
                        {children}
                      </>
                    ) : 
                    (location.pathname === "/salary-type") ? (
                      <>
                        {children}
                      </>
                    ): 
                    (location.pathname === "/resume") ? (
                      <>
                        {children}
                      </>
                    ):

                    (location.pathname === "/category") ? (
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