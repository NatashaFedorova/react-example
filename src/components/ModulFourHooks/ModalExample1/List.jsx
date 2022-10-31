import ItemList from './ItemList';

const List = ({ items, onClick }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <ItemList key={idx} onClick={onClick} item={item} />
      ))}
    </ul>
  );
};

export default List;
