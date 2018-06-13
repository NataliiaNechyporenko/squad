import React from "react";
import PropTypes from 'prop-types';
import Panel from '../Shared/Panel'
import HeroCard from '../HeroCard';
import styles from './styles.css';

const HeroesList = ({ heroes, ...rest }) => (
  <div className={styles.list}>
      {heroes.length === 0 ?
      (<p className="empty__msg">There is no Heroes!</p>)
      : (heroes.map(hero => (
          <Panel key={hero.id} >
              <HeroCard {...hero} {...rest} />
          </Panel>)
      ))
    }
  </div>
);

HeroesList.defaultProps = {
  heroes: []
};

HeroesList.propTypes = {
  heroes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      strength: PropTypes.number.isRequired,
      intelligence: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired
    }).isRequired,
  ),
};

export default HeroesList;
