import React from 'react';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import BannerPage from '../BannerPage/BannerPage';
import BreakfastPage from '../BreakfastPage/BreakfastPage';

const HomePage = () => {
    return (
        <div>
          
            <BannerPage></BannerPage>
            <div className="flex justify-center my-3 md:my-8 items-center text-2xl">
                <CustomLink to='/'>Breakfast</CustomLink>
                <CustomLink className="mx-14" to='/about'>Lunch</CustomLink>
                <CustomLink to='/login'>Dinner</CustomLink>
            </div>
<BreakfastPage></BreakfastPage>
        </div>
    );
};

export default HomePage;