import Select from './Select';
import NewsList from './NewsList';
import fetchNews from './newsApi';
import { useState } from 'react';
// import { useCallback } from 'react';
import useFetch from './hooks/useFetch';
import { useDebounce } from 'use-debounce';

const sortByOptions = [
  {
    label: 'relevancy',
    value: 'relevancy',
  },
  {
    label: 'popularity',
    value: 'popularity',
  },
  {
    label: 'publishedAt',
    value: 'publishedAt',
  },
];

const searchInOptions = [
  {
    label: 'title',
    value: 'title',
  },
  {
    label: 'description',
    value: 'description',
  },
  {
    label: 'content',
    value: 'content',
  },
];

const News = () => {
  const [filters, setFilters] = useState({
    query: '',
    sortBy: '',
    searchIn: '',
  });
  const [debounceFilters] = useDebounce(filters, 300);
  const {
    data: news,
    isLoading,
    error,
  } = useFetch(debounceFilters, () => fetchNews({ q: debounceFilters }));

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFilters(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>Filters</h2>
      <form>
        <input
          type="text"
          label="Search"
          name="query"
          value={filters.query}
          onChange={handleChange}
        />
        <div style={{ display: 'flex', gap: '30px' }}>
          <Select
            name="sortBy"
            value={filters.sortBy}
            options={sortByOptions}
            label="Sort by"
            onChange={handleChange}
          />
          <Select
            name="searchIn"
            value={filters.searchIn}
            options={searchInOptions}
            label="Search in"
            onChange={handleChange}
          />
        </div>
      </form>

      {news && <NewsList articles={news.data.articles} isLoading={isLoading} error={error} />}
    </div>
  );
};

export default News;

// ========================================================
// приклад 1
// useEffect(() => {
//   setIsLoading(true);

//   fetchNews({ q: 'nike' })
//     .then(({ data }) => {
//       setError(null);
//       setNews(data.articles);
//     })
//     .catch(error => setError(error.message))
//     .finally(() => isLoading(false));
// }, []);
// ====================================================

// =====================================================
// видалені частини, оскільки використовували кастомний хук
// const [news, setNews] = useState([]);
// const [isLoading, setIsLoading] = useState(false);
// const [error, setError] = useState(null);
// -----------------------
// const handleNewsRequest = useCallback(async () => {
//   setIsLoading(true);
//   try {
//     const { data } = await fetchNews({ q: query });
//     setError(null);
//     setNews(data.articles);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setIsLoading(false);
//   }
// }, [query]);

// useEffect(() => {
//   if (!query) {
//     setNews([]);
//     return;
//   }
//   handleNewsRequest();
// }, [query, handleNewsRequest]);
// ==============================================
