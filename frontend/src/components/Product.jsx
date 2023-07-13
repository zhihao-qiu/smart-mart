import React from 'react';
import { Route, Link } from "react-router-dom";

// import { Image, Container, Row, Col } from 'react-bootstrap';

const Product = (props) => {
  const product = props.product;

  return (
  //   <div className="group relative shadow-lg" >
  //   <div className=" min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-60 lg:aspect-none">
  //     <img
  //       alt="Product Image"
  //       src={product.image}
  //       className="w-full h-full object-center object-cover lg:w-full lg:h-full"
  //     />
  //   </div>
  //   <div className="flex justify-between p-3">
  //     <div>
  //       <h3 className="text-sm text-gray-700">
  //         <a>
  //           <span aria-hidden="true" className="absolute inset-0" />
  //           <span style={{ fontSize: '16px', fontWeight: '600' }}>{product.name}</span>
  //         </a>
  //       </h3>
  //     </div>
  //     <p className="text-sm font-medium text-green-600">${product.price}</p>
  //   </div>
  // </div>

    // <div classNameName='product_div'>
    //   <Container>
    //     <Row>
    //       <Col xs={12}><strong>{product.name}</strong></Col>
    //     </Row>
    //     <Row>
    //       <Col xs={4}><Image src={product.image} alt="Product Image" thumbnail rounded /></Col>
    //       <Col xs={8}>{product.description}<br />
    //       ${product.price}
    //       </Col>
    //     </Row>
    //   </Container>

    // </div>

<div className="flex font-serif">
  <div className="flex-none w-52 relative">
    <img src={product.image} alt="" className="absolute inset-0 w-full h-full object-contain rounded-lg" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap items-baseline">
      <h1 className="w-full flex-none mb-3 text-2xl leading-none text-slate-900">
        {product.name}
      </h1>
      <div className="flex-auto text-lg font-medium text-slate-500">
        ${product.price}
      </div>
      <div className="text-xs leading-6 font-medium uppercase text-slate-500">
        In stock
      </div>
    </div>
    <div className="flex space-x-4 mb-5 text-sm font-medium">
      <div className="flex-auto flex space-x-4 pr-4">
        <button className="flex-none w-1/2 h-12 uppercase font-small tracking-wider bg-slate-900 text-white" type="submit">
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
      Free shipping until July 21st!
    </p>
  </form>
</div>
)
};
export default Product;