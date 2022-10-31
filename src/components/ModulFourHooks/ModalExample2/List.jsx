import Item from './Item';

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, idx) => (
        <Item key={idx} item={item} />
      ))}
    </ul>
  );
};

export default List;
