import { Component } from 'react';

class App extends Component {
  state = {
    page: 1,
    query: '',
    items: [],
  };

  componentDidUpdate(_, prevState) {
    console.log('prevState.page', prevState.page);
    console.log('this.state.page', this.state.page);

    console.log('prevState.query', prevState.query);
    console.log('this.state.query', this.state.query);

    if (prevState.page !== this.state.page || prevState.query !== this.state.query) {
      console.log('Fetch');
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ page: 1, query: e.target.elements.query.value, items: [] });
    e.target.reset();
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="query" />
          <button type="submit">Search</button>
        </form>

        <button type="button" onClick={this.onLoadMore}>
          Load more
        </button>
      </div>
    );
  }
}

export default App;
