import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

class ReaderBlock extends Component {
  state = {
    publicationIdx: 0,
  };

  changeIdx = value => {
    this.setState(prevState => ({ publicationIdx: prevState.publicationIdx + value }));
  };

  componentDidMount() {
    const saveState = localStorage.getItem(LS_KEY);
    if (saveState) {
      this.setState({ publicationIdx: Number(saveState) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.publicationIdx !== this.state.publicationIdx) {
      localStorage.setItem(LS_KEY, this.state.publicationIdx);
    }
  }

  render() {
    const { publicationIdx } = this.state;
    const { items } = this.props;
    const currentItem = items[publicationIdx];
    return (
      <div>
        <Controls
          currentIdx={publicationIdx + 1}
          totalItems={items.length}
          onChange={this.changeIdx}
        />
        <Progress currentItem={publicationIdx + 1} totalItems={items.length} />
        <Publication title={currentItem.title} text={currentItem.text} />
      </div>
    );
  }
}

export default ReaderBlock;

// =================================================
// замість цих двох методів
// onPrev = () => {
//   this.setState(prevState => ({ publicationIdx: prevState.publicationIdx - 1 }));
// };
// onNext = () => {
//   this.setState(prevState => ({ publicationIdx: prevState.publicationIdx + 1 }));
// };
//   <button type="button" onClick={this.onPrev}>
//   Назад
// </button>
// <button type="button" onClick={this.onNext}>
//   Вперед
// </button>
//
// один метод (універсальний)---------------
// changeIdx = value => {
//   this.setState(prevState => ({ publicationIdx: prevState.publicationIdx + value }));
// };
// <button type="button" onClick={() => this.changeIdx(-1)}>
//   Назад
// </button>
// <button type="button" onClick={() => this.changeIdx(1)}>
//   Вперед
// </button>
