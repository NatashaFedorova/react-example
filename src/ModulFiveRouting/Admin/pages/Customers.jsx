import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link, useLocation } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import { getCustomers } from '../fakeAPI';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const filterParams = searchParams.get('filter') ?? '';
  const location = useLocation();

  useEffect(() => {
    getCustomers().then(setCustomers);
  }, []);

  const changeFilter = value => {
    setSearchParams(value !== '' ? { filter: value } : {});
  };

  const visibleCustomers = useMemo(() => {
    return customers.filter(({ name }) => name.toLowerCase().includes(filterParams.toLowerCase()));
  }, [customers, filterParams]);

  return (
    <main style={{ padding: '30px' }}>
      <SearchBox value={filterParams} onChange={changeFilter} />
      {visibleCustomers.length > 0 && (
        <ul>
          {visibleCustomers.map(customer => (
            <li key={customer.id}>
              <Link to={`${customer.id}`} state={{ from: location }}>
                {customer.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default Customers;
