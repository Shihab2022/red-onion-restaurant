import React from 'react';
import bannerbackground from  '../../../images/bannerbackground.png'
const BannerPage = () => {
    return (
        <div className="relative">
        <img src={bannerbackground} alt="" /> 
        <div className='absolute top-[25%] left-[30%]  '>
            <h1 className="text-5xl my-5">Best food waiting  for your belly</h1>
            <div>
                <input className="bg-stone-200 border-0 rounded-full px-10 py-2" type="text" name="search" id="search" />
                <input className='px-8 text-white py-2 bg-rose-700 rounded-full' type="button" value="Search" />
            </div>
        </div>
        </div>
    );
};

export default BannerPage;