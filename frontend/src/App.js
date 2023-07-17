import 'App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ProductDetails from './components/ProductDetails';
import Order from './components/Order';
import Payment from './components/Payment';
import CheckoutForm from './components/CheckoutForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


export default function App() {

  const [ProductData, setProductData] = useState({});
  const [Cart, setCart] = useState([])

  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch("/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({}),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, []);

  return (
    <div className="App">
      <Router>       
        <NavBar Cart={Cart}/>
        <Routes>
          <Route path="/" element={<Home ProductData={ProductData} setProductData={setProductData} Cart={Cart} setCart={setCart}/>}/>
          <Route path="/productdetails" element={<ProductDetails product={ProductData}/>}/>
          <Route path="/order" element={<Order Cart={Cart}/>}/>
          <Route path="/payment" element= {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}/>
        </Routes>
      </Router>
    </div>
  );


}