import React from 'react'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import Home from '../home/home'
import "./dashboard.css"

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className='container'>
          <Sidebar />
          <Home /> 
        </div>
    </div>
  )
}

export default Dashboard