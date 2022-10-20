import { Component } from 'react';
import PokemonForm from './PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './PokemonInfo';

class App extends Component {
  state = {
    pokemonName: '',
  };
  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };
  render() {
    const { pokemonName } = this.state;
    return (
      <div>
        <PokemonForm onChange={this.handleFormSubmit} />
        <PokemonInfo pokemonName={pokemonName} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;

// https://pokeapi.co/api/v2/pokemon/ditto

// ========================================================
// простий приклад HTTP-запиту
// class App extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//   };
//   componentDidMount() {
//     this.setState({ loading: true });

//     setTimeout(() => {
//       fetch('https://pokeapi.co/api/v2/pokemon/ditto')
//         .then(r => r.json())
//         .then(pokemon => this.setState({ pokemon }))
//         .finally(() => this.setState({ loading: false }));
//     }, 2000);
//   }

//   render() {
//     const { pokemon, loading } = this.state;
//     return (
//       <div>
//         {loading && <div>Завантаження...</div>}
//         {pokemon && <div>{pokemon.name}</div>}
//       </div>
//     );
//   }
// }
// =======================================================
