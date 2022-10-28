import { useState } from 'react';
import './ColorPicker.css';

export default function App({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = idx => {
    return `ColorPicker__option ${idx === activeOptionIdx && 'ColorPicker__option--active'}`;
  };
  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color picker</h2>
      <p>Color:{options[activeOptionIdx].label}</p>
      <div>
        {options.map(({ label, color }, idx) => (
          <button
            key={label}
            className={makeOptionClassName(idx)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(idx)}
          ></button>
        ))}
      </div>
    </div>
  );
}

// ===================================================
//   const { label } = options[activeOptionIdx];
//   <p>Color:{label}</p>
// АБО

// ======================================================
// export class ColorPicker extends PureComponent {
//   state = {
//     activeOptionIdx: 2,
//   };

//   setActiveIdx = idx => {
//     this.setState({ activeOptionIdx: idx });
//   };

//   render() {
//     const { activeOptionIdx } = this.state;
//     const { options } = this.props;

//     const { label } = options[activeOptionIdx];
//     return (
//       <div className="ColorPicker">
//         <h2 className="ColorPicker__title">Color picker</h2>
//         <p>Color: {label}</p>
//         <div>
//           {options.map(({ label, color }, idx) => (
//             <button
//               key={label}
//               className={classNames([
//                 'ColorPicker__option',
//                 { 'ColorPicker__option--active': idx === activeOptionIdx },
//               ])}
//               style={{ backgroundColor: color }}
//               onClick={() => this.setActiveIdx(idx)}
//             ></button>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }
