import Product from './Product';


export default function ProductList(props) {

  const {products} = props;
  const list = products.map((product) => {
    return (<div className='product-item scale-90' key={product.id || product.objectID}><Product product={product} setProductData={props.setProductData} Cart={props.Cart} setCart={props.setCart} faves={props.faves} setFaves={props.setFaves}/></div>)
  })

  return (
  <div className='product-list mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8' key="product-list">
    {list}
  </div>
  )
}