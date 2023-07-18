import React, { useState, useEffect } from 'react';
import PaymentDetails from './PaymentDetails';
import CheckoutForm from './CheckoutForm';
import { Link } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Order = (props) => {

  const { cart, setCart } = props;

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const modalClick = () => {
    setShowModal(!showModal);
  };
  const modalClick2 = () => {
    setShowModal2(!showModal2);
  };

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

  const orderList = cart.map((item) => {
    const addQuantity = () => {
      item.quantity += 1;
      setCart([...cart]);
    };

    const removeQuantity = () => {
      if (item.quantity > 1) {
        item.quantity -= 1;
        setCart([...cart]);
      }
    };

    const removeItem =() =>{
      let index = cart.indexOf(item);
      console.log(index);
      cart.splice(index, 1);
      setCart([...cart]);
    }

    return (
      <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
        <div className="pb-4 md:pb-8 w-full md:w-40">
          <img className="w-full hidden md:block" src={item.image} alt="dress" />
        </div>
        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
          <div className="w-full flex flex-col justify-start items-start space-y-8">
            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
            <div className="flex justify-start items-start flex-col space-y-2">
              <p className="text-sm leading-none text-gray-800">
                <span className="text-gray-300">Description:</span>
                <span>{item.description}</span>
              </p>
            </div>
          </div>
          <div className="flex justify-between space-x-8 items-start w-full">
            <div className="flex flex-row">
              <svg onClick={addQuantity} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <p className="px-3  text-base xl:text-lg font-semibold leading-6 text-gray-800"> {item.quantity}
              </p>
              <svg onClick={removeQuantity} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
              </svg>
            </div>
            <svg onClick={removeItem} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    );
  });

  const subTotal = (cart.reduce((currentTotal, item) => currentTotal + item.price * item.quantity, 0)).toFixed(2);
  const gst = (subTotal * 0.05).toFixed(2);
  const pst = (subTotal * 0.07).toFixed(2);
  const total = (parseInt(subTotal) + parseInt(gst) + parseInt(pst)).toFixed(2);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #13432</h1>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Order Details</p>
            {orderList}
          </div>
          <div className="flex justify-center md:flex-row flex-col items-stretch w-2/4 y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">Total</h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between  w-full">
                  <p className="text-base leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base leading-4 text-gray-600">${subTotal}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">GST/HST</p>
                  <p className="text-base leading-4 text-gray-600">${gst}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">PST</p>
                  <p className="text-base leading-4 text-gray-600">${pst}</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base leading-4 text-gray-800">Shipping</p>
                  <p className="text-base leading-4 text-gray-600">FREE</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base font-semibold leading-4 text-gray-800">Total</p>
                <p className="text-base font-semibold leading-4 text-gray-600">${total}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col ">
          <h3 className="text-xl font-semibold leading-5 text-gray-800">Customer</h3>
          <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
            <div className="flex flex-col justify-start items-start flex-shrink-0">
              <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                <div className=" flex justify-start items-start flex-col space-y-2">
                  {userInfo.name || <p className="text-base font-semibold leading-4 text-left text-gray-800">Guest</p>}
                </div>
              </div>

              <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                <p className="cursor-pointer text-sm leading-5 text-gray-800">{userInfo.email}</p>
              </div>
            </div>
            <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
              <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                  <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                  {userInfo.address || <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">Please enter shipping address</p>}
                </div>
              </div>
              <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                <button onClick={modalClick} className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenter"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Edit Details
                </button>
                <button onClick={modalClick2} className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800"
                  data-te-toggle="modal"
                  data-te-target="#exampleModalCenter"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <PaymentDetails setShowModal={setShowModal} userInfo={userInfo} setUserInfo={setUserInfo} />}
      {showModal2 && clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm setShowModal={setShowModal2} />
        </Elements>)}

    </div>
  );
};

export default Order;