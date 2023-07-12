import React from 'react';
import { Image, Container, Row, Col } from 'react-bootstrap';
import "../css/Product.css";
const Product = (props) => {
  const product = props.product;
  return (
    <div className='product_div'>
      <Container>
        <Row>
          <Col xs={12}><strong>{product.name}</strong></Col>
        </Row>
        <Row>
          <Col xs={4}><Image src={product.image} alt="Product Image" thumbnail rounded /></Col>
          <Col xs={8}>{product.description}<br />
          ${product.price}
          </Col>
        </Row>
      </Container>

    </div>

  );
};
export default Product;