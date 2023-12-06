import { Route, Routes } from "react-router-dom"
import AdminLogin from "./pages/AdminLogin"
import Homepage from "./pages/Homepage"
import Dashboard from "./pages/Dashboard"


function App() {


  return (
    <>
      <Routes>
        <Route  path='/' element={<AdminLogin />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
