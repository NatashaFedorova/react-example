import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: 'analytics', text: 'Analytics' },
  { href: 'invoices', text: 'Invoices' },
  { href: 'deposits', text: 'Deposits' },
];

const StyledNavLink = styled(NavLink)`
  color: #303030;
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  text-decoration: none;

  &.active {
    color: #fff;
    background-color: orange;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: orange;
  }
`;

const Box = styled.header`
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  padding: 30px;
  display: flex;
  gap: 20px;
`;

const Sales = () => {
  return (
    <div>
      <Box>
        {navItems.map(({ href, text }) => (
          <StyledNavLink to={href} key={href}>
            {text}
          </StyledNavLink>
        ))}
      </Box>
      <Outlet />
    </div>
  );
};

export default Sales;
