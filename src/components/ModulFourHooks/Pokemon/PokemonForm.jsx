import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleChangeName = e => {
    setPokemonName(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (pokemonName.trim() === '') {
      return toast.error('введіть имя покемона');
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="pokemonName" value={pokemonName} onChange={handleChangeName} />
      <button type="submit">
        <ImSearch style={{ marginRight: 8 }} />
        Знайти
      </button>
    </form>
  );
};

export default PokemonForm;
