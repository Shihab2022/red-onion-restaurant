import React from 'react';
import logo2 from '../../../images/logo2.png';
import {  BsFillCartPlusFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='px-20  my-5'>
           <div className="flex justify-between items-center">
               <img style={{ height:'43px'}} src={logo2} alt="" />
               <div className="flex justify-around items-center font-bold">
              
               <h3 className="text-3xl text-red-600"> < BsFillCartPlusFill/> </h3>
               <Link className="mx-14" to='/'>Login</Link>
               <Link className="px-5 text-white py-2 bg-rose-700 rounded-full" to='/'>Sign Up</Link>
               </div>
           </div>
        </div>
    );
};

export default Header;