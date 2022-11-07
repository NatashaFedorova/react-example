import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCustomerById } from '../fakeAPI';

const CustomersDetails = () => {
  const { customerId } = useParams();
  const [customer, setCustomer] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getCustomerById(Number(customerId)).then(setCustomer);
  }, [customerId]);

  if (!customer) {
    return;
  }

  const { id, name } = customer;

  const backLinkHref = location.state?.from ?? '/customers';
  return (
    <main style={{ padding: '30px' }}>
      <Link to={backLinkHref}>Back to customers</Link>
      <p>Customer id - {id}</p>
      <p>Customer name - {name}</p>
    </main>
  );
};

export default CustomersDetails;
