import { useState, useEffect } from 'react';

const App = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    setPage(1);
    setQuery(e.target.elements.query.value);
    setItems([]);
    e.target.reset();
  };

  const onLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  useEffect(() => {
    console.log('Fetch');
    console.log(page);
    console.log(query);
    setItems(prevState => [...prevState, ...[]]);
  }, [page, query]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="query" />
        <button type="submit">Search</button>
      </form>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default App;
