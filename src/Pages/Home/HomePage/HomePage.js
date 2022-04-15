import React from 'react';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import BannerPage from '../BannerPage/BannerPage';

const HomePage = () => {
    return (
        <div>
          
            <BannerPage></BannerPage>
            <div className="flex justify-center items-center text-2xl">
                <CustomLink to='/'>Breakfast</CustomLink>
                <CustomLink className="mx-14" to='/about'>Lunch</CustomLink>
                <CustomLink to='/login'>Dinner</CustomLink>
            </div>
        </div>
    );
};

export default HomePage;