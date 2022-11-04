import ProductsList from '../components/ProductList';

const Products = ({ products }) => {
  return (
    <main>
      <ProductsList products={products} />
    </main>
  );
};

export default Products;
