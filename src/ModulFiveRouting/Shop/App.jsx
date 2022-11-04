import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import { getproducts } from './api';
import styled from 'styled-components';

const Box = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
`;

const App = () => {
  return (
    <Box>
      <Header>
        <Link to="/">LOGO</Link>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </Navigation>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products products={getproducts()} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
