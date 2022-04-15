import React, { useState } from "react";
import useFoodData from "../../../Hook/foodData";
import BannerPage from "../BannerPage/BannerPage";
import BreakfastCard from "../BreakfastPage/BreakfastCard";
import FoodCard from "../FoodCard/FoodCard";

const HomePage = () => {
  const [givenData, setGivenData] = useState([]);
  const [foodData] = useFoodData();
  const selectedFood = (response) => {
   
    const foodClass = foodData.filter((food) => food.id.includes(response));

    setGivenData(foodClass);
  };
 

  return (
    <div>
      <BannerPage></BannerPage>

      <div className="flex justify-center my-3 md:my-8 items-center text-2xl">
        <button className="active"  onClick={() => selectedFood("breakfast")}>Breakfast</button>
        <button className="mx-14" onClick={() => selectedFood("dinner")}>
          Dinner
        </button>
        <button onClick={() => selectedFood("lunch")}>Lunch</button>
      </div>

      <div className="md:px-28 my-10 grid md:grid-cols-3 grid-col-1 md:mb-0 mb-8 gap-5">
        {givenData.map((data) => (
      
          <FoodCard key={data.id} data={data}></FoodCard>
        ))}
        
      </div>
    </div>
  );
};

export default HomePage;
