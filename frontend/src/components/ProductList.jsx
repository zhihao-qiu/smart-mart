import Product from './Product';

export default function ProductList(props) {
  const {products} = props;

  const list = products.map((product) => {
    return (<Product product={product} key={product.id}/>)
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