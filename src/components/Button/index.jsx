import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const Button = ({ icon, onClick, heroId }) => {
  const handleClick = () => onClick(heroId);
  return (<button className={styles.iconButton} onClick={handleClick} >{icon}</button>)
};

Button.defaultProps = {
  onClick: () => {},
}

Button.propTypes = {
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  heroId: PropTypes.number.isRequired
}; 

export default Button;
