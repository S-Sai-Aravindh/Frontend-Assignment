import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css"

const Navcomp = () => {
  return (
    <div className='Navbox'>
            <Link to="" className='btn btn-primary'>Home</Link>{" "}
            <Link to="About" className='btn btn-primary'>About Us</Link>{" "}
            <Link to="Products" className='btn btn-primary'>Products</Link>{" "}
            <Link to="Contact" className='btn btn-primary'>Contact</Link>{" "}
    </div>
  )
}

export default Navcomp;
