import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';

const Card = styled.div`
  border: 1px solid #2c3e50;
  display: flex;
`;
const Gradient = styled.div`
  width: 300px;
  background: linear-gradient(to right, #988282, #280909);
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
`;

const StyleLink = styled(Link)`
  display: block;
  font-weight: 600;
  text-decoration: none;
  color: #090000;
  margin: 30px 0;
`;

const AboutProduct = ({ product }) => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  return (
    <>
      <Card>
        <Gradient />
        <div style={{ padding: '30px' }}>
          <h2 style={{ textAlign: 'center' }}>{product.title}</h2>
          <p>{product.about}</p>
          <Box>
            <p>Price: {product.price}</p>
            <p>Number: {product.id}</p>
          </Box>
        </div>
      </Card>
      <StyleLink to={backLinkHref}>Back to products</StyleLink>
    </>
  );
};
export default AboutProduct;
