import React from 'react';
import bannerbackground from  '../../../images/bannerbackground.png'
const BannerPage = () => {
    return (
        <div className="relative my-5">
        <img  className="md:h-full h-[300px]" src={bannerbackground} alt="" /> 
        <div className='absolute md:top-[25%] top-10 left-8 md:left-[35%]  '>
            <h1 className="md:text-5xl text-2xl  my-5">Best food waiting  for your belly</h1>
            <div>
                <input className="bg-white border-0 rounded-full md:px-40 px-10 text-xl shadow-lg py-2 md:py-3" placeholder="Search food items " type="text" name="search" id="search" />
            
            </div>
        </div>
        </div>
    );
};

export default BannerPage;