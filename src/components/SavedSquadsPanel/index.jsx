import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';
import styles from './styles.css';

const SavedSquadsPanel = () => {
  <Card className={classes.card} >
  <CardContent>
  <Title titleText='Squad Editor' />

    <List 
    heroes={heroes}
    addHeroToSquad={addHeroToSquad}
    deleteHero={deleteHero}
    showHeroInfo={showHeroInfo}
    />
  </CardContent>
  </Card>
};

export default withStyles(styles)(SavedSquadsPanel);