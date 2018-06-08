import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import styles from './styles.css';

const Search = ({ placeholder, value, onChange, classes}) => (
  <Card className={classes.card}>
      <CardContent>
        <Input placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={classes.input}
          inputProps={{
           'aria-label': 'Description',
          }}
        />
    </CardContent>
  </Card>
);

Search.defaultProps = {
  searchValue: '',
  placeholder: '',
  onChange: () => {}
};

Search.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
export default withStyles(styles)(Search);

