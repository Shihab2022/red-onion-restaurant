import { createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import useFoodData from './Hook/foodData';
import FoodDetails from './Pages/FoodDetails/FoodDetails';
import HomePage from './Pages/Home/HomePage/HomePage';
import SignIn from './Pages/Login/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';


export const FoodContext=createContext({})

function App() {
  const foodData=useFoodData()
  return (
    <div >
     <Header></Header>
     <FoodContext.Provider value={foodData}>
     <Routes>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/home' element={<HomePage></HomePage>}></Route>
    <Route path='/home/:foodId' element={<FoodDetails></FoodDetails>}></Route>
<Route path='/signIn' element={<SignIn></SignIn>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
     </FoodContext.Provider>
    </div>
  );
}

export default App;
