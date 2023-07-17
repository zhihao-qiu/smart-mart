import 'App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Order from './components/Order';
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
          <Route path="/productdetails" element={<ProductDetails product={ProductData}/>}/>
          <Route path="/order" element={<Order Cart={Cart}/>}/>
          <Route path="/completion" element={<h1>Thank you!</h1>}/>
        </Routes>
      </Router>
    </div>
  );


}