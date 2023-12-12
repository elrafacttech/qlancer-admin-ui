import { Route, Routes } from "react-router-dom"
import AdminLogin from "./pages/AdminLogin"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Gig_Category from "./pages/Gig_Category"
import Gig_custom_fields from "./pages/Gig_custom_fields"
import Gig_service from "./pages/Gig_service"
import Orders from "./pages/Orders"

import Projects from "./pages/Projects"


function App() {


  return (
    <>
      <Routes>
        <Route  path='/' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/gig-category' element={<Gig_Category />} />
        <Route path='/gig-custom-fields' element={<Gig_custom_fields />} />
        <Route path='/gig-service' element={<Gig_service />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/projects' element={<Projects />} />
        
      </Routes>
    </>
  )
}

export default App
