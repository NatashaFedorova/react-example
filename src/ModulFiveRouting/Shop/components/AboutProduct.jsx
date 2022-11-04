import styled from 'styled-components';

const Box = styled.div`
  border: 1px solid #2c3e50;
  display: flex;
`;
const Gradient = styled.div`
  width: 300px;
  background: linear-gradient(to right, #bdc3c7, #2c3e50);
`;

const AboutProduct = ({ product }) => {
  return (
    <Box>
      <Gradient />
      <div style={{ padding: '30px' }}>
        <p>About product</p>
        <h2 style={{ textAlign: 'center' }}>{product.title}</h2>
        <p>{product.about}</p>
        <p style={{ textAlign: 'end' }}>Number: {product.id}</p>
      </div>
    </Box>
  );
};
export default AboutProduct;
