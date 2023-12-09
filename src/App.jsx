import { Route, Routes } from "react-router-dom"
import AdminLogin from "./pages/AdminLogin"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"
import Gig_Category from "./pages/Gig_Category"
import Gig_custom_fields from "./pages/Gig_custom_fields"


function App() {


  return (
    <>
      <Routes>
        <Route  path='/' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/gig-category' element={<Gig_Category />} />
        <Route path='/gig-custom-fields' element={<Gig_custom_fields />} />
      </Routes>
    </>
  )
}

export default App
