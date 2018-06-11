import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import SelectMU from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
// import Select from '../Select';
import styles from './styles.css';

const INITIAL_STATE = {
  id: '',
  name: '',
  strength: '',
  intelligence: '',
  speed: ''
};

class CreateHeroPanel extends Component {
  state = { ...INITIAL_STATE };

  nameChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newHero = { id: Math.floor(Math.random() * 1000), ...this.state };
    this.props.addNewHero(newHero);
    this.setState({ ...INITIAL_STATE });
      // eslint-disable-next-line
      console.log('Submit!')
  };


  render () {
    const { classes } = this.props;
    const { strength, intelligence, speed } = this.state;
    return (
    <form className={classes.container} autoComplete="off" onSubmit={this.handleSubmit} >
      <TextField
        required
        id="name"
        label="Hero name"
        className={classes.textField}
        value={this.state.name}
        onChange={this.nameChange('name')}
        margin="normal"
        fullWidth
      />
      <FormControl className={classes.formControl} fullWidth >
          <InputLabel htmlFor='strength'>Strength</InputLabel>
          <SelectMU
            value={strength}
            onChange={this.handleChange}
            autoWidth
            inputProps={{
              name: 'strength',
              id: {strength},
            }}
          >
          
            {[...Array(11).keys()].map(i => (<MenuItem value = {i} key={i} >{i}</MenuItem>))}
          </SelectMU>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth >
          <InputLabel htmlFor='intelligence'>Intelligence</InputLabel>
          <SelectMU
            value={intelligence}
            onChange={this.handleChange}
            autoWidth
            inputProps={{
              name: 'intelligence',
              id: {intelligence},
            }}
          >
          
            {[...Array(11).keys()].map(i => (<MenuItem value = {i} key={i} >{i}</MenuItem>))}
          </SelectMU>
        </FormControl>
        <FormControl className={classes.formControl} fullWidth >
          <InputLabel htmlFor='speed'>Speed</InputLabel>
          <SelectMU
            value={speed}
            onChange={this.handleChange}
            autoWidth
            inputProps={{
              name: 'speed',
              id: {speed},
            }}
          >
          
            {[...Array(11).keys()].map(i => (<MenuItem value = {i} key={i} >{i}</MenuItem>))}
          </SelectMU>
        </FormControl>
      {/* <Select onChange={this.handleChange} abillity="Strength" stateValue={strength} />
      <Select onChange={this.handleChange} abillity="Intelligence" stateValue={intelligence} />
      <Select onChange={this.handleChange} abillity="Speed" stateValue={speed} /> */}

      <Button variant="contained" size="medium" className={classes.button} type="submit" >
        <EditIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>
    </form>
    )
  };
};

CreateHeroPanel.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  addNewHero: PropTypes.func.isRequired
};

export default withStyles(styles)(CreateHeroPanel);