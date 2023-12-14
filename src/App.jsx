import { Route, Routes } from "react-router-dom"
import AdminLogin from "./pages/AdminLogin"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Gig_Category from "./pages/Gig_Category"
import Gig_custom_fields from "./pages/Gig_custom_fields"
import Gig_service from "./pages/Gig_service"
import Orders from "./pages/Orders"

import Projects from "./pages/Projects"
import Jobs from "./pages/Jobs"
import Companies from "./pages/Companies"
import JobTypes from "./pages/JobTypes"
import SalaryTypes from "./pages/SalaryTypes"
import Resume from "./pages/Resume"
import Category from "./pages/Category"


function App() {


  return (
    <>
      <Routes>
        <Route  path='/' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/gig-category' element={<Gig_Category />} />
        <Route path='/gig-custom-fields' element={<Gig_custom_fields />} />
        <Route path='/gig-service/active' element={<Gig_service />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/jobs/active-jobs' element={<Jobs />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/jobtypes' element={<JobTypes />} />
        <Route path='/salary-type' element={<SalaryTypes />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/category' element={<Category />} />
        


      </Routes>
    </>
  )
}

export default App
