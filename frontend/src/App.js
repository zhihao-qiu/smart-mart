import { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Order from './components/Order';
import Completion from './components/Completion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



export default function App() {

  const [ProductData, setProductData] = useState({});
  const [Cart, setCart] = useState([])
  const [Products, setProducts] = useState([]);
  const [showSearch,setShowSearch]= useState(false);
  const [faves,setFaves] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  
  return (
    <div className="App">
      <Router>       
        <NavBar Cart={Cart} setCart={setCart} setProducts={setProducts} showSearch={showSearch} setShowSearch={setShowSearch} faves={faves}/>
        <Routes>
          <Route path="/" element={<Home Products={Products} setProducts={setProducts} ProductData={ProductData} setProductData={setProductData} faves={faves} setFaves={setFaves} Cart={Cart} setCart={setCart} showSearch={showSearch} setShowSearch={setShowSearch}/>}/>
          <Route path="/productdetails" element={<ProductDetails product={ProductData} Cart={Cart} setCart={setCart}/>}/>
          <Route path="/order" element={<Order cart={Cart} setCart={setCart}/>}/>
          <Route path="/completion" element={<Completion/>}/>
        </Routes>
      </Router>
    </div>
  );


}