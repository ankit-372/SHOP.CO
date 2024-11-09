import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import SignUp from './Components/SignUp/SignUp';
import Page2 from './Components/Page2/Page2';
// import Login from './Components/Login/Login';

import NewArrivals_banner from './assets/Party.svg';
import OnSale_banner from './assets/NewArrivals.png';
import Brand_banner from './assets/Brands.png';
import Product from './Pages/Product';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/On_Sale' element={<ShopCategory banner={OnSale_banner} category="On_Sale" />} />
          <Route path='/newArrivals' element={<ShopCategory banner={NewArrivals_banner} category="NewArrivals" />} />
          <Route path='/brands' element={<ShopCategory banner={Brand_banner} category="Brands" />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginSignUp' element={<LoginSignup />} />
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/Page2' element={<Page2 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
