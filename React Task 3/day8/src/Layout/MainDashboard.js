import React from 'react'
import { Outlet } from 'react-router-dom'
import Navcomp from './Navcomp'
import Footer from './Footer'
import Logo from '../Assests/Logo.jpg';
import './style.css';

const MainDashboard = () => {
  return (
    <div>
        <div className='Mainbox'>
            <div className='LogoBox'>
                <img src={Logo} alt='Logo' className='Logoimg'/>
                <h1 className='Logotitle'>GRT Jewellers</h1>
            </div>
            <div className='Header'>
                <Navcomp/>
            </div>
            <div className='Body'>
                <Outlet/>
            </div>
            <div className='Footer'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}

export default MainDashboard
