import { Outlet, Router } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div className='color'>
        <Navbar />
        <div className='container'>
          <Sidebar />  
          <Outlet/>
          </div>
        </div>
  )
}

export default Dashboard