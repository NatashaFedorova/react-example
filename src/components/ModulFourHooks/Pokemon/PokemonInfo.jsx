import { useState, useEffect } from 'react';
import PokemonDataView from './PokemonDataView';
import PokermonErrorView from './PokemonErrorView';
import PokemonPendingView from './PokemonPendingView';
import fetchPokemon from './services/fetchPokemon';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      console.log('return');
      return;
    }
    console.log('go');
    setStatus(Status.PENDING);

    setTimeout(() => {
      fetchPokemon(pokemonName)
        .then(pokemon => {
          setPokemon(pokemon);
          setStatus(Status.RESOLVED);
          console.log(pokemon);
        })
        .catch(error => {
          setError(error);
          setStatus(Status.REJECTED);
        });
    }, 2000);
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <p>Введіть імя покемона</p>;
  }
  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }

  if (status === Status.REJECTED) {
    return <PokermonErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
};

export default PokemonInfo;

// ========================================================
// без використання state-machine
// class PokemonInfo extends Component {
//   state = {
//     pokemon: null,
//     loading: false,
//     error: null,
//   };

//   componentDidUpdate(prevProps, prevSatet) {
//     const prevName = prevProps.pokemonName;
//     const nextName = this.props.pokemonName;

//     if (prevName !== this.props.pokemonName) {
//       this.setState({ loading: true, pokemon: null, error: null });
//       setTimeout(() => {
//         fetch(`https://pokeapi.co/api/v2/pokemon/${nextName}`)
//           .then(response => {
//             if (response.ok) {
//               return response.json();
//             }

//             return Promise.reject(new Error(`Покемона з ${nextName} нет`));
//           })
//           .then(pokemon => this.setState({ pokemon }))
//           .catch(error => this.setState({ error }))
//           .finally(() => this.setState({ loading: false }));
//       }, 1000);
//     }
//   }

//   render() {
//     const { pokemon, loading, error } = this.state;
//     const { pokemonName } = this.props;
//     return (
//       <div>
//         {error && <p>{error.message}</p>}
//         {!pokemonName && <p>Введіть імя покемона</p>}
//         {loading && <p>Завантаження... </p>}
//         {pokemon && (
//           <div>
//             <p>{pokemonName}</p>
//             <img
//               src={pokemon.sprites.other['official-artwork'].front_default}
//               alt="pokemon"
//               width={180}
//             />
//           </div>
//         )}
//       </div>
//     );
//   }
// }
// ========================================================================
