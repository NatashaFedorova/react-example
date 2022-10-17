import { Component } from 'react';
import { Sticker } from '../Sticker/Sticker';

export class StickerList extends Component {
  state = {
    selectedSticker: null,
  };

  handleSelect = stickerImg => {
    this.setState({ selectedSticker: stickerImg });
  };

  render() {
    const { stickers } = this.props;
    return (
      <ul style={{ display: 'flex', gap: 8, padding: 8, listStyle: 'none' }}>
        {stickers.map((sticker, idx) => {
          return (
            <li key={idx}>
              <Sticker
                sticker={sticker}
                selected={this.state.selectedSticker === sticker.img}
                onSelect={this.handleSelect}
              />
            </li>
          );
        })}
      </ul>
    );
  }
}

// ===========================================================================
// цей вираз повертає true/false, як відпоавідь не запит
//  чи відповідає стан, в якому ми тримаємо значення img значенню img в даному sticker
// selected={this.state.selectedSticker === sticker.img}
// ===========================================================================
