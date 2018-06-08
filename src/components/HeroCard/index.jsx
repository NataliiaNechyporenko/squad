import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PersonAdd from '@material-ui/icons/PersonAdd';
import DeleteForever from '@material-ui/icons/DeleteForever';
import InfoIcon from '@material-ui/icons/Info';
import styles from './styles.css';

const HeroCard = ({ id, name, addHeroToSquad, deleteHero, showHeroInfo, classes }) => {
  const handleClickAdd = () => addHeroToSquad(id);
  const handleClickDelete = () => deleteHero(id);
  const handleClickInfo = () => showHeroInfo(id);
  
  return (
    <Card className={classes.card} >
      <CardContent>
        <Typography variant="body2" gutterBottom>{name}</Typography>
        <IconButton className={classes.button} aria-label="Add Hero to Squad" onClick={handleClickAdd} >
          <PersonAdd />
        </IconButton>
        <IconButton className={classes.button} aria-label="Delete Hero Forever" onClick={handleClickDelete}>
          <DeleteForever />
        </IconButton>
        <IconButton className={classes.button} aria-label="See Hero Info" onClick={handleClickInfo}>
          <InfoIcon />
        </IconButton>
      </CardContent>
  </Card>
  );
};

HeroCard.defaultProps = {
  addHeroToSquad: () => {},
  deleteHero: () => {},
  showHeroInfo: () => {}
}

HeroCard.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  addHeroToSquad: PropTypes.func,
  deleteHero: PropTypes.func,
  showHeroInfo: PropTypes.func,
  id: PropTypes.number.isRequired
}; 

export default withStyles(styles)(HeroCard);

