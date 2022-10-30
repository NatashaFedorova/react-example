import { useState, useMemo } from 'react';
import initialFriends from './initialFriends.json';

// в цьому прикладі показано, що робити, щоб при зміні стану count не перерендерувався  список друзів
// useMemo використовується лише на великих колекціях(ця колекція лише приклад)

const App = () => {
  const [count, setCount] = useState(0);
  const [friends] = useState(initialFriends);
  const [filter, setFilter] = useState('');

  const visibleFriendsWithUsMemo = useMemo(() => {
    console.log('Filter friends', Date.now());
    return friends.filter(friend => friend.toLowerCase().includes(filter));
  }, [friends, filter]);

  // const visibleFriends = friends.filter(friend => friend.toLowerCase().includes(filter));

  return (
    <div>
      <button type="button" onClick={() => setCount(s => s + 1)}>
        {count}
      </button>
      <input type="text" onChange={e => setFilter(e.target.value)} value={filter} />
      <ul>
        {visibleFriendsWithUsMemo.map((friend, idx) => (
          <li key={idx}>{friend}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
