import React from 'react';

export class Dropdown extends React.Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div>
        <button className="button-show" type="button" onClick={this.toggle}>
          {visible ? 'сховати' : 'показати'}
        </button>

        {visible && <div className="dropdown-window">Випадаюче меню</div>}
      </div>
    );
  }
}

// ==============================================================
// перший варіан перемикача==============
// export class Dropdown extends React.Component {
//   state = {
//     visible: false,
//   };

//   show = () => {
//     this.setState({ visible: true });
//   };

//   hide = () => {
//     this.setState({ visible: false });
//   };

//   render() {
//     return (
//       <div>
//         <button className="button-show" type="button" onClick={this.show}>
//           Показати
//         </button>
//         <button className="button-show" type="button" onClick={this.hide}>
//           Сховати
//         </button>
//         {this.state.visible && <div className="dropdown-window">Випадаюче меню</div>}
//       </div>
//     );
//   }
// }
// другий варіан перемикача ============
// export class Dropdown extends React.Component {
//   state = {
//     visible: false,
//   };

//   toggle = () => {
//     this.setState(prevState => ({
//       visible: !prevState.visible,
//     }));
//   };

//   render() {
//     return (
//       <div>
//         <button className="button-show" type="button" onClick={this.toggle}>
//           {this.state.visible ? 'сховати' : 'показати'}
//         </button>

//         {this.state.visible && <div className="dropdown-window">Випадаюче меню</div>}
//       </div>
//     );
//   }
// }
