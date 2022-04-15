import { Route, Routes } from 'react-router-dom';
import './App.css';
import BreakfastPage from './Pages/Home/BreakfastPage/BreakfastPage';
import DinnerPage from './Pages/Home/DinnerPage/DinnerPage';
import HomePage from './Pages/Home/HomePage/HomePage';
import LunchPage from './Pages/Home/LunchPage/LunchPage';
import SignIn from './Pages/Login/SignIn/SignIn';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div >
     <Header></Header>

   
     <Routes>
    <Route path='/' element={<HomePage></HomePage>}></Route>
    <Route path='/home' element={<HomePage></HomePage>}></Route>
    <Route path='/breakfast' element={<BreakfastPage></BreakfastPage>}></Route>
<Route path='/lunch' element={<LunchPage></LunchPage>}></Route>
<Route path='/dinner' element={<DinnerPage></DinnerPage>}></Route>
<Route path='/signIn' element={<SignIn></SignIn>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
    </div>
  );
}

export default App;
