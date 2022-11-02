// папка з цим та іншими хуками має бути на рівні src
import { useState, useEffect } from 'react';

const useFetch = (key, apiRequest) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!key) return;
    setIsLoading(true);

    apiRequest()
      .then(data => {
        setData(data);
        setError(null);
      })
      .catch(({ message }) => setError(message))
      .finally(() => setIsLoading(false));
  }, [key]);

  return {
    data,
    isLoading,
    error,
  };
};

export default useFetch;
