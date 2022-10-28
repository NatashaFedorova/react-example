export default function App() {
  return <p>Counter</p>;
}

// ======================================================
// class Counter extends React.Component {
//   static defaultProps = {
//     initualValue: 0,
//   };

//   state = {
//     value: this.props.initualValue,
//   };

//   handleIncrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value + 1 };
//     });
//   };

//   handleDecrement = () => {
//     this.setState(prevState => {
//       return { value: prevState.value - 1 };
//     });
//   };

//   render() {
//     const { value } = this.state;
//     return (
//       <div>
//         <span>{value}</span>
//         <Control onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} />
//       </div>
//     );
//   }
// }
