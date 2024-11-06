import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import On_Sale from './Pages/OnSale';
import NewArrivals from './Pages/NewArrivals';
import Brands from './Pages/brands';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import SignUp from './Components/SignUp/SignUp';
// import Login from './Components/Login/Login';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/On_Sale' element={<On_Sale/>} />
          <Route path='/newArrivals' element={<NewArrivals/>} />
          <Route path='/brands' element={<Brands/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/loginSignUp' element={< LoginSignup />} />
          {/* <Route path='/login' element={< Login />} /> */}
          <Route path='/signUp' element={< SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

