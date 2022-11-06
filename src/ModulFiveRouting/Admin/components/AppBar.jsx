import {
  BsStack,
  BsWalletFill,
  BsBriefcaseFill,
  BsChatLeftTextFill,
  BsPersonLinesFill,
} from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: 'dashboard', text: 'Dashboard', icon: BsStack },
  { href: 'sales', text: 'Sales', icon: BsWalletFill },
  { href: 'reports', text: 'Reports', icon: BsBriefcaseFill },
  { href: 'feedback', text: 'Feedback', icon: BsChatLeftTextFill },
  { href: 'customers', text: 'Customers', icon: BsPersonLinesFill },
];

const Header = styled.header`
  border-right: 1px solid black;
  padding: 30px 10px;
  height: 100vh;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledNavLink = styled(NavLink)`
  color: #303030;
  border-radius: 4px;
  border: none;
  padding: 8px;
  text-decoration: none;

  &.active {
    color: #fff;
    background-color: #912121;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #912121;
  }
`;

const AppBar = () => {
  return (
    <Header>
      <Nav>
        {navItems.map(({ href, text, icon: Icon }) => (
          <StyledNavLink to={href} key={href}>
            <Icon size="16" style={{ marginRight: '10px' }} />
            {text}
          </StyledNavLink>
        ))}
      </Nav>
    </Header>
  );
};

export default AppBar;
