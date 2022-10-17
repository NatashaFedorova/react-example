import React from 'react';
import { nanoid } from 'nanoid';
import './Form.css';

class Form extends React.Component {
  state = {
    nameUser: '',
    email: '',
    experience: 'junior',
    license: false,
  };

  nameId = nanoid();
  emailId = nanoid();

  handleChange = e => {
    // console.log(e.currentTarget);
    // console.log(e.currentTarget.name);
    // console.log(e.currentTarget.value);
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleLicenseChange = e => {
    console.log(e.currentTarget.checked);
    this.setState({ license: e.currentTarget.checked });
  };

  reset = () => {
    this.setState({ nameUser: '', email: '' });
  };

  render() {
    const { nameUser, email } = this.state;
    return (
      <form onSubmit={this.handleSubmitForm}>
        <label id={this.nameId}>
          Name{' '}
          <input
            id={this.nameId}
            name="nameUser"
            type="text"
            value={nameUser}
            onChange={this.handleChange}
          />
        </label>

        <label id={this.emailId}>Email</label>
        <input
          id={this.emailId}
          name="email"
          type="email"
          value={email}
          onChange={this.handleChange}
        />
        <div className="BlockLevel">
          <span>Ваш рівень:</span>
          <label>
            Junior
            <input
              type="radio"
              name="experience"
              value="junior"
              onChange={this.handleChange}
              checked={this.state.experience === 'junior'}
            />
          </label>
          <label>
            Middle
            <input
              type="radio"
              name="experience"
              value="middle"
              onChange={this.handleChange}
              checked={this.state.experience === 'middle'}
            />
          </label>
          <label>
            Senior
            <input
              type="radio"
              name="experience"
              value="senior"
              onChange={this.handleChange}
              checked={this.state.experience === 'senior'}
            />
          </label>
        </div>

        <label>
          <input
            type="checkbox"
            name="license"
            onChange={this.handleLicenseChange}
            checked={this.state.license}
          />
          Погоджуюсь зі всіма умовами
        </label>

        <button type="submit" className="BtnSubmit" disabled={!this.state.license}>
          Відправити
        </button>
      </form>
    );
  }
}

export default Form;
