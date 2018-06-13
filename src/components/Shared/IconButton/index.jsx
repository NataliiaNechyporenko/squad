import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const IconButton = ({ children, onClick, id }) => {
  const handleClick = () => onClick(id);
  return (<button className={styles.iconButton} onClick={handleClick} >{ children }</button>)
};

IconButton.defaultProps = {
  onClick: () => {},
}

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.number.isRequired
}; 

export default IconButton;
