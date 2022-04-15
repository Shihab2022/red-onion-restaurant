import React from 'react';
import useBreakfast from '../../../Hook/Breakfast';
import BreakfastCard from './BreakfastCard';

const BreakfastPage = () => {
    const [breakfast]=useBreakfast()
    console.log(breakfast)
    return (
        <div className="md:px-28 my-10 grid md:grid-cols-3 grid-col-1 md:mb-0 mb-8 gap-5">
           {
               breakfast.map(data =>  <BreakfastCard key={data.id} data={data}></BreakfastCard>)
           }
         
        </div>
    );
};

export default BreakfastPage;