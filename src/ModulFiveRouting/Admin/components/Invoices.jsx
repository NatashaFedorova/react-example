import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { getInvoices } from '../fakeAPI';
import { Suspense } from 'react';
// import InvoicesDetails from './InvoicesDelails';

const Aside = styled.aside`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-right: 1px solid black;
`;

const InvoicesNav = styled(NavLink)`
  color: #303030;
  border-radius: 4px;
  border: none;
  padding: 12px 16px;
  text-decoration: none;

  &.active {
    color: #fff;
    background-color: #00c8ff;
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #00c8ff;
  }
`;

const Invoices = () => {
  const [invoicesList, setInvoicesList] = useState([]);

  useEffect(() => {
    getInvoices().then(setInvoicesList);
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', height: '100%' }}>
      <Aside>
        {invoicesList.map(({ id }) => (
          <InvoicesNav to={`${id}`} key={id}>
            Invoices {id}
          </InvoicesNav>
        ))}
      </Aside>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};

// <InvoicesDetails item={el} />;

export default Invoices;
