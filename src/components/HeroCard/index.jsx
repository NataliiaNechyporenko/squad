import React from "react";
import PropTypes from 'prop-types';
import styles from './styles.css';

const HeroCard = ({ name }) => (
  <div className={styles.itemWrapper} >
    <p className={styles.text}>{name}</p>
    <button>Add</button>
    <button>Delete</button>
    <button>Info</button>
  </div>
);

HeroCard.propTypes = {
  name: PropTypes.string.isRequired
}; 

export default HeroCard;
