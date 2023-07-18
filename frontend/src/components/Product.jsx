import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Product = (props) => {

  let fillcolour = '';
  const { setProductData, Cart, setCart, faves, setFaves} = props;
  const [fillColour,setFillColour] = useState('gray');
  const product = props.product;
  if (!product.name)  product.name = product.title;

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
    if(product._highlightResult){
      let name = product._highlightResult.name.value.replace(/<em>/g,'');
      name = name.replace(/<\/em>/g,'');
      product.name = name;
    }
    setCart([...Cart, {...product, quantity: 1}])
  }

  const toggleFave = () => {
    if(faves.includes(product)) {
      console.log(faves.indexOf(product));
      faves.splice(faves.indexOf(product), 1);
      console.log(faves);
      setFaves([...faves]);
      setFillColour('gray');
    }
    else {
    setFaves([...faves, product]);
    setFillColour('red');
    }
  }
  

  return (

<div className="flex font-serif">
  <div className="flex-none w-52 relative">
    <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-scale-down rounded-lg" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex-none flex-col items-baseline">
     <Link to='/productdetails' onClick={handleClick}>
      <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900" >
      <span
      dangerouslySetInnerHTML={{
        __html: product.name || product._highlightResult.name.value,
      }}
    />
        {/* {product.name || product._highlightResult.name.value.replace("<em>","").replace("</em>","")} */}
      </h1>
      </Link>
      <div className="flex-auto text-lg font-medium text-slate-500">
        ${(product.price).toFixed(2)}
      </div>
      <div className="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div>
    </div>
    <div className="flex justify-between space-x-4 mb-5 text-sm font-medium">
      <div className="flex-none flex space-x-4 pr-4">
        <button className="flex-none px-3 w-13 h-12 uppercase font-small tracking-wider bg-slate-900 text-white" type='button' onClick={addToCart}>
          Add to cart
        </button>
      </div>
      <button onClick={toggleFave} className="flex-none flex items-center justify-center w-12 h-12 text-slate-300 border border-slate-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill={fillColour}aria-hidden="true">
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