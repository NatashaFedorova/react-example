import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout';
// import Customers from '../pages/Customers';
// import Dashboard from './Dashboard';
// import Feedback from './Feedback';
// import Reports from './Reports';
// import Sales from '../pages/Sales';
// import Analytics from './Analytics';
// import Invoices from './Invoices';
// import Deposits from './Deposits';
// import InvoicesDetails from './InvoicesDelails';
// import CustomersDetails from '../pages/CustomersDetails';

const Dashboard = lazy(() => import('./Dashboard'));
const Sales = lazy(() => import('../pages/Sales'));
const Feedback = lazy(() => import('./Feedback'));
const Customers = lazy(() => import('../pages/Customers'));
const Reports = lazy(() => import('./Reports'));
const Analytics = lazy(() => import('./Analytics'));
const Invoices = lazy(() => import('./Invoices'));
const Deposits = lazy(() => import('./Deposits'));
const InvoicesDetails = lazy(() => import('./InvoicesDelails'));
const CustomersDetails = lazy(() => import('../pages/CustomersDetails'));

// const LayoutHome = () => {
//   return <div style={{ padding: '30px' }}>Layout index page</div>;
// };

const SalesHome = () => {
  return <div style={{ padding: '30px' }}>Sales index page</div>;
};

const App = () => {
  return (
    <div style={{ width: '1200px', margin: '0 auto', border: '1px solid #000' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* можна використовувати початкову сторінку */}
          {/* <Route index element={<LayoutHome />} /> */}
          {/* можна при завантаденні одразу посилати на певну сторінку */}
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<Sales />}>
            <Route index element={<SalesHome />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":id" element={<InvoicesDetails />} />
            </Route>
            <Route path="deposits" element={<Deposits />} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="customers" element={<Customers />} />
          <Route path="customers/:customerId" element={<CustomersDetails />} />
        </Route>
      </Routes>
    </div>
  );
};
// InvoicesDetails;
export default App;
