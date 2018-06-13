import React from "react";
import PropTypes from 'prop-types';
import { DeleteForever } from '@material-ui/icons';
import IconButton from '../Shared/IconButton';
import styles from './styles.css';

const SquadCard = ({ id, heroes, stats, deleteSquad }) => (
  <div className={styles.squadCard} >
    <div className={styles.infoBlock}>
      <h4 className={styles.title}>Heroes</h4>
      <ul className={styles.namesList}>
        {heroes.map(hero => (
        <li key={hero.id} >{hero.name}</li>
        ))}
      </ul>
    </div>
    <div className={styles.infoBlock}>
      <h4 className={styles.title}>Stats</h4>
      <ul className={styles.statsList}>
        <li>Strength: {stats.str}</li>
        <li>Intelligence: {stats.int}</li>
        <li>Speed: {stats.spd}</li>
      </ul>
    </div>
    <div className={styles.buttonWrapper} >
    <IconButton onClick={deleteSquad} icon="Delete" id={id} >
      <DeleteForever />
    </IconButton>
    </div>
  </div>
);

SquadCard.defaultProps = {
  deleteSquad: () => {},
  heroes: []
}

SquadCard.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    strength: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
    speed: PropTypes.number.isRequired
  })),
  stats: PropTypes.shape({
    str: PropTypes.number.isRequired,
    int: PropTypes.number.isRequired,
    spd: PropTypes.number.isRequired,
  }).isRequired,
  deleteSquad: PropTypes.func,
  id: PropTypes.number.isRequired
}; 

export default SquadCard;
