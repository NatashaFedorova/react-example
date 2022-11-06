import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Cotainer = styled.div`
  width: 1200px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
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

const LinkFooter = styled.a`
  color: rgb(139, 63, 63);
  display: block;
  margin-bottom: 20px;
`;

const Footer = styled.footer`
  background-color: rgb(246, 216, 216);
  padding: 20px;
`;

const Box = styled.div``;

const SharedLayout = () => {
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
    <Cotainer>
      <Box>
        <Header>
          <StyleNavLink to="/" onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
            LOGO
          </StyleNavLink>
          <Navigation>
            <StyleNavLink to="/" end onMouseLeave={handleMouse} onMouseEnter={handleMouse}>
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
        <Suspense fallback={<p style={{ color: '#303030' }}>Loading...</p>}>
          <Outlet />
        </Suspense>
      </Box>
      <Footer>
        <LinkFooter href="tel:+380673008282">+380673008282</LinkFooter>
        <LinkFooter href="mailto:dyadyafedor1287@gmail.com">dyadyafedor1287@gmail.com</LinkFooter>
        <p style={{ color: 'rgb(139, 63, 63)' }}>Kiev, Metalistiv</p>
      </Footer>
    </Cotainer>
  );
};

export default SharedLayout;
