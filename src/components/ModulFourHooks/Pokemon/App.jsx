import { useState } from 'react';
import PokemonForm from './PokemonForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PokemonInfo from './PokemonInfo';

const App = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div>
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer autoClose={3000} />
    </div>
  );
};

export default App;
