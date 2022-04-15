import React from 'react';

const DinnerCard = ({data}) => {
    const {name,about,balance,picture1}=data
    return (
      <div className='flex justify-center items-center'>
            <div className=' w-100  rounded-lg hover:shadow-2xl hover:shadow-lime-700 p-10'>
            <img style={{height:'250px'}} src={picture1} alt="" />
          <div className='flex justify-center items-center flex-col'>
          <p className='text-xl text-slate-900'>{name}</p>
            <p className='text-lg text-slate-400'>{about.slice(0,30)}...</p>
            <p className='text-xl font-bold text-slate-900'>{balance}</p>    
          </div>
        </div>
      </div>
    );
};

export default DinnerCard;