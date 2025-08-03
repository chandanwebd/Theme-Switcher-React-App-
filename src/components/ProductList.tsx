import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTheme } from '../theme/ThemeContext';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { theme } = useTheme();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error loading products:', err));
  }, []);

  return (
    <section className={`product-list-section pt-5 ${theme}`}>
      <Container>
        <div className="text-center mb-5">
          <span className="section-subtitle">Shop Products</span>
          <h2 className="section-title">Explore Our Collection</h2>
        </div>
        <Row>
          {products.map((product) => (
            <Col key={product.id} md={4} className="mb-4">
              <Card className={`product-card h-100 shadow-sm ${theme}`}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <Card.Body className={`h-100 ${theme}`}>
                  <p className="product-category text-uppercase small">{product.category}</p>
                  <Card.Title className="fw-bold title truncate mt-2">{product.title}</Card.Title>
                  <p className="small text-description">{product.description.substring(0, 80)}...</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="fw-bold fs-5 text-price">${product.price}</span>
                    <div className="rating small text-warning">
                      ★ {product.rating.rate} ({product.rating.count})
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <div className="marquee-section">
        <div className="marquee-content">
          <span>
            ✻ Website Design & Logo ✻ Business Branding ✻ Mobile App Design ✻ UI/UX Design ✻
          </span>
          <span>
            ✻ Website Design & Logo ✻ Business Branding ✻ Mobile App Design ✻ UI/UX Design ✻
          </span>
          <span>
            ✻ Website Design & Logo ✻ Business Branding ✻ Mobile App Design ✻ UI/UX Design ✻
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
