import React from 'react';
import useLunch from '../../../Hook/Lunch';
import LunchCard from './LunchCard';

const LunchPage = () => {
    const [lunch]=useLunch()

    return (
        <div className="md:px-28 my-10 grid md:grid-cols-3 grid-col-1 md:mb-0 mb-8 gap-5">
           {
               lunch.map(data =>  <LunchCard key={data.id} data={data}></LunchCard>)
           }
         
        </div>
    );
};

export default LunchPage;