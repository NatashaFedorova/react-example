import axios from 'axios';
import qs from 'query-string';

const BASE_URL = 'https://newsapi.org/v2/';

const API_KEY = '1b6063555cd547c889bf5f23bdfaa2ad';

const fetchNews = params => {
  console.log(params);
  const { sortBy, searchIn, query } = params.q;

  return axios.get(
    `${BASE_URL}everything?q=${query}&sources=${searchIn}&sortBy=${sortBy}&apiKey=${API_KEY}`
  );
};

export default fetchNews;

// =====================================================
// query-string - це бібліотека, яка відповідає за перетворення  params, { skipNull: true },
// де params  це { q: 'nike' },  строку для запиту  https://newsapi.org/v2/everything?q=q=nike&apiKey=1b6063555cd547c889bf5f23bdfaa2ad

// якщо 1 параметр
//  const searchParans = qs.stringify(params, { skipNull: true });
// axios.get(`${BASE_URL}everything?q=${params}&apiKey=${API_KEY}`);
// =====================================================
