import { Component } from 'react';
import MaterialEditorForm from './MaterialEditorForm';
import MaterialList from './MaterialList';
import * as API from './services/api';

class App extends Component {
  state = {
    materials: [],
    isLoading: false,
    error: false,
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true });
      const materials = await API.getMaterial();
      this.setState({ materials, isLoading: false });
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  addMaterial = async values => {
    try {
      const material = await API.addMaterial(values);
      this.setState(state => ({ materials: [...state.materials, material] }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(prevState => ({ materials: prevState.materials.filter(el => el.id !== id) }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
      this.setState(prevState => ({
        materials: prevState.materials.map(item => (item.id === fields.id ? updateMaterial : item)),
      }));
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  };

  render() {
    const { materials, isLoading, error } = this.state;
    return (
      <div>
        <MaterialEditorForm onSubmit={this.addMaterial} />
        {error && <p>Хм! Щось воно не працює :( спробуйте перезавантижити сторінку</p>}
        {isLoading ? (
          'Завантажуємо матеріали'
        ) : (
          <MaterialList
            items={materials}
            onDelete={this.deleteMaterial}
            onUpdate={this.updateMaterial}
          />
        )}
      </div>
    );
  }
}

export default App;
