import React from 'react';
import PropTypes from 'prop-types';
import './IconBtn.css';

const IconBtn = ({ children, onClick, ...allyProps }) => (
  <button type="button" className="IconBtn" onClick={onClick} {...allyProps}>
    {children}
  </button>
);

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};

IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};

export default IconBtn;
