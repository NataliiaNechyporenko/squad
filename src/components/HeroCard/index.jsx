import React from "react";
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './styles.css';

const HeroCard = ({ id, name, addHeroToSquad }) => (
  <div className={styles.itemWrapper} >
    <p className={styles.text}>{name}</p>
    <Button onClick={addHeroToSquad} icon="Add" heroId={id} />
  </div>
);

HeroCard.defaultProps = {
  addHeroToSquad: () => {},
}

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  addHeroToSquad: PropTypes.func,
  id: PropTypes.number.isRequired
}; 

export default HeroCard;
