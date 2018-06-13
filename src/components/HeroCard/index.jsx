import React from "react";
import PropTypes from 'prop-types';
import { PersonAdd, DeleteForever, Info } from '@material-ui/icons';
import IconButton from '../Shared/IconButton';
import styles from './styles.css';

const HeroCard = ({ id, name, addHeroToSquad, deleteHero, showHeroInfo }) => (
  <div className={styles.heroCard} >
    <p className={styles.text}>{name}</p>
    <div className={styles.buttonsSet}>
    <IconButton onClick={addHeroToSquad} icon="Add" heroId={id} >
      <PersonAdd />
    </IconButton>
    <IconButton onClick={deleteHero} icon="Delete" heroId={id} >
      <DeleteForever />
    </IconButton>
    <IconButton onClick={showHeroInfo} icon="Info" heroId={id} >
      <Info />
    </IconButton>
    </div>
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
