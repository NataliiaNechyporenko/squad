import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import styles from './styles.css';

class CreateHeroPanel extends Component {
  state = {
    name: '',
    strength: 0,
    intelligence: 0,
    speed: 0
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render () {
    const { classes } = this.props;
    return (
    <form className={classes.container} autoComplete="off">
      <TextField
        id="name"
        label="Hero name"
        className={classes.textField}
        value={this.state.name}
        onChange={this.handleChange('name')}
        margin="normal"
      />
      <FormControl className={classes.formControl}>
          <InputLabel htmlFor="strength">Strength</InputLabel>
          <Select
            value={this.state.strength}
            onChange={this.handleChange}
            inputProps={{
              name: 'strength',
              id: 'strength',
            }}
          >
            {[...Array(11).keys()].map(i => (<MenuItem value = {i} >{i}</MenuItem>))}
          </Select>
        </FormControl>

    </form>
    )
  };
};

CreateHeroPanel.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreateHeroPanel);