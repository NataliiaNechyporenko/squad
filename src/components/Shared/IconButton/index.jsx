import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const IconButton = ({ children, onClick, heroId }) => {
  const handleClick = () => onClick(heroId);
  return (<button className={styles.iconButton} onClick={handleClick} >{ children }</button>)
};

IconButton.defaultProps = {
  onClick: () => {},
}

IconButton.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func,
  heroId: PropTypes.number.isRequired
}; 

export default IconButton;
