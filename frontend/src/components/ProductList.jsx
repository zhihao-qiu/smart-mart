import Product from './Product';
import '../css/Product.css';

export default function ProductList(props) {
  
  const {products} = props;
  console.log(props);
  const list = products.map((product) => {
    return (<div className='product-item' key={product.id}><Product product={product} ProductData={props.ProductData} setProductData={props.setProductData} Cart={props.Cart} setCart={props.setCart}/></div>)
  })

  return (
  <div className='product-list'>
    {list}
  </div>
  )
}

ProductList.defaultProps = {
  products: [{
    id: 1,
    name: "Roses",
    image: '',
    description: "A delightful bouquet of roses for a significant other on any special occasion",
    price: 70
  },
  {
    id: 2,
    name: "Heart pendant",
    image: '',
    description: "A gold necklace with a heart pendant",
    price: 150
  }
]
}