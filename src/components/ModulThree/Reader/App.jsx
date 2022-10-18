import ReaderBlock from './ReaderBlock/ReaderBlock';
import publication from '../../../data/publication.json';

const App = () => {
  return <ReaderBlock items={publication} />;
};

export default App;
