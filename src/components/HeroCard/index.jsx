import React from "react";
import PropTypes from 'prop-types';
import { PersonAdd, DeleteForever, Info, Delete } from '@material-ui/icons';
import IconButton from '../Shared/IconButton';
import styles from './styles.css';

const HeroCard = ({ id, name, addHeroToSquad, deleteHero, showHeroInfo, editor }) => (
  <div className={styles.heroCard} >
    <p className={styles.text}>{name}</p>
    <div className={styles.buttonsSet}>
    {!editor && <IconButton onClick={addHeroToSquad} icon="Add" id={id} >
      <PersonAdd />
    </IconButton>}
    <IconButton onClick={deleteHero} icon="Delete" id={id} >
    {editor ? <Delete /> : <DeleteForever />}
    </IconButton>
    <IconButton onClick={showHeroInfo} icon="Info" id={id} >
      <Info />
    </IconButton>
    </div>
  </div>
);

HeroCard.defaultProps = {
  addHeroToSquad: () => {},
  deleteHero: () => {},
  showHeroInfo: () => {},
  editor: false
}

HeroCard.propTypes = {
  name: PropTypes.string.isRequired,
  addHeroToSquad: PropTypes.func,
  deleteHero: PropTypes.func,
  showHeroInfo: PropTypes.func,
  id: PropTypes.number.isRequired,
  editor: PropTypes.bool,
}; 

export default HeroCard;
