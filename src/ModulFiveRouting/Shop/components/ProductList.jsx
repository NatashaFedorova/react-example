import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const StyleLink = styled(NavLink)`
  position: relative;
  font-weight: 600;
  text-decoration: none;
  color: #090000;
  opacity: 0.7;
  transition: opacity 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);

  &::after {
    --scale: 0;

    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 100%;
    height: 3px;
    background: linear-gradient(135deg, rgb(250, 115, 115), rgb(155, 0, 0));
    transform: scaleX(var(--scale));
    transform-origin: var(--x) 50%;
    transition: transform 0.3s cubic-bezier(0.51, 0.92, 0.24, 1);
  }

  &:hover {
    opacity: 1;
  }

  &:hover::after {
    --scale: 1;
  }
`;

const ProductsList = ({ products }) => {
  const location = useLocation();
  return (
    <List>
      {products.map(product => (
        <li key={product.id}>
          <StyleLink to={`${product.id}`} state={{ from: location }}>
            <h2>{product.title}</h2>
          </StyleLink>
        </li>
      ))}
    </List>
  );
};

export default ProductsList;
