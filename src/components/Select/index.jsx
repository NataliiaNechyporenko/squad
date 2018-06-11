import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import SelectMU from '@material-ui/core/Select';
import styles from './styles.css';

const Select = ({ onChange, abillity, stateValue, classes }) => {
  const selectChange = evt => {
    evt.preventDefault();
    const value = event.target.value;
    onChange(abillity, value);
  };

  
  return (
    <FormControl className={classes.formControl} fullWidth >
          <InputLabel htmlFor={abillity} >{abillity}</InputLabel>
          <SelectMU
            value={stateValue}
            onChange={selectChange}
            autoWidth
            margin="normal"
            inputProps={{
              name: {abillity},
              id: {abillity},
            }}
          >
          
            {[...Array(11).keys()].map(i => (<MenuItem value = {i} key={i} >{i}</MenuItem>))}
          </SelectMU>
        </FormControl>
  );};

Select.defaultProps = {
  abillity: 'abillity',
}

Select.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  abillity: PropTypes.string,
  stateValue: PropTypes.number.isRequired
}; 

export default withStyles(styles)(Select);