import { PureComponent } from 'react';
import './Tabs.css';

export default class Tabs extends PureComponent {
  state = {
    activeTabIdx: 0,
  };

  //   shouldComponentUpdate(nextProps, nextState) {
  //     return nextState.activeTabIdx !== this.state.activeTabIdx;
  //   }

  setActiveTabIdx = idx => {
    this.setState({ activeTabIdx: idx });
  };

  render() {
    console.log('render');
    const { activeTabIdx } = this.state;
    const { items } = this.props;
    const activeTab = items[activeTabIdx];

    return (
      <div className="box">
        <div>
          {items.map((item, idx) => (
            <button
              key={item.id}
              className="btn"
              type="button"
              onClick={() => this.setActiveTabIdx(idx)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div>
          <h2>{activeTab.label}</h2>
          <p>{activeTab.content}</p>
        </div>
      </div>
    );
  }
}

// =====================================================================
//щоб не допустити зайвий ререндер
// import { Component } from 'react';
//export default class Tabs extends Component {
// ......
//   shouldComponentUpdate(nextProps, nextState) {
//     return nextState.activeTabIdx !== this.state.activeTabIdx;
//   }
// ......
// ----------------------------------------
// або наслудємо від PureComponent (чистого компонента),
// в якому shouldComponentUpdate під капотом
// import { PureComponent } from 'react';
// export default class Tabs extends PureComponent { ....
// =====================================================================
