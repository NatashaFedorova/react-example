import { nanoid } from 'nanoid';
import NewsCard from './NewsCard';

const NewsList = ({ articles, isLoading, error }) => {
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <ul>
      {articles.map(({ title, description, url }) => (
        <NewsCard key={nanoid()} title={title} description={description} url={url}></NewsCard>
      ))}
    </ul>
  );
};

export default NewsList;
