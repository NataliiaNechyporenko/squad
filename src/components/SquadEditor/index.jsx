import React from "react";
import PropTypes from 'prop-types';
import SaveIcon from '@material-ui/icons/Save';
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import HeroesList from '../HeroesList';
import Button from '../Shared/Button'
import styles from './styles.css';

const SquadEditor = ({ heroes, saveSquad, resetEditor, currentSquadStat, deleteHeroFromSquad, showHeroInfo }) => (
  <div className={styles.editor}>
    <div className={styles.buttonsSet}>
      <Button handleClick={saveSquad} ><SaveIcon />  Save Squad</ Button>
      <Button handleClick={resetEditor} ><DeleteSweepIcon /> Reset Editor</ Button>
      {/* <button onClick={saveSquad} ><SaveIcon />  Save Squad</button>
      <button onClick={resetEditor} ><DeleteSweepIcon /> Reset Editor</button> */}
    </div>
    { heroes.length !== 0 &&
    <ul>
        <li>Strength: {currentSquadStat.str}</li>
        <li>Intelligence: {currentSquadStat.int}</li>
        <li>Speed: {currentSquadStat.spd}</li>
    </ul>
    }
    <HeroesList heroes={heroes} editor deleteHero={deleteHeroFromSquad} showHeroInfo={showHeroInfo} />
  </div>
);

SquadEditor.defaultProps = {
  heroes: [],
  saveSquad: () => {},
  resetEditor: () => {},
  deleteHeroFromSquad: () => {},
  showHeroInfo: () => {}
};

SquadEditor.propTypes = {
  heroes: PropTypes.arrayOf(PropTypes.shape()),
  saveSquad: PropTypes.func,
  resetEditor: PropTypes.func,
  currentSquadStat: PropTypes.shape({
    str: PropTypes.number.isRequired,
    int: PropTypes.number.isRequired,
    spd: PropTypes.number.isRequired
  }).isRequired,
  deleteHeroFromSquad: PropTypes.func,
  showHeroInfo: PropTypes.func
};

export default SquadEditor;