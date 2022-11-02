import { useState, useEffect, useCallback } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getBreeds, getDodImg } from './api.js';
import BreedSelect from './BreedSelect.jsx';
import Dog from './Dog/Dog.jsx';
import DogSkeleton from './Dog/DogSkeleton.jsx';

const App = () => {
  const [breeds, setBreeds] = useState([]);
  const [dog, setDog] = useState(null);
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [isLoadingBreeds, setIsLoadingBreeds] = useState(false);
  const [isLoadingDog, setIsLoadingDog] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = useCallback(async () => {
    try {
      setIsLoadingDog(true);
      const dog = await getDodImg(selectedBreed);
      setDog(dog);
    } catch {
      setError('Failed to load dog :(');
    } finally {
      setIsLoadingDog(false);
    }
  }, [selectedBreed]);

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        setIsLoadingBreeds(true);
        const breeds = await getBreeds();
        setBreeds(breeds);
      } catch {
        setError('Oops! Something went wrong :( please, try reloading the page');
      } finally {
        setIsLoadingBreeds(false);
      }
    };

    fetchBreeds();
  }, []);

  useEffect(() => {
    if (selectedBreed !== null) {
      fetchDog();
    }
  }, [fetchDog, selectedBreed]);

  useEffect(() => {
    if (error !== null) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      <BreedSelect breeds={breeds} onSelect={setSelectedBreed} isLoading={isLoadingBreeds} />
      {isLoadingDog && <DogSkeleton />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {dog && !isLoadingDog && (
        <div>
          <hr />
          <Dog dog={dog} />
          <button type="button" onClick={fetchDog}>
            Показати інші фото
          </button>
        </div>
      )}
      <Toaster position="bottom-right" />
    </>
  );
};

export default App;

// ===============================================
//  приклад лоудера
// import SyncLoader from 'react-spinners/SyncLoader';
/* <SyncLoader
color="#719890"
cssOverride={{
  display: 'block',
  margin: '0 auto',
}}
loading={isLoadingDog}
margin={4}
size={15}
speedMultiplier={1}
/> */
// ==============================================================

// ==============================================================
// варіанти відображення помилки
// toast.error('Failed to load breeds  :(');
// this.setState({ error: 'Oops! Something went wrong :( please, try reloading the page' });
