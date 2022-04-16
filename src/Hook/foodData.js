import { useEffect, useState } from "react"

const useFoodData=()=>{
   const [foodData,setSetData]=useState([])
   useEffect(()=>{
       fetch('foodData.json')
       .then(res=>res.json())
       .then(data=>setSetData(data))
   },[foodData])
   return [foodData,setSetData]
}
export default useFoodData