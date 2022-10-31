const ItemList = ({ item, onClick }) => {
  return <li onClick={() => onClick(item.about)}>{item.title}</li>;
};

export default ItemList;
