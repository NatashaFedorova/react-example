import { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.thedogapi.com/v1';
axios.defaults.headers['x-api-key'] = process.env.REACT_APP_API_KEY;

class App extends Component {
  state = {
    breeds: [],
    dog: null,
    selectedBreed: null,
  };

  async componentDidUpdate(_, prevState) {
    if (prevState.selectedBreed !== this.state.selectedBreed) {
      this.fetchDog();
    }
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/breeds');
      this.setState({ breeds: response.data });
    } catch (error) {
      console.log(error);
    }
  }

  buildOptions = () => {
    return this.state.breeds.map(breed => ({ value: breed.id, label: breed.name }));
  };

  handleChangeBreed = async option => {
    this.setState({ selectedBreed: option.value });
  };

  fetchDog = async () => {
    try {
      const response = await axios.get('/images/search', {
        params: { breed_id: this.state.selectedBreed },
      });
      this.setState({ dog: response.data[0] });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { dog } = this.state;
    const options = this.buildOptions();
    return (
      <>
        <Select options={options} onChange={this.handleChangeBreed} />

        {dog && (
          <div>
            <img src={dog.url} alt="dog" width="480" />
            <hr />
            <button type="button" onClick={this.fetchDog}>
              Показати інші фото
            </button>
          </div>
        )}
      </>
    );
  }
}
export default App;
