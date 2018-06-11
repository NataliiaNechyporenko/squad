import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Search from '../Search';
import Title from '../Title';
import List from '../List';
import styles from './styles.css';

// const styles = {
//   card: {
//     minWidth: 600
//   },
// };

const SquadEditorPanel = ({ searchValue, searchByName, heroes, addHeroToSquad, deleteHero, showHeroInfo, classes }) => (
  <Card className={classes.card} >
  <CardContent>
    <Title titleText='Heroes' />
    <Search placeholder="Search by name" value={searchValue} onChange={searchByName} />
    <List 
    heroes={heroes}
    addHeroToSquad={addHeroToSquad}
    deleteHero={deleteHero}
    showHeroInfo={showHeroInfo}
    />
  </CardContent>
  </Card>
);

SquadEditorPanel.defaultProps = {
  searchValue: '',
  addHeroToSquad: () => {},
  deleteHero: () => {},
  showHeroInfo: () => {}
};

SquadEditorPanel.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  searchValue: PropTypes.string,
  searchByName: PropTypes.func.isRequired,
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      strength: PropTypes.number.isRequired,
      intelligence: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired
    }).isRequired,
  ).isRequired,
  addHeroToSquad: PropTypes.func,
  deleteHero: PropTypes.func,
  showHeroInfo: PropTypes.func
};

export default withStyles(styles)(SquadEditorPanel);
