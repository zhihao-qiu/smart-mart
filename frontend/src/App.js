import 'App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Order from './components/Order';
import Completion from './components/Completion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {

  const [ProductData, setProductData] = useState({});
  const [Cart, setCart] = useState([])

  return (
    <div className="App">
      <Router>       
        <NavBar Cart={Cart}/>
        <Routes>
          <Route path="/" element={<Home ProductData={ProductData} setProductData={setProductData} Cart={Cart} setCart={setCart}/>}/>
          <Route path="/productdetails" element={<ProductDetails product={ProductData} Cart={Cart} setCart={setCart}/>}/>
          <Route path="/order" element={<Order cart={Cart} setCart={setCart}/>}/>
          <Route path="/completion" element={<Completion/>}/>
        </Routes>
      </Router>
    </div>
  );


}