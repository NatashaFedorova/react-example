import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsSearchForm from './NewsSearchForm';

axios.defaults.headers.common['Authorization'] = 'Bearer 1b6063555cd547c889bf5f23bdfaa2ad';

// APIfetchArticles - цю функцію можна об'явити  в Арр, тоді деякі парамерти передавати не потрібно буде
const APIfetchArticles = ({ searchQuery = '', currentPage = 1, pageSize = 5 } = {}) => {
  return axios
    .get(
      `https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=${pageSize}&page=${currentPage}`
    )
    .then(response => response.data.articles);
};

const App = () => {
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onChangeQuery = newQuery => {
    setQuery(newQuery);
    setCurrentPage(1);
    setArticles([]);
  };

  const shouldRenderLoadMoreBtn = articles.length > 0 && !isLoading;

  useEffect(() => {
    if (query === '') {
      return;
    }
    setIsLoading(true);
    APIfetchArticles({ searchQuery: query, currentPage })
      .then(responseArticles => {
        setArticles(prevArticles => [...prevArticles, ...responseArticles]);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      setCurrentPage(prevCurrentPage => prevCurrentPage + 1);
    };
  }, [query, currentPage]);

  return (
    <>
      <NewsSearchForm onSubmit={onChangeQuery} />
      {error && <p>Ой! щось пішло не так</p>}
      <ul>
        {articles.map(({ title, url }) => (
          <li key={title}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </ul>
      {shouldRenderLoadMoreBtn && (
        <button type="buttun" onClick={() => null}>
          Завантажити ще
        </button>
      )}
      {isLoading && <p>Завантажуємо...</p>}
    </>
  );
};

export default App;
