import React from "react";
import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './styles.css';

const HeroCard = ({ id, name, addHeroToSquad, deleteHero, showHeroInfo }) => (
  <div className={styles.heroCard} >
    <p className={styles.text}>{name}</p>
    <Button onClick={addHeroToSquad} icon="Add" heroId={id} />
    <Button onClick={deleteHero} icon="Delete" heroId={id} />
    <Button onClick={showHeroInfo} icon="Info" heroId={id} />
  </div>
);

HeroCard.defaultProps = {
  addHeroToSquad: () => {},
  deleteHero: () => {},
  showHeroInfo: () => {}
}

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  addHeroToSquad: PropTypes.func,
  deleteHero: PropTypes.func,
  showHeroInfo: PropTypes.func,
  id: PropTypes.number.isRequired
}; 

export default HeroCard;
