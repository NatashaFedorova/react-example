const InvoicesDetails = ({ item }) => {
  const { account, recipient, total } = item;
  return (
    <div >
      <ul>
        <li>{account}</li>
        <li>{recipient}</li>
        <li>{total}</li>
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
