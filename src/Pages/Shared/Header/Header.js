import React from 'react';
import logo2 from '../../../images/logo2.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
  

        <div className='md:px-14'>
            <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap  p-5 flex-col md:flex-row items-center">
    <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
     
    <img style={{ height:'43px'}} src={logo2} alt="" />
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to='/' className="mr-5 px-5 text-white py-2 bg-amber-600 rounded-full hover:text-gray-900">Login</Link>
      <Link to='/signIn' className="mr-5 px-5 text-white py-2 bg-rose-700 rounded-full hover:text-gray-900">Sign Up</Link>
    
    </nav>
  
  </div>
</header>
        </div>
    );
};

export default Header;