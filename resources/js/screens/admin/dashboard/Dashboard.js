import { Outlet } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import "../admin.css";

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