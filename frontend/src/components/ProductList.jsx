import Product from './Product';
import '../css/Product.css';

export default function ProductList(props) {

  const {products} = props;
  const list = products.map((product) => {
    return (<div className='product-item scale-90' key={product.id || product.objectID}><Product product={product} setProductData={props.setProductData} Cart={props.Cart} setCart={props.setCart}/></div>)
  })

  return (
  <div className='product-list' key="product-list">
    {list}
  </div>
  )
}