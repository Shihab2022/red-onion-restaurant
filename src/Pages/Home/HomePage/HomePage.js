import React from 'react';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import BannerPage from '../BannerPage/BannerPage';
import BreakfastPage from '../BreakfastPage/BreakfastPage';
import DinnerPage from '../DinnerPage/DinnerPage';
import LunchPage from '../LunchPage/LunchPage';

const HomePage = () => {
    return (
        <div>
          
            <BannerPage></BannerPage>
            <div className="flex justify-center my-3 md:my-8 items-center text-2xl">
                <CustomLink to='/breakfast'>Breakfast</CustomLink>
                <CustomLink className="mx-14" to='/lunch'>Lunch</CustomLink>
                <CustomLink to='/dinner'>Dinner</CustomLink>
            </div>
 {/* <BreakfastPage></BreakfastPage> */}
{/* <DinnerPage></DinnerPage>
<LunchPage></LunchPage>  */}
        </div>
    );
};

export default HomePage;