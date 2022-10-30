import { useContext } from 'react';
import ctx from '../../../context/authContext';

const App = () => {
  const { user, logIn, logOut } = useContext(ctx);

  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {!user && (
        <button type="button" onClick={logIn}>
          Вхід
        </button>
      )}
      {user && (
        <>
          <p>User</p>
          <button type="button" onClick={logOut}>
            Вихід
          </button>
        </>
      )}
    </div>
  );
};

export default App;
