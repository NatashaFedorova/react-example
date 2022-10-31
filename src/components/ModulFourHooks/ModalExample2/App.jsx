import { useState } from 'react';
import List from './List';

const App = () => {
  const [items] = useState([
    {
      title: 'Title-1',
      about:
        ' Title-1 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab et eos praesentium! Aliquid consequatur aspernatur itaque eum impedit eveniet voluptate omnis possimus harum! Officiis aliquam quos ea pariatur! Ducimus?',
    },
    {
      title: 'Title-2',
      about:
        ' Title-2  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab et eos praesentium! Aliquid consequatur aspernatur itaque eum impedit eveniet voluptate omnis possimus harum! Officiis aliquam quos ea pariatur! Ducimus?',
    },
    {
      title: 'Title-3',
      about:
        ' Title-3 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam ab et eos praesentium! Aliquid consequatur aspernatur itaque eum impedit eveniet voluptate omnis possimus harum! Officiis aliquam quos ea pariatur! Ducimus?',
    },
  ]);
  return (
    <>
      <List items={items} />
    </>
  );
};

export default App;
