import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { getBreeds, getDodImg } from './api.js';
import BreedSelect from './BreedSelect.jsx';
import Dog from './Dog/Dog.jsx';
import DogSkeleton from './Dog/DogSkeleton.jsx';

class App extends Component {
  state = {
    breeds: [],
    dog: null,
    selectedBreed: null,
    isLoadingBreeds: false,
    isLoadingDog: false,
    error: null,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.selectedBreed !== this.state.selectedBreed) {
      this.fetchDog();
    }

    if (prevState.error !== this.state.error) {
      toast.error(this.state.error);
    }
  }

  async componentDidMount() {
    try {
      this.setState({ isLoadingBreeds: true });
      const breeds = await getBreeds();
      this.setState({ breeds });
    } catch {
      this.setState({ error: 'Oops! Something went wrong :( please, try reloading the page' });
    } finally {
      this.setState({ isLoadingBreeds: false });
    }
  }

  handleChangeBreed = breed => {
    this.setState({ selectedBreed: breed });
  };

  fetchDog = async () => {
    try {
      this.setState({ isLoadingDog: true });
      const dog = await getDodImg(this.state.selectedBreed);
      this.setState({ dog, isLoadingDog: false });
    } catch {
      this.setState({ error: 'Failed to load dog :(' });
    } finally {
      this.setState({ isLoadingDog: false });
    }
  };

  render() {
    const { dog, breeds, isLoadingBreeds, isLoadingDog, error } = this.state;

    return (
      <>
        <BreedSelect
          breeds={breeds}
          onSelect={this.handleChangeBreed}
          isLoading={isLoadingBreeds}
        />
        {isLoadingDog && <DogSkeleton />}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {dog && !isLoadingDog && (
          <div>
            <hr />
            <Dog dog={dog} />
            <button type="button" onClick={this.fetchDog}>
              Показати інші фото
            </button>
          </div>
        )}
        <Toaster position="bottom-right" />
      </>
    );
  }
}
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
