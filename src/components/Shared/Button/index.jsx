import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, handleClick, type }) => (
  <button 
    className={styles.button}
    onClick={handleClick}
    type={ type }
  >
    { children }
  </button>);

Button.defaultProps = {
  handleClick: () => {},
  type: '',
  children: ''
}

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  handleClick: PropTypes.func,
  type: PropTypes.string
}; 

export default Button;