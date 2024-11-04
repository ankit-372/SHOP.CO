import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import On_Sale from './Pages/OnSale';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/On_Sale' element={<On_Sale/>} />
          <Route path='/newArrivals' element={<ShopCategory category="newArrivals" />} />
          <Route path='/brands' element={<ShopCategory category="brands" />} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/login' element={< LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

