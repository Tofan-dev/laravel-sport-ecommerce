import { Outlet } from 'react-router-dom'
import Navbar from '../../../components/Navbar'
import Sidebar from '../../../components/Sidebar'
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../admin.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/login";

  let data = JSON.parse(localStorage.getItem('userInfo'));

  useEffect(() => {
      if (!userInfo && !data) {
          navigate(redirect);
      }
  }, [userInfo, redirect]);

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