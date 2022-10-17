import React, { Component } from 'react';
import classNames from 'classnames';
// import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import './ColorPicker.css';

export class ColorPicker extends Component {
  state = {
    activeOptionIdx: 2,
  };

  setActiveIdx = idx => {
    this.setState({ activeOptionIdx: idx });
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;

    const { label } = options[activeOptionIdx];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color picker</h2>
        <p>Color: {label}</p>
        <div>
          {options.map(({ label, color }, idx) => (
            <button
              key={label}
              className={classNames([
                'ColorPicker__option',
                { 'ColorPicker__option--active': idx === activeOptionIdx },
              ])}
              style={{ backgroundColor: color }}
              onClick={() => this.setActiveIdx(idx)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

// =================================================================
// приклад як додати стилі за умовою
// style={{
//  backgroundColor: color,
//  border: idx === this.state.activeOptionIdx ? '4px solid black' : 'none',
// }}
// =================================================================

// ================================================================
// без деструктуризації
// const { label } = this.props.options[this.state.activeOptionIdx];
// -------------------
// з деструктуризацією код чистіший
// const { activeOptionIdx } = this.state;
// const { options } = this.props;
// const { label } = options[activeOptionIdx];
// =================================================================

// =================================================================
// для ванільного сss, scss, css-module
// приклад додавання динамічного класу (складніший)
// makeOptionClassName = idx => {
//   const activeOptionStyle = ['ColorPicker__option'];
//   if (idx === this.state.activeOptionIdx) {
//     activeOptionStyle.push('ColorPicker__option--active');
//   }
//   return activeOptionStyle.join(' ');
// };
// ------------------------------------------------
//  приклад простіший
//  - npm i classnames (додати пакетик)
//  - import classNames from 'classnames'; (додати до потрійбного файлу)
// makeOptionClassName = idx => {
//   return classNames([
//     'ColorPicker__option',
//     { 'ColorPicker__option--active': idx === this.state.activeOptionIdx },
//   ]);
// };
// ------------------------------------------------
// приклад простіший без окремої функції
// <button
//   key={label}
//   className={classNames([
//     'ColorPicker__option',
//     { 'ColorPicker__option--active': idx === activeOptionIdx },
//   ])}
//   style={{ backgroundColor: color }}
//   onClick={() => this.setActiveIdx(idx)}
// ></button>;
