import { Component } from 'react';

export class Sticker extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => this.setState(prevState => ({ isOpen: !prevState.isOpen }));

  render() {
    const { isOpen } = this.state;
    const {
      sticker: { label, img },
    } = this.props;
    return (
      <div onClick={this.toggle} style={{ border: '1px solid black', padding: 8, borderRadius: 8 }}>
        <img src={img} alt={label} width={120} />
        {isOpen && <p style={{ marginBottom: 0 }}>{label}</p>}
      </div>
    );
  }
}
