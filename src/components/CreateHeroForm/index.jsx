import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import Button from '../Shared/Button';
import styles from './styles.css';

const INITIAL_STATE = {
  id: '',
  name: '',
  strength: 'default',
  intelligence: 'default',
  speed: 'default'
};

class CreateHeroForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newHero = { 
      ...this.state,
      id: Math.floor(Math.random() * 1000),
      strength: parseInt(this.state.strength, 10) || 0,
      intelligence: parseInt(this.state.intelligence, 10) || 0,
      speed: parseInt(this.state.speed, 10) || 0,
    };
    // for ( const key in newHero) { if (key !== name) {[key] = parseInt(key)}};
    this.props.addNewHero(newHero);
    this.setState({ ...INITIAL_STATE });
      // eslint-disable-next-line
      console.log('Submit!')
  };

  render() {
    const { strength, intelligence, speed } = this.state;
    return (
    <form className={styles.form} onSubmit={this.handleSubmit}>
      <input required
        id="heroName"
        name="name"
        placeholder="Hero name"
        className={styles.input}
        value={this.state.name}
        onChange={this.handleChange}
      />
      <select
          className={styles.select}
          name="strength"
          id="strength"
          value={ strength }
          onChange={this.handleChange} >
        <option value='default' disabled>Strength</option>
        {[...Array(11).keys()].map(i => (<option value = {i} key={i} >{i}</option>))}
      </select>
      <select
        className={styles.select}
        name="intelligence"
        id="int"
        value={ intelligence }
        onChange={this.handleChange} >
        <option value='default' disabled>Intelligence</option>
        {[...Array(11).keys()].map(i => (<option value = {i} key={i} >{i}</option>))}
      </select>
      <select
        className={styles.select}
        name="speed"
        id="sp"
        value={ speed }
        onChange={this.handleChange} >
        <option value='default' disabled>Speed</option>
        {[...Array(11).keys()].map(i => (<option value = {i} key={i} >{i}</option>))}
      </select>
      <Button type="submit" ><EditIcon /> Add Hero</ Button>
    </form>
  );
}
};

CreateHeroForm.defaultProps = {

}

CreateHeroForm.propTypes = {
  addNewHero: PropTypes.func.isRequired
};

export default CreateHeroForm;