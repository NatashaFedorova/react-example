import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Team from './pages/Team';
import Mission from './pages/Mission';
import Reviews from './pages/Reviews';
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

const StyleNavLink = styled(NavLink)`
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

const App = () => {
  const handleMouse = e => {
    const el = e.target;
    const tolerance = 10;
    const left = 0;
    const right = el;

    let x = e.pageX - el.offsetLeft;

    if (x - tolerance < left) x = left;
    if (x + tolerance > right) x = right;

    el.style.setProperty('--x', `${x}px`);
  };
  return (
    <Box>
      <Header>
        <StyleNavLink to="/" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
          LOGO
        </StyleNavLink>
        <Navigation>
          <StyleNavLink to="/" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            Home
          </StyleNavLink>
          <StyleNavLink to="/about" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            About
          </StyleNavLink>
          <StyleNavLink to="/products" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            Products
          </StyleNavLink>
        </Navigation>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="/products" element={<Products products={getproducts()} />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
