import { StickerList } from '../StickerList/StickerList';
import stickers from '../../../../../stickers.json';
import { Component } from 'react';

const SelectedSticker = ({ img }) => {
  return <div>Selected sticker img={img}</div>;
};

export class StickersBlockThird extends Component {
  state = {
    selectedSticker: null,
  };

  handleSelect = stickerImg => {
    this.setState({ selectedSticker: stickerImg });
  };

  render() {
    return (
      <div>
        <h1>Example 3</h1>
        <SelectedSticker img={this.state.selectedSticker} />
        <StickerList
          stickers={stickers}
          onSelect={this.handleSelect}
          selectedSticker={this.state.selectedSticker}
        />
      </div>
    );
  }
}
