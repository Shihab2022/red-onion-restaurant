import React from 'react';
import useDinner from '../../../Hook/Dinner';
import DinnerCard from './DinnerCard';

const DinnerPage = () => {
    const [dinner]=useDinner()
    
    return (
        <div className="md:px-28 my-10 grid md:grid-cols-3 grid-col-1 md:mb-0 mb-8 gap-5">
     
           {
               dinner.map(data =>  <DinnerCard key={data.id} data={data}></DinnerCard>)
           }
         
        </div>
    );
};

export default DinnerPage;