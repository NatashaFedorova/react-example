import { useSearchParams } from 'react-router-dom';
import ProductsList from '../components/ProductList';
import { getproducts } from '.././api';
import SearchBox from '../components/SearchBoxByName';

const Products = () => {
  const products = getproducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const productName = searchParams.get('name') ?? '';

  const visibleProducts = products.filter(({ title }) =>
    title.toLowerCase().includes(productName.toLowerCase())
  );

  const handleInput = name => {
    const newName = name !== '' ? { name } : {};
    setSearchParams(newName);
  };
  return (
    <main>
      <h1>Products</h1>
      <SearchBox value={productName} onChange={handleInput} />
      <ProductsList products={visibleProducts} />
    </main>
  );
};

export default Products;
