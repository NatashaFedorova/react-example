import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from './AppBar';

const Box = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
`;

const Layout = () => {
  return (
    <Box>
      <AppBar />

      <Outlet />
    </Box>
  );
};

export default Layout;
