import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ children, onClick, type }) => {
  const handleClick = () => onClick();
  return (<button className={styles.button} onClick={handleClick} type={ type }>{ children }</button>)
};

Button.defaultProps = {
  onClick: () => {},
  type: '',
  children: ''
}

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClick: PropTypes.func,
  type: PropTypes.string
}; 

export default Button;