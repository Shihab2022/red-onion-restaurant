import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../App";
import { BsCart2 } from "react-icons/bs";

const FoodDetails = () => {
  const { foodId } = useParams();
  const [mainData] = useContext(FoodContext);
  const [foundFood,setFoundFood]=useState([])
  const [count,setCount]=useState(0)


useEffect(()=>{
    const findFood = mainData?.find((food) => food?.id === foodId);
    setFoundFood(findFood)
},[foodId])

 
  console.log(foundFood);
  const { name, picture1, picture2, picture3, about, balance } = foundFood;

  return (
    <div className="px-40">
      <div className="grid md:grid-cols-2 grid-cols-1 mt-14">
<div className="  p-20">
    <h2 className="text-5xl  font-bold my-5 font-mono">{name}</h2>
    <p className="text-sm text-stone-500 mb-3">  {about}</p>
    <div className="flex items-center  my-5 ">
    
        <p className='text-4xl font-mono  '>{(balance)}</p>
        <div className='px-8 py-2 shadow-md border-2 ml-5 cursor-pointer border-zinc-400  inline  rounded-full'>
            <span onClick={()=>setCount(count-1) } className='text-2xl'>-</span>
            <span className='px-5  text-xl'>{count}</span>
            <span onClick={()=>setCount(count+1)} className='text-2xl text-rose-700'>+</span>
        </div>
    </div>
  <button className='px-5 flex items-center  text-white mb-4 py-2 bg-rose-700 rounded-full'>Add <span className='ml-4 text-xl'> <BsCart2 /> </span></button>
  <div className='flex my-5'>
      <img style={{ height:'150px'}} src={picture2} alt="" />
      <img className='mx-5' style={{ height:'150px'}} src={picture3} alt="" />
  </div>
    
    
    </div>
<div>
    <img src={picture1} alt="" />
</div>

      </div>
    </div>
  );
};

export default FoodDetails;
