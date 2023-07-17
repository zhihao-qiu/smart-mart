import { useState } from 'react';

import React from 'react';
const ProductDetails = (props) => {
  const { product, Cart, setCart } = props;

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const handleClick = () => {
    setCart([...Cart, product])
  }

  return (
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
          <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
              <img className="w-full" alt="" src={product.image} />
          </div>
          <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
              <div className="border-b border-gray-200 pb-6">
                  <h1
                      className="
            lg:text-2xl
            text-xl
            font-semibold
            lg:leading-6
            leading-7
            text-gray-800
            mt-2
          "
                  >
                      {product.name}
                  </h1>
              </div>
              <div className="py-4 border-b border-gray-200 flex items-center justify-between">
                  <p className="text-base leading-4 text-gray-800">Price</p>
                  <div className="flex items-center justify-center">
                      <p className="flex-auto text-lg font-medium text-slate-500">${product.price}</p>
                  </div>
              </div>
              <button onClick={handleClick}
                  className="
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800
          text-base
          flex
          items-center
          justify-center
          leading-none
          text-white
          bg-gray-800
          w-full
          py-4
          hover:bg-gray-700
        "
              >
                  Add to Cart
              </button>
              <div>
                  <h1 className='mt-7 text-lg font-bold'>Description</h1>
                  <p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-600 mt-7">{product.description}</p>
              </div>


              <div>
                  <div className="border-t border-b py-4 mt-7 border-gray-200">
                      <div onClick={() => setShow(!show)} className="flex justify-between items-center cursor-pointer">
                          <p className="text-base leading-4 text-gray-800">Shipping and returns</p>
                          <button
                              className="
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                rounded
              "
                              aria-label="show or hide"
                          >
                              <svg className={"transform " + (show ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </button>
                      </div>
                      <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show ? "block" : "hidden")} id="sect">
                          Free shipping will be applied at checkout, valid until July 21st, 2023.
                      </div>
                  </div>
              </div>
              <div>
                  <div className="border-b py-4 border-gray-200">
                      <div onClick={() => setShow2(!show2)} className="flex justify-between items-center cursor-pointer">
                          <p className="text-base leading-4 text-gray-800">Contact us</p>
                          <button
                              className="
                cursor-pointer
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                rounded
              "
                              aria-label="show or hide"
                          >
                              <svg className={"transform " + (show2 ? "rotate-180" : "rotate-0")} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 1L5 5L1 1" stroke="#4B5563" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                          </button>
                      </div>
                      <div className={"pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " + (show2 ? "block" : "hidden")} id="sect">
                          If you have any questions on how to return your item to us, contact us at finalproject@gmail.com.
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
  );
};

export default ProductDetails;

ProductDetails.defaultProps ={product: {
  id: 1,
  name: "Roses",
  image: '',
  description: "A delightful bouquet of roses for a significant other on any special occasion.",
  price: 70
}
}