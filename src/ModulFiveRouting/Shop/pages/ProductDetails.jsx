import { useParams } from 'react-router-dom';
import { getProductById } from '../api';
import AboutProduct from '../components/AboutProduct';

const ProductDetails = () => {
  const { id } = useParams();
  return (
    <main>
      <AboutProduct product={getProductById(id)} />
    </main>
  );
};

export default ProductDetails;
