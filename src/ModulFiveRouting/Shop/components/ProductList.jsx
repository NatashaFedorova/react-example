import { Link } from 'react-router-dom';

const ProductsList = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <Link to={`${product.id}`} key={product.id}>
          <h2>{product.title}</h2>
        </Link>
      ))}
    </div>
  );
};

export default ProductsList;
