import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/Home/HomePage/HomePage';
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
<Route path='/signIn' element={<SignIn></SignIn>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
    </div>
  );
}

export default App;
