import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

class PokemonForm extends Component {
  state = {
    pokemonName: '',
  };

  handleChangeName = e => {
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.pokemonName.trim() === '') {
      return toast.error('введіть имя покемона');
    }
    this.props.onChange(this.state.pokemonName);
    this.setState({ pokemonName: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handleChangeName}
        />
        <button type="submit">
          <ImSearch style={{ marginRight: 8 }} />
          Знайти
        </button>
      </form>
    );
  }
}

export default PokemonForm;
