import { Routes, Route } from 'react-router-dom';
import Customers from './Customers';
import Dashboard from './Dashboard';
import Feedback from './Feedback';
import Layout from './Layout';
import Reports from './Reports';
import Sales from '../pages/Sales';
import Analytics from './Analytics';
import Invoices from './Invoices';
import Deposits from './Deposits';
import InvoicesDetails from './InvoicesDelails';

const App = () => {
  return (
    <div style={{ width: '1200px', margin: '0 auto', border: '1px solid #000' }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<Sales />}>
            <Route path="analytics" element={<Analytics />} />
            <Route path="invoices" element={<Invoices />}>
              <Route path=":id" element={<InvoicesDetails />} />
            </Route>
            <Route path="deposits" element={<Deposits />} />
          </Route>
          <Route path="reports" element={<Reports />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="customers" element={<Customers />} />
        </Route>
      </Routes>
    </div>
  );
};
// InvoicesDetails;
export default App;
