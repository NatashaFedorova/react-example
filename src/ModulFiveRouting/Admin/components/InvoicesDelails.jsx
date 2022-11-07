import { useParams } from 'react-router-dom';
import { getInvoiceById } from '../fakeAPI';
import { useState, useEffect } from 'react';

const InvoicesDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    getInvoiceById(id).then(setItem);
  }, [id]);

  if (!item) {
    return;
  }
  const { recipient, account, total, date } = item;

  return (
    <div>
      <ul style={{ listStyle: 'none' }}>
        <li>Recipient: {recipient}</li>
        <li>Account number: {account}</li>
        <li>Total due: {total}$</li>
        <li>Invoice data: {new Date(date.created).toLocaleDateString()}</li>
        <li>Due data: {new Date(date.due).toLocaleDateString()}</li>
      </ul>
    </div>
  );
};

export default InvoicesDetails;

// {
//       id: '185744',
//       recipient: 'Artemis Tau',
//       account: 82719051,
//       total: 17000,
//       date: {
//         created: '2022-09-28T10:57:00.000Z',
//         due: '2022-11-02T00:00:00.000Z',
//       },
//     },
