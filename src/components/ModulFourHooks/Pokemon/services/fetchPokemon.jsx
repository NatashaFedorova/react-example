function fetchPokemon(pokemonNextName) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNextName}`).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Покемона з ${pokemonNextName} нет`));
  });
}

export default fetchPokemon;

// ========================================
// якщо таких запитів буде більше одного
// 1.-------------------------------------
// function fetchPokemon(pokemonNextName)...
// function fetchFilms(film)...
// const api = {
//   fetchPokemon,
//   fetchFilms,
// };
// export default api;
// 2. -------------------------------------
// в файлі, де викликаються ці функції
// import api from './services/fetchPokemon';
// ...
// api.fetchPokemon(pokemonNextName).then().catch
// api.fetchFilms(film).then().catch
// =============================================
