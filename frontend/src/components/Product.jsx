import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

  const { setProductData, Cart, setCart} = props;
  const product = props.product;
  if (!product.name)  product.name = product.title || product.brand;

  product.name = product.title;
  const handleClick = () => {
    setProductData({
        id: product.id,
        name: product.title,
        price: product.price,
        description: product.description,
        image: product.image,
        price: product.price
      }      
    )
  }

  const addToCart = () => {
    setCart([...Cart, product])
    console.log(Cart);
  }


  return (

<div className="flex font-serif">
  <div className="flex-none w-52 relative">
    <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap items-baseline">
     <Link to='/productdetails' onClick={handleClick}>
      <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900" >
        {product.name}
      </h1>
      </Link> 
      <div className="flex-auto text-lg font-medium text-slate-500">
        ${product.price}
      </div>
      <div className="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div>
    </div>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
      <div className="flex-auto flex space-x-4 pr-4">
        <button className="flex-none w-1/2 h-12 uppercase font-small tracking-wider bg-slate-900 text-white" type='button' onClick={addToCart}>
          Add to cart
        </button>
      </div>
      <button className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
    </div>
    <p className="text-sm text-slate-500">
    {product.description}
    </p>
  </form>
</div>

)
};
export default Product;