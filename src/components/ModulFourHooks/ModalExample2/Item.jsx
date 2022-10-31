import Modal from './Modal';
import { useState } from 'react';

const Item = ({ item }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li onClick={() => setIsModalOpen(s => !s)}>
      <p>{item.title}</p>
      {isModalOpen && <Modal about={item.about} onClick={() => setIsModalOpen(s => !s)} />}
    </li>
  );
};

export default Item;
